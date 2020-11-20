import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io.js';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import User from '../components/screens/home/User';
import DrawerLeft from '../components/screens/drawer/DrawerLeft';
import DrawerRight from '../components/screens/drawer/DrawerRight';

// Actions
import * as Cars from '../store/actions/cars';
import * as Events from '../store/actions/events';

const Drawer = createDrawerNavigator();
const queryCars = {enabled: 1, withLatestData: 1, count: 15};
const queryEvents = {count: 15};

function DrawerContent() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerRight {...props} />}>
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}

function Home({access_token, fetchCars, fetchEvents}) {
  useEffect(() => {
    fetchCars({access_token, query: queryCars});
    fetchEvents({access_token, query: queryEvents});

    let socket = io('http://376174.msk-ovz.ru:6001', {
      transports: ['websocket'],
    });
    socket.emit('token', access_token);

    socket.on('moving', (data) => {
      console.log(data);
    });
    socket.on('event', (data) => {
      console.log(data);
    });
    socket.on('tripEnded', (data) => {
      console.log(data);
    });
    socket.on('newTrip', (data) => {
      console.log(data);
    });
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
    fetchEvents: (data) => dispatch(Events.fetchEvents(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
