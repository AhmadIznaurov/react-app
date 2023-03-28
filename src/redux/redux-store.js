import {combineReducers,  legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";


let store = createStore(reducers);

let reducers = combineReducers( {
    profilePage: profileReducer,
})

export default store;