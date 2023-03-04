import  React from 'react'
import  s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                   Ahmad
                </div>
                <div className={s.dialog}>
                    Movsar
                </div>
                <div className={s.dialog}>
                    Adlan
                </div>
                <div className={s.dialog}>
                    Hakim
                </div>
                <div className={s.dialog}>
                    Aslan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, when you do something</div>
                <div className={s.message}>I need to make a step to React</div>
                <div className={s.message}>It's so strange</div>
            </div>
        </div>
    );
}

export  default Dialogs;