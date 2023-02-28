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
                    <Post />
                    <Post />
                    <Post />
            </div>
            </div>
    );
}

export  default Myposts;