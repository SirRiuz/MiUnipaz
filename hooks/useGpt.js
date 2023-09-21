import { useEffect, useState } from "react"
import gtpService from '../services/gpt'


export default useGpt = (props, e) => {
  const [result, setResult] = useState(null)
  const [isLoadResult, setLoad] = useState(false)
  const [isErrorResult, setError] = useState(true)

  useEffect(() => {
    if(props.prompt !== null &&
        props.prompt.length > 0 && !isLoadResult) {

      setLoad(() => true)
      gtpService({prompt: props.prompt, context: props.context})
        .then((r) => r.json())
        .then(res => {
          setResult(() => res["choices"][0]["message"]["content"])
        })
        .catch(() => {setError(() => true)})
        .finally(() => {
          setLoad(() => false)
        })
    }
  }, [props.prompt])

  return {result, isLoadResult, isErrorResult}
}
