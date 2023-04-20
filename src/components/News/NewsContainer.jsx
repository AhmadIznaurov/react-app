import React from "react";
import {ActCreatorAddPostNewsElement, UpdateCreatorOnPostNewsElement} from "../../redux/news-reducer";
import StoreContext from "../../StoreContext";
import News from "./News";



const NewsContainer = () => {

    return <StoreContext.Consumer >
        {
            (store) => {
                let state = store.getState();
                const addPostNewsElement = () => {
                    store.dispatch(ActCreatorAddPostNewsElement())
                }

                const OnPostNewsElement = (text) => {
                    store.dispatch(UpdateCreatorOnPostNewsElement(text))
                }

                return <News addPostNewsElement = {addPostNewsElement}
                              OnPostNewsElement = {OnPostNewsElement}
                              newsPostData = {state.newsPage.newsPostData}
                              onNewsPost = {state.newsPage.onNewsPost}/>
            }
            }

        </StoreContext.Consumer>
};



export default NewsContainer;