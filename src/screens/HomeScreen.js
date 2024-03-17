import React from "react";
import BookList from "../components/BookList";
import { ScrollView } from "react-native-gesture-handler";


const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{flex: 1}}>
      <BookList navigation={navigation}/>
    </ScrollView>
  );
};

export default HomeScreen;