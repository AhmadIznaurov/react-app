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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={DialogsData[0].name}  id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name}  id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name}  id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name}  id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name}  id={DialogsData[4].id} />
                <DialogItem name={DialogsData[5].name}  id={DialogsData[5].id} />
                <DialogItem name={DialogsData[6].name}  id={DialogsData[6].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
                <Message message={messagesData[6].message} />
            </div>
        </div>
    );
}

export  default Dialogs;