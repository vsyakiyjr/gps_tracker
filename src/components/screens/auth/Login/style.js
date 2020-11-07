import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {dw} from '../../../../hooks';

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  w1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  w2: {
    width: wp(80),
    padding: dw(20),
    backgroundColor: 'white',
    borderRadius: dw(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  w3: {
    marginBottom: dw(15),
  },
  t1: {
    fontFamily: 'Roboto',
    fontSize: dw(14),
    fontWeight: '700',
    color: '#426c85',
    marginBottom: dw(10),
  },
});

export default {base};
