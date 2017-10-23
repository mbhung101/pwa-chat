import React, { Component } from  'react'
import Nav from './nav'

export default class NewRoom extends Component {

  render(){
    return(
      <div>
        <Nav/>
        <div className="ui container">
          <div style={{padding:25}}>
          <h2> Start New Chat </h2>
            <form onSubmit={this.props.newPat} className="ui form">
              <div style={{height:35,width:200}} className="field">
                  <label>Patient Name</label>
                  <input placeholder="Firstname Lastname" />
                </div>
                <br></br>
                <div style={{height:35,width:200}} className="field">
                    <label>DOB</label>
                    <input placeholder="mm/dd/yyyy" />
                  </div>
                  <br></br>
                  <div style={{height:35,width:200}} className="field">
                      <label>Phone Number</label>
                      <input placeholder="1 + Country Code, no spaces" />
                    </div>
                    <br></br>
                  <div style={{height:35,width:200}} className="field">
                      <label>Chatroom Name</label>
                      <input placeholder="Chatroom Name" />
                    </div>
                    <br></br>
                    <div style={{height:35,width:200}} className="field">
                        <label>First Message</label>
                        <input placeholder="First Message" />
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
