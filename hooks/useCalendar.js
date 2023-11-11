import { useEffect, useState } from "react"
import calendarService from "../services/calendar"
import settings from "../settings"
import { Alert } from "react-native"

export default useCalendar = (props, e) => {
  const [data, setData] = useState(null)
  const [isLoad, setLoad] = useState(true)
  
  useEffect(() => {
    const token = settings.token
    if(data === null || props.refresh) {
      setLoad(() => true)
      calendarService({
        refresh: props.refresh,
        token: token
      })
        .then(res => {
          setData(() => res)
        })
        .catch(e => {
          if(!isLoad)
            Alert.alert("Error de conexion", "En este momento, estamos experimentando problemas en el servidor.")
        })
        .finally(() => {
          setLoad(() => false)
          e()
        }) 
    }
  }, [props.refresh])

  return {data, isLoad}
}
