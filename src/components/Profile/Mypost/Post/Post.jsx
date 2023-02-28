import React from "react";
import P from "./Post.module.css";


const Post = (props) => {
    return (
                    <div className={P.item}>
                        <img src="https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg"/>
                        { props.message }
                        <div>
                            <span>like</span>
                        </div>
                    </div>
    );
}

export  default Post;