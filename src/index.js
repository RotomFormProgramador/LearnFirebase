import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard/index'
import Login from './pages/Login/Index';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route  path="/login" component={Login} />
            <Route  path="/dashboard" component={Dashboard} />
            <Redirect  from="/" to="/dashboard"></Redirect>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
