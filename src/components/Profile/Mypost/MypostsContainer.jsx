import React from "react";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        onPostText: state.profilePage.onPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        profilePageAdd: () => {
            dispatch(profilePageAddActionCreator());
        },
        onPostChanged: (text) => {
            dispatch(onPostChangedActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (Myposts);

export  default MyPostsContainer;