import { 
  StyleSheet,
  View,
  Text,
  Pressable
} from "react-native"

const ItemFragment = props => {
  return(
    <View style={{...styles.container, ...props.styles}}>
      <View style={styles.icon}>
        {props.icon}
      </View>
      <View style={styles.body}>
        <View style={styles.itemInfo}>
          <View style={{...styles.title, backgroundColor:props.isPlaceholder 
            ? '#eeeef0':'white', ...props.titleStyle}}>
            <Text
              style={{...styles.titleStr, ...props.titleStyle}}
              numberOfLines={1}
            >
                {props.title}
            </Text>
          </View>
          <View style={styles.subTitle}>
            {props.subtitles.map((x, k) => (x))}
          </View>
        </View>
        <View style={styles.option}>
          {props.options}
        </View>
      </View>
    </View>
  )
}

export default Item = props => {
  if(props.onClick !== undefined)
    return (
      <Pressable
        {...props}
        onPress={() => {props.onClick()}}
      >
        <ItemFragment {...props}/>
      </Pressable>
    )

  return <ItemFragment {...props}/>
}

const styles = StyleSheet.create({
  icon:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  itemInfo:{
    gap:3
  },
  separator:{
    width:3,
    height:3,
    backgroundColor:'rgba(0,0,0,0 .5)',
    borderRadius:100,
  },
  subTitleStr:{
    fontSize:11,
    opacity:.55
  },
  titleStr:{
    fontSize:14.5
  },
  option:{
  },  
  subTitle:{
    flexDirection:'row',
    gap:5,
    borderRadius:10,
    alignItems:'center',
  },
  title:{
    borderRadius:5,
    width:210,
  },
  body:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  container:{
    flexDirection:'row',
    backgroundColor:'white',
    marginBottom:.5,
    borderRadius:4,
    height:60,
    //elevation:.5,
    paddingLeft:14,
    paddingRight:14
  }
})
