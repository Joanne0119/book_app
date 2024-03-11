import { StyleSheet, Text, View, Image, FlatList, SectionList } from 'react-native';
import BookInfo from './BookInfo';
import bookList from '../../assets/data/bookList.json'

export default function BookList({ section }) {
  // const renderBookCard = ({item}) => <BookInfo book={item} />
  // const renderHorizontalBooks = (section) => { 
  //   if (section.horizontal) {
  //     return(
  //       <FlatList style={styles.bookList}
  //         horizontal={true}
  //         data = {section.data}
  //         renderItem={renderBookCard}
  //         showsHorizontalScrollIndicator={false}
  //         keyExtractor={item => item.book_title}
  //       />
  //     )
  //   }
  //   else return null
  // }

  // const renderItem = ({item}) => <BookInfo book = {item}/>

  // console.log(renderBookCard);

  // return (
  //   <SectionList 
  //     section = {section}
  //     // renderSectionHeader={renderHorizontalBooks}
  //     renderItem = {renderItem}
  //     keyExtractor={item => item.book}
  //   />
  // );
  const renderItem = ({item}) => {<BookInfo book={item}/>}

  return(
    <View>
      <FlatList 
        data={section.data}
        renderItem={renderItem}
        keyExtractor={item => item.book_title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});
