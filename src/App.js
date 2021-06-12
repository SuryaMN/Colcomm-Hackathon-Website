import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from './component/Navbar';
import Signup from './component/Signup'
import Login from './component/Login'
import Logout from './component/Logout'
import Profile from './component/Profile'
import Events from './component/Events'
import CreateJoin from './component/CreateJoin'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
require('popper.js');

function App(){
    return(
        <div>
        
        <Router>
            <Navbar />
            <Route exact path='/' component={Events} />
            <Route exact path='/signup'  component={Signup} />
            <Route path='/login'  component={Login} />
            <Route path='/logout'  component={Logout} />
            <Route path='/profile'  component={Profile} />
            <Route path='/events/:event_id' component={CreateJoin} />

        </Router>
        </div>
    )
}

export default App;