import React from 'react'
import dio from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";




const  Dialogs = (props) => {

let  state = props.profilePage;

let dialogsElements = state.dialogs.map( dialog => <DialogItem id={dialog.id} key={dialog.id} name ={dialog.name} /> );

let messagesElements = state.messages.map( messages =><Message message={messages.message} key={messages.id}/> );



let addMessage = (value)=>{
    props.SendMessage(value.newMessageBody)
}

return(
    <div className={dio.dialogs}>
    <div className={dio.dialogsItems}>
        {dialogsElements}
    </div>

    <div className={ dio.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addMessage} />
    </div>

  </div>
        );
    }


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
      <Field  placeholder="enter your message" component="textarea" name="newMessageBody" />
            <div><button>Send</button></div>
        </form>
    );
};
const AddMessageFormRedux= reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;