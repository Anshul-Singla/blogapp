import axios from 'axios'
import {  AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from "./signup.types"

let api = "http://localhost:8080"

export const signUpAPI = (user) => async(dispatch) =>  {
    dispatch({type:AUTH_SIGN_UP_LOADING});
    // console.log('user123456:', user)
    try {
        let response = await axios({
            method :"post",
            url :`${api}/user/signup`,
            data:user
        })
        console.log('response:', response);
        dispatch({type:AUTH_SIGN_UP_SUCCESS , payload:{data :response.data , status:response.status}});
        return response.data
    } catch (error) {
        dispatch({type:AUTH_SIGN_UP_ERROR, payload:error})
    }
}