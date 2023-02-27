import React from "react";
import N from "./Navbar.module.css";
console.log(N);
const Navbar = () => {
    return (
        <nav className={N.nav}>
            <ul>
                <li><a>Profile</a></li>
                <li className={`${N.item} ${N.active}`}><a>Messages</a></li>
                <li><a>News</a></li>
                <li><a>Music</a></li>
                <br /> <li><a>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;