import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import User from '../components/screens/home/User';
import DrawerLeft from '../components/screens/drawer/DrawerLeft';
import DrawerRight from '../components/screens/drawer/DrawerRight';

// Actions
import * as Cars from '../store/actions/cars';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerRight {...props} />}>
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}

function Home({access_token, fetchCars}) {
  useEffect(() => {
    fetchCars({access_token});
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerLeft {...props} />}>
        <Drawer.Screen name="Children" component={DrawerContent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
  return {
    access_token: state.user.access_token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCars: (data) => dispatch(Cars.fetchCars(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
