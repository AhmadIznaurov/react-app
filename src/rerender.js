import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {addMusic, postAdd, profilePageAdd, settingChange} from "./redux/state";



export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} postAdd={postAdd} settingChange={settingChange} addMusic={addMusic} profilePageAdd={profilePageAdd}/>
        </React.StrictMode>
    );

}

