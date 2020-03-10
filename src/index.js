import React from 'react'; // does DOM manipulation (core component of React)
import ReactDOM from 'react-dom'; // library used for DOM in websites
import './index.css'; // CSS can be added for every component
//import Card from './Card'; // if there is no extention React assumes it is JS
// The files of components start with a capital letter
import 'tachyons';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />
                 , document.getElementById('root')); // render <App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();