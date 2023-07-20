import { useState } from "react"
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View } from "react-native"
import SearchSvg from "../assets/svg/Search"


export default SearchBar = props => {
  const [text, setText] = useState("")
  const onChange = e => {
    if(e.nativeEvent !== null)
      setText(() => e.nativeEvent.text)
      props.onChange(e.nativeEvent.text)
  }

  return(
    <View style={styles.container}>
      <View
        style={styles.search}
      >
        <SearchSvg/>
        <TextInput
          value={text}
          onChange={onChange}
          style={styles.input}
          placeholder='Search'
          autoFocus={true}
        />
      </View>
      {text.length > 0 ? (
        <Pressable
          style={{...styles.clear}}
          onPress={() => {
            setText(() => "")
            props.onChange(null)
          }}
        >
          <Text>x</Text>
        </Pressable>
      ):null}
    </View>
  )
}

const styles = StyleSheet.create({
  clear:{
    width:30,
    height:30,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  search:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    gap:6,
    flex:1
  },
  input:{
    flex:1,
  },
  container:{
    flex:1,
    backgroundColor:'#e1e3e9',
    height:40,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:10,
    marginBottom:15
  }
})
