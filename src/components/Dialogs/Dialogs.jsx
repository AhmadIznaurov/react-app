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

let DialogsData = [
    {id: 1, name: 'Ahmad'},
    {id: 2, name: 'Movsar'},
    {id: 3, name: 'Hakim'},
    {id: 4, name: 'Adam'},
    {id: 5, name: 'Aslan'},
    {id: 6, name: 'Sultan'},
    {id: 7, name: 'Muslim'}
]

let messagesData = [
    {id: 1, message: "Hello, i learn React"},
    {id: 2, message: "IT-Online Camp"},
    {id: 3, message: "Learning coding"},
    {id: 4, message: "Strange feeling"},
    {id: 5, message: "Haha, so funny"},
    {id: 6, message: "What?"},
    {id: 7, message: "Why?"},

]

const dialogs = DialogsData.map(d => <DialogItem name={d.name}  id={d.id} />)
const messages = messagesData.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
        </div>
    );
}

export  default Dialogs;