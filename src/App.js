import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from './redux/reducer';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('/api/user-data').then(response => {
      this.props.updateUser(response.data.username,response.data.profilePicture, response.data.userId)
  })
}

  logout() {
    let username = null
    let profilePicture = null
    let userId = 0
    axios.post('/api/auth/logout').then().catch(error => console.log('error',error))
    this.props.updateUser(username, profilePicture, userId)
  }

  render() {
    return (
      <div className='app'>
        Nutrition Made Easy
        <Nav />
        {routes}
        <button onClick={()=>this.logout()}> Logout</button>
      </div>
    );
  }
}

export default withRouter(connect(null,{ updateUser })(App));
