import  React from 'react'
import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Ahmad"   id="1" />
                <DialogItem name="Movsar"  id="2" />
                <DialogItem name="Hakim"   id="3" />
                <DialogItem name="Adam"    id="4" />
                <DialogItem name="Aslan"   id="5" />
                <DialogItem name="Sultan"  id="6" />
                <DialogItem name="Muslim"  id="7" />
            </div>
            <div className={s.messages}>
                <Message message="Hello, i learn React" />
                <Message message="Okay, then" />
                <Message message="IT-Online Camp" />
                <Message message="Learning coding" />
                <Message message="Strange feeling" />
                <Message message="What?" />
                <Message message="Why?" />
            </div>
        </div>
    );
}

export  default Dialogs;