import React from 'react';
import {View, Text} from 'react-native';

// Hooks
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Style
import {base} from './style';

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[base.w1, {paddingTop: insets.top}]}>
      <View style={base.w2}>
        <Text style={base.t1}>Поездки</Text>
      </View>
    </View>
  );
}
