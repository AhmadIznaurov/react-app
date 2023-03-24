import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/state";



const Myposts = (props) => {
    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()


    let profilePageAdd = () => {
        props.dispatch(profilePageAddActionCreator());
    }

    let onPostChanged = () => {

        let text = newPostElement.current.value;

        props.dispatch(onPostChangedActionCreator(text));

        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});

        let what = newPostElement.current.value;

    let postAdd = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let what = newPostElement.current.value

        props.postAdd(what);

        props.updateNewPostText(what);


    }

    return (
            <div>
                My posts
                <div>

                <textarea onChange={onPostChanged} ref={newPostElement} className={s.textarea} placeholder='Destination' value={props.onPostText}></textarea> <br/>
                    <button onClick={profilePageAdd}>Add post</button>

                <textarea onChange={onPostChange} ref={newPostElement} className={s.textarea} placeholder='Destination' value={props.newPostText}></textarea> <br/>
                    <button onClick={postAdd}>Add post</button>

                    <button>Remove post</button>
                </div>
                <div className={s.item}>
                    { postElements }
                 </div>
            </div>
    );
}

export  default Myposts;