import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export function dw(size) {
  return wp((100 / 360) * size);
}
