import React from "react";
import P from "./Profile.module.css";
import Myposts from "./Mypost/Myposts";


const Profile = () => {
    return (
        <div className={P.content}>
            <div> <img src="https://million-wallpapers.ru/wallpapers/5/10/18230078710629953792/morskoj-zakat-volny.jpg"/>
            </div>
            <div>
                ava + description
            </div>
           <Myposts />
        </div>
    );
}

export  default Profile;