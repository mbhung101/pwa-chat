export default class ChatRoomAdapter  {

  static gatherChatRooms(user_id){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id: user_id
      })
    }).then(response => response.json() )
  }

  static enterRoom(name){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: name
      })
    }).then(response => response.json() )
  }

  static findUser(chatName){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        room : chatName,
        patient: true
      })
    }).then(response => response.json() )
  }

  static newChat(patient,dob,phone,room_name,user_id,message){
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/chatrooms", {
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
