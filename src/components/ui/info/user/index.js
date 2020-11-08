import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Hooks
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

function Info({_id, cars}) {
  if (_id.length > 0) {
    const car = cars.find((i) => i._id === _id);
    if (car) {
      return (
        <View style={base.w1}>
          <Image source={Images.profile} width={dw(36)} />
          <View style={base.w2}>
            <Text style={base.t1}>{car.title}</Text>
            <Text style={base.t2}>
              ID {car.imei}
              {'\n'}Баланс:{' '}
            </Text>
          </View>
        </View>
      );
    }
  }
  return null;
}

function mapStateToProps(state) {
  return state.cars;
}

export default connect(mapStateToProps, null)(Info);
