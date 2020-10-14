import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PLAY, CATEGORY, QUESTIONS } from './utils/routeConstants';
import Home from './components/Home'
import Category from './components/Category'
import Questions from './components/Questions'



const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={PLAY} component={Home} />
                <Route exact path={CATEGORY} component={Category} />
                <Route exact path={QUESTIONS} component={Questions} />
            </Switch>
        </React.Fragment>
    );
};

export default Router;



