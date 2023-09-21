import { View, Text, TouchableOpacity } from 'react-native';
import useVoice from '../hooks/useVoice';
import useTranscribe from '../hooks/useTranscribe';
import useGpt from '../hooks/useGpt';
import useCalendar from '../hooks/useCalendar'
import useCalifications from '../hooks/useCalifications'


export default Voices = () => {
  
  const {start, stop, isRecording, data} = useVoice()

  const {isLoad, text, isError} = useTranscribe({
    isRecording: isRecording,
    data: data})

  const {result, isErrorResult, isLoadResult} = useGpt({
    context: [
      useCalifications({refresh:false}).data,
      useCalendar({refresh:false}).data],
    prompt: text})

  return (
    <View 
      style={{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
      }}
    >
      <TouchableOpacity onPress={isRecording ? stop : start}>
        <Text>{isRecording ? 'Detener grabación' : 'Comenzar a grabar'}</Text>
        <Text>{isLoad ? '...':text}</Text>
        {isLoad ? '':<Text>{!isLoadResult && result !== null ? result:'...'}</Text>}
      </TouchableOpacity>
    </View>
  );
};

