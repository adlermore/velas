import React from "react";
import mainLogo from '../../assets/img/logo_black.png';
import { FaPhone } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className='page_header'>
            <div className="header_inner">
                <div className="custom_container">
                    <div className="header_container">
                        <div className="main_logo">
                            <a href="/#"><img src={mainLogo} alt="main-logo" title="main-logo"/></a>
                        </div>
                        <ul className="header_list">
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">Ports</a></li>
                            <li><a href="/#">Amenities</a></li>
                            <li><a href="/#">Calendar</a></li>
                            <li><a href="/#">Gallery</a></li>
                            <li><a href="/#">Reviews</a></li>
                            <li><a href="/#">Itinerary</a></li>
                            <li><a href="/#">Contact</a></li>
                            <li><a href="/#">Fleet</a></li>
                        </ul>
                        <a href="/#" className="call_btn"><FaPhone /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;