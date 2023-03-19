
import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store  from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={store.getState()} postAdd={store.postAdd.bind(store)} settingChange={store.settingChange.bind(store)} addMusic={store.addMusic.bind(store)} profilePageAdd={store.profilePageAdd.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );

}

import reportWebVitals from './reportWebVitals';

import state, {addMusic, postAdd, settingChange} from "./redux/state";




store.subscribe(rerenderEntireTree);


rerenderEntireTree(store.getState());

rerenderEntireTree(state);

import {rerenderEntireTree} from "./render";
import state from "./redux/state";

rerenderEntireTree(state);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
