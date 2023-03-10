import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />
             <Myposts postData={props.profilePage.postData}
                      newPostText={props.profilePage.newPostText}
                      updateNewPostText={props.updateNewPostText}
                      addPost={props.addPost} />
        </div>
    );
}

export  default Profile;