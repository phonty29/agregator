import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route name={"Main"} key={"main"} path="/" element={<Main/>} exact={true}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
