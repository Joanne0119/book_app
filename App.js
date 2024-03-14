import React from 'react';
import { StatusBar, ScrollView, StyleSheet, Text, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import BookList from './src/components/BookList';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
        {/* <StatusBar />
        <Header />
        <ScrollView>
          <BookList />
        </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
