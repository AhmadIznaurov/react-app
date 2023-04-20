import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from "./StoreContext";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});


reportWebVitals();
