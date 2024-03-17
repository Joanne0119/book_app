import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} >
        <View style={{marginVertical:20, padding: 30, borderBottomColor: '#eee', borderBottomWidth: 1}}>
            <Image 
                source = {{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_img_avatar_actived.png?raw=true'}}
                style={{width: 48, height: 48, borderRadius: '100%'}}
            />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>May</Text>
        </View>
        
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer