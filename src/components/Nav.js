import React from 'react';
import { Link} from "react-router-dom";


class Nav extends React.Component {
    render() {
        return(

        <div className="nav-container">
            <nav className="container">
                <a href="/" className="logo"><img src="images/little-lemon-logo.JPG" alt="Little Lemon"/></a>

                <input type="checkbox" id="nav-toggle"/>
                <label htmlFor="nav-toggle" className="burger-menu">
                    <img src="images/nav-menu.png" alt="Nav Menu"/>
                </label>
                <div className="menu-items">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order">Order Online</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
        )
    }
}

export default Nav