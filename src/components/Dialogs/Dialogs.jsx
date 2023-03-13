import  React from 'react'
import  s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
    const dialogs = props.state.dialogsData.map(d => <DialogItem name={d.name}  id={d.id} />)
    const messages = props.state.messagesData.map(m => <Message message={m.message}/>)

    let newDialogsElement = React.createRef();

    let addDiallogButton = () => {
        let text = newDialogsElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
            <div className={s.dialogs_container}>
                <div>
                    <textarea ref={newDialogsElement}></textarea>
                </div>
                <div>
                    <button onClick={addDiallogButton}>Add post</button>
                </div>
            </div>
        </div>
    );
}

export  default Dialogs;