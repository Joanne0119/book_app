import { View, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import BookList from "../components/BookList";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#fff', marginBottom: 100}}>
      {/* <Header navigation={navigation}/> */}
      <View style={styles.header}>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Image 
          source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/nav_icon.png?raw=true'}}
          style={{width: 24, height: 24, margin: 20}}
        />
      </Pressable>
      <Pressable>
        <Image 
          source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
          style={{width: 24, height: 24, margin: 20}}
        />
      </Pressable>
    </View>
      <ScrollView>
        <BookList navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeScreen;