import {combineReducers,  legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import settingsReducer from "./settings-reducer";




let reducers = combineReducers( {
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    newsPage: newsReducer,
    settingPage: settingsReducer,
    musicPage: musicReducer,
})
let store = createStore(reducers);

export default store;