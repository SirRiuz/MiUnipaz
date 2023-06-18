import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native"
import * as NavigationBar from 'expo-navigation-bar';
import AppBar from "../components/AppBar";
import ItemGrup from "../components/ItemGrup";
import Tag from "../components/Tag";

export default Calendar = props => {
  //NavigationBar.setBackgroundColorAsync("#C14C6C");
  return(
    <View style={styles.container}>
      {/* <AppBar/> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false}/>
        }
      >
        <>
          <Tag/>
          <ItemGrup items={1}/>
        </>
        <>
          <Tag/>
          <ItemGrup items={5}/>
        </>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#C14C6C"
  }
})
