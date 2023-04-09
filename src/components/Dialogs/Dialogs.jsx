import  React from 'react'
import  s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Post from "../Profile/Mypost/Post/Post";
import {addButtonDialogActionCreator, addDialogActionCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {
    const dialogs = props.state.dialogsData.map(d => <DialogItem name={d.name}  id={d.id} />)
    const messages = props.state.messagesData.map(m => <Message message={m.message}/>)
    const dialogPost = props.state.dialogPostData.map(m => <Post message={m.message} likesCount={m.likesCount}/>)

    let newDialogsElement = React.createRef();



  let addButtonDialog = () => {
    props.dispatch(addButtonDialogActionCreator())
  }

    let addDialog = () => {
        let text = newDialogsElement.current.value;
        props.dispatch(addDialogActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
            </div>
            <div className={s.container}>
                <div>
                    <textarea ref={newDialogsElement} onChange={addDialog} value={props.state.dialogsPost}/>
                </div>
                <div>
                    <button onClick={addButtonDialog}>Add post</button>
                </div>
                {dialogPost}
            </div>
        </div>
    );
}

export  default Dialogs;