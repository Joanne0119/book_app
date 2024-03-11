import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SectionList } from 'react-native';
import BookInfo from './BookInfo';
import bookList from '../../assets/data/bookList.json'

const BookList = ()  => {

  return(
    <View style={styles.container}>
      <Text>{bookList[0].title}</Text>
      <FlatList 
        horizontal={true}
        data={bookList[0].data}
        renderItem={({item}) => <BookInfo book={item}/>}
        keyExtractor={item => item.book_title}
        contentContainerStyle={{ paddingHorizontal: 15, paddingLeft: 0 }}
      />
      <Text>{bookList[1].title}</Text>
      <FlatList 
        horizontal={true}
        data={bookList[1].data}
        renderItem={({item}) => <BookInfo book={item}/>}
        keyExtractor={item => item.book_title}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 3,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


export default BookList;