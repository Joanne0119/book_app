import { View, Text, StyleSheet, Image} from 'react-native'
import Star from './Star';

const BookInfo = ({ book }) => {
  return (
    <View style={styles.containerStyle}>
      <Image 
        source={{uri: book.cover_image}}
        style={styles.image}
        key={book.book_title}
      />
      {book.starSection? <Star star={book.star} style={styles.star}/> : null}
      <Text style={styles.title}>{book.book_title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </View>
  )
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    paddingHorizontal: 15
  },
  title : {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20
  },
  image: {
    width: 154,
    height: 220,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
    resizeMode: 'stretch',
  },
  author: {
    fontSize: 14,
    fontWeight: '300',
    color: "#131313",
    width: '100%',
    marginTop: 8
  },
  star: {
    flex: 1
  }
});

export default BookInfo

