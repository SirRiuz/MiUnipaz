import { Pressable, StyleSheet, Text, View } from "react-native"
import CalificationsSvg from "../assets/svg/Califications"
import CalendarSvg from "../assets/svg/Calendar"


const NAVIGATION_PAGES = [CalendarSvg, CalificationsSvg]

export default BottomNavigation = props => {
  return (
    <View style={styles.container}>
      {NAVIGATION_PAGES.map((Component, k) => (
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            if(k !== props.index) {
              props.onClick(k)
            }
          }}  
        >
          <View style={styles.navigationItem}>
            <Text style={{ color: 'red' }}>
              {
                <Component
                  key={k}
                  color={props.index === k ?
                    '#007aff' : 'rgba(194, 194, 194, .85)'}
                />
              }
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  navigationItem: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F1F7'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 45
  }
})

