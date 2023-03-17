import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {addMusic, postAdd, profilePageAdd, settingChange, subscribe, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} postAdd={postAdd} settingChange={settingChange} addMusic={addMusic} profilePageAdd={profilePageAdd} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );

}


subscribe(rerenderEntireTree);

rerenderEntireTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
