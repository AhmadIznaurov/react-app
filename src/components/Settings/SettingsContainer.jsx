import  React from 'react'
import Settings from "./Settings";
import {settingChangeActionCreator, settingPostActionCreator} from "../../redux/settings-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        settingData: state.settingPage.settingData,
        setPost: state.settingPage.settingPost
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        settingChanges: () => {
            dispatch(settingChangeActionCreator())
        },
        settingPosts: (setting) => {
            dispatch(settingPostActionCreator(setting));
        }
    }

}


const settingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export  default settingsContainer;