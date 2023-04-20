import  React from 'react'
import Dialogs from "./Dialogs";
import {addButtonDialogActionCreator, addDialogActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {
      return <StoreContext.Consumer >
          {
        (store) => {
            let state = store.getState();
            let addButtonDialog = () => {
                let action = addButtonDialogActionCreator()
                store.dispatch(action)
            }

            let addDialog = (text) => {
                let action = addDialogActionCreator(text)
                store.dispatch(action);
            }
            return  <Dialogs addButtonDialog={addButtonDialog} addDialog={addDialog} dialogsData={state.messagesPage.dialogsData}
                             dialogsPost={state.messagesPage.dialogsPost}
                             messagesData={state.messagesPage.messagesData}
                             dialogPostData={state.messagesPage.dialogPostData}/>
        }
    }

    </StoreContext.Consumer>

}

export  default DialogsContainer;