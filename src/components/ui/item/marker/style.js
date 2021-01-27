import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: dw(20),
    height: dw(20),
  },
  w2: {
    width: dw(40),
    height: dw(30),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  t1: {
    backgroundColor: '#5400ff',
    paddingHorizontal: dw(4),
    paddingVertical: dw(2),
    color: 'white',
  },
});

export default {base};
