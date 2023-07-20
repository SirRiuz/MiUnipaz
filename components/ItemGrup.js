import { StyleSheet, View } from "react-native"
import Item from './Item'

export default ItemList = props => {

  if(props.data === undefined || props.data === null)
    return null

  const renderItem = e => {
    if(props.renderItem !== undefined) {
      props.renderItem()
    }
  }
  
  renderItem()
  return(
    <View style={styles.container}>
      {props.data.map((x, k) => (
        <Item key={k}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  }
})
