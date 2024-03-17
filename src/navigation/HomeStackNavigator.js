import { Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import BookInfoScreen from '../screens/BookInfoScreen'
import CustomStackHeader from './CustomStackHeader'

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home Page" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BookInfo" component={BookInfoScreen} 
          options={{
            header: (props) => <CustomStackHeader {...props} />,
            drawer: () => null
          }}
        />
      </Stack.Navigator>
  )
}

export default HomeStackNavigator