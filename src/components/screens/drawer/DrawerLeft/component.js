import React from 'react';
import {View} from 'react-native';

// Components
import Header from '../../../ui/header/left';
import Info from '../../../ui/info/user';
import List from '../../../ui/list/car';

// Style
import {base} from './style';

export default function DrawerLeft() {
  return (
    <View style={base.w1}>
      <Header />
      <Info />
      <List />
    </View>
  );
}
