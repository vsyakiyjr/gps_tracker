import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Style
import {base} from './style';

const green = ['#265828', '#74DE78'];
const orange = ['#DD7010', '#FFE261'];

export default function Item({_id, title, access_token, fetchCarsId}) {
  function onPress() {
    fetchCarsId({access_token, _id});
  }

  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <Text style={base.t1}>{title}</Text>
      <View style={base.w2}>
        <LinearGradient colors={green} style={base.w3} />
        <Text style={base.t2}>24 км/ч</Text>
      </View>
    </TouchableOpacity>
  );
}
