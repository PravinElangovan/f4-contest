import './App.css';

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      {<Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      }
    </div>
  )
}


export default App;