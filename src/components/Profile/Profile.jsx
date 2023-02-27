import React from "react";
import P from "./Profile.module.css";


const Profile = () => {
    return (
        <div className={P.content}>
            <div> <img src="https://million-wallpapers.ru/wallpapers/5/10/18230078710629953792/morskoj-zakat-volny.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div >
                    New post
                </div>
                <div className={P.item}>
                    <div className={P.item}>
                        post 1
                    </div>
                    <div className={P.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export  default Profile;