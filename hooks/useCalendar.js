import { useEffect, useState } from "react"
import calendarService from "../services/calendar"
import settings from "../settings"

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
        .finally(() => {
          setLoad(() => false)
          e()
        }) 
    }
  }, [props.refresh])

  return {data, isLoad}
}
