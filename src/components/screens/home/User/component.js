import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Image from 'react-native-scalable-image';

// Components
import Header from '../../../ui/header/user';

// Helpers
import * as Images from '../../../../helpers/images';
import {dw} from '../../../../hooks';

// Style
import {base} from './style';

export default function User() {
  return (
    <View style={base.w1}>
      <Header />
      <View style={base.w2}>
        <View style={[base.w3, base.w5]}>
          <View style={base.w4}>
            <Image source={Images.send} width={dw(18)} />
            <Text style={base.t1}>AC 6387 KР</Text>
          </View>
          <Text style={base.t2}>1 мин. назад</Text>
        </View>
        <View style={base.w3}>
          <View style={base.w4}>
            <Image source={Images.connection} width={dw(18)} />
            <Text style={base.t2}>Сигнал: 100%</Text>
          </View>
          <View style={base.w4}>
            <Image source={Images.parking} width={dw(18)} />
            <Text style={base.t2}>стоит 4 ч. 54 мин. 30 сек.</Text>
          </View>
        </View>
      </View>
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
