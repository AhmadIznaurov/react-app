import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
    {id: 2, message: 'I can try to search info', likesCount: 15 },
    {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
]

let DialogsData = [
    {id: 1, name: 'Ahmad'},
    {id: 2, name: 'Movsar'},
    {id: 3, name: 'Hakim'},
    {id: 4, name: 'Adam'},
    {id: 5, name: 'Aslan'},
    {id: 6, name: 'Sultan'},
    {id: 7, name: 'Muslim'}
]

let messagesData = [
    {id: 1, message: "Hello, i learn React"},
    {id: 2, message: "IT-Online Camp"},
    {id: 3, message: "Learning coding"},
    {id: 4, message: "Strange feeling"},
    {id: 5, message: "Haha, so funny"},
    {id: 6, message: "What?"},
    {id: 7, message: "Why?"},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>
    <App postData={postData} DialogsData={DialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
