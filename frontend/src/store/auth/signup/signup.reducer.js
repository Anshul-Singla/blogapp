import { AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from "./signup.types";



export const signupInitialState = {
    loading : false ,
    status:0,
    data:{
        message:"",
        user_detailS:{}
    },
    error:false
};
export const signupReducer = (state = signupInitialState , {type , payload}) => {
    switch(type){
        case AUTH_SIGN_UP_LOADING:{
            return {
                ...state , loading:true,
            }
        }
        case AUTH_SIGN_UP_SUCCESS:{
            return {
                ...state , data:{ ...state.data , message:payload.data.message , user_detailS:payload.data.newUser } , status : payload.status,loading : false , error:false
            }
        }
        case AUTH_SIGN_UP_ERROR:{
            return {
                ...state , loading:false , error:true,
            }
        }
        default:{
            return state;
        }
    }
}