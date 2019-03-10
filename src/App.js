import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
    	<HashRouter>
	      <div className="App">
	       <Navbar/>
	       <Route exact path="/" component={Home}></Route>
	       <Route path="/profile" component={Profile}></Route>
	      </div>
      </HashRouter>
    );
  }
}

export default App;
