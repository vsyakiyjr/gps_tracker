import React from 'react';
import moment from 'moment';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Hooks
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function Item({created_at}) {
  return (
    <View style={base.w1}>
      <View style={base.w2}>
        <Image source={Images.event} width={dw(17)} />
        <Text style={base.t1}>
          AC 6538 HK Выключение маячка или потеря связи
        </Text>
      </View>
      <Text style={base.t2}>
        {moment(created_at).format('DD.MM.YYYY HH:mm')}
      </Text>
    </View>
  );
}
