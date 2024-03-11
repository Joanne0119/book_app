import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/component/Header';
import booklist from './assets/data/bookList.json'
import BookList from './src/component/BookList';
import BookInfo from './src/component/BookInfo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header style={{ marginTop: StatusBar.currentHeight ?? 0 }}/>
      <BookList />
      {/* <BookInfo book = {booklist[0].data[0]}/> */}
    </SafeAreaView>
  );
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
