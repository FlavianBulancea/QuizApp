import { scoreTypes } from '../actions/actionTypes'


let stateInit = {score: 0}

const scoreReducer = (state=stateInit, action) => {
    switch(action.type) {
        case scoreTypes.UPDATE_SCORE:
            return{...state, score: action.payload};
        default:
            return state;
    }
}

export default scoreReducer