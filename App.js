import * as NavigationBar from 'expo-navigation-bar';
import Calendar from './screens/Calendar';
import Califications from './screens/Califications';
import PagerView from 'react-native-pager-view';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App()  {
  NavigationBar.setBackgroundColorAsync("#F2F1F7");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F2F1F7"/>
      <PagerView style={{flex:1}}>
        <Calendar/>
        <Califications/>
      </PagerView>
      <BottomMenu
        onClose={() => {
          setModal(() => false)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00000000',
  }
});
