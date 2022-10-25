import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from './signin.types';


let api = "http://localhost:8080"

export const signInAPI = (user) => async (dispatch)=> {
    dispatch({type:AUTH_SIGN_IN_LOADING});
    console.log('user123456:', user)
    try {
        let response = await axios({
            method :"post",
            url :`${api}/user/signin`,
            data:user
        })
        console.log('response:', response);
        dispatch({type:AUTH_SIGN_IN_SUCCESS , payload:{data :response.data , status:response.status}});
        return response.data
    } catch (error) {
        dispatch({type:AUTH_SIGN_IN_ERROR, payload:error})
        console.log('error:', error)
    }
}