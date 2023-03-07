import  React from 'react'
import  s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    const dialogs = props.DialogsData.map(d => <DialogItem name={d.name}  id={d.id} />)
    const messages = props.messagesData.map(m => <Message message={m.message}/>)

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