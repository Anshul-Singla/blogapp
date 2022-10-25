import {applyMiddleware, combineReducers , legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import { signupReducer } from './auth/signup/signup.reducer';


const rootReducer = combineReducers({
    authSignup:signupReducer
});


export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));