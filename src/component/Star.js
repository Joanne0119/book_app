import { View, Text, Image } from 'react-native';
import React from 'react';

const Star = ({star}) => {
  const stars = () => {
    switch (star) {
      case 1:
        return(
          <View>
             <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
          </View>
        )
      case 2:
        return(
          <View>
             <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
          </View>
        )
      case 3:
        return(
          <View>
              <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
          </View>
        )
      case 4:
        return(
          <View>
              <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
          </View>
        )
      case 5:
        return(
          <View>
             <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
            <Image 
              source={{uri: book.cover_image}}
              style={styles.image}
            />
          </View>
        )
    }
  }
  return (
    <View>
      {stars}
    </View>
  )
}

export default Star