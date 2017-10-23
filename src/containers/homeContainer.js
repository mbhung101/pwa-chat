import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Verify from '../components/verify'
import Home from '../components/home'
import Login from '../components/login'
import Room from '../components/room'
import UserAdapter from '../adapters/userAdapter'
import MessageAdapter from '../adapters/messageAdapter'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'



export default class HomeContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: null,
      admin: false
    }
    this.onVerifySubmit = this.onVerifySubmit.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  onVerifySubmit(event){
    event.preventDefault()
    var name = event.target.children[0].children[1].value + " " + event.target.children[2].children[1].value
    var dob = event.target.children[4].children[1].value
    UserAdapter.verifyUser(name,dob)
    .then(user => {
      if (!user.error) {
        localStorage.setItem("user_id",user[0].id)
        this.setState({
          user: user[0].id
        })
        window.location = ('/home')
      }
    })
  }

  onLoginSubmit(event){
    event.preventDefault()
    var name = event.target.children[0].children[1].value + " " + event.target.children[2].children[1].value
    var password = event.target.children[4].children[1].value
    UserAdapter.currentUser(name,password)
    .then(user => {
    if (!user.error) {
      localStorage.setItem("user_id",user[0].id)
      localStorage.setItem("admin",true)
      window.location = ('/home')
    }
  })
}

  onLogout(event){
    localStorage.clear()
    window.location = ('/home')
  }

  render(){
    if (localStorage.user_id){
      return(
        <BrowserRouter>
          <div>
            <Route exact path = '/home' render= {() => <Home user={this.state.user} admin={this.state.admin}/>}/>
            <Route exact path = '/login' render= {() => <Login onLogout={this.onLogout} login={this.onLoginSubmit} user={this.state.user}/>}/>
            <Route exact path = '/room' render= {() => <Room/>}/>
          </div>
        </BrowserRouter>
      )
    } else{
    return(
      <Verify id={this.onVerifySubmit}/>
    )}
  }
}
