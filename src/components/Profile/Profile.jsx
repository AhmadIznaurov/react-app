import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
             <ProfileInfo />
             <Myposts />
        </div>
    );
}

export  default Profile;