export default class MessageAdapter  {
  static enterRoom(name){
    return fetch("http://localhost:3000/api/messages", {
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
