import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    position: 'absolute',
    top: dw(20),
    right: dw(20),
    padding: dw(4),
    backgroundColor: 'white',
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
    width: dw(20),
    height: dw(20),
  },
  w3: {
    flexDirection: 'row',
  },
  w4: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: dw(10),
    backgroundColor: '#5400ff',
    paddingHorizontal: dw(4),
    paddingVertical: dw(2),
  },
  t1: {
    color: 'white',
  },
});

export default {base};
