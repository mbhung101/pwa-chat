import React, { Component } from 'react'
import Nav from './nav'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'


export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      chatrooms: []
    }
    this.render = this.render.bind(this)
  }

  componentWillMount(){
    var id = this.state.user
    ChatRoomAdapter.gatherChatRooms(id)
    .then(chatrooms => {
      var names = []
      for (var i in chatrooms){
        names.push(chatrooms[i].name)
      }
      this.setState({
        chatrooms: names
      })
    })
  }

  render (){
    return (
      <div className="ui container">
        <Nav/>
        {this.state.user}
        {this.state.chatrooms}
      </div>
    )
  }
}
