import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import MenuBundle from './MenuBundle.js';
import Menu from './app/screens/Menu.js';
import settings from './app/screens/Settings.js';
import qrscanner from './app/screens/qrscanner.js'
import colors from './Colors.js'
const Tab = createBottomTabNavigator();



function mainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if(route.name=='Home'){
            iconName = focused ? 'home' : 'home';
          }
          else if(route.name == 'Settings'){
            iconName = focused ? 'settings': 'settings';
          }
          else if(route.name == 'Qr'){
            iconName = focused ? 'qr-code': 'qr-code';
          }

          return <MaterialIcons name={iconName} size = {45} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: colors.softGreen,
        inactiveTintColor: colors.blackishBrown,
        showLabel: false,
        style:{ 
          position: 'absolute',
          borderRadius: 50, 
          height:'6%', 
          bottom: '2%', 
          width: '85%', 
          left: '7.5%',
          backgroundColor: colors.creamyPink,
        }
      }}
    >
      <Tab.Screen name="Home" component={MenuBundle} />
      <Tab.Screen name="Qr" component={qrscanner} />
      <Tab.Screen name="Settings" component={settings} />
    </Tab.Navigator>
  );
}

export default mainScreen;
