import React, { Component } from  'react'
import MessageAdapter from '../adapters/messageAdapter'
import UserAdapter from '../adapters/userAdapter'
import Nav from './nav'

export default class Room extends Component {

  constructor(props){
    super(props)
    this.state = {
      messages:[],
      conversant: ""
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
  }


  newMessage(event){
    event.preventDefault()
    var nms = event.target.children[0].children[2].value
    var uid = parseInt(localStorage.user_id)
    MessageAdapter.newMessage(uid,localStorage.room_name,nms)
    .then(messages => {
      this.setState({
        messages: messages
      })
    })
  }

  messageFormatter(arr){
    var other = 0
    for (var i in arr){
      if (arr[i].user_id !== parseInt(localStorage.user_id)){
        other = arr[i].user_id
      }
    }
      UserAdapter.getUser(other)
      .then(conversant => {
        localStorage.setItem("conversant",conversant[0].name)
        })
    var final = []
    for (var j in arr){
      if (arr[j].user_id === parseInt(localStorage.user_id)){
        final.push(
          <div style={{padding:10}}>
          {localStorage.name} says:
          <br></br>
          {arr[j].message}
          <br></br>
          </div>
        )
      } else{
      final.push(
        <div style={{padding:10}}>
        {localStorage.conversant} says:
        <br></br>
        {arr[j].message}
        <br></br>
        </div>
      )
      }
    }
    return final
  }

  render(){
    if (this.state.messages.length>0){
    return(
      <div>
      <Nav/>
        <div className="ui text container">
          <h2>{localStorage.room_name}</h2>
          {this.messageFormatter(this.state.messages)}
        <form onSubmit={this.newMessage} className="ui form">
        <div className="field">
          <label>Message</label>
          <textarea placeholder="Type yur message here">
          </textarea>
        </div>
        <br></br>
          <button type="submit" className="ui button" role="button">Submit</button>
        </form>
        </div>
      </div>
    )} else{
      return null
    }
  }
}
