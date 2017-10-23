import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Verify from '../components/verify'
import Home from '../components/home'
import UserAdapter from '../adapters/userAdapter'
import MessageAdapter from '../adapters/messageAdapter'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'


export default class HomeContainer extends Component {

  constructor(){
    super()
    this.state = {
      user: 1
    }
    this.onVerifySubmit = this.onVerifySubmit.bind(this)
  }

  onVerifySubmit(event){
    event.preventDefault()
    var name = event.target.children[0].children[1].value + " " + event.target.children[2].children[1].value
    var dob = event.target.children[4].children[1].value
    UserAdapter.verifyUser(name,dob)
    .then(user => {
      this.setState({
        user:user[0].id
      })
    })
  }

  render(){
    if (this.state.user === null){
      return(
        <Verify id={this.onVerifySubmit}/>
      )
    } else{
    return(
      <BrowserRouter>
        <div>
          <Route exact path = '/' render= {() =><Home user={this.state.user}/>}/>
        </div>
      </BrowserRouter>
    )}
  }
}
