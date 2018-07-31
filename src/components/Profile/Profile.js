import React, { Component } from 'react';
import axios from 'axios';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
import './Profile.css';
import { connect } from 'react-redux';
import { updateMealplanId } from '../../redux/reducer';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            profilePicture: '',
            titles: '',
            selectedTitleId: '',
            mealPlans: ''
        }
        this.selectTitleIdFunc = this.selectTitleIdFunc.bind(this)
        this.editMealPlan = this.editMealPlan.bind(this)
    }

    // Retrieving user info and collecting all meal plan titles user has created
    componentDidMount() {
        axios.get('/api/user-data-title').then(response => {
            this.setState({
                titles: response.data[0].titles,
                username: response.data[0].username,
                profilePicture: response.data[0].profilePicture
            })
            this.forceUpdate();
        }).catch(error  => console.log('Axios error GET componentDidMount in Profile.js', error))
    }
    
    selectTitleIdFunc(titleId){
        this.setState({
            selectedTitleId: titleId
        })
    }

    fetchMealPlan() {
        axios.get(`/api/mealplan/${this.state.selectedTitleId}`)
        .then(response => {
            this.setState({mealPlans: response.data[0].mealplans})
        })
        .catch(error  => console.log('Axios error GET fetchMealPlan in Profile.js', error))
    }

    editMealPlan() {
        this.props.updateMealplanId(this.state.selectedTitleId)
    }
    
    render() {
     const { username, profilePicture } = this.state
     const displayTitles = this.state.titles.length ? this.state.titles.map((title,i) => {
         return(
             <option key={i} value={title.id}>{title.title}</option>
         )
     }) : ''
     const displayMealList = this.state.mealPlans ? this.state.mealPlans.map((food, i) => {
        return (
          <div key={i}>
          <p>{food.meal_name}</p>
          <p>Fat: {food.fat}g</p>
          <p>Carbs: {food.carbohydrate}g</p>
          <p>Protein: {food.protein}g</p>
          <p>Calories: {food.calories}kcal</p>
          </div>
        )
      }) : ''
      return (
        <div>
            {username.length
                ? 
                <div>
                Profile
                <p>{username}</p>
                <img src={profilePicture} alt="profile from login information"/>
                <p>Pick a meal plan below</p>
                <select onChange={e => this.selectTitleIdFunc(e.target.value)}>
                <option value={0} defaultValue>Select One</option>
                {displayTitles}
                </select>
                <button onClick={() => this.fetchMealPlan()}>Fetch Meal Plan</button>
                <Link to='EditMealplan'><button onClick={() => this.editMealPlan()}>Edit Meal Plan</button></Link>
                <div className='mealplanContainer'>
                <div className='section'>
                Meal List(per 100g)
                {displayMealList}
                </div>
                <div className='section'>
                <h3>Total Count</h3>
                <p>Fat: {this.state.mealPlans ? (+this.state.mealPlans[0].total_fat).toFixed(2) : 0}g</p> 
                <p>Carbs: {this.state.mealPlans ? (+this.state.mealPlans[0].total_carbohydrate).toFixed(2) : 0}g</p>
                <p>Protein: {this.state.mealPlans ? (+this.state.mealPlans[0].total_protein).toFixed(2) : 0}g</p>
                <p>Calories: {this.state.mealPlans ? (+this.state.mealPlans[0].total_calories).toFixed(2) : 0}kcal</p> 
                <p>Vitamin A: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_a).toFixed(2) : 0}µg</p> 
                <p>Vitamin C: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_c).toFixed(2) : 0}mg</p> 
                <p>Vitamin D: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_d).toFixed(2) : 0}IU</p> 
                <p>Vitamin E: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_e).toFixed(2) : 0}mg</p> 
                <p>Vitamin K: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_k).toFixed(2) : 0}µg</p> 
                <p>Thiamin: {this.state.mealPlans ? (+this.state.mealPlans[0].total_thiamin).toFixed(2) : 0}mg</p> 
                <p>Riboflavin: {this.state.mealPlans ? (+this.state.mealPlans[0].total_riboflavin).toFixed(2) : 0}mg</p> 
                <p>Niacin: {this.state.mealPlans ? (+this.state.mealPlans[0].total_niacin).toFixed(2) : 0}mg</p> 
                <p>Vitamin B6: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_b6).toFixed(2) : 0}mg</p> 
                <p>Biotin: {this.state.mealPlans ? (+this.state.mealPlans[0].total_biotin).toFixed(2) : 0}IU</p> 
                <p>Folate: {this.state.mealPlans ? (+this.state.mealPlans[0].total_folate).toFixed(2) : 0}µg</p> 
                <p>Vitamin B12: {this.state.mealPlans ? (+this.state.mealPlans[0].total_vitamin_b12).toFixed(2) : 0}µg</p> 
                <p>Calcium: {this.state.mealPlans ? (+this.state.mealPlans[0].total_calcium).toFixed(2) : 0}mg</p> 
                <p>Copper: {this.state.mealPlans ? (+this.state.mealPlans[0].total_copper).toFixed(2) : 0}mg</p> 
                <p>Fluoride: {this.state.mealPlans ? (+this.state.mealPlans[0].total_fluoride).toFixed(2) : 0}µg</p> 
                <p>Iodine: {this.state.mealPlans ? (+this.state.mealPlans[0].total_iodine).toFixed(2) : 0}IU</p> 
                <p>Iron: {this.state.mealPlans ? (+this.state.mealPlans[0].total_iron).toFixed(2) : 0}mg</p> 
                <p>Magnesium: {this.state.mealPlans ? (+this.state.mealPlans[0].total_magnesium).toFixed(2) : 0}mg</p> 
                 <p>Manganese: {this.state.mealPlans ? (+this.state.mealPlans[0].total_manganese).toFixed(2) : 0}mg</p> 
                <p>Phosphorus: {this.state.mealPlans ? (+this.state.mealPlans[0].total_phosphorus).toFixed(2) : 0}mg</p> 
                <p>Potassium: {this.state.mealPlans ? (+this.state.mealPlans[0].total_potassium).toFixed(2) : 0}mg</p> 
                <p>Sodium: {this.state.mealPlans ? (+this.state.mealPlans[0].total_sodium).toFixed(2) : 0}mg</p> 
                <p>Selenium: {this.state.mealPlans ? (+this.state.mealPlans[0].total_selenium).toFixed(2) : 0}µg</p> 
                <p>Zinc: {this.state.mealPlans ? (+this.state.mealPlans[0].total_zinc).toFixed(2) : 0}mg</p> 
                </div>
                </div>
                </div>
                :
                <Auth/>
            }
        </div>
      );
    }
}



export default connect(null, { updateMealplanId })(Profile);