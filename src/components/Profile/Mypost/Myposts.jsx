import React from "react";
import P from "./Myposts.module.css";
import Post from "./Post/Post";


const Myposts = () => {
    return (
            <div>
                My posts
                <div>
                <textarea></textarea>
                <button>Add post</button>
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