import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    borderBottomColor: 'rgba(12,12,12,0.12)',
    borderBottomWidth: dw(1),
  },
  w2: {
    height: dw(35),
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '400',
    lineHeight: dw(16),
    backgroundColor: 'white',
    borderRadius: dw(5),
    color: 'black',
  },
});

export default {base};
