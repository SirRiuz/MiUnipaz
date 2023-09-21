
import settings from "../settings"
import promtService from "./promt"


export default gtpService = props => {
  const data = {
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": promtService(props.context)
      },
      {
        "role": "user",
        "content": props.prompt
      }
    ]
  }

  const headers = ({
    "Content-Type": `application/json`,
    "Authorization": `Bearer ${settings.keys.gtp_key}`,})

  return fetch(settings.urls.gtp_url, {
    method: "post",
    body: JSON.stringify(data),
    headers})
}


