import React, { Component } from 'react'
import UserAdapter from '../adapters/userAdapter'
import MessageAdapter from '../adapters/messageAdapter'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      chatroom: "",
      user: ""
    }
    this.render = this.render.bind(this)
    this.newMessage = this.newMessage.bind(this)
    this.makeChatRoom = this.makeChatRoom.bind(this)
    this.makeUser = this.makeUser.bind(this)
  }

  makeUser(event){
    event.preventDefault()
    UserAdapter.createUser()
    .then(user => {
      this.setState({
        user:user.name
      })
  })
  }

  makeChatRoom(event){
    event.preventDefault()
    ChatRoomAdapter.createChatRoom()
      .then(chatroom => {
        debugger
        this.setState({
          chatroom:chatroom.name
        })
    })
  }

  makeMessage(event){
    event.preventDefault()
    MessageAdapter.createMessage()
  }

  newMessage(event){
    event.preventDefault()
    var msg = this.state.message + 'a'
    this.setState({
      message: msg
    })
  }

  render (){
    return (
      <div className="App-header" style={{padding:50}}>
        {this.state.user}<br></br><br></br>
        <button onClick={this.makeUser}> Make User </button>
        <button onClick={this.makeChatRoom}> Make Chat Room </button>
        <button onClick={this.makeMessage}> Make Message </button>
        <button onClick={this.newMessage}> New Message </button>
      </div>
    )
  }
}
