import { StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}></View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  }
});
