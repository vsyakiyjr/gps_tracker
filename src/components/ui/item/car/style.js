import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: dw(20),
    paddingRight: dw(10),
    paddingVertical: dw(8),
  },
  w2: {
    alignItems: 'center',
    width: dw(50),
  },
  w3: {
    width: dw(15),
    height: dw(15),
    borderRadius: dw(15),
  },
  t1: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(14),
    lineHeight: dw(17),
    color: 'black',
    paddingRight: dw(8),
  },
  t2: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(10),
    lineHeight: dw(12),
    color: '#9E9E9E',
    paddingTop: dw(5),
  },
});

export default {base};
