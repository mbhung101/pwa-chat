export default class ChatRoomAdapter  {

  static gatherChatRooms(user_id){
    return fetch("http://localhost:3000/api/chatrooms", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        user_id: 1
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
