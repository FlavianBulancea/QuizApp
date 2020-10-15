import React , { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PLAY, CATEGORY, QUESTIONS } from './utils/routeConstants';
import Home from './components/Home'
import Category from './components/Category'
import Questions from './components/Questions'


const CategoryContext = React.createContext([
    [],
    () => []
]);

const Router = () => {
    const [value, setValue] = useState([])

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={PLAY} component={Home} />
                <Route exact path={QUESTIONS} component={Questions} />
                <CategoryContext.Provider value={[value, setValue]}>
                    <Route exact path={CATEGORY} component={Category} />
                </CategoryContext.Provider>
            </Switch>
        </React.Fragment>
    );
};

export {Router, CategoryContext};



