import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // link rel="stylesheet" href="./index.cs"
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Home"
import About from './About';
import Card from './Card';
import Todo from './Todo';
import Counter from './Counter';

// App()

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
  Tood(one)
  Tood("two")
*/
root.render(
  // <Counter />


  <>
    <Todo title="todo one" />
    {/* <Todo title="todo tow" /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
