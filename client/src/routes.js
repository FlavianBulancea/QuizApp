import React , { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PLAY, CATEGORY, QUESTIONS, RESULTS } from './utils/routeConstants';
import Home from './components/Home'
import Category from './components/Category'
import Questions from './components/Questions'
import Results from './components/Results'




const Router = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={PLAY} component={Home} />
                <Route exact path={QUESTIONS} component={Questions} />
                <Route exact path={CATEGORY} component={Category} />
                <Route exact path={RESULTS} component={Results} />
            </Switch>
        </React.Fragment>
    );
};

export default Router;



