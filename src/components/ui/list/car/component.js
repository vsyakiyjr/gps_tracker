import React from 'react';
import {FlatList, View, Text} from 'react-native';

// Components
import Item from '../../item/car';

// Style
import {base} from './style';

export default function List({cars}) {
  const renderItem = ({item}) => <Item {...item} />;
  const renderSeparatorComponent = () => <View style={base.w3} />;

  return (
    <View style={base.w1}>
      <View style={base.w2}>
        <Text style={base.t1}>Без группы ({cars.length})</Text>
      </View>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={renderSeparatorComponent}
      />
    </View>
  );
}
