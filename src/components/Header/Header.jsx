import React from "react";
import H from "./Header.module.css"


const Header = () => {
    return (
        <header className={H.header}>
            <div className={H.react}>React App</div>
            <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"/>
        </header>
    );
}

export  default Header;