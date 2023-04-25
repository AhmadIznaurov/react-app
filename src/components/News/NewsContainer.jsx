import React from "react";
import {ActCreatorAddPostNewsElement, UpdateCreatorOnPostNewsElement} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        newsPostData: state.newsPage.newsPostData,
        onNewsPost: state.newsPage.onNewsPost
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        addPostNewsElements: () => {
            dispatch(ActCreatorAddPostNewsElement())
        },
        OnPostNewsElements: (text) => {
            dispatch(UpdateCreatorOnPostNewsElement(text))
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;