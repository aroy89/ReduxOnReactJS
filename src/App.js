import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div>
      {/* <h1>Redux counter: {counter}</h1> */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <span> {counter} </span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>isLooged: {isLogged}</h3>
    </div>
  );
}

export default App;
