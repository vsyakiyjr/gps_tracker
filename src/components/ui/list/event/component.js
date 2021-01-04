import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Components
import Item from '../../item/event';

// Hooks
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function List({_id, events}) {
  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w3} />;

  function filter() {
    if (_id.length > 0) {
      return events.filter((e) => e.car_id === _id);
    }
    return events;
  }

  return (
    <View style={base.w1}>
      <View style={base.w2}>
        <Image source={Images.close} width={dw(20)} />
        <Text style={base.t1}>Очистить</Text>
      </View>
      <FlatList
        data={filter()}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={renderSeparatorComponent}
      />
    </View>
  );
}
