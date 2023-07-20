import { useEffect, useState } from "react"
import settings from "../settings"
import calificationsService from "../services/califications"

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
        .finally(() => {
          setLoad(() => false)
          e()
        })
    }
  }, [props.refresh])

  return {data, isLoad}
}
