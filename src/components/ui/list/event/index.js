import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    events: state.events,
    _id: state.cars._id,
  };
}

export default connect(mapStateToProps, null)(component);
