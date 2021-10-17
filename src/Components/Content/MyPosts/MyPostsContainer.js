import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps  = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps  = (dispatch) => {
    return {
        addPost: (AddPost)=>{
             dispatch(addPostActionCreator(AddPost))
        }
        }
    }


let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
