import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client/dist/socket.io.js';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Components
import User from '../components/screens/home/User';
import DrawerLeft from '../components/screens/drawer/DrawerLeft';
import DrawerRight from '../components/screens/drawer/DrawerRight';
import DrawerRightFilter from '../components/screens/drawer/DrawerRightFilter';

// Actions
import * as Cars from '../store/actions/cars';
import * as Events from '../store/actions/events';

const Drawer = createDrawerNavigator();
const queryCars = {withLatestData: 1, count: 100};
const queryEvents = {count: 15};

function DrawerFilter() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerRight {...props} />}>
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}

function DrawerContent() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerRightFilter {...props} />}>
      <Drawer.Screen name="Filter" component={DrawerFilter} />
    </Drawer.Navigator>
  );
}

function Home({
  access_token,
  fetchCars,
  fetchEvents,
  reduceMovingCar,
  reduceEventType0,
  reduceEventType1,
}) {
  useEffect(() => {
    fetchCars({access_token, query: queryCars});
    fetchEvents({access_token, query: queryEvents});

    let socket = io('http://376174.msk-ovz.ru:6001', {
      transports: ['websocket'],
    });
    socket.emit('token', access_token);

    socket.on('moving', (data) => {
      console.log('moving', data);
      reduceMovingCar(data);
    });
    socket.on('event', (data) => {
      switch (data.type) {
        case 0: {
          reduceEventType0(data);
          break;
        }
        case 1: {
          reduceEventType1(data);
          break;
        }
      }
      console.log('event', data);
    });
    socket.on('tripEnded', (data) => {
      console.log('tripEnded', data);
    });
    socket.on('newTrip', (data) => {
      console.log('newTrip', data);
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
    reduceMovingCar: (data) => dispatch(Cars.reduceMovingCar(data)),
    reduceEventType0: (data) => dispatch(Events.reduceEventType0(data)),
    reduceEventType1: (data) => dispatch(Events.reduceEventType1(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
