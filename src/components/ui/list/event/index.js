import {connect} from 'react-redux';
import component from './component';

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

export default connect(mapStateToProps, null)(component);
