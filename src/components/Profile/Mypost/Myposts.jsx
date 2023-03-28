import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/store";



const Myposts = (props) => {
    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()

    let profilePageAdd = () => {
        props.dispatch(profilePageAddActionCreator());
    }

    let onPostChanged = () => {
        let text = newPostElement.current.value;
        props.dispatch(onPostChangedActionCreator(text));
    }

    return (
            <div>
                My posts
                <div>
                <textarea onChange={onPostChanged} ref={newPostElement} className={s.textarea} placeholder='Destination' value={props.onPostText}></textarea> <br/>
                    <button onClick={profilePageAdd}>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.item}>
                    { postElements }
                 </div>
            </div>
    );
}

export  default Myposts;