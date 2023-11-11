import Modal from "react-native-modal";
import { StatusBar, StyleSheet, View } from "react-native";


export default BottomMenu = props => {
  return (
    <Modal
      isVisible={props.show}
      backdropColor={"rgba(0, 0, 0, .55)"}
      style={styles.container}
      onSwipeComplete={() => props.onClose()}
      swipeDirection={["down"]}
      onBackdropPress={() => {
        props.onClose()
      }}
      onBackButtonPress={() => { props.onClose() }}
    >
      <StatusBar backgroundColor={"rgba(0, 0, 0, .39)"} />
      <View style={styles.body}>
        <View style={styles.content}>
          {props.children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  close: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e8",
    width: 30,
    height: 30,
    borderRadius: 100
  },
  modalHeader: {
    borderRadius: 20,
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 20
  },
  body: {
    backgroundColor: "#f2f2f7",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 450, //450
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    justifyContent: "flex-end",
    margin: 0,
  }
})
