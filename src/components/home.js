import React, { Component } from 'react'
import Nav from './nav'
import ChatRoomAdapter from '../adapters/chatRoomAdapter'


export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: localStorage.user_id,
      chatrooms: []
    }
    this.render = this.render.bind(this)
    this.tableRows = this.tableRows.bind(this)
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

  tableRows(){
    return this.state.chatrooms.map((chatroom)=>
    <tr className="">
      <td className="">{chatroom}</td>
    </tr>
    )
  }



//   alertDisplay (){
//   var newAlerts = this.changeAlerts(this.state.alerts)
//   return this.state.alerts.map((alert)=>
//     <div key={alert.id}   className="row">
//       <div className = "col s10"><h5> <div id={alert.priority}> {alert.date+ " " + alert.message} </div> </h5></div>
//     <div style={{paddingTop:25}}>
//       <Button id={alert.id} onClick={this.props.deleteAlert} floating className='red' waves='light' icon='delete' />
//     </div>
//     <br></br>
//     </div>
//   )
// }


  render (){
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
    )
  }
}
