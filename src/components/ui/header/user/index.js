import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import Image from 'react-native-scalable-image';

// Hooks
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {dw} from '../../../../hooks';

// Helpers
import * as Images from '../../../../helpers/images';

// Actions
import * as User from '../../../../store/actions/user';

// Style
import {base} from './style';

function Header({access_token, fetchLogout}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const parent = navigation.dangerouslyGetParent();

  function logout() {
    fetchLogout({access_token});
  }

  return (
    <View style={[base.w1, {paddingTop: insets.top}]}>
      <View style={base.w2}>
        <Image
          source={Images.menu}
          height={dw(20)}
          onPress={parent.openDrawer}
        />
        <Text style={base.t1}>Карта</Text>
        <Image source={Images.info} height={dw(20)} onPress={logout} />
        <Image style={base.w3} source={Images.map} height={dw(20)} />
        <Image style={base.w3} source={Images.road} height={dw(20)} />
        <Image
          style={base.w3}
          source={Images.sms}
          height={dw(20)}
          onPress={navigation.openDrawer}
        />
      </View>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogout: (data) => dispatch(User.fetchLogout(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
