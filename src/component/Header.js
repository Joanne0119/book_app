import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../../assets/image/icon/nav_icon.png')}
        style={{width: 24, height: 24}}
      />
      <Image 
        source={require('../../assets/image/icon/search_icon.png')}
        style={{width: 24, height: 24}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%'
  }
});
