import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = (props) => {
    let newPostElement = React.createRef()

    let profilePageAdd = () => {
        let what = newPostElement.current.value;
        props.profilePageAdd(what);
        newPostElement.current.value = '';
    }

    const postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
            <div>
                My posts
                <div>
                <textarea ref={newPostElement} className={s.textarea} placeholder='Destination'></textarea> <br/>
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