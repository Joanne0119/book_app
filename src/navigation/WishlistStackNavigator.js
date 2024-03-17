import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WishlistScreen from '../screens/WishlistScreen';

const Stack = createStackNavigator();

const WishlistStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wishlist Page" component={WishlistScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default WishlistStackNavigator