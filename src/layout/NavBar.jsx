import { NavLink } from "react-router-dom";

import "./NavBar.scss";


export default function Navbar() {

    return (
        <nav>
            <h1>Strangers Things</h1>
            <menu>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <a onClick={}>Log Out</a>
                </li>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
            </menu>
        </nav>
    )
}