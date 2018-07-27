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
  axios.get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${id}&type=f&format=json&api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
    console.log('response', response)
    const nutrients = response.data.report.food.nutrients
    const Fat = nutrients.filter(nutrient => nutrient.name === "Total lipid (fat)")[0].value
    const Carbs = nutrients.filter(nutrient => nutrient.name === "Carbohydrate, by difference")[0].value
    const Protein = nutrients.filter(nutrient => nutrient.name === "Protein")[0].value
    const Calories = nutrients.filter(nutrient => nutrient.name === "Energy")[0].value
    const VitaminA = nutrients.filter(nutrient => nutrient.name === "Vitamin A, RAE")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin A, RAE")[0].value : 0
    const VitaminC = nutrients.filter(nutrient => nutrient.name === "Vitamin C, total ascorbic acid")[0]
    ? nutrients.filter(nutrient => nutrient.name === "Vitamin C, total ascorbic acid")[0].value : 0
    const VitaminD = nutrients.filter(nutrient => nutrient.name === "Vitamin D")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin D")[0].value : 0
    const VitaminE = nutrients.filter(nutrient => nutrient.name === "Vitamin E (alpha-tocopherol)")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin E (alpha-tocopherol)")[0].value : 0
    const VitaminK = nutrients.filter(nutrient => nutrient.name === "Vitamin K (phylloquinone)")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin K (phylloquinone)")[0].value : 0
    const Thiamin = nutrients.filter(nutrient => nutrient.name === "Thiamin")[0] ? nutrients.filter(nutrient => nutrient.name === "Thiamin")[0].value : 0
    const Riboflavin = nutrients.filter(nutrient => nutrient.name === "Riboflavin")[0] ? nutrients.filter(nutrient => nutrient.name === "Riboflavin")[0].value : 0
    const Niacin = nutrients.filter(nutrient => nutrient.name === "Niacin")[0] ? nutrients.filter(nutrient => nutrient.name === "Niacin")[0].value : 0
    const VitaminB6 = nutrients.filter(nutrient => nutrient.name === "Vitamin B-6")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin B-6")[0].value : 0
    const Biotin = nutrients.filter(nutrient => nutrient.name === "Biotin")[0] ? nutrients.filter(nutrient => nutrient.name === "Biotin")[0].value : 0
    const Folate = nutrients.filter(nutrient => nutrient.name === "Folate, total")[0] ? nutrients.filter(nutrient => nutrient.name === "Folate, total")[0].value : 0
    const VitaminB12 = nutrients.filter(nutrient => nutrient.name === "Vitamin B-12")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin B-12")[0].value : 0
    const Calcium = nutrients.filter(nutrient => nutrient.name === "Calcium, Ca")[0] ? nutrients.filter(nutrient => nutrient.name === "Calcium, Ca")[0].value : 0
    const Copper = nutrients.filter(nutrient => nutrient.name === "Copper, Cu")[0] ? nutrients.filter(nutrient => nutrient.name === "Copper, Cu")[0].value : 0
    const Fluoride = nutrients.filter(nutrient => nutrient.name === "Fluoride, F")[0] ? nutrients.filter(nutrient => nutrient.name === "Fluoride, F")[0].value : 0
    const Iodine = nutrients.filter(nutrient => nutrient.name === "Iodine, I")[0] ? nutrients.filter(nutrient => nutrient.name === "Iodine, I")[0].value : 0
    const Iron = nutrients.filter(nutrient => nutrient.name === "Iron, Fe")[0] ? nutrients.filter(nutrient => nutrient.name === "Iron, Fe")[0].value : 0
    const Magnesium = nutrients.filter(nutrient => nutrient.name === "Magnesium, Mg")[0] ? nutrients.filter(nutrient => nutrient.name === "Magnesium, Mg")[0].value : 0
    const Manganese = nutrients.filter(nutrient => nutrient.name === "Manganese, Mn")[0] ? nutrients.filter(nutrient => nutrient.name === "Manganese, Mn")[0].value : 0
    const Phosphorus = nutrients.filter(nutrient => nutrient.name === "Phosphorus, P")[0] ? nutrients.filter(nutrient => nutrient.name === "Phosphorus, P")[0].value : 0
    const Potassium = nutrients.filter(nutrient => nutrient.name === "Potassium, K")[0] ? nutrients.filter(nutrient => nutrient.name === "Potassium, K")[0].value : 0
    const Sodium = nutrients.filter(nutrient => nutrient.name === "Sodium, Na")[0] ? nutrients.filter(nutrient => nutrient.name === "Sodium, Na")[0].value : 0
    const Selenium = nutrients.filter(nutrient => nutrient.name === "Selenium, Se")[0] ? nutrients.filter(nutrient => nutrient.name === "Selenium, Se")[0].value : 0
    const Zinc = nutrients.filter(nutrient => nutrient.name === "Zinc, Zn")[0] ? nutrients.filter(nutrient => nutrient.name === "Zinc, Zn")[0].value : 0
  
  
  this.state.mealList.push({Name: response.data.report.food.name, Fat, Carbs, Protein, Calories})
  console.log(this.state.mealList)
  this.props.updateNutrients(
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
    Fluoride,
    Iodine,
    Iron, 
    Magnesium, 
    Manganese, 
    Phosphorus, 
    Potassium, 
    Sodium, 
    Selenium, 
    Zinc
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
      return (
        <div key={i}>
        <p>{food.Name}</p>
        <p>Fat: {food.Fat}g</p>
        <p>Carbs: {food.Carbs}g</p>
        <p>Protein: {food.Protein}g</p>
        <p>Calories: {food.Calories}kcal</p>
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
        <div className='section mealList'>
        Meal List(per 100g)
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
        <p>Fluoride: {+this.props.Fluoride}µg</p> 
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
  const { Fat, Carbs, Protein, Calories, VitaminA, VitaminC, VitaminD, VitaminE, VitaminK, Thiamin, Riboflavin, Niacin, VitaminB6, Biotin, Folate, VitaminB12, Calcium, Copper, Fluoride, Iodine, Iron, Magnesium, Manganese, Phosphorus, Potassium, Sodium, Selenium, Zinc} = state
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
   Fluoride, 
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