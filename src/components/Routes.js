import React from 'react'
import Main from './Main'
import SinglePhoto from './SinglePhoto'
import posts from '../data/posts'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routes = () =>
    <Router>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/post/:code' component={SinglePhoto} />
        </Switch>
    </Router>
export default Routes