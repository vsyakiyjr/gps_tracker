import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../components/screens/auth/Login';

const Stack = createStackNavigator();
const options = {title: null, gestureEnabled: false};

export default function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
