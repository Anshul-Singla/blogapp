import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_UP_LOADING } from "./auth.types"

let api = "http://localhost:8080"

export const signUpAPI = async (user) =>  {
    // dispatch({type:AUTH_SIGN_UP_LOADING});
    console.log('user123456:', user)
    try {
        let response = await axios({
            method :"post",
            url :`${api}/user/signup`,
            data:user
        })
        console.log('response:', response)
    } catch (error) {
        // dispatch({type:AUTH_SIGN_IN_ERROR})
        console.log('error:', error)
    }
}