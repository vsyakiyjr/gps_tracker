import component from './component';
import {connect} from 'react-redux';

import {reduceEmptyCarId, reduceCarId} from '../../../../store/actions/cars';

function mapStateToProps(state) {
  return {
    cars: state.cars,
    trips: state.trips,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduceEmptyCarId: () => dispatch(reduceEmptyCarId()),
    reduceCarId: (data) => dispatch(reduceCarId(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
