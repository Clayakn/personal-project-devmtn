import React from 'react';
import Auth from './components/Auth/Auth';
import Carbs from './components/Carbs/Carbs';
import EditMealplan from './components/EditMealplan/EditMealplan';
import Glossary from './components/Glossary/Glossary';
import Home from './components/Home/Home';
import Mealplan from './components/Mealplan/Mealplan';
import Profile from './components/Profile/Profile';
import Water from './components/Water/Water';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/mealplan' component={Mealplan}/>
        <Route path='/editmealplan' component={EditMealplan}/>
        <Route path='/authentication' component={Auth}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/glossary' component={Glossary} />
        <Route path='/water' component={Water} />
        <Route path='/carbs' component={Carbs} />
    </Switch>

)