export default class ChatRoomAdapter  {

  static headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
    }
  }

  static createChatRoom(user){
    debugger
    return fetch("http://localhost:3000/api/chatroom", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        alert: alert
      })
    }).then(response => response.json() )
  }
}
