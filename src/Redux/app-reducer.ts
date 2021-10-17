import {getAuthUserData} from "./auth-reduser";


const SET_INITIALIZED_SUCCESS= 'SET_INITIALIZED_SUCCESS';

export type initialStateType ={
    initialized : boolean,
}

let initialState: initialStateType = {
         initialized : false,
};
const appReduser = (state=initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
           return {
               ...state,
               initialized: true,
           }
       default:
            return state;
    }
}

type inithializedSuccesActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): inithializedSuccesActionType =>({ type : SET_INITIALIZED_SUCCESS})


export const initializeApp = ()=>(dispatch: any)=>{
    let promise = dispatch(getAuthUserData());
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
}








export  default appReduser;