import React, { Component } from 'react'
import Nav from './nav'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'


export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  componentWillMount(){
    var id = this.state.user
    ChatRoomAdapter.gatherChatRooms(id)
    .then(user => {
      this.setState({
        user:user[0].id
      })
    })
  }

  render (){
    return (
      <div className="ui container">
        <Nav/>

      </div>
    )
  }
}
