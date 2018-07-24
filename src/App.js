import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        Nutrition Made Easy
        <Link to='/'>Home</Link>
        <Link to='/mealplan'>Meal Plan</Link>
        {routes}
      </div>
    );
  }
}

export default App;
