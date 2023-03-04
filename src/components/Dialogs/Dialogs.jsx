import  React from 'react'
import  s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Ahmad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Movsar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Hakim</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Adam</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Aslan</NavLink>
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