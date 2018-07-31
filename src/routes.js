import React from 'react';
import Home from './components/Home/Home';
import Mealplan from './components/Mealplan/Mealplan';
import EditMealplan from './components/EditMealplan/EditMealplan';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mealplan' component={Mealplan}/>
        <Route path='/editmealplan' component={EditMealplan}/>
        <Route path='/authentication' component={Auth}/>
        <Route path='/profile' component={Profile}/>
    </Switch>

)