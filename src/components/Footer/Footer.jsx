import React from "react";
import footerLogo from '../../assets/img/logo_footer.png';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoYoutube } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="page_footer">
            <div className="custom_container">
                <div className="footer_logo">
                    <img src={footerLogo} alt="footer-logo" />
                </div>
                <div className="footer_description">
                    Your Yacht Charter Holiday starts here
                </div>
                <ul className="footer_socilal_list">
                    <li><a href="/#"><BiLogoFacebook /></a></li>
                    <li><a href="/#"><BiLogoTwitter /></a></li>
                    <li><a href="/#"><BiLogoInstagram /></a></li>
                    <li><a href="/#"><BiLogoYoutube /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;














