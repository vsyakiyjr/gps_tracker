import React from 'react';
import {View, Text} from 'react-native';

// Components
import Header from '../../../ui/header/left';

// Style
import {base} from './style';

export default function DrawerLeft() {
  return (
    <View style={base.w1}>
      <Header />
    </View>
  );
}
