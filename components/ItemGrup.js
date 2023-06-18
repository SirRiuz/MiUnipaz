import { StyleSheet, View } from "react-native"
import Item from './Item'

export default ItemGrup = props => {
  return(
    <View style={styles.container}>
      {[... new Array(props.items).keys()].map((x, k) => (
        <Item key={k}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  }
})
