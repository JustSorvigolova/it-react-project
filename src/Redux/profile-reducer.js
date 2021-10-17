import {profileAPI, userAPI} from "../api/api";
const ADD_POST = 'ADD_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';


let initialState = {
         posts : [
             {id: 1, message: 'hi are you', LikesCount: 23},
             {id: 2, message: 'it me', LikesCount: 45},
             {id: 3, message: 'Begining', LikesCount: 78},

         ],
         dialogs: [
             {id: 1, name: 'Dimych'},
             {id: 2, name: 'Masha'},
             {id: 3, name: 'Lena'},
         ],
         messages: [
             {id: 1, message: 'hi'},
             {id: 2, message: 'Hello'},
             {id: 3, message: 'Yao'}
         ],
         profile : null,
         status: "",
     }


const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.AddPost,
                LikesCount: 0,
            };
            let stateCopy = {...state, posts : [...state.posts]}
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = action.SendMessage;
            return {
                ...state,
                messages: [...state.messages, {id:6, message: body}]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
       default:
            return state;
    }
}


export const addPostActionCreator = (AddPost) =>({ type : ADD_POST,AddPost})
export const sendMessageCreator = (SendMessage) =>({ type : SEND_MESSAGE, SendMessage});
export const setUserProfile = (profile) =>({ type : SET_USER_PROFILE, profile});
export const setStatus  = (status) =>({type : SET_STATUS, status });


export const getUserProfile = (userId) => async (dispatch) => {
       let response = await userAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus= (userId) =>async (dispatch) => {
       let response = await  profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}

export const updateStatus= (status) =>async (dispatch) => {
      let response = await profileAPI.updateStatus(status)
     if (response.data.resulCode === 0){
      dispatch(setStatus(response.data));
      }
}
export  default profileReducer;