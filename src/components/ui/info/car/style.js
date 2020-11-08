import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    width: wp(100),
    paddingHorizontal: dw(20),
    paddingVertical: dw(15),
    backgroundColor: 'white',
  },
  w2: {
    flexDirection: 'row',
  },
  w3: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  w4: {
    paddingBottom: dw(8),
  },
  t1: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(14),
    lineHeight: dw(17),
    color: '#3A3A3A',
    marginLeft: dw(20),
  },
  t2: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: dw(12),
    lineHeight: dw(15),
    color: '#3A3A3A',
    marginLeft: dw(20),
  },
});

export default {base};
