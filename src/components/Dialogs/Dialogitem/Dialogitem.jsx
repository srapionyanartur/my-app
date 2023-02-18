import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';

const DialogItem = (props) => {
    var path = "/dialogs" + props.id

    return (
        <div className = {classes.dialogsItems}>
             <NavLink to = {path}> {props.name} </NavLink>

        </div>
    )
}

export default DialogItem;