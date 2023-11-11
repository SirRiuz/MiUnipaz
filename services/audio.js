import settings from "../settings"


const voiceProviderService = props => {
  var data = {
    "token": settings.keys.speechgen_key,
    "email": settings.keys.speechgen_email,
    "id": props.work_id
  }

  return fetch(settings.urls.speechgen_url_provider, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      //"Content-Length": 250,
      "Content-Type": "application/json"
    }
  })
}

const voiceWorkerService = props => {
  var data = {
    "token": settings.keys.speechgen_key,
    "email": settings.keys.speechgen_email,
    "lang": "es-CO",
    "voice": "Salome",
    "emotion": "2",
    "speed": "1.0",
    "format": "mp3",
    "text": props.text,
    "vocabulary": false,
    "popup_cptch": 0
  }
  
  return fetch(settings.urls.speechgen_url_worker, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export {
  voiceProviderService,
  voiceWorkerService
}
