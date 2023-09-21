import { useEffect, useState } from "react"
import transcribeService from "../services/transcriptor"


export default useTranscribe = (props, e) => {
  const [text, setText] = useState(null)
  const [isLoad, setLoad] = useState(false)
  const [isError, setError] = useState(true)

  useEffect(() => {
    if(!props.isRecording && props.data !== null) {
      setLoad(() => true)
      transcribeService({file: props.data})
        .then(r => r.json())
        .then(res => {
          setText(() => res["text"])
        })
        .catch(err => {setError(() => true)})
        .finally(_ => {setLoad(() => false)})
      }
  }, [props.isRecording, props.data])

  return {text, isLoad, isError}
}
