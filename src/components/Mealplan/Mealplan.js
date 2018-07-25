import React, { Component } from 'react';
import './Mealplan.css';


class Mealplan extends Component {

  searchFood(){

  }

  render() {
    return (
      <div className='mealplanContainer'>
        <div className='section'>
        Food Bank
        <input placeholder='Search for food here'/>
        Results
        </div>
        <div className='section'>Meal List</div>
        <div className='section'>
        <h3>Total Count</h3>
        <p>Fat:</p> 
        <p>Carbs:</p>
        <p>Protein:</p>
        <p>Calories:</p> 
        <p>Vitamin A:</p> 
        <p>Vitamin C:</p> 
        <p>Vitamin D:</p> 
        <p>Vitamin E:</p> 
        <p>Vitamin K:</p> 
        <p>Thiamin:</p> 
        <p>Riboflavin:</p> 
        <p>Niacin:</p> 
        <p>Vitamin B6:</p> 
        <p>Biotin:</p> 
        <p>Folate:</p> 
        <p>Vitamin B12:</p> 
        <p>Calcium:</p> 
        <p>Copper:</p> 
        <p>Flouride:</p> 
        <p>Iodine:</p> 
        <p>Iron:</p> 
        <p>Magnesium:</p> 
        <p>Manganese:</p> 
        <p>Phosphorus:</p> 
        <p>Potassium:</p> 
        <p>Sodium:</p> 
        <p>Selenium:</p> 
        <p>Zinc:</p> 
        </div>
      </div>
    );
  }
}

export default Mealplan;