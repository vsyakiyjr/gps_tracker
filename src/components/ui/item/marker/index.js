import {connect} from 'react-redux';
import component from './component';

import {reduceCarId} from '../../../../store/actions/cars';

function mapDispatchToProps(dispatch) {
  return {
    reduceCarId: (data) => dispatch(reduceCarId(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
