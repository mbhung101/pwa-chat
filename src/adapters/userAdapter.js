export default class UserAdapter  {

  static verifyUser(name,dob){
    return fetch("https://git.heroku.com/glacial-thicket-44922.git/users", {
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
    return fetch("https://git.heroku.com/glacial-thicket-44922.git/users", {
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
    return fetch("https://git.heroku.com/glacial-thicket-44922.git/users", {
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
