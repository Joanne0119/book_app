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
      Options={({ route }) => ({
        drawerActiveBackgroundColor: '#ece1fc',
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: '#666',
        drawerIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Acount') {
            iconName = 'account';
          } else if (route.name === 'Setting') {
            iconName = 'settings';
          }
          return (
            <Image
              source = {{uri: focused ? `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}_actived.png?raw=true`:`https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_${iconName}.png?raw=true`}}
              style={{width: 25, height: 25}}
            />
          )
        }
      })}
      drawerContent={props => <CustomDrawer {...props} /> }                                       
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} 
        options={{
          headerTitle: '',
          headerRight: () => 
          <Image 
            source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
            style={{width: 24, height: 24, margin: 20}}
          />
          }}/>
      <Drawer.Screen name="Acount" component={AcountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigtor