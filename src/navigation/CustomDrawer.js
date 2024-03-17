import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} >
        <View style={styles.container}>
            <Image 
                source = {{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/img_avatar.png?raw=true'}}
                style={styles.image}
            />
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>May</Text>
        </View>
        
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 52, 
        height: 52, 
        borderRadius: 100, 
        marginBottom: 15
    },
    container: {
        marginVertical:20, 
        paddingBottom: 30, 
        paddingHorizontal: 30, 
        borderBottomColor: '#eee', 
        borderBottomWidth: 1
    }
  });

export default CustomDrawer