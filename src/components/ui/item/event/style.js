import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    paddingHorizontal: dw(20),
    paddingTop: dw(15),
    paddingBottom: dw(5),
  },
  w2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(15),
    color: '#3A3A3A',
    paddingLeft: dw(20),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: dw(10),
    lineHeight: dw(12),
    color: '#3A3A3A',
    alignSelf: 'flex-end',
    paddingTop: dw(4),
  },
});

export default {base};
