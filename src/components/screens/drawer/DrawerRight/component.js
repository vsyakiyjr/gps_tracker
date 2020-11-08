import React from 'react';
import {View} from 'react-native';

// Components
import Header from '../../../ui/header/right';
import List from '../../../ui/list/event';

// Style
import {base} from './style';

export default function DrawerRight() {
  return (
    <View style={base.w1}>
      <Header />
      <List />
    </View>
  );
}
