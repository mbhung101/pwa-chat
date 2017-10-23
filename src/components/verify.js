import React, { Component } from  'react'

export default class Verify extends Component {

  render(props) {
    return(
      <div className="ui container">
        <div style={{padding:25}}>
        <h2> Verify Your Identity </h2>
          <form onSubmit={this.props.id} className="ui form">
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
                <label>Date of Birth</label>
                <input placeholder="mm/dd/yyyy" />
              </div>
              <br></br>
            <button type="submit" className="ui button" role="button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
