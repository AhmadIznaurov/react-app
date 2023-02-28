import React from "react";
import P from "./Post.module.css";


const Post = () => {
    return (
                    <div className={P.item}>
                        <img src="https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg"/>
                        post 1
                        <div>
                            <span>like</span>
                        </div>
                    </div>
    );
}

export  default Post;