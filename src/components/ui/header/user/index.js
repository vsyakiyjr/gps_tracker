import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Helpers
import * as Images from '../../../../helpers/images';
import {dw} from '../../../../hooks';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[base.w1, {paddingTop: insets.top}]}>
      <View style={base.w2}>
        <Image source={Images.menu} height={dw(20)} />
        <Text style={base.t1}>Карта</Text>
        <Image source={Images.info} height={dw(20)} />
        <Image style={base.w3} source={Images.map} height={dw(20)} />
        <Image style={base.w3} source={Images.road} height={dw(20)} />
        <Image style={base.w3} source={Images.sms} height={dw(20)} />
      </View>
    </View>
  );
}
