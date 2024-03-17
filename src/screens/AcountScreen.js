import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const AcountScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>AcountScreen</Text>
    </View>
  )
}

export default AcountScreen