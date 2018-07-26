import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import axios from 'axios';
import './App.css';

class App extends Component {

  logout() {
    axios.post('/api/auth/logout').then().catch(error => console.log('error',error))
  }

  render() {
    return (
      <div className='app'>
        Nutrition Made Easy
        <Nav/>
        {routes}
        <button onClick={()=>this.logout()}> Logout</button>
      </div>
    );
  }
}

export default App;
