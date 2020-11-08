import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
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
    fetchCars({access_token});
    fetchEvents({access_token});

    let socket = io('http://376174.msk-ovz.ru:6001');
    socket = socket.connect();
    socket.emit('token', access_token);
    socket.emit('pong');
    socket.on('connect', () => {
      console.log(socket.disconnected); // false
    });
    socket.on('disconnect', (reason) => {
      console.log(reason);
    });
    socket.on('error', (error) => {
      console.log(error);
    });
    socket.on('connect_error', (error) => {
      console.log(error);
    });
    socket.on('connect_timeout', (timeout) => {
      console.log(timeout);
    });
    socket.on('reconnect', (attemptNumber) => {
      console.log(attemptNumber);
    });
    socket.on('reconnect_attempt', (attemptNumber) => {
      console.log(attemptNumber);
    });
    socket.on('reconnecting', (attemptNumber) => {
      console.log(attemptNumber);
    });
    socket.on('reconnect_error', (error) => {
      console.log(error);
    });
    socket.on('reconnect_failed', () => {
      console.log('reconnect_failed');
    });
    socket.on('ping', () => {
      console.log('ping');
    });
    socket.on('pong', (latency) => {
      console.log(latency);
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
