export default class UserAdapter  {

  static verifyUser(name,dob){
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/users", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
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
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/users", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
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
<<<<<<< HEAD
    return fetch("http//localhost:3000/api/users", {
=======
    return fetch("https://sheltered-hamlet-95377.herokuapp.com/api/users", {
>>>>>>> 91b9bcc7296278826c0acd56598c955da159109d
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
