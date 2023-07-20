import settings from "../settings"
import client from "./storage"

const calendarService = props => {
  const url = settings.base_url + '/calendar/?all=true'
  var headers = ({'Authorization': `Bearer ${props.token}`})
  return client(url, {
    headers: headers,
    method: 'get',
    ...props
  })
}


export default calendarService
