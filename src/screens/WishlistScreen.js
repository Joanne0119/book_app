import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const WishlistScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>Wishlist</Text>
    </View>
  )
}

export default WishlistScreen