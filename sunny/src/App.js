import React from 'react';
import './App.css';
import Contacts from './pages/Contacts';
import Menu from './pages/Menu';
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/menu" component={Menu} />        
        <Route path="/contacts" component={Contacts} />
      </div>
    </Router>
  );
}

export default App;
