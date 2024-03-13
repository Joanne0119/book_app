import { View, Text, StyleSheet, Image} from 'react-native'
import Star from './Star';

const BookInfo = ({ book }) => {
  if(book.section != 2){
    return (
      <View style={styles.containerStyle}>
        <Image 
          source={{uri: book.cover_image}}
          style={styles.image}
        />
        <Text style={styles.title}>{book.book_title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    )
  }
  return (
    <View style={styles.containerStyle}>
      <Image 
        source={{uri: book.cover_image}}
        style={styles.image}
      />
      <Star star={book.star}/>
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
    width: 168,
    height: 240,
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
  }
});

export default BookInfo

