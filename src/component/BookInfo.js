import { View, Text, StyleSheet, Image} from 'react-native'

const BookInfo = ({ book }) => {
  return (
    <View>
      <Image 
        source={{uri: book.cover_image}}
        style={styles.image}
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
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 6
  }
});

export default BookInfo

