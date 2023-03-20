import React from "react";
import Myposts from "./Mypost/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div>
             <ProfileInfo />

             <Myposts postData={props.profilePage.postData}
                      dispatch={props.dispatch} onPostText={props.profilePage.onPostText}


             <Myposts postData={props.profilePage.postData} postAdd={props.postAdd}
                      profilePageAdd={props.profilePageAdd} onPostText={props.profilePage.onPostText}
                      updateNewPostText={props.updateNewPostText}

             />


             <Myposts postData={props.state.postData} postAdd={props.postAdd} />

             <Myposts postData={props.profilePage.postData}
                      newPostText={props.profilePage.newPostText}
                      updateNewPostText={props.updateNewPostText}
                      addPost={props.addPost} />

        </div>
    );
}

export  default Profile;