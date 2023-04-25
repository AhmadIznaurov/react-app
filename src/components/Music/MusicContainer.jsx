import  React from 'react'
import Music from "./Music";
import {addMusicActionCreator, addPostMusicActionCreator} from "../../redux/music-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        musicData: state.musicPage.musicData,
        postMusic: state.musicPage.postMusic
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMusics:  () => {
            dispatch(addMusicActionCreator())
        },
        addPostMusics: (textMusic) => {
            dispatch(addPostMusicActionCreator(textMusic));
        }
    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export  default MusicContainer;