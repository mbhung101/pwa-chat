export default class ChatRoomAdapter  {

  static gatherChatRooms(user_id){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/users", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id: user_id
      })
    }).then(response => response.json() )
  }

  static enterRoom(name){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/chatrooms", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: name
      })
    }).then(response => response.json() )
  }

  static findUser(chatName){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/chatrooms", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        room : chatName,
        patient: true
      })
    }).then(response => response.json() )
  }

  static newChat(patient,dob,phone,room_name,user_id,message){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/chatrooms", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id:user_id,
        dob:dob,
        phone:phone,
        room_name: room_name,
        patient_name: patient,
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
