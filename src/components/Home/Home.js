import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Water from '../../images/water-background.png';
import Carbs from '../../images/carbs-background.jpg';


class Home extends Component {

  render() {
    return (
      <div className='home_container'>
      <h1>Welcome to Nutrition Made Easy</h1>
      <p>Purpose of Nutrition Made Easy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3>Below are 6 major groups of nutrients</h3>
      <div>
       <Link to='/water'><img className='home_circle' src={Water} alt='Water cut in circular pattern that routes to glossary-water'/> </Link>
       <Link to='carbs'>;<img className='home_circle' src={Carbs} alt='Sliced bananas to represent carbohydrate icon'/></Link>
      </div>
      <div>
        Row 2
      </div>
      <div>
        Row 3
      </div>
      </div>
    );
  }
}

export default Home;