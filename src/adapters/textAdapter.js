export default class TextAdapter  {
  static sendText(message,recipient){
    return fetch("http://localhost:3000/api/texts", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        recipient: recipient,
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
