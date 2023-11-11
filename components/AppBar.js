import { StyleSheet, View, Text } from "react-native"

export default AppBar = props => {
  return (
    <View style={styles.container}>
      <Text>x</Text>
      <Text>x</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
  }
})
