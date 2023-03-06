import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";



const Myposts = () => {

    let postData = [
        {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
        {id: 2, message: 'I can try to search info', likesCount: 15 },
        {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
    ]

    const postElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
            <div>
                My posts
                <div>
                <textarea className={s.textarea} placeholder='Destination'></textarea> <br/>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={s.item}>
                    { postElements }
                 </div>
            </div>
    );
}

export  default Myposts;