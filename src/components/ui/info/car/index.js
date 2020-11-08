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
          <View style={[base.w2, base.w4]}>
            <View style={base.w3}>
              <Image source={Images.send} width={dw(18)} />
              <Text style={base.t1}>{car.title}</Text>
            </View>
            <Text style={base.t2}>1 мин. назад</Text>
          </View>
          <View style={base.w2}>
            <View style={base.w3}>
              <Image source={Images.connection} width={dw(18)} />
              <Text style={base.t2}>Сигнал: 100%</Text>
            </View>
            <View style={base.w3}>
              <Image source={Images.parking} width={dw(18)} />
              <Text style={base.t2}>стоит 4 ч. 54 мин. 30 сек.</Text>
            </View>
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
