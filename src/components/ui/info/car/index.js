import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';
import moment from 'moment';

// Hooks
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

function Info({_id, cars, trips}) {
  function getParking(car) {
    if (car.is_driving) {
      return 'В поездке';
    } else {
      const parking = moment(car.latest_movings[0].created_at).fromNow(true);
      return `Стоит ${parking}`;
    }
  }

  if (_id.length > 0 && trips.length === 0) {
    const car = cars.find((i) => i._id === _id);
    if (car) {
      console.log(car);
      return (
        <View style={base.w1}>
          <View style={[base.w2, base.w4]}>
            <View style={base.w3}>
              <Image source={Images.send} width={dw(18)} />
              <Text style={base.t1}>{car.title}</Text>
            </View>
            <View style={base.w3}>
              <Image source={Images.parking} width={dw(18)} />
              <Text style={base.t2}>{getParking(car)}</Text>
            </View>
          </View>
          <View style={base.w2}>
            <View style={base.w3}>
              <Image source={Images.connection} width={dw(18)} />
              <Text style={base.t2}>Сигнал: {car.signal}%</Text>
            </View>
            <Text style={base.t2}>{car.latest_movings[0].address}</Text>
          </View>
        </View>
      );
    }
  }
  return null;
}

export default Info;
