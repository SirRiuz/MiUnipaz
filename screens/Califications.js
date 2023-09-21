import Tag from "../components/Tag";
import CALIFICATIONS from "../califications";
import Item from "../components/Item";
import CheckSvg from "../assets/svg/Check";
import FailSvg from "../assets/svg/Fail";
import getStyles from "../helpers/get_styles";
import Open from "../assets/svg/Open";
import useCalifications from "../hooks/useCalifications";
import BottomMenu from "../components/BottomModal"
import settings from "../settings";
import Dot from "../components/Dot"
import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  RefreshControl,
  Vibration
} from "react-native";


const RenderBottomSheet = props => {
  const [show, setShow] = useState(false)

  if(props.data === null){ return }

  return(
    <View style={styles.bottomContainer}>
      <Tag name="CALIFICATIONS"/>
      <View
        style={{
          justifyContent:'center',
          alignContent:'center',
          backgroundColor:'white',
          borderRadius:10,
        }}
      >
        <Item
          title={"Semester average"}
          styles={{borderRadius:100}}
          titleStyle={{
            color:"#010101",
            fontWeight:"500",
            fontSize:16}}

          options={(<Open/>)}
          subtitles={[
            (
              <Text
                style={{
                  color:"#979797",
                  fontSize:12,
                  fontWeight:"350"
                }}
              >Actual average of the this semester</Text>
            )
          ]}
        />
        <View
          style={{
            width:'100%',
            paddingLeft:20,
            paddingRight:20,
            height:15,
            justifyContent:'center',
            alignContent:'center'
          }}
        >
          <View
            style={{
              width:'100%',
              height:1.1,
              backgroundColor:'#d2d2d4',
              opacity:.4,
              borderRadius:10
            }}
          />
        </View>
        <View
          style={{paddingTop:9, opacity:.8}}
        >
          {props.data.califications.map((x, k) => (
            <Item
              key={k}
              title={"Value court " + x.porcentaje}
              icon={<Dot
                focus={(x.isBadCalification)}
                continue={!(
                  (k + 1) == props.data.califications.length)}
              />}
              titleStyle={{
                fontSize:13,
                color:'#505050',
                opacity:.9,
              }}
              styles={{
                height:30,
                justifyContent:'flex-start',
                alignContent:'flex-start',
                alignItems:'flex-start',
                elevation:0,
                marginBottom:0,
                borderRadius:100
              }}
              subtitles={[]}
              options={(
                <Text
                  style={{
                    fontSize:13,
                    opacity:.9,
                    color:'#505050'}}
                >
                  {x.calification}
                </Text>
              )}
            />
          ))}
        </View>
      </View>
      <Tag name="PREDICTIONS"/>
      <View
        style={{
          justifyContent:'center',
          alignContent:'center',
          backgroundColor:'white',
          borderRadius:10,
          height:110
        }}
      >
        <View>
          {props.data.predictions.map((x, k) => (
            <Item
              key={k}
              title={"Court " + (k + 1)}
              icon={<Dot
                focus={!(x.isBadCalification)}
                continue={!(
                  (k + 1) == props.data.predictions.length)}
              />}
              titleStyle={{
                fontSize:13,
                color:'#505050',
                opacity:.9,
              }}
              styles={{
                height:30,
                justifyContent:'flex-start',
                alignContent:'flex-start',
                alignItems:'flex-start',
                elevation:0,
                marginBottom:0,
                borderRadius:100
              }}
              subtitles={[]}
              options={(
                <Text
                  style={{
                    fontSize:13,
                    opacity:.9,
                    color:'#505050'}}
                >
                  {x.calification}
                </Text>
              )}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default Califications = props => {
  const [isRefresh, setRefresh] = useState(false)
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState(null)
  const { data, isLoad } = useCalifications({
    refresh:isRefresh}, () => {setRefresh(() => false)})
  
  var ITEMS = CALIFICATIONS.old.map((x, k) => (
    <View key={k}>
      <Tag isPlaceholder={true}/>
        {x.map((_, b) => (
          <Item
            key={b}
            isPlaceholder={true}
            styles={getStyles(x, b)}
            options={(
              <View
                style={{
                  width:25,
                  height:13,
                  flexDirection:"row",
                  justifyContent:"center",
                  alignContent:"center",
                  borderRadius:5,
                  alignItems:"center",
                  paddingLeft:5,
                  backgroundColor:"#eeeef0"
                }}
              />
            )}
            subtitles={[
              (
                <View
                  style={{
                    width:65,
                    height:13,
                    flexDirection:"row",
                    justifyContent:"center",
                    alignContent:"center",
                    borderRadius:5,
                    alignItems:"center",
                    paddingLeft:5,
                    backgroundColor:"#eeeef0"
                  }}
                />
              )
            ]}
          />
        ))}
    </View>
  ))

  if(!isLoad && data !== null) {
    const ACTUAL = data.actual.map((x, k) => (
      <Item
        key={k}
        title={x.signature}
        options={(<Open/>)}
        subtitles={[]}
        onClick={(e) => {
          Vibration.vibrate(settings.vibration)
          setShow(() => true)
          setModalData(() => x)
        }}
        styles={
          getStyles(data.actual, k)}
        />
    ))
    const OLDS = data.old.map((x, k) => (
      <View key={k}>
        <Tag name={("Semester " + (
         (CALIFICATIONS.old.length - (k)) + 2)).toUpperCase()}
        />
          {x.map((a, b) => (
            <Item
              key={b}
              title={a.signature}
              styles={getStyles(x, b)}
              options={(
                <Text style={{
                  opacity:.45,
                  fontSize:12.5
                }}>
                  {a.calification}
                </Text>
              )}
              subtitles={[
                (
                  <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignContent:"center",
                    alignItems:"center",
                    borderRadius:5,
                    paddingLeft:5,
                    backgroundColor:
                      a.is_aprove ?
                        "rgba(27, 203, 86, .09)":
                        "rgba(255, 59, 48, .09)"}}>
                    <View>
                      {a.is_aprove ? <CheckSvg/>:<FailSvg/>}
                    </View>
                    <Text
                      style={{
                        fontSize:10,
                        color:a.is_aprove ? "#1bcb56":"#ff3b30",
                        paddingLeft:3,
                        paddingRight:5}}
                    >
                      {a.is_aprove ? "Approved":"Reprobate"}
                    </Text>
                  </View>
                )
              ]}
            />
          ))}
      </View>
    ))
    ITEMS = (
      <View>
          <>
            <Tag name={"Actual semester".toUpperCase()}/>
            {ACTUAL}
          </>
          {OLDS}
      </View>
    )
  }
  
  return(
    <View style={styles.container}>
      {isLoad ? ITEMS:(
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                Vibration.vibrate(settings.vibration)
                setRefresh(() => true)
              }}
              refreshing={isRefresh}/>
          }
        >
          {ITEMS}
        </ScrollView>
      )}
      <BottomMenu
        onClose={() => {
          setShow(() => false)
          setModalData(() => null)
        }}
        show={show}>
        <RenderBottomSheet data={modalData}/>
      </BottomMenu>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomContainer:{
    flex:1,
    justifyContent:'center'
  },
  container:{
    flex:1,
    paddingTop:45,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#F2F2F7"
  }
})
