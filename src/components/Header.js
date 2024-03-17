import { StyleSheet, View, Pressable, Image } from 'react-native';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Image 
          source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/nav_icon.png?raw=true'}}
          style={{width: 24, height: 24, margin: 20}}
        />
      </Pressable>
      <Pressable>
        <Image 
          source={{uri: 'https://github.com/Joanne0119/book_app/blob/master/assets/image/icon/search_icon.png?raw=true'}}
          style={{width: 24, height: 24, margin: 20}}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
