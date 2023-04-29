import  React from 'react'
import  s from './Settings.module.css';
import Post from "../Profile/Mypost/Post/Post";



const settings = (props) => {
    const postSettings = props.settingData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newSettingElement = React.createRef()

    let settingChange = () => {
        props.settingChanges()

    }
    let settingPost = () => {
    let setting = newSettingElement.current.value;
    props.settingPosts(setting);
}

    return (
        <div className={s.setting}>
           Settings
            <div>
                <textarea ref={newSettingElement} onChange={settingPost} value={props.setPost}/>
            </div>
            <div>
                <button onClick={settingChange}>Add click</button>
            </div>
            {postSettings}
        </div>
    );
}

export  default settings;