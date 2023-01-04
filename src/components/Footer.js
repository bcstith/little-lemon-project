import React from 'react';
import { Link} from "react-router-dom";


class Footer extends React.Component {
    render(){
        return(
            <>
                <div className="footer-section">
                    <div className='container'>

                        <div className="footer-display-grid">
                            <div className="grid-item"><img src="images/footer-logo.JPG" alt=""/></div>
                            <div className="grid-item footer-contact">
                                <h3>Contact Us</h3>
                                <p>info@littlelemonrestaurant.com</p>
                                <p>
                                    <img src="images/facebook-icon.png" alt="" className="social-icons"/>
                                    <img src="images/twitter-icon.png" alt="" className="social-icons"/>
                                    <img src="images/instagram-icon.png" alt="" className="social-icons"/>
                                    <img src="images/indeed-icon.png" alt="" className="social-icons"/>
                                </p>
                            </div>
                            <div className="grid-item footer-newsletter">
                                <form>
                                    <label for="newsletter">Sign up for our newsletter</label> <br />
                                    <input type="text" name="newsletter" placeholder='Enter Email' /> <button>Sign Up</button>
                                </form>

                                <p className="footer-copyright">&copy; Copyright 2023</p>
                            </div>
                            <div className="grid-item footer-links">
                                <h3>Links</h3>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/menu">Menu</Link></li>
                                        <li><Link to="/reservations">Reservations</Link></li>
                                        <li><Link to="/order">Order Online</Link></li>
                                    </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Footer;