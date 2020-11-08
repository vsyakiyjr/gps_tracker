import {StyleSheet} from 'react-native';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {},
  w2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: dw(0.5),
    paddingHorizontal: dw(20),
    paddingVertical: dw(10),
  },
  w3: {
    flex: 1,
    height: dw(0.5),
    backgroundColor: '#E5E5E5',
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: dw(16),
    lineHeight: dw(21),
    color: 'black',
    paddingLeft: dw(16),
  },
});

export default {base};
