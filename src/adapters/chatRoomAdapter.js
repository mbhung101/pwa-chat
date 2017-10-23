export default class ChatRoomAdapter  {

  static gatherChatRooms(user_id){
    return fetch("http://localhost:3000/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id: user_id
      })
    }).then(response => response.json() )
  }

  static enterRoom(name){
    return fetch("http://localhost:3000/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name: name
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
