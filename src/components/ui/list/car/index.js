import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    cars: state.cars.cars,
  };
}

export default connect(mapStateToProps, null)(component);
