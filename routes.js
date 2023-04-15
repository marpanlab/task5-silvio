import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';

import Home from './pages/home'
import Coxinha from './pages/coxinha'
import Brigadeiro from './pages/brigadeiro'
import Bolo from './pages/bolo'

const Tab = createBottomTabNavigator();

const coxinhaIcon = require('./assets/icons/coxinha.png');
const brigadeiroIcon = require('./assets/icons/brigadeiro.png');
const boloIcon = require('./assets/icons/bolo.png');

export function Routes() {
  return(
    <Tab.Navigator

      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle:{
          borderTopWidth: 0,
          backgroundColor: "#f56461",
          borderRadius: 50,
          marginLeft: 50, 
          marginRight: 50,
          marginBottom: 20, 
          position: 'absolute', 
          height: 70
              
        }
      }}          
    >
      <Tab.Screen name="Home" component={Home} options={{tabBarButton: () => null
      }}/>
      
      <Tab.Screen 
        name="Coxinha" 
        component={Coxinha} 
        options={{
          tabBarIcon: () => (
            <Image source={coxinhaIcon} style={{ width: 50, height: 50, marginLeft: 15}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Brigadeiro" 
        component={Brigadeiro} 
        options={{
          tabBarIcon: () => (
            <Image source={brigadeiroIcon} style={{ width: 50, height: 50}} />
          ),
        }}
      />
      <Tab.Screen 
        name="Bolo" 
        component={Bolo} 
        options={{
          tabBarIcon: () => (
            <Image source={boloIcon} style={{ width: 50, height: 50, marginRight: 15}} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
