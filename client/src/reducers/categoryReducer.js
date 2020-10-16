import { categoryTypes } from '../actions/actionTypes'

let stateInit = { questions: [] }

const categoryReducer = (state= stateInit, action) => {
    switch (action.type) {
        case categoryTypes.UPLOAD_CATEGORIES:
            return { ...state, questions: action.payload };  

        default:
            return state;    
    }
};


export default categoryReducer;