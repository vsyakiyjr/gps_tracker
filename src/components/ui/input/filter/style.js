import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    borderBottomColor: 'rgba(12,12,12,0.12)',
    borderBottomWidth: dw(1),
    flexDirection: 'row',
  },
  w2: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'black',
  },
  w3: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    color: 'grey',
  },
});

export default {base};
