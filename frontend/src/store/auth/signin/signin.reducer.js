import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./signin.types";



export const signinInitialState = {
    loading : false ,
    data:{
        message:"",
        token:'',
        refresh_token:''
    },
    error:false
};
export const signinReducer = (state = signinInitialState , {type , payload}) => {
    switch(type){
        case AUTH_SIGN_IN_LOADING:{
            return {
                ...state , loading:true,
            }
        }
        case AUTH_SIGN_IN_SUCCESS:{
            return {
                ...state , data:{ ...state.data , message:payload.data.message , token : payload.data.mainToken ,refresh_token :payload.data.refreshToken } , status : payload.status,loading : false , error:false
            }
        }
        case AUTH_SIGN_IN_ERROR:{
            return {
                ...state , loading:false , error:true,
            }
        }
        default:{
            return state;
        }
    }
}
// kuch nhi hua aaj
