import React from 'react'
import dio from './../Dialogs.module.css'



const Message= (props) => {
    return(
        <div className={dio.message}>
            {props.message}</div>
    );
}
export default Message;