import React from "react";
import N from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={N.nav}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li className={`${N.item} ${N.active}`}><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <br /> <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;