import { combineReducers } from "redux"

import categoryReducer from "./categoryReducer"
import scoreReducer from "./scoreReducer"

const rootReducer = combineReducers({ categoryReducer, scoreReducer })

export default rootReducer