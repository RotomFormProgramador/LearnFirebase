import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


//Pages
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/Login/Login'

import AuthContextProvider from './context/auth'

ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
            <Switch>
                <Route path='/Login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Redirect from='/' to='/dashboard' />
            </Switch>
        </AuthContextProvider>

    </BrowserRouter>, document.getElementById('root'));

