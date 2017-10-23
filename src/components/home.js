import React, { Component } from 'react'
import Nav from './nav'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'
import MessageAdapter from '../adapters/messageAdapter'


export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: localStorage.user_id,
      admin: localStorage.admin,
      chatrooms: []
    }
    this.render = this.render.bind(this)
    this.tableRows = this.tableRows.bind(this)
    this.onJoinChat = this.onJoinChat.bind(this)
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

  onJoinChat(event){
    event.preventDefault()
    var name = event.target.innerText
    localStorage.setItem("room_name",name)
    window.location = ('/room')
  }

  tableRows(){
    return this.state.chatrooms.map((chatroom)=>
    <tr className="">
      <td className=""><a onClick={this.onJoinChat}> {chatroom} </a>
      </td>
    </tr>
    )
  }


  render (){
    if (this.state.admin === false){
    return (
      <div className="ui container">
        <Nav/>
        <table className="ui celled table">
          <thead className="">
            <tr className="">
              <th className="">Chatrooms</th>
            </tr>
            </thead>
          <tbody className="">
            {this.tableRows()}
          </tbody>
        </table>
      </div>
    )} else{
      return(
        <div className="ui container">
          <Nav/>
          <h3> Hello Doctore</h3>
          <table className="ui celled table">
            <thead className="">
              <tr className="">
                <th className="">Chatrooms</th>
              </tr>
              </thead>
            <tbody className="">
              {this.tableRows()}
            </tbody>
          </table>

        </div>
      )
    }
  }
}
