import React, { Component } from  'react'
import Nav from './nav'

export default class Login extends Component {
  
  render(){
    return(
      <div>
        <Nav/>
        <div className="ui container">
          <div style={{padding:25}}>
          <h2> Clinician Sign In </h2>
            <form onSubmit={this.props.login} className="ui form">
              <div style={{height:35,width:200}} className="field">
                  <label>First Name</label>
                  <input placeholder="First Name" />
                </div>
                <br></br>
                <div style={{height:35,width:200}} className="field">
                  <label>Last Name</label>
                  <input placeholder="Last Name" />
                </div>
                <br></br>
                <div style={{height:35,width:200}} className="field">
                  <label>Password</label>
                  <input placeholder="Password" />
                </div>
                <br></br>
              <button type="submit" className="ui button" role="button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
