import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
// import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import Header from '../../../ui/header/user';
import Info from '../../../ui/info/car';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function User({cars, trips, reduceEmptyCarId, reduceCarId}) {
  const refMap = useRef(null);

  function onPressMarker() {
    refMap.current.animateCamera(
      {
        center: {
          latitude: 43.2444596,
          longitude: 76.9402164,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        heading: 0,
        pitch: 0,
        zoom: 16,
      },
      {duration: 450},
    );
    reduceEmptyCarId();
  }

  function renderMarker() {
    if (cars._id) {
      const car = cars.cars.find((e) => e._id === cars._id);
      if (car) {
        refMap.current.animateCamera(
          {
            center: {
              latitude: car.latest_movings[0].lat,
              longitude: car.latest_movings[0].lng,
            },
            heading: 0,
            pitch: 0,
            zoom: 16,
          },
          {duration: 450},
        );
        return (
          <Marker
            key={'marker' + car.latest_movings[0]._id}
            image={Images.arrow}
            style={{
              transform: [{rotate: car.latest_movings[0].course + 'deg'}],
            }}
            coordinate={{
              latitude: car.latest_movings[0].lat,
              longitude: car.latest_movings[0].lng,
            }}
          />
        );
      }
    } else {
      return cars.cars
        .filter((e) => e.latest_movings.length > 0)
        .map((e) => {
          return (
            <Marker
              key={'marker' + e.latest_movings[0]._id}
              onPress={() => reduceCarId(e.latest_movings[0].car_id)}
              image={Images.arrow}
              style={{
                transform: [{rotate: e.latest_movings[0].course + 'deg'}],
              }}
              coordinate={{
                latitude: e.latest_movings[0].lat,
                longitude: e.latest_movings[0].lng,
              }}
            />
          );
        });
    }
  }

  function renderDirectionMarker() {
    if (cars._id) {
      const car = cars.cars.find((e) => e._id === cars._id);
      if (car && car.is_driving) {
        return (
          <Polyline
            coordinates={car.latest_movings.map((j) => {
              return {
                latitude: j.lat,
                longitude: j.lng,
              };
            })}
            strokeColors={car.latest_movings.map(
              (j, k) => `rgba(84, 0, 255, ${1 / (k + 1)})`,
            )}
            strokeWidth={4}
          />
        );
      }
    } else {
      return cars.cars
        .filter((e) => e.latest_movings.length > 0 && e.is_driving)
        .map((e) => {
          return e.latest_movings.map((j, k) => {
            if (k !== e.latest_movings.length - 1) {
              return (
                <Polyline
                  key={'direction' + j._id}
                  coordinates={[
                    {
                      latitude: j.lat,
                      longitude: j.lng,
                    },
                    {
                      latitude: e.latest_movings[k + 1].lat,
                      longitude: e.latest_movings[k + 1].lng,
                    },
                  ]}
                  strokeColor={`rgba(84, 0, 255, ${1 / (k + 1)})`}
                  strokeWidth={4}
                />
              );
            }
          });
        });
    }
  }

  function renderTripDirection() {
    return trips.map((e) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      if (e.movings.length > 1) {
        return (
          <Polyline
            key={'trips' + e._id}
            coordinates={e.movings.map((j) => {
              return {
                latitude: j.lat,
                longitude: j.lng,
              };
            })}
            strokeColor={`rgba(${r}, ${g}, ${b}, 0.7)`}
            strokeWidth={4}
          />
        );
      }
    });
  }

  function renderTripMarker() {
    return trips.map((e) => {
      if (e.movings.length > 1) {
        return (
          <Marker
            key={'trip_marker' + e._id}
            image={Images.arrow}
            style={{
              transform: [{rotate: e.movings[0].course + 'deg'}],
            }}
            coordinate={{
              latitude: e.movings[0].lat,
              longitude: e.movings[0].lng,
            }}
          />
        );
      }
    });
  }

  return (
    <View style={base.flex}>
      <Header onPressMarker={onPressMarker} />
      <Info {...cars} trips={trips} />
      <MapView
        ref={refMap}
        style={base.flex}
        rotateEnabled={false}
        initialRegion={{
          latitude: 43.2444596,
          longitude: 76.9402164,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {trips.length > 0 && renderTripDirection()}
        {trips.length > 0 && renderTripMarker()}
        {trips.length === 0 && renderMarker()}
        {trips.length === 0 && renderDirectionMarker()}
      </MapView>
    </View>
  );
}
