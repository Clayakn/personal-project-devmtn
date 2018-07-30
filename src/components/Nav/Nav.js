import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/menu';
import axios from 'axios';
import './Nav.css';

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      profilePicture: '',
      userId: 0,
      showMenu: false
    }
  }

  componentDidMount(){
    axios.get('/api/user-data').then(response => {
      console.log('response',response)
      this.setState({
        username: response.data.username,
        profilePicture: response.data.profilePicture,
        userId: response.data.userId
      })
    })
  }

  login() {
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }

  logout() {
    axios.post('/api/auth/logout').then(response => {
      this.setState({
        username: '',
        profilePicture: '',
        userId: ''
      })
      window.alert('Successfully logged out')
    }).catch(error => console.log('error',error))
  }

  render() {
    const { showMenu, username } = this.state
    return (
      <div className='navContainer'>
        <button className="menuButton" onClick={() => this.setState({showMenu: !showMenu})}><Icon icon={menu}/></button>
          <ul className={showMenu ? "navMenuList open" : "navMenuList"}>
            <li><NavLink to='/' className="navMenuOption">Home</NavLink></li>
            <br/>
            <li><NavLink to={username ? '/mealplan'  : '/authentication'} className="navMenuOption">Meal Plan</NavLink></li>
            <br/>
            <li><NavLink to={username ? '/profile' : '/authentication'} className="navMenuOption">Profile</NavLink></li>
            </ul>
            {username ? <Link to='/'><button onClick={()=>this.logout()}> Logout</button></Link> : <button onClick={() => {this.login()}}>Login</button>}
            <p>{this.state.username ? "Welcome: " + this.state.username : "No user is logged in"}</p>
      </div>
      );
    }
}


export default Nav;