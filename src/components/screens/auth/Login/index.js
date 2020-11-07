import {connect} from 'react-redux';
import component from './component';

import {fetchLogin} from '../../../../store/actions/user';

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: (data) => dispatch(fetchLogin(data)),
  };
}

export default connect(null, mapDispatchToProps)(component);
