import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import Nasaphoto from "./components/Nasaphoto";
import './App.css';

function App() {
  return(

  <div className="app">
    <Routes>
  <Route path="/"  element={ <Home/> }/>
  <Route path="/Nasaphoto" element={ <Nasaphoto/> } />
  </Routes>
  </div>


  );
}

export default App;
