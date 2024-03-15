import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import BookInfoScreen from '../screens/BookInfoScreen'
import Header from '../components/Header';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BookInfo" component={BookInfoScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}

export default HomeStackNavigator