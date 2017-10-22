import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Home from './components/home'

export default class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}
