import { View, Text, StyleSheet, Image} from 'react-native'

const BookInfo = ({ book }) => {
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
};

const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 10,
    paddingHorizontal: 15
  },
  title : {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18
  },
  image: {
    width: 140,
    height: 200,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
    resizeMode: 'stretch',
    // iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    // Android
    elevation: 2,
  },
  author: {
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    width: '100%',
    marginTop: 8
  }
});

export default BookInfo

