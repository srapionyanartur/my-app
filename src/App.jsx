import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route } from 'react-router-dom';



const App = (props) => {
  
  return (   
    
    <div className = 'app-wrapper'>  
      <Header/>
      <Navbar/>
      <div className = 'app-wrapper-content'>
      <Routes>
        <Route path = "/dialogs" element={ <Dialogs store = {props.store} />} />
        <Route path = "/profile" element={<Profile store = {props.store} />} />
      </Routes>
      </div>
    </div>
    
  );
}

export default App;





