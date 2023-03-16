import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";



const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />
             <Myposts postData={props.profilePage.postData} postAdd={props.postAdd}
                      profilePageAdd={props.profilePageAdd} onPostText={props.profilePage.onPostText}
                      updateNewPostText={props.updateNewPostText}
             />
        </div>
    );
}

export  default Profile;