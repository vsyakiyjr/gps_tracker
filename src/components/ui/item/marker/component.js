import React from 'react';
import {Text, Image} from 'react-native';
import {Marker} from 'react-native-maps';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function Item(props) {
  const {latest_movings, title, reduceCarId} = props;

  return (
    <Marker
      onPress={() => reduceCarId(latest_movings[0].car_id)}
      anchor={{x: 0.25, y: 0.7}}
      centerOffset={{x: 0.25, y: 0.7}}
      coordinate={{
        latitude: latest_movings[0].lat,
        longitude: latest_movings[0].lng,
      }}>
      <Text style={base.t1}>{title}</Text>

      <Image
        style={[
          base.w1,
          {
            transform: [{rotate: latest_movings[0].course + 'deg'}],
          },
        ]}
        source={Images.arrow}
      />
    </Marker>
  );
}
