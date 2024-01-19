import React, { useEffect, useState, useRef, memo } from "react";
import mainLogo from '../../assets/img/logo_black.png';
import { FaPhone } from 'react-icons/fa6';
import { Twirl as Hamburger } from 'hamburger-react';
import menuImg from '../../assets/img/cropped-favicon_02-300x300.png'
import '../../assets/scss/_header.scss';
import { Link } from "react-router-dom";


const Header = () => {

    const [scrollY, setScrollY] = useState(0);
    const [scrollDirectionUp, setScrollDirectionUp] = useState(false);
    const headerRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

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

    let menuOpen = () => {
        if (!document.body.classList.contains('menu-opened')) {
            setOpen(true);
            document.body.classList.add('menu-opened')
        } else {
            setOpen(false);
            document.body.classList.remove('menu-opened')
        }
    }

    const scrollView = (e , sectionName) => {
        e.preventDefault();
        const element = document.getElementById(sectionName);
        if (element) {
            element.scrollIntoView({block: "center", behavior: 'smooth' });
            if (document.body.classList.contains('menu-opened')) {
                setOpen(false);
                document.body.classList.remove('menu-opened')
            }
        }
    }

    return (
        <header ref={headerRef} className="page_header header_center_mode">
            <div className="header_inner">
                <div className="custom_container">
                    <div className="header_container">
                        <div className="main_logo">
                            <Link to="/"><img src={mainLogo} alt="main-logo" title="main-logo" /></Link>
                        </div>
                        <Hamburger toggled={isOpen} toggle={menuOpen} />
                        <div className="menu_container">
                            <div className="menu_container_inner">
                                <div className="menu_image">
                                    <img src={menuImg} alt="menu_img" />
                                </div>
                                <ul className="header_list">
                                    <li><a onClick={(e)=>{scrollView(e,'home')}} href="/#">Home</a></li>
                                      <li><a onClick={(e)=>{scrollView(e,'about')}} href="/#">About</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'ports')}} href="/#">Ports</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'amenities')}} href="/#">Amenities</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'calendar')}} href="/#">Calendar</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'gallery')}} href="/#">Gallery</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'reviews')}} href="/#">Reviews</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'itinerary')}} href="/#">Itinerary</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'contact')}} href="/#">Contact</a></li>
                                    <li><a onClick={(e)=>{scrollView(e,'fleet')}} href="/#">Fleet</a></li>
                                </ul>
                                <a href="/#" className="call_btn"><FaPhone /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header);