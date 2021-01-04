import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    backgroundColor: 'black',
  },
  w2: {
    padding: dw(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  w3: {
    marginLeft: dw(20),
  },
  t1: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(16),
    lineHeight: dw(21),
    color: 'white',
  },
});

export default {base};
