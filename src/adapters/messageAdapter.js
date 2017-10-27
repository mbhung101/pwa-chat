export default class MessageAdapter  {
  static enterRoom(name){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/messages", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/messages", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: name
      })
    }).then(response => response.json() )
  }

  static newMessage(user_id,room_name,message){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/messages", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/messages", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
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
