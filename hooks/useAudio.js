import { voiceProviderService, voiceWorkerService } from "../services/audio"
import { Audio } from "expo-av"


const HTTP_OK = 1

export default useAudio = _ => {
  const onPlaySound = ticket => {
    voiceProviderService({ work_id: ticket })
      .then(res => res.json())
      .then(async res => {
        if (res.status !== HTTP_OK) { throw "Request error" }

      })
      .catch(_ => {
        alert("Error to get the audio")
      })
  }

  const playAudio = e => {
    console.log("playAudio")
    console.log(e.text)
    voiceWorkerService({ text: e.text })
      .then(res => res.json())
      .then(async res => {
        console.log(res)
        if (res.status !== HTTP_OK) { throw "Request error" }

        const sound = new Audio.Sound()
        await sound.loadAsync({ uri: res["file"] })
        await sound.playAsync()
      })
      .catch(_ => {
        alert("No hay creditos sofucientes en la api 'speechgen'")
      })
  }

  return {
    playAudio
  }
}

