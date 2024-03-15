import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator'
import AcountScreen from '../screens/AcountScreen'
import SettingScreen from '../screens/SettingScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigtor = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerTitle: ''}}/>
      <Drawer.Screen name="Acount" component={AcountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigtor