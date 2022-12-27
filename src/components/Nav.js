import React from 'react';


class Nav extends React.Component {
    render() {
        return(
        <nav class="container">
            <a href="/" className="logo"><img src="images/little-lemon-logo.JPG" alt="Little Lemon"/></a>
            <ul >
                <li><a href="home.html">Home</a></li>
                <li><a href="blog.html">About</a></li>
                <li><a href="news.html">Menu</a></li>
                <li><a href="news.html">Reservations</a></li>
                <li><a href="news.html">Order Online</a></li>
                <li><a href="news.html">Login</a></li>
            </ul>
        </nav>
        )
    }
}

export default Nav