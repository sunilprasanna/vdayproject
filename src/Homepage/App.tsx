import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const OnClick = () => navigate('puzzle1');
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Happy Valentine's Day!
          Welcome to my little puzzle present.
          In order to get started go ahead and click on that button right below.
        </p>
        <Button variant="contained" onClick={OnClick}>Click me!</Button>
      </header>
    </div>
  );
}

export default App;
