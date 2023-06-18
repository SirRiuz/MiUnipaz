import { View, Text, StyleSheet } from "react-native"



export default Tag = props => {
  return(
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:95,
    height:25,
    paddingBottom:4,
    paddingTop:4,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginBottom:15,
    marginTop:15,
    backgroundColor:'rgba(0, 0, 0, 0.1)'
  }
})
