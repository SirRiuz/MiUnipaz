import { StyleSheet, View } from "react-native"
import HomeNavigationGrup from '../components/HomeNavigation'


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeNavigationGrup navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})

export default Home
