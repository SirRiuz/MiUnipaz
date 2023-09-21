import settings from "../settings"

export default transcribeService = props => {
  var data = new FormData()
  data.append("model", "whisper-1")
  data.append("file", {
    uri: props.file,
    type: 'audio/mpeg',
    name: 'audiofile.mp3'})

  data.append("fileType", "mp3")
  data.append("language", "es")
  data.append("task", "transcribe")

  const headers = ({
    "Content-Type": `multipart/form-data`,
    "Authorization": `Bearer ${settings.keys.whisperapi_key}`,})

  return fetch(settings.urls.whisperapi_url, {
    method: "post",
    body: data,
    headers})
}


