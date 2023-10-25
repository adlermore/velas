import React, { useEffect, useState, useRef, memo } from "react";
import mainLogo from '../../assets/img/logo_black.png';
import { FaPhone } from 'react-icons/fa6';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > scrollY) {
                setScrollDirectionUp(false);
            } else {
                setScrollDirectionUp(true);
            }
            setScrollY(currentScrollY);
        };

        if (scrollY > 130 && scrollDirectionUp) {
            headerRef.current.classList.remove('header_center_mode')
            headerRef.current.classList.add('header_inline_mode')
            headerRef.current.classList.remove('header_inline_hide')
        } else if (scrollY > 130 && !scrollDirectionUp) {
            headerRef.current.classList.add('header_inline_hide')
            setTimeout(() => {
                headerRef.current.classList.add('header_inline_mode')
                headerRef.current.classList.remove('header_center_mode')
            }, 500);
        }
        else if (scrollY < 2 && !headerRef.current.classList.contains('header_center_mode')) {
            headerRef.current.classList.add('header_inline_hide')
            setTimeout(() => {
                headerRef.current.classList.remove('header_inline_mode')
                headerRef.current.classList.add('header_center_mode')
                headerRef.current.classList.remove('header_inline_hide')
            }, 500);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY, scrollDirectionUp]);

    return (
        <header ref={headerRef} className="page_header header_center_mode">
            <div className="header_inner">
                <div className="custom_container">
                    <div className="header_container">
                        <div className="main_logo">
                            <a href="/#"><img src={mainLogo} alt="main-logo" title="main-logo" /></a>
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

export default memo(Header);