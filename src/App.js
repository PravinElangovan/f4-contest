import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Router>
       <Routes>
       <Route path="/" exact component={Login} />
       <Route path="/profile" component={Profile}/></Routes>
      </Router>
    </div>
  );
}

export default App;
