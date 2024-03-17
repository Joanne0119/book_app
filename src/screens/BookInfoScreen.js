import React from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import Star from "../components/Star";

const BookInfoScreen = ({ route, navigation }) => { 
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ marginLeft: 20, marginTop: 20, textDecorationLine:'underline' }}>
          Go Back
        </Text>
      </Pressable>
      <View  style={styles.containerStyle}>
        <Image 
          source={{uri: route.params.cover_image}}
          style={styles.image}
          key={route.params.book_title}
        />
        <Text style={styles.title}>{route.params.book_title}</Text>
        <Text style={styles.author}>{route.params.author}</Text>
        {route.params.starSection? <Star star={route.params.star} style={styles.star}/> : null}
        <Text style={styles.text}>{route.params.info}</Text>
        <Pressable style={styles.button}>
          <Text style={{color: '#fff', fontSize: 18}}>
            Buy Now For $49.99
          </Text>
        </Pressable>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title : {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45
  },
  image: {
    width: 300,
    height: 430,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
  },
  author: {
    fontSize: 14,
    fontWeight: '300',
    color: "#131313",
    marginTop: 8
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginBottom: 50
  },
  text: {
    fontSize: 14,
    color: "black",
    marginTop: 8,
    paddingHorizontal: 65
  }
});

export default BookInfoScreen;