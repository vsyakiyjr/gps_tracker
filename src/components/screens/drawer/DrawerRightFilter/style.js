import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(15),
    color: '#3A3A3A',
    paddingVertical: dw(20),
    paddingHorizontal: dw(10),
  },
  w1: {
    flex: 1,
  },
  w2: {
    paddingVertical: dw(8),
  },
  w3: {
    paddingHorizontal: wp(4),
    marginBottom: wp(4),
  },
  w4: {
    padding: wp(2),
    marginHorizontal: wp(4),
    marginBottom: wp(4),
  },
});

export default {base};
