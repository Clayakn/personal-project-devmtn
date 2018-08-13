import React, { Component } from 'react';
import data from '../../foodData.json';
import axios from 'axios';
import Auth from '../Auth/Auth';
import { connect } from 'react-redux';
import DoughnutChart from '../Charts/DoughnutChart';
import PieChart from '../Charts/PieChart';
import { addNutrients, subtractNutrients, clearNutrients } from '../../redux/reducer';


class Mealplan extends Component {
  constructor(){
    super();
    this.state = {
      mealList: [],
      title: '',
      showFoodBank: false,
      filterFoodBank: ''
    }
    this.getFood = this.getFood.bind(this)
    this.removeFood = this.removeFood.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.saveMealPlan = this.saveMealPlan.bind(this)
  }


  // Method to delete food item from Meal List and Redux 
  removeFood(id) {
    this.props.subtractNutrients(
      this.state.mealList[id].fat, 
      this.state.mealList[id].carbs,
      this.state.mealList[id].protein,
      this.state.mealList[id].calories,
      this.state.mealList[id].vitamina,
      this.state.mealList[id].vitaminc,
      this.state.mealList[id].vitamind,
      this.state.mealList[id].vitamine,
      this.state.mealList[id].vitamink,
      this.state.mealList[id].thiamin,
      this.state.mealList[id].riboflavin,
      this.state.mealList[id].niacin,
      this.state.mealList[id].vitaminb6,
      this.state.mealList[id].biotin,
      this.state.mealList[id].folate,
      this.state.mealList[id].vitaminb12,
      this.state.mealList[id].calcium,
      this.state.mealList[id].copper,
      this.state.mealList[id].fluoride,
      this.state.mealList[id].iodine,
      this.state.mealList[id].iron, 
      this.state.mealList[id].magnesium, 
      this.state.mealList[id].manganese, 
      this.state.mealList[id].phosphorus, 
      this.state.mealList[id].potassium, 
      this.state.mealList[id].selenium, 
      this.state.mealList[id].sodium, 
      this.state.mealList[id].zinc
    )
    const copyMealList = this.state.mealList
    copyMealList.splice(id,1)
    this.setState({
      mealList: copyMealList
    })
    if (this.state.mealList.length === 0) {
      this.props.clearNutrients()
    }
  }

 getFood(id) {
  axios.get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${id}&type=f&format=json&api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
    const nutrients = response.data.report.food.nutrients
    const fat = nutrients.filter(nutrient => nutrient.name === "Total lipid (fat)")[0].value
    const carbs = nutrients.filter(nutrient => nutrient.name === "Carbohydrate, by difference")[0].value
    const protein = nutrients.filter(nutrient => nutrient.name === "Protein")[0].value
    const calories = nutrients.filter(nutrient => nutrient.name === "Energy")[0].value
    const vitamina = nutrients.filter(nutrient => nutrient.name === "Vitamin A, RAE")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin A, RAE")[0].value : 0
    const vitaminc = nutrients.filter(nutrient => nutrient.name === "Vitamin C, total ascorbic acid")[0]
    ? nutrients.filter(nutrient => nutrient.name === "Vitamin C, total ascorbic acid")[0].value : 0
    const vitamind = nutrients.filter(nutrient => nutrient.name === "Vitamin D")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin D")[0].value : 0
    const vitamine = nutrients.filter(nutrient => nutrient.name === "Vitamin E (alpha-tocopherol)")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin E (alpha-tocopherol)")[0].value : 0
    const vitamink = nutrients.filter(nutrient => nutrient.name === "Vitamin K (phylloquinone)")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin K (phylloquinone)")[0].value : 0
    const thiamin = nutrients.filter(nutrient => nutrient.name === "Thiamin")[0] ? nutrients.filter(nutrient => nutrient.name === "Thiamin")[0].value : 0
    const riboflavin = nutrients.filter(nutrient => nutrient.name === "Riboflavin")[0] ? nutrients.filter(nutrient => nutrient.name === "Riboflavin")[0].value : 0
    const niacin = nutrients.filter(nutrient => nutrient.name === "Niacin")[0] ? nutrients.filter(nutrient => nutrient.name === "Niacin")[0].value : 0
    const vitaminb6 = nutrients.filter(nutrient => nutrient.name === "Vitamin B-6")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin B-6")[0].value : 0
    const biotin = nutrients.filter(nutrient => nutrient.name === "Biotin")[0] ? nutrients.filter(nutrient => nutrient.name === "Biotin")[0].value : 0
    const folate = nutrients.filter(nutrient => nutrient.name === "Folate, total")[0] ? nutrients.filter(nutrient => nutrient.name === "Folate, total")[0].value : 0
    const vitaminb12 = nutrients.filter(nutrient => nutrient.name === "Vitamin B-12")[0] ? nutrients.filter(nutrient => nutrient.name === "Vitamin B-12")[0].value : 0
    const calcium = nutrients.filter(nutrient => nutrient.name === "Calcium, Ca")[0] ? nutrients.filter(nutrient => nutrient.name === "Calcium, Ca")[0].value : 0
    const copper = nutrients.filter(nutrient => nutrient.name === "Copper, Cu")[0] ? nutrients.filter(nutrient => nutrient.name === "Copper, Cu")[0].value : 0
    const fluoride = nutrients.filter(nutrient => nutrient.name === "Fluoride, F")[0] ? nutrients.filter(nutrient => nutrient.name === "Fluoride, F")[0].value : 0
    const iodine = nutrients.filter(nutrient => nutrient.name === "Iodine, I")[0] ? nutrients.filter(nutrient => nutrient.name === "Iodine, I")[0].value : 0
    const iron = nutrients.filter(nutrient => nutrient.name === "Iron, Fe")[0] ? nutrients.filter(nutrient => nutrient.name === "Iron, Fe")[0].value : 0
    const magnesium = nutrients.filter(nutrient => nutrient.name === "Magnesium, Mg")[0] ? nutrients.filter(nutrient => nutrient.name === "Magnesium, Mg")[0].value : 0
    const manganese = nutrients.filter(nutrient => nutrient.name === "Manganese, Mn")[0] ? nutrients.filter(nutrient => nutrient.name === "Manganese, Mn")[0].value : 0
    const phosphorus = nutrients.filter(nutrient => nutrient.name === "Phosphorus, P")[0] ? nutrients.filter(nutrient => nutrient.name === "Phosphorus, P")[0].value : 0
    const potassium = nutrients.filter(nutrient => nutrient.name === "Potassium, K")[0] ? nutrients.filter(nutrient => nutrient.name === "Potassium, K")[0].value : 0
    const selenium = nutrients.filter(nutrient => nutrient.name === "Selenium, Se")[0] ? nutrients.filter(nutrient => nutrient.name === "Selenium, Se")[0].value : 0
    const sodium = nutrients.filter(nutrient => nutrient.name === "Sodium, Na")[0] ? nutrients.filter(nutrient => nutrient.name === "Sodium, Na")[0].value : 0
    const zinc = nutrients.filter(nutrient => nutrient.name === "Zinc, Zn")[0] ? nutrients.filter(nutrient => nutrient.name === "Zinc, Zn")[0].value : 0
  
  this.state.mealList.push({
    name: response.data.report.food.name,
    fat, 
    carbs, 
    protein, 
    calories,
    vitamina,
    vitaminc,
    vitamind,
    vitamine,
    vitamink,
    thiamin,
    riboflavin,
    niacin,
    vitaminb6,
    biotin,
    folate,
    vitaminb12,
    calcium,
    copper,
    fluoride,
    iodine,
    iron, 
    magnesium, 
    manganese, 
    phosphorus, 
    potassium, 
    selenium, 
    sodium, 
    zinc
    })
  this.props.addNutrients(
    fat, 
    carbs,
    protein,
    calories,
    vitamina,
    vitaminc,
    vitamind,
    vitamine,
    vitamink,
    thiamin,
    riboflavin,
    niacin,
    vitaminb6,
    biotin,
    folate,
    vitaminb12,
    calcium,
    copper,
    fluoride,
    iodine,
    iron, 
    magnesium, 
    manganese, 
    phosphorus, 
    potassium, 
    selenium, 
    sodium, 
    zinc
  )
  this.forceUpdate();
  }).catch(error => {
    console.log('---- Axios error with getFood', error)
    })
 }

 // function to use for all handle changes
 handleInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
 }

 // Axios post to save Meal List + Meal Plan into DB
saveMealPlan() {
  const { title, mealList } = this.state
  const {totalFat, totalCarbs, totalProtein, totalCalories, totalVitaminA, totalVitaminC, totalVitaminD, totalVitaminE, totalVitaminK, totalThiamin, totalRiboflavin, totalNiacin, totalVitaminB6, totalBiotin, totalFolate, totalVitaminB12, totalCalcium, totalCopper, totalFluoride, totalIodine, totalIron, totalMagnesium, totalManganese, totalPhosphorus, totalPotassium, totalSelenium, totalSodium, totalZinc} = this.props
  axios.post('/api/mealplan', {
    totalFat,
    totalCarbs,
    totalProtein,
    totalCalories,
    totalVitaminA,
    totalVitaminC,
    totalVitaminD,
    totalVitaminE,
    totalVitaminK, 
    totalThiamin, 
    totalRiboflavin,
    totalNiacin,
    totalVitaminB6, 
    totalBiotin,
    totalFolate,
    totalVitaminB12, 
    totalCalcium, 
    totalCopper, 
    totalFluoride,
    totalIodine, 
    totalIron,
    totalMagnesium,
    totalManganese, 
    totalPhosphorus,
    totalPotassium,
    totalSelenium,
    totalSodium, 
    totalZinc, 
    title,
    mealList})
    .then( response => {
      this.setState({title: '', mealList: [], filterFoodBank: ''})
      this.props.clearNutrients();
      window.alert('Meal Plan successfully created, Check your profile to see your created meal plans')
    })
    .catch(error => console.log('Axios error POST on saveMealPlan', error))
}
   

  render() {
    console.log('this.state.mealList',this.state.mealList)
    console.log('this.props.totalSodium', this.props.totalSodium)
    const displayFoodList = this.state.showFoodBank == true ? data.filter((e,i) => {
      return e.name.toLowerCase().startsWith(this.state.filterFoodBank.toLowerCase());
    }).map((food, i) => {
      const foodId = food.ndbno
      return (
      <div key={i} >
        <br/>
        <li>{food.name}</li>
        <button onClick={() => this.getFood(foodId)}>Add</button>
      </div>
      ) 
    }) : ''

    const displayMealList = this.state.mealList ?
     this.state.mealList.map((food, i) => {
      return (
        <div key={i}>
        <br/>
          <div className='mealplan_mealList_container'>
            <div>
              <p>{food.name}</p>
              <p>Fat: {food.fat}g</p>
              <p>Carbs: {food.carbs}g</p>
              <p>Protein: {food.protein}g</p>
              <p>Calories: {food.calories}kcal</p>
            </div>
            <DoughnutChart fats={food.fat} carbs={food.carbs} protein={food.protein}/>
          </div>
        <button onClick={() => this.removeFood(i)}>Delete</button>
        </div>
      )
    }) : ''
    
    return (
      <div>
      {this.props.user
      ?
      <div>
      <div className='small'>
      <div className='mealplan_container'>
      <h1>Meal Plan</h1>
        <div className='mealplan_section'>
        <br/>
        <div className='mealplan_directions'>
        <h3>Follow these steps to Create a Meal Plan</h3>
          <br/>
            <li>Use the Get all Foods Button to display the list of Foods</li>
            <br/>
            <li> Select a number of meals to add to your meal list and check out the total stats</li>
            <br/>
            <li> Enter a title and Save the Meal Plan</li>
        </div>
        <br/>
        <h3>Food Bank</h3>
        <button onClick={() => this.setState({showFoodBank: true})}>Get Food List</button>
        <br />
        <h3>Food List</h3>
        <div className='mealplan_section_foodList'>
        {displayFoodList}
        </div>
        <br/>
        <input name="filterFoodBank" value={this.state.filterFoodBank} onChange={(e) => this.handleInput(e)} placeholder='Search for food here'/>
        </div>
        <div className='mealplan_section'>
        <h3>Meal List(per 100g)</h3>
       {displayMealList}
        </div>
        <div className='mealplan_section'>
        <PieChart titleFont={15}/>
        <br/>
        <h3>Cumulative Stats:</h3>
        <p>Fat: {+this.props.totalFat.toFixed(2)}g</p> 
        <p>Carbs: {+this.props.totalCarbs.toFixed(2)}g</p>
        <p>Protein: {+this.props.totalProtein.toFixed(2)}g</p>
        <p>Calories: {+this.props.totalCalories.toFixed(2)}kcal</p> 
        <h3>Micronutrient Stats:</h3>
        <p>Vitamin A: {+this.props.totalVitaminA.toFixed(2)}µg</p> 
        <p>Vitamin C: {+this.props.totalVitaminC.toFixed(2)}mg</p> 
        <p>Vitamin D: {+this.props.totalVitaminD.toFixed(2)}IU</p> 
        <p>Vitamin E: {+this.props.totalVitaminE.toFixed(2)}mg</p> 
        <p>Vitamin K: {+this.props.totalVitaminK.toFixed(2)}µg</p> 
        <p>Thiamin: {+this.props.totalThiamin.toFixed(2)}mg</p> 
        <p>Riboflavin: {+this.props.totalRiboflavin.toFixed(2)}mg</p> 
        <p>Niacin: {+this.props.totalNiacin.toFixed(2)}mg</p> 
        <p>Vitamin B6: {+this.props.totalVitaminB6.toFixed(2)}mg</p> 
        <p>Biotin: {+this.props.totalBiotin.toFixed(2)}IU</p> 
        <p>Folate: {+this.props.totalFolate.toFixed(2)}µg</p> 
        <p>Vitamin B12: {+this.props.totalVitaminB12.toFixed(2)}µg</p> 
        <p>Calcium: {+this.props.totalCalcium.toFixed(2)}mg</p> 
        <p>Copper: {+this.props.totalCopper.toFixed(2)}mg</p> 
        <p>Fluoride: {+this.props.totalFluoride.toFixed(2)}µg</p> 
        <p>Iodine: {+this.props.totalIodine.toFixed(2)}IU</p> 
        <p>Iron: {+this.props.totalIron.toFixed(2)}mg</p> 
        <p>Magnesium: {+this.props.totalMagnesium.toFixed(2)}mg</p> 
        <p>Manganese: {+this.props.totalManganese.toFixed(2)}mg</p> 
        <p>Phosphorus: {+this.props.totalPhosphorus.toFixed(2)}mg</p> 
        <p>Potassium: {+this.props.totalPotassium.toFixed(2)}mg</p> 
        <p>Selenium: {+this.props.totalSelenium.toFixed(2)}µg</p> 
        <p>Sodium: {+this.props.totalSodium.toFixed(2)}mg</p> 
        <p>Zinc: {+this.props.totalZinc.toFixed(2)}mg</p> 
        </div>
        <div className='mealplan_section'>
          <h3>Title: {this.state.title}</h3>
          <input name="title" value={this.state.title} onChange={e=>this.handleInput(e)} placeholder="Insert title here"/>
          <button onClick={() => this.state.title ? this.saveMealPlan() : window.alert("Please insert a title")}>Save Meal Plan</button>
        </div>
        </div>
      </div>
       <div className='large'>
       <div className='mealplan_container'>
       <h1>Meal Plan</h1>
       <br/>
       <div className='mealplan_row'>
         <div className='mealplan_section'>
         <br/>
         <div className='mealplan_directions'>
         <h3>Follow these steps to Create a Meal Plan</h3>
           <br/>
             <li>Use the Get all Foods Button to display the list of Foods</li>
             <br/>
             <li> Select a number of meals to add to your meal list and check out the total stats</li>
             <br/>
             <li> Enter a title and Save the Meal Plan</li>
         </div>
         <br/>
         <h3>Food Bank</h3>
         <button onClick={() => this.setState({showFoodBank: true})}>Get Food List</button>
         <br />
         <h3>Food List</h3>
         <div className='mealplan_section_foodList'>
         {displayFoodList}
         </div>
         <br/>
         <input name="filterFoodBank" value={this.state.filterFoodBank} onChange={(e) => this.handleInput(e)} placeholder='Search for food here'/>
         </div>
         <div className='mealplan_section'>
         <h3>Meal List(per 100g)</h3>
        {displayMealList}
         </div>
         <div className='mealplan_section'>
         <PieChart titleFont={20}/>
         <br/>
         <h3>Cumulative Stats:</h3>
         <p>Fat: {+this.props.totalFat.toFixed(2)}g</p> 
         <p>Carbs: {+this.props.totalCarbs.toFixed(2)}g</p>
         <p>Protein: {+this.props.totalProtein.toFixed(2)}g</p>
         <p>Calories: {+this.props.totalCalories.toFixed(2)}kcal</p> 
         <h3>Micronutrient Stats:</h3>
         <p>Vitamin A: {+this.props.totalVitaminA.toFixed(2)}µg</p> 
         <p>Vitamin C: {+this.props.totalVitaminC.toFixed(2)}mg</p> 
         <p>Vitamin D: {+this.props.totalVitaminD.toFixed(2)}IU</p> 
         <p>Vitamin E: {+this.props.totalVitaminE.toFixed(2)}mg</p> 
         <p>Vitamin K: {+this.props.totalVitaminK.toFixed(2)}µg</p> 
         <p>Thiamin: {+this.props.totalThiamin.toFixed(2)}mg</p> 
         <p>Riboflavin: {+this.props.totalRiboflavin.toFixed(2)}mg</p> 
         <p>Niacin: {+this.props.totalNiacin.toFixed(2)}mg</p> 
         <p>Vitamin B6: {+this.props.totalVitaminB6.toFixed(2)}mg</p> 
         <p>Biotin: {+this.props.totalBiotin.toFixed(2)}IU</p> 
         <p>Folate: {+this.props.totalFolate.toFixed(2)}µg</p> 
         <p>Vitamin B12: {+this.props.totalVitaminB12.toFixed(2)}µg</p> 
         <p>Calcium: {+this.props.totalCalcium.toFixed(2)}mg</p> 
         <p>Copper: {+this.props.totalCopper.toFixed(2)}mg</p> 
         <p>Fluoride: {+this.props.totalFluoride.toFixed(2)}µg</p> 
         <p>Iodine: {+this.props.totalIodine.toFixed(2)}IU</p> 
         <p>Iron: {+this.props.totalIron.toFixed(2)}mg</p> 
         <p>Magnesium: {+this.props.totalMagnesium.toFixed(2)}mg</p> 
         <p>Manganese: {+this.props.totalManganese.toFixed(2)}mg</p> 
         <p>Phosphorus: {+this.props.totalPhosphorus.toFixed(2)}mg</p> 
         <p>Potassium: {+this.props.totalPotassium.toFixed(2)}mg</p> 
         <p>Selenium: {+this.props.totalSelenium.toFixed(2)}µg</p> 
         <p>Sodium: {+this.props.totalSodium.toFixed(2)}mg</p> 
         <p>Zinc: {+this.props.totalZinc.toFixed(2)}mg</p> 
         </div>
         </div>
         <div className='mealplan_section'>
           <h3>Title: {this.state.title}</h3>
           <input name="title" value={this.state.title} onChange={e=>this.handleInput(e)} placeholder="Insert title here"/>
           <button onClick={() => this.state.title ? this.saveMealPlan() : window.alert("Please insert a title")}>Save Meal Plan</button>
         </div>
         </div>
       </div>
       </div>
      : 
      <Auth />
      }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user, totalFat, totalCarbs, totalProtein, totalCalories, totalVitaminA, totalVitaminC, totalVitaminD, totalVitaminE, totalVitaminK, totalThiamin, totalRiboflavin, totalNiacin, totalVitaminB6, totalBiotin, totalFolate, totalVitaminB12, totalCalcium, totalCopper, totalFluoride, totalIodine, totalIron, totalMagnesium, totalManganese, totalPhosphorus, totalPotassium, totalSelenium, totalSodium, totalZinc} = state
 return {
  user, 
  totalFat, 
  totalCarbs, 
  totalProtein, 
  totalCalories, 
  totalVitaminA,
  totalVitaminC, 
  totalVitaminD, 
  totalVitaminE, 
  totalVitaminK, 
  totalThiamin, 
  totalRiboflavin, 
  totalNiacin, 
  totalVitaminB6, 
  totalBiotin, 
  totalFolate, 
  totalVitaminB12, 
  totalCalcium, 
  totalCopper, 
  totalFluoride, 
  totalIodine, 
  totalIron, 
  totalMagnesium, 
  totalManganese, 
  totalPhosphorus, 
  totalPotassium, 
  totalSelenium, 
  totalSodium, 
  totalZinc
  } 
}

export default connect(mapStateToProps, {addNutrients, subtractNutrients, clearNutrients})(Mealplan);