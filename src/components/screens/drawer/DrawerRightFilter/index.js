import {connect} from 'react-redux';
import component from './component';

import {fetchTrips} from '../../../../store/actions/trips';

function mapStateToProps(state) {
  return {
    _id: state.cars._id,
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: (data) => dispatch(fetchTrips(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
