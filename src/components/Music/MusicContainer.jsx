import  React from 'react'
import Music from "./Music";
import {addMusicActionCreator, addPostMusicActionCreator} from "../../redux/music-reducer";




const MusicContainer= (props) => {
    let state = props.store.getState()

    let addMusic = () => {
        props.store.dispatch(addMusicActionCreator())
    }

    let addPostMusic = (textMusic) => {
        let action= addPostMusicActionCreator(textMusic)
        props.store.dispatch(action);
 }


    return (
        <Music addMusic={addMusic} addPostMusic={addPostMusic}
               musicData={state.musicPage.musicData}
               postMusic={state.musicPage.postMusic}/>


    );
}

export  default MusicContainer;