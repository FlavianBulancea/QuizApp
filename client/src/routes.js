import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PLAY, CATEGORY } from './utils/routeConstants';
import Home from './components/Home'
import {Category} from './components/Category'


const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={PLAY} component={Home} />
                <Route exact path={CATEGORY} component={Category} />
            </Switch>
        </React.Fragment>
    );
};

export default Router;



