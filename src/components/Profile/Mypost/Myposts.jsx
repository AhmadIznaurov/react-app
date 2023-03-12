import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = (props) => {
    let newPostElement = React.createRef()

    let postAdd = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let what = newPostElement.current.value
        props.updateNewPostText(what);
    }

    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
            <div>
                My posts
                <div>
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