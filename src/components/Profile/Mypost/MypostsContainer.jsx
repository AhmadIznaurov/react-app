import React from "react";
import StoreContext from "../../../StoreContext";
import {onPostChangedActionCreator, profilePageAddActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

const mypostsContainer = () => {

    return <StoreContext.Consumer >
        {
            (store) => {
            let state = store.getState();

            let profilePageAdd = () => {
           store.dispatch(profilePageAddActionCreator());
        }

            let onPostChanged = (text) => {
            let action = onPostChangedActionCreator(text);
              store.dispatch(action);
        }

       return <Myposts updateNewPostText={onPostChanged} addPost={profilePageAdd} postData={state.profilePage.postData}
                   onPostText={state.profilePage.onPostText}
                   />
        }
        }
       </StoreContext.Consumer>

}

export  default mypostsContainer;