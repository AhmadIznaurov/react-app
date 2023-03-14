import  React from 'react'
import  s from './Settings.module.css';
import Post from "../Profile/Mypost/Post/Post";

const settings = (props) => {
    let newSettingElement = React.createRef()

    let settingChange = () => {
        let what = newSettingElement.current.value;
        props.settingChange(what);
    }

    const postSettings = props.state.settingData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.setting}>
           Settings
            <div>
                <textarea ref={newSettingElement}></textarea>
            </div>
            <div>
                <button onClick={settingChange}>Add click</button>
            </div>
            {postSettings}
        </div>
    );
}

export  default settings;