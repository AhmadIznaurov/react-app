import  React from 'react'
import Settings from "./Settings";
import {settingChangeActionCreator, settingPostActionCreator} from "../../redux/settings-reducer";



const settingsContainer = (props) => {
let state = props.store.getState()

    let settingChange = () => {
        props.store.dispatch(settingChangeActionCreator())

    }

let settingPost = (setting) => {
    let action = settingPostActionCreator(setting)
    props.store.dispatch(action);
}

    return (
        <Settings settingChange={settingChange} settingPost={settingPost}
                  settingData={state.settingPage.settingData}
                  setPost={state.settingPage.settingPost}
        />

    );
}

export  default settingsContainer;