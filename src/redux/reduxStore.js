import {createStore, combineReducers} from "redux";
import reducer from "./reducer";


let reducers = combineReducers({reducer});

let store = createStore(reducers);


export default store;