import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {addMusic, postAdd, profilePageAdd, settingChange, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} postAdd={postAdd} settingChange={settingChange} addMusic={addMusic} profilePageAdd={profilePageAdd} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );

}

