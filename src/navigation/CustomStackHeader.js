import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const CustomStackHeader = (props) => {
  return (
    <View>
        <Pressable>
            <Image
                source = {{uri: `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_back.png?raw=true`}}
                style={{width: 25, height: 25}}
            />
        </Pressable>
        
        <Image
            source = {{uri: `https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/icon_bookmark.png?raw=true`}}
            style={{width: 25, height: 25}}
        />
    </View>
  )
}

export default CustomStackHeader