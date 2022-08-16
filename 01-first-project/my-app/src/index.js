import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: "Hi, how are you?", likes: 15 },
  { id: 2, message: "It's my first post", likes: 20 },
];

let dialogsData = [
  { id: 1, name: "Dmytry" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Valery" },
  { id: 4, name: "Sergey" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "How are your holidays?" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
