import settings from "../settings"
import client from "./storage"

const calificationsService = props => {
  const url = settings.base_url + '/califications/?all=true'
  var headers = ({'Authorization': `Bearer ${props.token}`})
  return client(url, {
    headers: headers,
    method: 'get',
    ...props
  })
}


export default calificationsService
