import React, { Component } from  'react'
import MessageAdapter from '../adapters/messageAdapter'
import UserAdapter from '../adapters/userAdapter'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'
import Nav from './nav'

export default class Room extends Component {

  constructor(props){
    super(props)
    this.state = {
      messages:[],
      conversant: "",
      socket: window.io("http://localhost:3001")
    }
    this.newMessage = this.newMessage.bind(this)
    this.messageFormatter = this.messageFormatter.bind(this)
  }

  componentDidMount(){
    MessageAdapter.enterRoom(localStorage.room_name)
    .then(messages => {
      this.setState({
        messages: messages
      })
    })

    ChatRoomAdapter.findUser(localStorage.room_name)
      .then(users => {
        var conversant = (users[0].name === localStorage.name ? users[1].name:users[0].name)
          this.setState({
            conversant : conversant
          })
        })

    var self = this
    self.state.socket.on("receive-message",function(msg){
      self.setState({
        messages:msg
      })
    })
  }

  newMessage(event){
    event.preventDefault()
    var nms = document.getElementById('message').value
    var uid = parseInt(localStorage.user_id)
    MessageAdapter.newMessage(uid,localStorage.room_name,nms)
    .then(messages => {
    this.state.socket.emit("new-message", messages)
    })
  }

  messageFormatter(arr){
    var history = []
    var conversant = this.state.conversant
    arr.map(function(msg){
      if(msg.user_id === parseInt(localStorage.user_id)){
        history.push(
          <div style={{padding:10}}>
          {localStorage.name} says:
          <br></br>
          {msg.message}
          <br></br>
          </div>)
      } else{
        history.push(
          <div style={{padding:10}}>
          {conversant} says:
          <br></br>
          {msg.message}
          <br></br>
          </div>)
      }
    })
    return history
  }

  render(){
    if (this.state.conversant.length>0 && this.state.messages.length>0){
    return(
      <div>
      <Nav/>
        <div className="ui text container">
          <h2>{localStorage.room_name}</h2>
          {this.messageFormatter(this.state.messages)}
          <div className="ui focus input">
            <input type="text" placeholder="Search..." id="message"/>
          </div>
          <button className="ui button" onClick={this.newMessage}> Submit </button>
        </div>
      </div>
    )} else{
      return null
    }
  }
}
