import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import User from '../components/screens/home/User';

const Stack = createStackNavigator();
const options = {title: null, gestureEnabled: false};

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="User" component={User} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
