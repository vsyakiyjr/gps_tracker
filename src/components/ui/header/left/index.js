import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Hooks
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[base.w1, {paddingTop: insets.top}]}>
      <View style={base.w2}>
        <Text style={base.t1}>Маячки</Text>
        <Image source={Images.search} width={dw(20)} />
        <Image style={base.w4} source={Images.filter} width={dw(20)} />
      </View>
    </View>
  );
}
