import countReducer from './counter';
import loginReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: countReducer,
    isLogged: loginReducer
});

export default allReducers;