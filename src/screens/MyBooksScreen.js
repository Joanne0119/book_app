import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const MyBooksScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>My Books</Text>
    </View>
  )
}

export default MyBooksScreen