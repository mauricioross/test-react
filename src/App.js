import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
class App extends React.Component  {
  constructor(){
    super();
    
  }
  render(){
  return (
    
    <div className="App">
    <Navbar />
    <Main/>
    </div>
  );
}
}

export default App;
