import  React from 'react'
import  s from './Settings.module.css';
import Post from "../Profile/Mypost/Post/Post";
import {settingChangeActionCreator, settingPostActionCreator} from "../../redux/settings-reducer";



const settings = (props) => {

    const postSettings = props.state.settingData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newSettingElement = React.createRef()

    let settingChange = () => {
        props.dispatch(settingChangeActionCreator())

    }

let settingPost = () => {
    let setting = newSettingElement.current.value;
    props.dispatch(settingPostActionCreator(setting));
}

    return (
        <div className={s.setting}>
           Settings
            <div>
                <textarea ref={newSettingElement} onChange={settingPost} value={props.state.settingPost}/>
            </div>
            <div>
                <button onClick={settingChange}>Add click</button>
            </div>
            {postSettings}
        </div>
    );
}

export  default settings;