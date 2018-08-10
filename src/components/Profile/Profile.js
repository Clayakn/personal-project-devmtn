import React, { Component } from 'react';
import axios from 'axios';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMealplanId } from '../../redux/reducer';
import MixDataHorizontal from '../Charts/MixDataHorizontal';
import MixData from '../Charts/MixData';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            profilePicture: '',
            titles: '',
            selectedTitleId: '',
            mealplans: ''
        }
        this.selectTitleIdFunc = this.selectTitleIdFunc.bind(this)
        this.editMealplan = this.editMealplan.bind(this)
        this.deleteMealplan = this.deleteMealplan.bind(this)
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

    fetchMealplan() {
        axios.get(`/api/mealplan/${this.state.selectedTitleId}`)
        .then(response => {
            this.setState({mealplans: response.data[0].mealplans})
        })
        .catch(error  => console.log('Axios error GET fetchMealPlan in Profile.js', error))
    }

    editMealplan() {
        this.props.updateMealplanId(this.state.selectedTitleId)
    }

    deleteMealplan() {
        const mealplanId = this.state.selectedTitleId
        axios.delete(`/api/delete_mealplan/${mealplanId}`)
        .then(response => {
        window.alert('Meal Plan successfully deleted')
        this.setState({
            mealplans: '',
            selectedTitleId: ''
        })
        this.forceUpdate();
        })
        .catch(error => console.log('Axios error DELETE deleteMealplan in Profile.js',error))
    }
    
    render() {
     const { username, profilePicture } = this.state
     const displayTitles = this.state.titles.length ? this.state.titles.map((title,i) => {
         return(
             <option key={i} value={title.id}>{title.title}</option>
         )
     }) : ''
     const displayMealList = this.state.mealplans ? this.state.mealplans.map((food, i) => {
        return (
          <div key={i}>
          <br/>
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
                <div className='small'>
                <div className='profile_container'>
                <h1>Profile</h1>
                <br/>
                        <div className='profile_user_section'>
                        <h3>{username}</h3>
                        <img src={profilePicture} alt="profile from login information"/>
                        <br/>
                        <h3>Pick a Meal Plan</h3>
                        <select onChange={e => this.selectTitleIdFunc(e.target.value)}>
                        <option value={0} defaultValue>Select One</option>
                        {displayTitles}
                        </select>
                        <br/>
                        <button onClick={() => this.fetchMealplan()}>Fetch Meal Plan</button>
                        <br/>
                        <Link to='EditMealplan'><button onClick={() => this.editMealplan()}>Edit Meal Plan</button></Link>
                        <br/>
                        <button onClick={() => this.deleteMealplan()}>Delete Meal Plan</button>
                        <br/>
                        </div>
                    <div className='profile_section'>
                    <h3>Meal List(per 100g)</h3>
                    {displayMealList}
                    </div>
                    <br/>
                    <div className='profile_section'>
                    <h3>Total Count</h3>
                    <p>Fat: {this.state.mealplans ? (+this.state.mealplans[0].total_fat).toFixed(2) : 0}g</p> 
                    <p>Carbs: {this.state.mealplans ? (+this.state.mealplans[0].total_carbohydrate).toFixed(2) : 0}g</p>
                    <p>Protein: {this.state.mealplans ? (+this.state.mealplans[0].total_protein).toFixed(2) : 0}g</p>
                    <p>Calories: {this.state.mealplans ? (+this.state.mealplans[0].total_calories).toFixed(2) : 0}kcal</p> 
                    <p>Vitamin A: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_a).toFixed(2) : 0}µg</p> 
                    <p>Vitamin C: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_c).toFixed(2) : 0}mg</p> 
                    <p>Vitamin D: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_d).toFixed(2) : 0}IU</p> 
                    <p>Vitamin E: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_e).toFixed(2) : 0}mg</p> 
                    <p>Vitamin K: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_k).toFixed(2) : 0}µg</p> 
                    <p>Thiamin: {this.state.mealplans ? (+this.state.mealplans[0].total_thiamin).toFixed(2) : 0}mg</p> 
                    <p>Riboflavin: {this.state.mealplans ? (+this.state.mealplans[0].total_riboflavin).toFixed(2) : 0}mg</p> 
                    <p>Niacin: {this.state.mealplans ? (+this.state.mealplans[0].total_niacin).toFixed(2) : 0}mg</p> 
                    <p>Vitamin B6: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_b6).toFixed(2) : 0}mg</p> 
                    <p>Biotin: {this.state.mealplans ? (+this.state.mealplans[0].total_biotin).toFixed(2) : 0}IU</p> 
                    <p>Folate: {this.state.mealplans ? (+this.state.mealplans[0].total_folate).toFixed(2) : 0}µg</p> 
                    <p>Vitamin B12: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_b12).toFixed(2) : 0}µg</p> 
                    <p>Calcium: {this.state.mealplans ? (+this.state.mealplans[0].total_calcium).toFixed(2) : 0}mg</p> 
                    <p>Copper: {this.state.mealplans ? (+this.state.mealplans[0].total_copper).toFixed(2) : 0}mg</p> 
                    <p>Fluoride: {this.state.mealplans ? (+this.state.mealplans[0].total_fluoride).toFixed(2) : 0}µg</p> 
                    <p>Iodine: {this.state.mealplans ? (+this.state.mealplans[0].total_iodine).toFixed(2) : 0}IU</p> 
                    <p>Iron: {this.state.mealplans ? (+this.state.mealplans[0].total_iron).toFixed(2) : 0}mg</p> 
                    <p>Magnesium: {this.state.mealplans ? (+this.state.mealplans[0].total_magnesium).toFixed(2) : 0}mg</p> 
                    <p>Manganese: {this.state.mealplans ? (+this.state.mealplans[0].total_manganese).toFixed(2) : 0}mg</p> 
                    <p>Phosphorus: {this.state.mealplans ? (+this.state.mealplans[0].total_phosphorus).toFixed(2) : 0}mg</p> 
                    <p>Potassium: {this.state.mealplans ? (+this.state.mealplans[0].total_potassium).toFixed(2) : 0}mg</p> 
                    <p>Selenium: {this.state.mealplans ? (+this.state.mealplans[0].total_selenium).toFixed(2) : 0}µg</p> 
                    <p>Sodium: {this.state.mealplans ? (+this.state.mealplans[0].total_sodium).toFixed(2) : 0}mg</p> 
                    <p>Zinc: {this.state.mealplans ? (+this.state.mealplans[0].total_zinc).toFixed(2) : 0}mg</p> 
                    </div>
                    <br/>
                    <div className='profile_section'>
                    <h3>Daily Recommended</h3>
                    <p>Fat: 65g</p> 
                    <p>Carbs: 300g</p>
                    <p>Protein: 50g</p>
                    <p>Calories: 2000kcal</p> 
                    <p>Vitamin A: 1500µg</p> 
                    <p>Vitamin C: 60mg</p> 
                    <p>Vitamin D: 400IU</p> 
                    <p>Vitamin E: 20.1mg</p> 
                    <p>Vitamin K: 80µg</p> 
                    <p>Thiamin: 1.5mg</p> 
                    <p>Riboflavin: 1.7mg</p> 
                    <p>Niacin: 20mg</p> 
                    <p>Vitamin B6: 2mg</p> 
                    <p>Folate: 400µg</p> 
                    <p>Vitamin B12: 6µg</p> 
                    <p>Calcium: 1000mg</p> 
                    <p>Copper: 2mg</p>  
                    <p>Iron: 18mg</p> 
                    <p>Magnesium: 400mg</p> 
                    <p>Manganese: 2mg</p> 
                    <p>Phosphorus: 1000mg</p> 
                    <p>Potassium: 3500mg</p> 
                    <p>Selenium: 70µg</p> 
                    <p>Sodium: 2400mg</p> 
                    <p>Zinc: 15mg</p> 
                    </div>
                    <MixDataHorizontal 
                    fat={this.state.mealplans ? this.state.mealplans[0].total_fat : 0}
                    carbs={this.state.mealplans ? this.state.mealplans[0].total_carbohydrate : 0}
                    protein={this.state.mealplans ? this.state.mealplans[0].total_protein : 0}
                    calories={this.state.mealplans ? this.state.mealplans[0].total_calories : 0}
                    vitamina={this.state.mealplans ? this.state.mealplans[0].total_vitamin_a : 0}
                    vitaminc={this.state.mealplans ? this.state.mealplans[0].total_vitamin_c : 0}
                    vitamind={this.state.mealplans ? this.state.mealplans[0].total_vitamin_d : 0}
                    vitamine={this.state.mealplans ? this.state.mealplans[0].total_vitamin_e : 0}
                    vitamink={this.state.mealplans ? this.state.mealplans[0].total_vitamin_k : 0}
                    thiamin={this.state.mealplans ? this.state.mealplans[0].total_thiamin : 0}
                    riboflavin={this.state.mealplans ? this.state.mealplans[0].total_riboflavin : 0}
                    niacin={this.state.mealplans ? this.state.mealplans[0].total_niacin : 0}
                    vitaminb6={this.state.mealplans ? this.state.mealplans[0].total_vitamin_b6 : 0}
                    folate={this.state.mealplans ? this.state.mealplans[0].total_folate : 0}
                    vitaminb12={this.state.mealplans ? this.state.mealplans[0].total_vitamin_b12 : 0}
                    calcium={this.state.mealplans ? this.state.mealplans[0].total_calcium : 0}
                    copper={this.state.mealplans ? this.state.mealplans[0].total_copper : 0}
                    iron={this.state.mealplans ? this.state.mealplans[0].total_iron : 0}
                    magnesium={this.state.mealplans ? this.state.mealplans[0].total_magnesium : 0}
                    manganese={this.state.mealplans ? this.state.mealplans[0].total_manganese : 0}
                    phosphorus={this.state.mealplans ? this.state.mealplans[0].total_phosphorus : 0}
                    potassium={this.state.mealplans ? this.state.mealplans[0].total_potassium : 0}
                    selenium={this.state.mealplans ? this.state.mealplans[0].total_selenium : 0}
                    sodium={this.state.mealplans ? this.state.mealplans[0].total_sodium : 0}
                    zinc={this.state.mealplans ? this.state.mealplans[0].total_zinc : 0}
                    />
                    <br/>
                    <div>
                        <h3>*Key Notes*</h3>
                        <br/>
                        <p>Some nutrients are omitted: Biotin, Fluoride, Iodine</p>
                        <br/>
                        <p>This is based on a 2000 calorie diet from FDA</p>
                        <br/>
                        <p>Blue represents the % Daily Value recommended by FDA</p>
                        <br/>
                        <p>Pink represents the % Value from presented Meal Plan</p>
                        <br/>
                        <p>Pink is limited to 150%</p>
                        <br/>
                        <p>Some measurements were converted from IU to µg/mcg or vice versa and might therefore display inaccurate information</p>
                        <br/>
                        <p>µg/mcg stands for microgram, there are 1000 micrograms in a milligram</p>
                    </div>
                    </div>
                </div>
                <div className='large'>
                <div className='profile_container'>
                <h1>Profile</h1>
                <br/>
                <div className='profile_row'>
                        <div className='profile_user_section'>
                        <h3>{username}</h3>
                        <img src={profilePicture} alt="profile from login information"/>
                        <br/>
                        <h3>Pick a Meal Plan</h3>
                        <select onChange={e => this.selectTitleIdFunc(e.target.value)}>
                        <option value={0} defaultValue>Select One</option>
                        {displayTitles}
                        </select>
                        <br/>
                        <button onClick={() => this.fetchMealplan()}>Fetch Meal Plan</button>
                        <br/>
                        <Link to='EditMealplan'><button onClick={() => this.editMealplan()}>Edit Meal Plan</button></Link>
                        <br/>
                        <button onClick={() => this.deleteMealplan()}>Delete Meal Plan</button>
                        <br/>
                        </div>
                    <div className='profile_section'>
                    <h3>Meal List(per 100g)</h3>
                    {displayMealList}
                    </div>
                    <br/>
                    <div className='profile_section'>
                    <h3>Total Count</h3>
                    <p>Fat: {this.state.mealplans ? (+this.state.mealplans[0].total_fat).toFixed(2) : 0}g</p> 
                    <p>Carbs: {this.state.mealplans ? (+this.state.mealplans[0].total_carbohydrate).toFixed(2) : 0}g</p>
                    <p>Protein: {this.state.mealplans ? (+this.state.mealplans[0].total_protein).toFixed(2) : 0}g</p>
                    <p>Calories: {this.state.mealplans ? (+this.state.mealplans[0].total_calories).toFixed(2) : 0}kcal</p> 
                    <p>Vitamin A: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_a).toFixed(2) : 0}µg</p> 
                    <p>Vitamin C: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_c).toFixed(2) : 0}mg</p> 
                    <p>Vitamin D: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_d).toFixed(2) : 0}IU</p> 
                    <p>Vitamin E: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_e).toFixed(2) : 0}mg</p> 
                    <p>Vitamin K: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_k).toFixed(2) : 0}µg</p> 
                    <p>Thiamin: {this.state.mealplans ? (+this.state.mealplans[0].total_thiamin).toFixed(2) : 0}mg</p> 
                    <p>Riboflavin: {this.state.mealplans ? (+this.state.mealplans[0].total_riboflavin).toFixed(2) : 0}mg</p> 
                    <p>Niacin: {this.state.mealplans ? (+this.state.mealplans[0].total_niacin).toFixed(2) : 0}mg</p> 
                    <p>Vitamin B6: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_b6).toFixed(2) : 0}mg</p> 
                    <p>Biotin: {this.state.mealplans ? (+this.state.mealplans[0].total_biotin).toFixed(2) : 0}IU</p> 
                    <p>Folate: {this.state.mealplans ? (+this.state.mealplans[0].total_folate).toFixed(2) : 0}µg</p> 
                    <p>Vitamin B12: {this.state.mealplans ? (+this.state.mealplans[0].total_vitamin_b12).toFixed(2) : 0}µg</p> 
                    <p>Calcium: {this.state.mealplans ? (+this.state.mealplans[0].total_calcium).toFixed(2) : 0}mg</p> 
                    <p>Copper: {this.state.mealplans ? (+this.state.mealplans[0].total_copper).toFixed(2) : 0}mg</p> 
                    <p>Fluoride: {this.state.mealplans ? (+this.state.mealplans[0].total_fluoride).toFixed(2) : 0}µg</p> 
                    <p>Iodine: {this.state.mealplans ? (+this.state.mealplans[0].total_iodine).toFixed(2) : 0}IU</p> 
                    <p>Iron: {this.state.mealplans ? (+this.state.mealplans[0].total_iron).toFixed(2) : 0}mg</p> 
                    <p>Magnesium: {this.state.mealplans ? (+this.state.mealplans[0].total_magnesium).toFixed(2) : 0}mg</p> 
                    <p>Manganese: {this.state.mealplans ? (+this.state.mealplans[0].total_manganese).toFixed(2) : 0}mg</p> 
                    <p>Phosphorus: {this.state.mealplans ? (+this.state.mealplans[0].total_phosphorus).toFixed(2) : 0}mg</p> 
                    <p>Potassium: {this.state.mealplans ? (+this.state.mealplans[0].total_potassium).toFixed(2) : 0}mg</p> 
                    <p>Selenium: {this.state.mealplans ? (+this.state.mealplans[0].total_selenium).toFixed(2) : 0}µg</p> 
                    <p>Sodium: {this.state.mealplans ? (+this.state.mealplans[0].total_sodium).toFixed(2) : 0}mg</p> 
                    <p>Zinc: {this.state.mealplans ? (+this.state.mealplans[0].total_zinc).toFixed(2) : 0}mg</p> 
                    </div>
                    <br/>
                    <div className='profile_section'>
                    <h3>Daily Recommended</h3>
                    <p>Fat: 65g</p> 
                    <p>Carbs: 300g</p>
                    <p>Protein: 50g</p>
                    <p>Calories: 2000kcal</p> 
                    <p>Vitamin A: 1500µg</p> 
                    <p>Vitamin C: 60mg</p> 
                    <p>Vitamin D: 400IU</p> 
                    <p>Vitamin E: 20.1mg</p> 
                    <p>Vitamin K: 80µg</p> 
                    <p>Thiamin: 1.5mg</p> 
                    <p>Riboflavin: 1.7mg</p> 
                    <p>Niacin: 20mg</p> 
                    <p>Vitamin B6: 2mg</p> 
                    <p>Folate: 400µg</p> 
                    <p>Vitamin B12: 6µg</p> 
                    <p>Calcium: 1000mg</p> 
                    <p>Copper: 2mg</p>  
                    <p>Iron: 18mg</p> 
                    <p>Magnesium: 400mg</p> 
                    <p>Manganese: 2mg</p> 
                    <p>Phosphorus: 1000mg</p> 
                    <p>Potassium: 3500mg</p> 
                    <p>Selenium: 70µg</p> 
                    <p>Sodium: 2400mg</p> 
                    <p>Zinc: 15mg</p> 
                    </div>
                    </div>
                    <MixData 
                    fat={this.state.mealplans ? this.state.mealplans[0].total_fat : 0}
                    carbs={this.state.mealplans ? this.state.mealplans[0].total_carbohydrate : 0}
                    protein={this.state.mealplans ? this.state.mealplans[0].total_protein : 0}
                    calories={this.state.mealplans ? this.state.mealplans[0].total_calories : 0}
                    vitamina={this.state.mealplans ? this.state.mealplans[0].total_vitamin_a : 0}
                    vitaminc={this.state.mealplans ? this.state.mealplans[0].total_vitamin_c : 0}
                    vitamind={this.state.mealplans ? this.state.mealplans[0].total_vitamin_d : 0}
                    vitamine={this.state.mealplans ? this.state.mealplans[0].total_vitamin_e : 0}
                    vitamink={this.state.mealplans ? this.state.mealplans[0].total_vitamin_k : 0}
                    thiamin={this.state.mealplans ? this.state.mealplans[0].total_thiamin : 0}
                    riboflavin={this.state.mealplans ? this.state.mealplans[0].total_riboflavin : 0}
                    niacin={this.state.mealplans ? this.state.mealplans[0].total_niacin : 0}
                    vitaminb6={this.state.mealplans ? this.state.mealplans[0].total_vitamin_b6 : 0}
                    folate={this.state.mealplans ? this.state.mealplans[0].total_folate : 0}
                    vitaminb12={this.state.mealplans ? this.state.mealplans[0].total_vitamin_b12 : 0}
                    calcium={this.state.mealplans ? this.state.mealplans[0].total_calcium : 0}
                    copper={this.state.mealplans ? this.state.mealplans[0].total_copper : 0}
                    iron={this.state.mealplans ? this.state.mealplans[0].total_iron : 0}
                    magnesium={this.state.mealplans ? this.state.mealplans[0].total_magnesium : 0}
                    manganese={this.state.mealplans ? this.state.mealplans[0].total_manganese : 0}
                    phosphorus={this.state.mealplans ? this.state.mealplans[0].total_phosphorus : 0}
                    potassium={this.state.mealplans ? this.state.mealplans[0].total_potassium : 0}
                    selenium={this.state.mealplans ? this.state.mealplans[0].total_selenium : 0}
                    sodium={this.state.mealplans ? this.state.mealplans[0].total_sodium : 0}
                    zinc={this.state.mealplans ? this.state.mealplans[0].total_zinc : 0}
                    />
                    <br/>
                    <div>
                        <h3>*Key Notes*</h3>
                        <br/>
                        <p>Some nutrients are omitted: Biotin, Fluoride, Iodine</p>
                        <br/>
                        <p>This is based on a 2000 calorie diet from FDA</p>
                        <br/>
                        <p>Blue represents the % Daily Value recommended by FDA</p>
                        <br/>
                        <p>Pink represents the % Value from presented Meal Plan</p>
                        <br/>
                        <p>Pink is limited to 150%</p>
                        <br/>
                        <p>Some measurements were converted from IU to µg/mcg or vice versa and might therefore display inaccurate information</p>
                        <br/>
                        <p>µg/mcg stands for microgram, there are 1000 micrograms in a milligram</p>
                    </div>
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