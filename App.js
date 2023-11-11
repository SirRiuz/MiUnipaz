import * as NavigationBar from 'expo-navigation-bar';
import Calendar from './screens/Calendar';
import Califications from './screens/Califications';
import PagerView from 'react-native-pager-view';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './components/Navigation';
import BottomMenu from './components/BottomModal'
import { useRef, useState } from 'react';
import Voices from './screens/Voice';
import { useShakeDetector } from './hooks/useShakeDetector';


export default function App()  {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const pagerRef = useRef(null)
  
  useShakeDetector(() => setShow((e) => !e))

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
        <Calendar key={2}/>
        <Califications key={3}/>
      </PagerView>
      {/* <BottomMenu
        show={show}
        onClose={() => {
          setShow(() => false)
        }}
      >
        <Voices key={1}/>
      </BottomMenu> */}
      <Navigation
        index={index}
        onClick={(i) => {
          pagerRef.current.setPage(i)
          setIndex(() => i)
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
