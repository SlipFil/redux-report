import {createStore, combineReducers} from "redux";
import reducer from "./reducer";


let reducers = combineReducers({cars: reducer});

let store = createStore(reducers);


export default store;