import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Style
import {base} from './style';

const green = ['#265828', '#74DE78'];
const orange = ['#DD7010', '#FFE261'];

export default function Item({_id, latest_moving, title, reduceCarId}) {
  function onPress() {
    reduceCarId(_id);
  }

  if (latest_moving) {
    return (
      <TouchableOpacity style={base.w1} onPress={onPress}>
        <Text style={base.t1}>{title}</Text>
        <View style={base.w2}>
          <LinearGradient
            colors={latest_moving.speed > 0 ? green : orange}
            style={base.w3}
          />
          <Text style={base.t2}>{latest_moving.speed} км/ч</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={base.w1}>
      <Text style={base.t1}>Не работает</Text>
      <View style={base.w2}>
        <LinearGradient colors={green} style={base.w3} />
        <Text style={base.t2}>0 км/ч</Text>
      </View>
    </TouchableOpacity>
  );
}
