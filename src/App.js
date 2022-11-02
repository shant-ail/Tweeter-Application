// import logo from './logo.svg';
import './App.css';
import TweetContainer from './TweetContainer';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className='main'>
        <TweetContainer status = "Test Status 1"/>
        <TweetContainer status = "Test Status 2"/>
        <TweetContainer status = "Test Status 3"/>
      </div>
    );
  }
}

export default App;
