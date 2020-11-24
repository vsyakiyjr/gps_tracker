import React, {useRef} from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// Components
import Header from '../../../ui/header/user';
import Info from '../../../ui/info/car';

// Style
import {base} from './style';

export default function User({cars}) {
  const refMap = useRef(null);

  function renderMarker() {
    if (cars._id) {
      const car = cars.cars.find((e) => e._id === cars._id);
      if (car) {
        const {car_id, imei, lat, lng} = car.latest_moving;

        refMap.current.animateCamera(
          {
            center: {
              latitude: lat,
              longitude: lng,
            },
            heading: 0,
            pitch: 0,
            zoom: 16,
          },
          {duration: 450},
        );

        return (
          <Marker
            key={car_id}
            coordinate={{
              latitude: lat,
              longitude: lng,
            }}
            title={imei}
          />
        );
      }
    } else {
      return cars.cars
        .filter((e) => e.latest_moving)
        .map((e) => (
          <Marker
            key={e.latest_moving.car_id}
            coordinate={{
              latitude: e.latest_moving.lat,
              longitude: e.latest_moving.lng,
            }}
            title={e.latest_moving.imei}
          />
        ));
    }
  }

  return (
    <View style={base.flex}>
      <Header />
      <Info {...cars} />
      <MapView
        ref={refMap}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={base.flex}>
        {renderMarker()}
      </MapView>
    </View>
  );
}
