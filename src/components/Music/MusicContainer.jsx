import  React from 'react'
import Music from "./Music";
import {addMusicActionCreator, addPostMusicActionCreator} from "../../redux/music-reducer";
import StoreContext from "../../StoreContext";


const MusicContainer= () => {

    return <StoreContext.Consumer >
        {
            (store) => {
                let state = store.getState();
                let addMusic = () => {
                    store.dispatch(addMusicActionCreator())
                }

                let addPostMusic = (textMusic) => {
                    let action= addPostMusicActionCreator(textMusic)
                    store.dispatch(action);
                }

                return <Music addMusic={addMusic} addPostMusic={addPostMusic}
                              musicData={state.musicPage.musicData}
                              postMusic={state.musicPage.postMusic}/>
            }
            }

        </StoreContext.Consumer>

}

export  default MusicContainer;