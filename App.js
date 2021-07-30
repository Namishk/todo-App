import React from 'react';
import {enableScreens} from 'react-native-screens';


enableScreens();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Login from './app/screens/Login.js'
import mainScreen from './mainScreen.js'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='mainScreen' component={mainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
