import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />
             <Myposts postData={props.state.postData} postAdd={props.postAdd} profilePageAdd={props.profilePageAdd}/>
        </div>
    );
}

export  default Profile;