import  React from 'react'
import Settings from "./Settings";
import {settingChangeActionCreator, settingPostActionCreator} from "../../redux/settings-reducer";
import StoreContext from "../../StoreContext";



const settingsContainer = () => {
    return <StoreContext.Consumer >
        {
            (store) => {
                let state = store.getState();

                let settingChange = () => {
                    store.dispatch(settingChangeActionCreator())

                }

                let settingPost = (setting) => {
                    let action = settingPostActionCreator(setting)
                    store.dispatch(action);
                }

                return <Settings settingChange={settingChange} settingPost={settingPost}
                                 settingData={state.settingPage.settingData}
                                 setPost={state.settingPage.settingPost}
                />
            }
            }
        </StoreContext.Consumer>

}

export  default settingsContainer;