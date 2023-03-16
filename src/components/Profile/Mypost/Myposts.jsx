import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import state from "../../../redux/state";



const Myposts = (props) => {
    let newPostElement = React.createRef()

    let profilePageAdd = () => {
        props.profilePageAdd();
    }

    let onPostChanged = () => {
        let what = newPostElement.current.value;
        props.updateNewPostText(what);
    }

    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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