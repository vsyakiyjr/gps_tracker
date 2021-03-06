import {connect} from 'react-redux';
import component from './component';

import {fetchCarsId} from '../../../../store/actions/cars';

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCarsId: (data) => dispatch(fetchCarsId(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
