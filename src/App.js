import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import './bootstrap.min.css';
import FetchRandomUser from './FetchRandomUser'

class App extends Component {
  render() {
    return (
<div><h1>Author Quiz</h1>
<FetchRandomUser></FetchRandomUser>
</div>
    );
  }
}

export default App;
