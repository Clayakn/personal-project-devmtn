import React, { Component } from 'react';
import './Mealplan.css';
import data from '../../foodData.json';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateNutrients } from '../../redux/reducer';


class Mealplan extends Component {
  constructor(){
    super();
    this.state = {
      mealList: []
    }
    this.getFood = this.getFood.bind(this)
  }

 getFood(id) {
  axios.get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${id}&type=b&format=json&api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
    console.log('response', response)
  this.state.mealList.push({Name: response.data.report.food.name ,Fat: response.data.report.food.nutrients[3].value})
  console.log(this.state.mealList)
  this.props.updateNutrients(
    response.data.report.food.nutrients[3].value
  )
  this.forceUpdate();
  }).catch(error => {
    console.log('---- Axios error with getFood', error)
    })
 }
   

  render() {
    const displayFoodList = data.map((food, i) => {
      const foodId = food.ndbno
      return (
      <div key={i} >
        <li>{food.name}</li>
        <button onClick={() => this.getFood(foodId)}>Add to Meal List</button>
      </div>
      ) 
    })
    const displayMealList = this.state.mealList ? this.state.mealList.map((food, i) => {
      console.log('food',food)
      return (
        <div key={i}>
        <p>{food.Name}</p>
        <p>Fat: {food.Fat}</p>
        </div>
      )
    }) : ''
    
    return (
      <div className='mealplanContainer'>
        <div className='section'>
        Food Bank
        <button>Get Food List</button>
        <input placeholder='Search for food here'/>
        <button>Filter Food List</button>
        Results
        <div style={{ height: "420px", width: "200px", overflow: "auto" }}>
        {displayFoodList}
        </div>
        </div>
        <div className='section mealList'>Meal List
       {displayMealList}
        </div>
        <div className='section'>
        <h3>Total Count</h3>
        <p>Fat: {+this.props.Fat}g</p> 
        <p>Carbs: {+this.props.Carbs}g</p>
        <p>Protein: {+this.props.Protein}g</p>
        <p>Calories: {+this.props.Calories}kcal</p> 
        <p>Vitamin A: {+this.props.VitaminA}µg</p> 
        <p>Vitamin C: {+this.props.VitaminC}mg</p> 
        <p>Vitamin D: {+this.props.VitaminD}IU</p> 
        <p>Vitamin E: {+this.props.VitaminE}mg</p> 
        <p>Vitamin K: {+this.props.VitaminK}µg</p> 
        <p>Thiamin: {+this.props.Thiamin}mg</p> 
        <p>Riboflavin: {+this.props.Riboflavin}mg</p> 
        <p>Niacin: {+this.props.Niacin}mg</p> 
        <p>Vitamin B6: {+this.props.VitaminB6}mg</p> 
        <p>Biotin: {+this.props.Biotin}IU</p> 
        <p>Folate: {+this.props.Folate}µg</p> 
        <p>Vitamin B12: {+this.props.VitaminB12}µg</p> 
        <p>Calcium: {+this.props.Calcium}mg</p> 
        <p>Copper: {+this.props.Copper}mg</p> 
        <p>Flouride: {+this.props.Flouride}µg</p> 
        <p>Iodine: {+this.props.Iodine}IU</p> 
        <p>Iron: {+this.props.Iron}mg</p> 
        <p>Magnesium: {+this.props.Magnesium}mg</p> 
        <p>Manganese: {+this.props.Manganese}mg</p> 
        <p>Phosphorus: {+this.props.Phosphorus}mg</p> 
        <p>Potassium: {+this.props.Potassium}mg</p> 
        <p>Sodium: {+this.props.Sodium}mg</p> 
        <p>Selenium: {+this.props.Selenium}µg</p> 
        <p>Zinc: {+this.props.Zinc}mg</p> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Fat, Carbs, Protein, Calories, VitaminA, VitaminC, VitaminD, VitaminE, VitaminK, Thiamin, Riboflavin, Niacin, VitaminB6, Biotin, Folate, VitaminB12, Calcium, Copper, Flouride, Iodine, Iron, Magnesium, Manganese, Phosphorus, Potassium, Sodium, Selenium, Zinc} = state
 return { 
   Fat, 
   Carbs, 
   Protein, 
   Calories, 
   VitaminA,
   VitaminC, 
   VitaminD, 
   VitaminE, 
   VitaminK, 
   Thiamin, 
   Riboflavin, 
   Niacin, 
   VitaminB6, 
   Biotin, 
   Folate, 
   VitaminB12, 
   Calcium, 
   Copper, 
   Flouride, 
   Iodine, 
   Iron, 
   Magnesium, 
   Manganese, 
   Phosphorus, 
   Potassium, 
   Sodium, 
   Selenium, 
   Zinc} 
}

export default connect(mapStateToProps, {updateNutrients})(Mealplan);