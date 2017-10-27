import React, { Component } from  'react'
import Nav from './nav'

export default class Login extends Component {

  render(){
    if(localStorage.user_id && localStorage.user_id !== 'p' ){
      return(
        <div className="ui container" style={{padding:60}}>
        <Nav/>
        <button style={{width:250,height:100}}className="ui red button" onClick={this.props.onLogout}>Logout</button>
        </div>
      )
    }
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
