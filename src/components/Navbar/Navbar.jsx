import React from "react";
import N from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={N.nav}>
            <div className={N.item}>
                <ul>
                    <li><NavLink to="/profile" className = { navData => navData.isActive ? N.active : N.item }>
                        Profile
                    </NavLink></li>
                    <li className={`${N.item} ${N.active}`}>
                        <NavLink to="/dialogs" className = { navData => navData.isActive ? N.active : N.item }>
                            Messages</NavLink></li>
                    <li><NavLink to="/news" className = { navData => navData.isActive ? N.active : N.item }>
                        News</NavLink></li>
                    <li><NavLink to="/music" className = { navData => navData.isActive ? N.active : N.item }>
                        Music</NavLink></li>
                    <br /> <li><NavLink to="/settings" className = { navData => navData.isActive ? N.active : N.item }>
                    Settings</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;