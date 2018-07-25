import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/menu';
import './Nav.css';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            showMenu: false
        }
    }
    render() {
      const { showMenu } = this.state
      return (
        <div className='navContainer'>
          Nav Bar
          <button className="menuButton" onClick={() => this.setState({showMenu: !showMenu})}><Icon icon={menu}/></button>
              <ul className={showMenu ? "navMenuList open" : "navMenuList"}>
                <li><Link to='/' className="navMenuOption">Home</Link></li>
                <br/>
                <li><Link to='/mealplan' className="navMenuOption">Meal Plan</Link></li>
                <br/>
                <li><a  className="navMenuOption" href=''>ABOUT</a></li>
                <br/>
                <li><a  className="navMenuOption" href=''>TEAM</a></li>
                <br/>
              </ul>
        </div>
      );
    }
}

export default Nav;