import React from "react";
import H from "./Header.module.css"


const Header = () => {
    return (
        <header className={H.header}>
            <div className={H.react}>React App</div>
            <img src="https://i.morioh.com/2019/12/09/2669b86b772e.jpg"/>
        </header>
    );
}

export  default Header;