import { View, Text, Image } from 'react-native'
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
      screenOptions={({ route }) => ({
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
      //   <View>
      //     <Image 
      //       source = {{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_img_avatar_actived.png?raw=true'}}
      //       style={{width: 48, height: 48}}
      //     />
      //     <Text>May</Text>
      //   </View>
      // }                                        
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerTitle: ''}}/>
      <Drawer.Screen name="Acount" component={AcountScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigtor