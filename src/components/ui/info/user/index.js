import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Hooks
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function Info() {
  return (
    <View style={base.w1}>
      <Image source={Images.profile} width={dw(36)} />
      <View style={base.w2}>
        <Text style={base.t1}>AC 6387 KР</Text>
        <Text style={base.t2}>ID 987567834756{'\n'}Баланс: </Text>
      </View>
    </View>
  );
}
