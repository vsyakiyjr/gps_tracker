import component from './component';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, null)(component);
