import React from 'react';
import Home from './components/Home/Home';
import Mealplan from './components/Mealplan/Mealplan';
import Auth from './components/Auth/Auth';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mealplan' component={Mealplan}/>
        <Route path='/authentication' component={Auth}/>
    </Switch>

)