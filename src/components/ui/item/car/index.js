import {connect} from 'react-redux';
import component from './component';

import {fetchCarsId} from '../../../../store/actions/cars';

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCarsId: (data) => dispatch(fetchCarsId(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(component);
