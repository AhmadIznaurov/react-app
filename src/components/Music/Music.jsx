import  React from 'react'
import  m from './Music.module.css'

const Music = () => {
    return (
        <div className={m.music_wrapper}>
            <h1>MUSIC & WEB</h1>
            <p className={m.music}>
                Music is make something wrong. Don't use it in real. It will be better to use for learning
                <br/> language and make sport.
            </p>
            <p className={m.music_p}>If i scared some strange noise, i trying to be invisible. Ha ha, so funny.</p>
        </div>
    );
}

export  default Music;