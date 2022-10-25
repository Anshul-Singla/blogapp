import {applyMiddleware, combineReducers , legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import { signinReducer } from './auth/signin/signin.reducer';
import { signupReducer } from './auth/signup/signup.reducer';


const rootReducer = combineReducers({
    authSignup:signupReducer,
    authSignin:signinReducer
});


export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));