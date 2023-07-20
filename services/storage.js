import AsyncStorage from '@react-native-async-storage/async-storage';
import { SHA256 } from 'crypto-js';


const getToStorage = async hash => {
  try {
    return await AsyncStorage.getItem(hash)
  } catch (error) {
    // saving error
  }
}

const setToStorage = async (hash, data) => {
  try {
    const payload = JSON.stringify(data)
    await AsyncStorage.setItem(hash, payload)
  } catch (e) {
    // saving error
  }
}


export default client = async (url, config) => {
  const REQUEST_HASH = SHA256((
    url + JSON.stringify(
      config))).toString()

  const storage = await getToStorage(REQUEST_HASH)

  if(storage === null || config.refresh) {
    return fetch(url, config)
      .then((res) => (res.json()))
      .then(res => {
        setToStorage(REQUEST_HASH, res)
        return new Promise((resolve, reject) => {
          resolve(res)
        })
      })

  } else {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(storage))
    })
  }
}
