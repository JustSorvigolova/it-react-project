import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type initialStateType={
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth : boolean
}

let initialState: initialStateType = {
         userId: null,
         email: null,
         login: null,
         isAuth : false
};
const authReduser = (state=initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
           return {
               ...state,
               ...action.payload,
           }
       default:
            return state;
    }
}
type setAuthUserDataActionPayloadType ={
    userId: number | null
    email: string | null
    login: string| null
    isAuth: boolean| null
}

type setAuthUserDataActionType= {
    type: typeof SET_USER_DATA,
    payload:  setAuthUserDataActionPayloadType
}
export const setAuthUserData= (userId: number| null, email: string| null, login: string| null,isAuth: boolean): setAuthUserDataActionType =>(
    { type : SET_USER_DATA,
        payload: {userId, email, login,isAuth } })

export const getAuthUserData = ()=> async (dispatch:any )=>{
   let response =  await authAPI.me();

    if (response.data.resultCode === 0) {
   let {id,email,login } = response.data.data;
      dispatch(setAuthUserData(id , email, login,true));
                }
    }


export const login = (email:string, password: string, rememberMe: boolean)=>async (dispatch: any)=>{
      let response =  await  authAPI.login(email, password, rememberMe);
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }else {
                   let message =response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                     dispatch(stopSubmit("login", {_error: message}))
                }
    }

export const logout = ()=>async (dispatch:any)=>{
       let response = await   authAPI.logout();
       if (response.data.resultCode === 0) {
       dispatch(setAuthUserData(null , null, null,false));
                }
    }









export  default authReduser;