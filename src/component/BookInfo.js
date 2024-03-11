import { View, Text, StyleSheet, Image} from 'react-native'

const BookInfo = ({ book }) => {
  return (
    <View>
      <Image 
        source={book.cover_image}
        style={{width: 100, height: 150}}
      />
      <Text style={styles.title}>{book.book_title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </View>
  )
};

const styles = StyleSheet.create ({
  title : {
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1, //the height will automatically be caculated
    borderRadius: 10,
    marginBottom: 6
  }
});

export default BookInfo

