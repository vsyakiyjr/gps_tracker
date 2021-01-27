import React, {useRef, useEffect} from 'react';
import {
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';

// Components
import Header from '../../../ui/header/user';
import Info from '../../../ui/info/car';
import MarkerItem from '../../../ui/item/marker';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function User({cars, trips, reduceEmptyCarId}) {
  const refMap = useRef(null);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
    } else {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }, []);

  function onPressMarker() {
    refMap.current.animateCamera(
      {
        center: {
          latitude: 43.2444596,
          longitude: 76.9402164,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        },
        altitude: 50000,
      },
      {duration: 450},
    );
    reduceEmptyCarId();
  }

  async function onPressLocationButton() {
    Geolocation.getCurrentPosition(
      (position) => {
        const {altitude, latitude, longitude} = position.coords;
        refMap.current.animateCamera(
          {
            center: {
              latitude,
              longitude,
            },
            altitude,
          },
          {duration: 450},
        );
      },
      (error) => {
        Toast.show(error.message);
      },
    );
  }

  function renderMarker() {
    if (cars._id.length > 0) {
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
            zoom: 14,
          },
          {duration: 450},
        );
        return cars.cars
          .filter((e) => e.latest_movings.length > 0)
          .map((e) => {
            return (
              <MarkerItem key={'marker' + e.latest_movings[0]._id} {...e} />
            );
          });
      }
    } else {
      return cars.cars
        .filter((e) => e.latest_movings.length > 0)
        .map((e) => {
          return <MarkerItem key={'marker' + e.latest_movings[0]._id} {...e} />;
        });
    }
  }

  function renderDirectionMarker() {
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
      <View style={base.flex}>
        <MapView
          ref={refMap}
          style={base.flex}
          provider="google"
          rotateEnabled={false}
          showsMyLocationButton={false}
          showsUserLocation
          initialRegion={{
            latitude: 43.2444596,
            longitude: 76.9402164,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}>
          {trips.length > 0 && renderTripDirection()}
          {trips.length > 0 && renderTripMarker()}
          {trips.length === 0 && renderMarker()}
          {trips.length === 0 && renderDirectionMarker()}
        </MapView>
        <TouchableOpacity style={base.w1} onPress={onPressLocationButton}>
          <Image style={base.w2} source={Images.locationMe} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
