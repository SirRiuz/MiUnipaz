import { Pressable, StyleSheet, Text, View } from "react-native"

const NAVIGATION_PAGES = [
  {
    name:"Calendar",
    icon:"X"
  }, {
    name:"Califications",
    icon:"X"
  }
]

export default BottomNavigation = props => {
  return(
    <View style={styles.container}>
      {NAVIGATION_PAGES.map((x, k) => (
        <Pressable
          style={{flex:1}}
          onPress={() => {
            if(props.onClick !== undefined && !(props.index === k))
              props.onClick(k)
          }}
        >
          <View style={{
            ...styles.navigationItem,
            backgroundColor: props.index === k ? 'red':'#F2F1F7'
          }}>
            <Text>x</Text>
            <Text>{x.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  navigationItem:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'red',
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-around',
    height:45
  }
})

