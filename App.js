import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/component/Header';
import booklist from './assets/data/bookList.json'
import BookList from './src/component/BookList';
import BookInfo from './src/component/BookInfo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar />
        <BookList />
        {/* <BookInfo book = {booklist[0].data[0]}/> */}
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
