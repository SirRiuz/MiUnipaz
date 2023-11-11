import { useState, useEffect } from 'react'
import { Audio } from 'expo-av'
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'

export default Voices = () => {
  const [recording, setRecording] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [data, setData] = useState(null)

  const start = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setData(() => null)
    try {
      const { recording } = await Audio.Recording.createAsync(
        {
          android: {
            extension: '.mp3',
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
          },
          ios: {
            extension: '.mp3',
            outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
        }
      )

      setRecording(recording)
      setIsRecording(true)
    } catch (error) {
      alert("Error")
    }
  }

  const stop = async () => {
    try {
      await recording.stopAndUnloadAsync()
      setIsRecording(false)
      const file = await FileSystem.readAsStringAsync(recording.getURI(), {
      })
      setData(() => recording.getURI())
    } catch (error) {}
  }
  return {start, stop, isRecording, data}
}
