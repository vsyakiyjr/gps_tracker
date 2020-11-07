import {StyleSheet} from 'react-native';
import {dw} from '../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dw(2),
    backgroundColor: '#BDBDBD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  w2: {
    height: dw(35),
  },
  t1: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: dw(18),
    fontWeight: '700',
    color: 'white',
    paddingHorizontal: dw(20),
  },
});

export default {base};
