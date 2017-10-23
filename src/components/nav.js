import React, { Component } from  'react'

export default class Nav extends Component {

  render(){
    return(
      <div className="ui tabular menu">
        <div style={{padding:10}}>
          <a href="/home" className="item">Home</a>
        </div>
        <div style={{padding:10}}>
          <a href="/loging" className="item">Login/Logout</a>
        </div>
      </div>
    )
  }
}
