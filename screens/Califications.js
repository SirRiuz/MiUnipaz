import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native"
import * as NavigationBar from 'expo-navigation-bar';
import AppBar from "../components/AppBar";
import ItemGrup from "../components/ItemGrup";
import Tag from "../components/Tag";
import { useEffect } from "react";

export default Califications = props => {
  //NavigationBar.setBackgroundColorAsync("#DFEDF8");
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
          <ItemGrup items={3}/>
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
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:"#DFEDF8"
  }
})
