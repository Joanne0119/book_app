import { Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator'
import AcountScreen from '../screens/AcountScreen'
import SettingScreen from '../screens/SettingScreen'
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigtor = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} /> } 
      screenOptions={{headerShown: false}} 
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} 
        options={{
          headerTitle: '',
          headerRight: () => 
          <Image 
            source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
            style={{width: 24, height: 24, margin: 20}}
          />,
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_home_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_home.png?raw=true`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666'
        }}/>
      <Drawer.Screen name="Acount" component={AcountScreen} 
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_account_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_account.png?raw=true`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666',
        }}
      />
      <Drawer.Screen name="Setting" component={SettingScreen} 
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Image
                source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_settings_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_settings.png?raw=true`}}
                style={{width: 25, height: 25}}
              />
            )
          },
          drawerActiveBackgroundColor: '#ece1fc',
          drawerActiveTintColor: '#6200EE',
          drawerInactiveTintColor: '#666',
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigtor