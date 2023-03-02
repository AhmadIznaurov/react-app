import React from "react";
import H from "./Header.module.css"


const Header = () => {
    return (
        <header className={H.header}>
            <div className={H.react}>React App</div>
            <img src="https://play-lh.googleusercontent.com/bFmuz5vLYK73Vka0gkB5ccg0cyL_RoXLQV060IOTO7EBme6tNI6KjH3cbDT_t_R1QA"/>
        </header>
    );
}

export  default Header;