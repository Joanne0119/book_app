import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Text>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen