import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Style
import {base} from './style';

const green = ['#265828', '#74DE78'];
const orange = ['#DD7010', '#FFE261'];
const red = ['#CC0000', '#FF5533'];

export default function Item(props) {
  const {_id, is_driving, latest_movings, title, signal, reduceCarId} = props;

  function onPress() {
    reduceCarId(_id);
    global.leftNavigation.closeDrawer();
  }

  if (signal === 0) {
    return (
      <TouchableOpacity
        style={base.w1}
        disabled={latest_movings.length === 0}
        onPress={onPress}>
        <Text style={base.t1}>{title}</Text>
        <View style={base.w2}>
          <LinearGradient colors={red} style={base.w3} />
          <Text style={base.t2}>0 км/ч</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={base.w1} onPress={onPress}>
      <Text style={base.t1}>{title}</Text>
      <View style={base.w2}>
        <LinearGradient
          colors={is_driving > 0 ? green : orange}
          style={base.w3}
        />
        <Text style={base.t2}>
          {is_driving ? latest_movings[0].speed : 0} км/ч
        </Text>
      </View>
    </TouchableOpacity>
  );
}
