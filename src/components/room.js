import React, { Component } from  'react'
import Nav from './nav'

export default class Room extends Component {

  render(){
    return(
      <div>
      <Nav/>
        <div className="ui text container">
          <h2>{localStorage.room_name}</h2>
        </div>
      </div>
    )
  }
}
