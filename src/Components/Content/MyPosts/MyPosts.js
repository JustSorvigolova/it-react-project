import React from "react"
import color_text from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


let MyPosts = React.memo((props)=> {

    let postElements = [...props.posts]
        .reverse()
        .map(post => <Post post_name={post.message} LikesCount={post.LikesCount}/>)


    let onAddPost = (value) => {
        props.addPost(value.AddPost);
    }

    return (
        <div>
            <div className={color_text.pd}>
                <div>Do it Post</div>
                <AddMyPostReduxForm onSubmit={onAddPost}/>
            </div>
            {postElements}
        </div>
    );
})

const maxLength30 = maxLengthCreator(30)
const AddMyPostForm =(props)=>{
    return(
         <form  onSubmit={props.handleSubmit}>
            <div>

            <Field validate={[required, maxLength30]} placeholder="Add Post" name="AddPost" component={Textarea}/>
          </div>
                    <div className={color_text.pd}>
                        <button>Add</button>
                    </div>
                </form>
    )
}

const AddMyPostReduxForm = reduxForm({
        form: 'addPost'
})(AddMyPostForm)

export default MyPosts;


