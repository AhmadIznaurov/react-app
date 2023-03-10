import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />
             <Myposts postData={props.state.postData}/>
        </div>
    );
}

export  default Profile;