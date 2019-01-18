import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import NavBar from './components/NavBar';

import './App.css';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Items from './components/Items';
import Search from './components/Search';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <NavBar />
        <SideBar />
        <Route path="/"  exact component={Home}/>
        <Route path="/search" component={Search} />
        <Route path="/items" component={Items}/>
        <Route path="/checkout" component={Checkout}/>
      </div>
      </Router>
    );
  }
}

export default App;
