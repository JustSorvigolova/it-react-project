import profileReducer from "./profile-reducer";


let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'hi are you', LikesCount: 23},
                {id: 2, message: 'it me', LikesCount: 45},
                {id: 3, message: 'Beginings', LikesCount: 78},

            ],
            newPostText: 'unblock',

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
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('State was chance')
    },

    getState(){
           return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },



    dispatch(action){

         this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._callSubscriber(this._state);
  }
}






export default store;