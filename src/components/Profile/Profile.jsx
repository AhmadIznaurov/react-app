import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Mypost/MypostsContainer";




const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />
             <MypostsContainer store={props.store}/>
        </div>
    );
}

export  default Profile;