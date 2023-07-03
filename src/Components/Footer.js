import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container">
        
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagramSquare} style={{ color: "#ffffff", }} />
                </a>
            </div>
        </div>
    );
};

export default Footer;


