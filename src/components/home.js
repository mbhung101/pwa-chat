import React, { Component } from 'react'
import Nav from './nav'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  render (){
    return (
      <div className="ui container">
        <Nav/>
        {this.state.user}
      </div>
    )
  }
}
