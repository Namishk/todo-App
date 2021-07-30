import React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Game from './app/screens/Game';
import Video from './app/screens/video';
import Menu from './app/screens/Menu';

const Stack = createNativeStackNavigator();

function MenuBundle() {

    return(

        <Stack.Navigator screenOptions ={{headerShown : false}}>
            <Stack.Screen name='Menu' component={Menu}/>
            <Stack.Screen name='Game' component={Game}/>
            <Stack.Screen name='Video' component={Video}/>
        </Stack.Navigator>
    );

}

export default MenuBundle; 