import * as NavigationBar from 'expo-navigation-bar';
import Calendar from './screens/Calendar';
import Califications from './screens/Califications';
import PagerView from 'react-native-pager-view';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './components/Navigation';
import { useRef, useState } from 'react';
import Voices from './screens/Voice';


export default function App()  {
  const [index, setIndex] = useState(0)
  const pagerRef = useRef(null)

  NavigationBar.setBackgroundColorAsync("#F2F1F7");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F2F1F7"/>
      <PagerView
        ref={(e) => {pagerRef.current = e}}
        style={{flex:1}}
        initialPage={index}
        onPageSelected={(e) => {
          setIndex(e.nativeEvent.position)
        }}
      >
        <Voices key={1}/>
        <Calendar key={2}/>
        <Califications key={3}/>
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
