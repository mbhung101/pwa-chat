import React, { Component } from 'react'
import UserAdapter from '../adapters/userAdapter'
import MessageAdapter from '../adapters/messageAdapter'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
    this.render = this.render.bind(this)
  }

  makeUser(event){
    event.preventDefault()
    var user = {
      poop: "poop"
    }
    UserAdapter.createUser()
  }

  makeChatRoom(event){
    event.preventDefault()
    var user = {
      poop: "poop"
    }
    ChatRoomAdapter.createChatRoom()
  }

  makeMessage(event){
    event.preventDefault()
    var user = {
      poop: "poop"
    }
    MessageAdapter.createMessage()
  }

  render (){
    return (
      <div className="App-header" style={{padding:50}}>
        <button onClick={this.makeUser}> Make User </button>
        <button onClick={this.makeChatRoom}> Make Chat Room </button>
        <button onClick={this.makeMessage}> Make Message </button>
      </div>
    )
  }
}
