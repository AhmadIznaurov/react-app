import  React from 'react'
import Dialogs from "./Dialogs";
import {addButtonDialogActionCreator, addDialogActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        dialogsPost: state.messagesPage.dialogsPost,
        messagesData: state.messagesPage.messagesData,
        dialogPostData: state.messagesPage.dialogPostData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addButtonDialogs: () => {
            dispatch(addButtonDialogActionCreator())
        },
        addDialogs:  (text) =>  {
            dispatch(addDialogActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export  default DialogsContainer;