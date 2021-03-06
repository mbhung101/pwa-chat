import React, { Component } from 'react'
import Nav from './nav'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'


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
    if (localStorage.admin){
    return (
      <div className="ui container">
      Salutations Doctore
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
        <a href="/newRoom">Converse with new patient</a>
      </div>
    )} else{
      return(
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
      )
    }
  }
}
