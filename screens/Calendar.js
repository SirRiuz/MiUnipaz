import Tag from "../components/Tag";
import RESPONSE from "../calendar";
import Item from "../components/Item";
import ProfileSvg from "../assets/svg/profile";
import TimeSvg from "../assets/svg/tiem";
import getStyles from "../helpers/get_styles";
import Open from "../assets/svg/Open";
import useCalendar from "../hooks/useCalendar";
import BottomMenu from '../components/BottomModal'
import settings from "../settings";
import TeacherSvg from "../assets/svg/Teacher";
import SignatureSvg from "../assets/svg/Signature";
import LocationSvg from "../assets/svg/Location";
import AllTimeSvg from "../assets/svg/Time";
import TimeRangeSvg from "../assets/svg/TimeRange";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  Text,
  Vibration
} from "react-native"


const BottomContent = props => {
  if (props.data === null)
    return null

  const data = {
    signature: [{
      title: "Teacher name",
      subtitle: props.data.teacher,
      icon: {
        color: "#c19100",
        svg: <TeacherSvg />
      }
    }, {
      title: "Class name",
      subtitle: props.data.name,
      icon: {
        color: "#f0352a",
        svg: <SignatureSvg />
      }
    }, {
      title: "Location",
      subtitle: "",
      icon: {
        color: "#2dacc3",
        svg: <LocationSvg />
      }
    }],
    time: [
      {
        title: "Total hours",
        subtitle: props.data.time.total_hours,
        icon: {
          color: "#ff9500",
          svg: <AllTimeSvg />
        }
      }, {
        title: "Class time",
        subtitle: `${props.data.time.str_date.start_class} - ${props.data.time.str_date.end_class}`,
        icon: {
          color: "#5856d6",
          svg: <TimeRangeSvg />
        }
      }
    ]
  }
  return (
    <View>
      <Tag name={"SIGNATURE"} />
      <View>
        {data.signature.map((x, k) => (
          <>
            <Item
              styles={getStyles(data.signature, k)}
              subtitles={[""]}
              icon={(
                <View style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9,
                  marginRight: 10,
                  backgroundColor: x.icon.color
                }}>
                  {x.icon.svg}
                </View>
              )}
              titleStyle={{
                width: 90,
                fontSize: 14,
                color: "black"
              }}
              title={x.title}
              key={k}
              options={(
                <View
                  style={{
                    width: 170,
                    alignItems: 'flex-end'
                  }}
                >
                  <Text numberOfLines={1} style={{
                    opacity: .45,
                    fontSize: 13
                  }}>{x.subtitle}</Text>
                </View>
              )}
            />
          </>
        ))}
      </View>
      <Tag name={"DATE/TIME"} />
      <View>
        {data.time.map((x, k) => (
          <>
            <Item
              styles={getStyles(data.time, k)}
              title={x.title}
              subtitles={[""]}
              icon={(
                <View style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 9,
                  marginRight: 10,
                  backgroundColor: x.icon.color
                }}>
                  {x.icon.svg}
                </View>
              )}
              titleStyle={{
                width: 90,
                fontSize: 14,
                color: "black"
              }}
              key={k}
              options={(
                <Text style={{
                  opacity: .85,
                  color: '#828186'
                }}>{x.subtitle}</Text>
              )}
            />
          </>
        ))}
      </View>
    </View>
  )
}

export default Calendar = props => {
  const [isRefresh, setRefresh] = useState(false)
  const [showModal, setModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  const { isLoad, data } = useCalendar({
    refresh: isRefresh
  }, () => setRefresh(() => false))

  var ITEMS = RESPONSE.days.map((x, k) => (
    <View key={k}>
      {
        (() => {
          const CALENDAR = RESPONSE.data.filter(
            el => el.day === x.name)
          if (!CALENDAR.length <= 0)
            return (
              <>
                <Tag isPlaceholder={true} />
                {CALENDAR.map((a, b) => (
                  <Item
                    styles={getStyles(CALENDAR, b)}
                    key={b}
                    isPlaceholder={true}
                    options={(
                      <View
                        style={{
                          width: 25,
                          height: 13,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                          borderRadius: 5,
                          alignItems: 'center',
                          paddingLeft: 5,
                          backgroundColor: '#eeeef0'
                        }}
                      />
                    )}
                    subtitles={[
                      (
                        <View
                          style={{
                            width: 65,
                            height: 13,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 5,
                            alignItems: 'center',
                            paddingLeft: 5,
                            backgroundColor: '#eeeef0'
                          }}
                        />
                      ), (
                        <View
                          style={{
                            width: 30,
                            height: 13,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 5,
                            alignItems: 'center',
                            paddingLeft: 5,
                            backgroundColor: '#eeeef0'
                          }}
                        />
                      )
                    ]}
                  />
                ))}
              </>
            )
        })()
      }
    </View>
  ))

  if (!isLoad && data !== null)
    ITEMS = data.days.map((x, k) => (
      <View key={k}>
        {
          (() => {
            const CALENDAR = data.data.filter(
              el => el.day === x.name)
            if (!CALENDAR.length <= 0)
              return (
                <>
                  <Tag name={x.name.toUpperCase()} />
                  {CALENDAR.map((a, b) => (
                    <Item
                      styles={getStyles(CALENDAR, b)}
                      key={b}
                      title={a.name}
                      onClick={(e) => {
                        Vibration.vibrate(settings.vibration)
                        setModalData(() => a)
                        setModal(() => true)
                      }}
                      subtitles={[
                        (
                          <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            paddingLeft: 5,
                            backgroundColor: '#f0f7ff'
                          }}>
                            <View style={{
                              justifyContent: 'center',
                              alignContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#f2f2f7'
                            }}>
                              <ProfileSvg />
                            </View>
                            <Text
                              style={{
                                fontSize: 10.5,
                                color: 'rgba(0, 112, 255, .85)',
                                paddingLeft: 4,
                                paddingRight: 5,
                                borderRadius: 3,
                              }}
                            >
                              {a.teacher}
                            </Text>
                          </View>
                        ), (
                          <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 5,
                            alignItems: 'center',
                            paddingLeft: 5,
                            backgroundColor: '#eeeef0'
                          }}>
                            <View style={{
                              justifyContent: 'center',
                              alignContent: 'center',
                              alignItems: 'center',
                              backgroundColor: '#f2f2f7'
                            }}>
                              <TimeSvg />
                            </View>
                            <Text
                              style={{
                                fontSize: 10,
                                color: '#888787',
                                paddingLeft: 4,
                                paddingRight: 5,
                                borderRadius: 3,
                              }}
                            >
                              {a.time.total_hours}
                            </Text>
                          </View>
                        )
                      ]}
                      options={(
                        <Open />
                      )}
                    />
                  ))}
                </>
              )
          })()
        }
      </View>
    ))

  return (
    <View style={styles.container}>
      {isLoad ? ITEMS : (
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                Vibration.vibrate(settings.vibration)
                setRefresh(() => true)
              }}
              refreshing={isRefresh} />
          }
        >
          {ITEMS}
        </ScrollView>
      )}
      <BottomMenu
        show={showModal}
        onClose={() => {
          setModalData(() => null)
          setModal(() => false)
        }}
      >
        <BottomContent data={modalData} />
      </BottomMenu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F2F2F7"
  }
})
