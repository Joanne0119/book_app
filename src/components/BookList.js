import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SectionList } from 'react-native';
import BookInfo from './BookInfo';
import bookList from '../../assets/data/bookList.json';

const BookList = ({ navigation })  => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{bookList[0].title}</Text>
      <FlatList 
        horizontal={true}
        data={bookList[0].data}
        renderItem={({item}) => <BookInfo book={item}  navigation={navigation} />}
        keyExtractor={item => item.book_title}
        contentContainerStyle={{ padding: 20 }}
      />
      <Text style={styles.title}>{bookList[1].title}</Text>
      <FlatList 
        horizontal={true}
        data={bookList[1].data}
        renderItem={({item}) => <BookInfo book={item}  navigation={navigation} />}
        keyExtractor={item => item.book_title}
        contentContainerStyle={{ padding: 20}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 25,
    marginTop: 20
  }
});


export default BookList;