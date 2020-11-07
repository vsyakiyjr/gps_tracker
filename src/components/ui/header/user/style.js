import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
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
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: dw(16),
    lineHeight: dw(21),
    color: 'white',
    paddingHorizontal: dw(16),
  },
});

export default {base};
