import { StatusBar, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigtor from './DrawerNavigtor'

const Navigation = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar />
      <DrawerNavigtor />
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})