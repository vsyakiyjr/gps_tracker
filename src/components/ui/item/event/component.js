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

export default function Item(props) {
  const {car_id, type, created_at, cars} = props;
  const car = cars.cars.find((e) => e._id === car_id);

  function renderEventText() {
    switch (type) {
      case 0: {
        return 'Включение маячка';
      }
      case 1: {
        return 'Выключение маячка или потеря связи';
      }
      case 2: {
        return 'Вход пользователя';
      }
      case 3: {
        return 'Выход пользователя';
      }
      case 4: {
        return 'Включение зажигания';
      }
      case 5: {
        return 'Выключение зажигания';
      }
      case 6: {
        return 'Начал движение';
      }
      case 7: {
        return 'Остановился';
      }
      default: {
        return 'Не известный тип уведомления';
      }
    }
  }

  return (
    <View style={base.w1}>
      <View style={base.w2}>
        <Image source={Images.event} width={dw(17)} />
        <Text style={base.t1}>
          {car && car.title}. {renderEventText()}.
        </Text>
      </View>
      <Text style={base.t2}>
        {moment(created_at).format('DD.MM.YYYY HH:mm')}
      </Text>
    </View>
  );
}
