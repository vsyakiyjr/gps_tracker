import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import User from '../components/screens/home/User';
import DrawerLeft from '../components/screens/drawer/DrawerLeft';
import DrawerRight from '../components/screens/drawer/DrawerRight';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <Drawer.Navigator drawerPosition="right" drawerContent={DrawerRight}>
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerLeft}>
        <Drawer.Screen name="Children" component={DrawerContent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
