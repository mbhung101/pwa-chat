export default class UserAdapter  {

  static verifyUser(name,dob){

    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name:name,
        dob:dob,
        online: true
      })
    }).then(response => response.json() )
  }

  static currentUser(name,password){

    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name:name,
        password:password,
        online: true
      })
    }).then(response => response.json() )
  }

  static getUser(id){

    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        id:id
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
