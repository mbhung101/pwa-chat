export default class UserAdapter  {

  static verifyUser(name,dob){
    return fetch("http://localhost:3000/api/users", {
      method: 'POST',
      headers: this.headers(),
      body: JSON.stringify({
        name:name,
        dob:dob,
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