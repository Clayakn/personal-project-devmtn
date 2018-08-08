import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/menu';
import { home } from 'react-icons-kit/iconic/home';
import axios from 'axios';
import Header from '../Header/Header';

class Nav extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      showMenu: false
    }
  }

  componentDidMount(){
    axios.get('/api/user-data').then(response => {
      this.setState({
        username: response.data.username,
      })
    }).catch(error => {
      console.log('Axios error GET with componentDidMount on Nav.js', error)
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
      })
      window.alert('Successfully logged out')
    }).catch(error => console.log('error',error))
  }

  render() {
    console.log('this.state.username',this.state.username)
    const { showMenu, username } = this.state
    return (
      <div>
        <div className='small'>
          <Header />
          <div className='nav_container'>
            <div className='nav_tablist'>
              <div>
              <Link to='/'><Icon size={20} className="nav_tabButton1" onClick={() => this.setState({showMenu: false})} icon={home}/></Link>
              </div>
              <div>
              <Icon size={17} className="nav_tabButton2" onClick={() => this.setState({showMenu: !showMenu})} icon={menu}/>
              </div>
              <div>
              {username ? <Link to='/'><button onClick={()=>this.logout()}> Logout</button></Link> : <button onClick={() => {this.login()}}>Login</button>}
              </div>
            </div>
              <ul className={showMenu ? "navMenuList open" : "navMenuList"}>
                <li><NavLink to='/glossary' className="navMenuOption" onClick={() => this.setState({showMenu: !showMenu})}>Glossary</NavLink></li>
                <br/>
                <li><NavLink to={username ? '/mealplan'  : '/authentication'} className="navMenuOption" onClick={() => this.setState({showMenu: !showMenu})}>Meal Plan</NavLink></li>
                <br/>
                <li><NavLink to={username ? '/profile' : '/authentication'} className="navMenuOption" onClick={() => this.setState({showMenu: !showMenu})}>Profile</NavLink></li>
                </ul>
                <div>
                <p>{username ? "Welcome: " + username : "No user is logged in"}</p>
            </div>
          </div>
         </div>
         <div className='large'>
          <div className='nav_container'>
          <div className='nav_tablist'>
            <Header />
            <div>
            <Link to='/'><Icon size={25} className="nav_tabButton1" icon={home}/></Link>
            </div>
            <Link to='/glossary' className="navMenuOption">Glossary</Link>
            <Link to={username ? '/mealplan'  : '/authentication'} className="navMenuOption">Meal Plan</Link>
            <Link to={username ? '/profile'  : '/authentication'} className="navMenuOption">Profile</Link>
            <div>
            {username ? <Link to='/'><button onClick={()=>this.logout()}> Logout</button></Link> : <button onClick={() => {this.login()}}>Login</button>}
            </div>
          </div>
              <div>
              <p>{username ? "Welcome: " + username : "No user is logged in"}</p>
              </div>
          </div>
          </div>
      </div>
      );
    }
}


export default Nav;