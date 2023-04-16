import  React from 'react'
import Dialogs from "./Dialogs";
import {addButtonDialogActionCreator, addDialogActionCreator} from "../../redux/dialogs-reducer";




const DialogsContainer = (props) => {

let state = props.store.getState();

  let addButtonDialog = () => {
      let action = addButtonDialogActionCreator()
      props.store.dispatch(action)
  }

    let addDialog = (text) => {
       let action = addDialogActionCreator(text)
        props.store.dispatch(action);
    }
    return (

        <Dialogs addButtonDialog={addButtonDialog} addDialog={addDialog} dialogsData={state.messagesPage.dialogsData}
                 dialogsPost={state.messagesPage.dialogsPost}
                 messagesData={state.messagesPage.messagesData}
                 dialogPostData={state.messagesPage.dialogPostData}
        />

    );
}

export  default DialogsContainer;