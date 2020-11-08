import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

// Components
import Header from '../../../ui/header/user';
import Info from '../../../ui/info/car';

// Style
import {base} from './style';

export default function User() {
  return (
    <View style={base.flex}>
      <Header />
      <Info />
      <MapView
        style={base.flex}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
