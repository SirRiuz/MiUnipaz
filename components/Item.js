import { 
  StyleSheet,
  View,
} from "react-native"

export default Item = props => {
  return(
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <View style={styles.title}/>
        <View style={styles.subTitle}/>
      </View>
      <View style={styles.option}/>
    </View>
  )
}

const styles = StyleSheet.create({
  option:{
    width:45,
    height:13,
    borderRadius:10,
    backgroundColor:'#d6d6d6'
  },  
  subTitle:{
    width:40,
    height:7.5,
    borderRadius:10,
    backgroundColor:'#d6d6d6'
  },
  title:{
    width:85,
    height:13,
    borderRadius:10,
    backgroundColor:'#d6d6d6'
  },
  itemInfo:{
    gap:3
  },
  container:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    marginBottom:3,
    borderRadius:4,
    height:60,
    elevation:.5,
    paddingLeft:14,
    paddingRight:14
  }
})


