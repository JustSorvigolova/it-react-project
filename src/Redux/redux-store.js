import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReduser from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage : usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;