import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyBooksScreen from '../screens/MyBooksScreen';

const Stack = createStackNavigator();

const MyBookStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Books Page" component={MyBooksScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default MyBookStackNavigator