export default class UserAdapter  {

  static createUser(alert){
    return fetch("http://localhost:3000/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name:'bob',
        phone: '123',
        dob: '456',
        pca: 'a',
        online: true
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
