import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: dw(20),
    backgroundColor: 'white',
  },
  w2: {
    paddingLeft: dw(25),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: dw(14),
    lineHeight: dw(17),
    color: '#3A3A3A',
    paddingBottom: dw(4),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(10),
    lineHeight: dw(12),
    color: '#3A3A3A',
  },
});

export default {base};
