import { View, Text, StyleSheet } from "react-native"



export default Tag = props => {
  return(
    <View style={styles.container}>
      <Text style={{
        fontSize:12,
        opacity:.5,
        backgroundColor:props.isPlaceholder ? '#d7d7d9':'rgba(0, 0 ,0 ,0)',
        width:110,
        borderRadius:5
      }}>
        {props.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'flex-end',
    alignContent:'flex-end',
    borderRadius:5,
    marginBottom:15,
    marginTop:15,
  }
})
