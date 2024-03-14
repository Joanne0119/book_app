import { StatusBar, StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import BookInfoScreen from '../screens/BookInfoScreen'
import Header from '../components/Header';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{ 
            headerTitle: (props) => <Header {...props} /> ,
            headerLeft: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/nav_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />,
            headerRight: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />
          }}
        />
        <Stack.Screen name="BookInfo" component={BookInfoScreen} 
          options={{ 
            headerTitle: (props) => <Header {...props} /> ,
            headerRight: () => 
              <Image 
                source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
                style={{width: 24, height: 24, margin: 20}}
              />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})