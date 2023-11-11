import { useEffect, useState } from "react"
import settings from "../settings"
import calificationsService from "../services/califications"
import { Alert } from "react-native"

export default useCalifications = (props, e) => {
  const [data, setData] = useState(null)
  const [isLoad, setLoad] = useState(true)

  useEffect(() => {
    const token = settings.token
    if(data === null || props.refresh) {
      setLoad(() => true)
      calificationsService({
        refresh: props.refresh,
        token:token
      })
        .then(res => {
          setData(() => res)
        })
        .catch(err => {
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
