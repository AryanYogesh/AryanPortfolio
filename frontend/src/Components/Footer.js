import React from "react";
import '../styles/Footer.css';

const Footer = () => {
    return(
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">

                    <p>I'm Aryan Yogesh, a passionate developer building futuristic websites. Let's connect!</p>

                    <ul className="contact-info">
                        <li>Email: aryanyogesh1947@gmail.com</li>
                        <li>Phone: +91 7019558173</li>
                    </ul>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/aryan-yogesh-s1914/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/AryanYogesh" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/aa.ry.xnn/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Aryan Yogesh. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;