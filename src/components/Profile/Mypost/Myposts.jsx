import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = () => {

    let postData = [
        {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
        {id: 2, message: 'I can try to search info', likesCount: 15 },
        {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
    ]

    return (
            <div>
                My posts
                <div>
                <textarea className={s.textarea} placeholder='Destination'></textarea> <br/>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.item}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                    <Post message={postData[1].message} likesCount={postData[1].likesCount} />
                    <Post message={postData[2].message} likesCount={postData[2].likesCount} />
                 </div>
            </div>
    );
}

export  default Myposts;