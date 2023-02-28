import React from "react";
import P from "./Myposts.module.css";
import Post from "./Post/Post";


const Myposts = () => {
    return (
            <div>
                My posts
                <div>
                <textarea className={P.textarea} placeholder='Destination'></textarea> <br/>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
                <div className={P.item}>
                    <Post message='Hello, Who prefer React'/>
                    <Post message='I can try to search info'/>
                    <Post message='Perhaps, but it need a time'/>
            </div>
            </div>
    );
}

export  default Myposts;