import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Calendar from './screens/Calendar';
import * as NavigationBar from 'expo-navigation-bar';
import Califications from './screens/Califications';
import PagerView from 'react-native-pager-view';
import AppBar from './components/AppBar';

export default function App()  {
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setButtonStyleAsync("dark");
  return (
    <View style={styles.container}>
      <StatusBar translucent/>
      <PagerView style={{flex:1}}>
        <Calendar/>
        <Califications/>
      </PagerView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00000000',
  }
});
