import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WishlistStackNavigator from './WishlistStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import MyBookStackNavigator from './MyBookStackNavigator';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Wishlist" component={WishlistStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="My Books" component={MyBookStackNavigator} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator