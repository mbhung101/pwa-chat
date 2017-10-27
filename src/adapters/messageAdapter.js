export default class MessageAdapter  {
  static enterRoom(name){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/messages", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: name
      })
    }).then(response => response.json() )
  }

  static newMessage(user_id,room_name,message){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/messages", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id: user_id,
        room_name: room_name,
        message: message
      })
    }).then(response => response.json() )
  }

  static headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}
}
