import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator'
import AcountScreen from '../screens/AcountScreen'
import SettingScreen from '../screens/SettingScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigtor = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Acount') {
            iconName = 'acount';
          } else if (route.name === 'Setting') {
            iconName = 'setting';
          }
          return (
            <Image
              source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}.png?raw=true`}}
              style={{width: 25, height: 25}}
            />
          )
        }
      })}
      drawerOption={{
        activeTintColor: '#6200EE',
        inactiveTintColor: '#666',
        showLabel: true,
        labelStyle: { fontSize: 14, fontWeight: 500},
        showIcon: true,
      }}
                                              
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerTitle: ''}}/>
      <Drawer.Screen name="Acount" component={AcountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigtor