import { Text, View, StyleSheet } from "react-native"


export default Dot = props => {
  return (
    <View style={styles.container}>
      <View style={{
        ...styles.dot, ...{
          backgroundColor: props.focus ? '#55cc82' : 'white',
          borderColor: props.focus ? 'white' : '#c8c8ca',
          elevation: props.focus ? 1 : 0,
        }
      }}>
        <View style={styles.subDot} />
      </View>
      {props.continue ? (
        <View style={styles.continue}>
          <View style={styles.continueLine} />
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  continueLine: {
    backgroundColor: '#c8c8ca',
    flex: 1,
    opacity: .7,
    width: 1.9,
    borderRadius: 100
  },
  continue: {
    flex: 1,
    height: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subDot: {
    backgroundColor: 'white',
    width: 5,
    height: 5,
    borderRadius: 100
  },
  dot: {
    //backgroundColor:'#55cc82',
    width: 15,
    height: 15,
    borderRadius: 100,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginRight: 9.5
  }
})
