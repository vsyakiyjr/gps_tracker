import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
  },
  w2: {
    backgroundColor: '#3A3A3A',
  },
  w3: {
    flex: 1,
    height: dw(0.5),
    backgroundColor: '#E5E5E5',
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(15),
    color: 'white',
    paddingHorizontal: dw(20),
    paddingVertical: dw(3),
  },
});

export default {base};
