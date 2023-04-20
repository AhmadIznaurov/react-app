import  React from 'react'
import  m from './Music.module.css'
import Post from "../Profile/Mypost/Post/Post";





const Music = (props) => {
    const musicChange = props.musicData.map(m => <Post message={m.message} likesCount={m.likesCount} />)

    let musicChangePost = React.createRef();

    let addMusic = () => {
        props.addMusic()
    }

 let addPostMusic = () => {
        let textMusic = musicChangePost.current.value;
        props.addPostMusic(textMusic);
 }


    return (
        <div className={m.music_wrapper}>
            <h1>MUSIC & WEB</h1>
            <p className={m.music}>
                Music is make something wrong. Don't use it in real. It will be better to use for learning
                <br/> language and make sport.
            </p>
            <p className={m.music_p}>If i scared some strange noise, i trying to be invisible. Ha ha, so funny.</p>
            <div className={m.container}>
                <div>
                    <textarea ref={musicChangePost} onChange={addPostMusic} value={props.postMusic} />
                </div>
                <div>
                    <button onClick={addMusic}>Add music</button>
                </div>
                {musicChange}
            </div>
        </div>
    );
}

export  default Music;