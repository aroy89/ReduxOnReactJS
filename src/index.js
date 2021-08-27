import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore } from 'redux';
import allReducers from './reducer';
import {Provider} from 'react-redux';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// STORE => globalized state

// ACTION => It describes what you are going to do? [e.g. increment, decrement]
// const increment  = () => {
//   return {
//     type: "INCREMENT",
//     payload: 5
//   }
// }
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   }
// }

// REDUCER => Check, which action you did and based on the action, it will modify/update to the store with the help of Dispatch
// const reducer = (state = 0, action) => {
//   switch(action.type)
//   {
//     case "INCREMENT":
//       return state + action.payload;

//     case "DECREMENT":
//       return state - 1;

//     default: 
//       return state;
//   }
// }

// let store = createStore(reducer);

// display it in the console
// store.subscribe(() => console.log(store.getState()));

// DISPATCH => Here we actually execute the action
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());


ReactDOM.render(
    <Provider store={store}>
      <App />  
    </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
