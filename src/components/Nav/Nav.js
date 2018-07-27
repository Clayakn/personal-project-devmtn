import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/iconic/menu';
import { connect } from 'react-redux';
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
                <li><NavLink to='/' className="navMenuOption">Home</NavLink></li>
                <br/>
                <li><NavLink to={this.props.username == false ? '/authentication' : '/mealplan'} className="navMenuOption">Meal Plan</NavLink></li>
              </ul>
        </div>
      );
    }
}
const mapStateToProps = state => {
  const { username } = state
  return {
    username
  }
}

export default connect(mapStateToProps)(Nav);