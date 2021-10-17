import dio from "../Dialogs.module.css";
import React from 'react'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return(
        <div className={dio.dialog + ' ' + dio.active}>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;