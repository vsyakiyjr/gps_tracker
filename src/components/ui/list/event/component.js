import React from 'react';
import {FlatList, View} from 'react-native';

// Components
import Item from '../../item/event';

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
    <FlatList
      data={filter()}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={renderSeparatorComponent}
    />
  );
}
