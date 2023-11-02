
import React, { useRef, useEffect, useState } from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mainSliderImg1 from '../assets/img/home-slider.jpg';
import mainSliderVidio1 from '../assets/video/slider-video.mp4';
import wolfImg from '../assets/img/image_shape_01.jpg';
import gallery1 from '../assets/img/gallery_01.jpg';
import gallery2 from '../assets/img/gallery_02.jpg';
import gallery3 from '../assets/img/gallery_03.jpg';
import gallery4 from '../assets/img/gallery_04.jpg';
import gallery5 from '../assets/img/gallery_05.jpg';
import gallery6 from '../assets/img/gallery_06.jpg';
import onboardImg from '../assets/img/image_shape_02.jpg';
import { FiAnchor } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { PiUsersThreeBold } from 'react-icons/pi';
import { FaRuler } from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaRegListAlt } from 'react-icons/fa';
import { FaOilCan } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


const HomePage = () => {

    const [animeLine, setanimeLine] = useState(0);

    const porstRef = useRef(null);
    const videoRef = useRef(null);

    const handleScroll = () => {
        if (window.innerWidth > 991) {
            if (window.scrollY >= porstRef.current.offsetTop - 400 && window.scrollY <= porstRef.current.offsetTop) {
                setanimeLine((window.scrollY - 2100) / 8)
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[data-fancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='home-wrapper'>
            <Slider {...settings}>
                <div className='slider_container'>
                    <div className="slider_background">
                        <video ref={videoRef} className="video_inner_container" width="100%" height="100%" autoPlay muted loop>
                            <source src={mainSliderVidio1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="slider_content">
                        <div className="content_title"> Velas</div>
                        <span className="content_label">Book today</span>
                        <div className="content_description">Yacht Charters</div>
                        <a href="/#" className='boock_btn'>boock now <span className='icon-right'></span></a>
                    </div>
                </div>
                <div className='slider_container'>
                    <div className="slider_background">
                        <img src={mainSliderImg1} alt="main-slider" title='main-slider' />
                    </div>
                    <div className="slider_content">
                        <div className="content_title"> Velas</div>
                        <span className="content_label">Book today</span>
                        <div className="content_description">Yacht Charters</div>
                        <a href="/#" className='boock_btn '>boock now <span className='icon-right'></span></a>
                    </div>
                </div>
            </Slider>
            <div className="book_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">PLAN YOUR HOLIDAY</div>
                        <div className="main_title">Book Now And Win Discounts</div>
                        <div className="main_description">Monohull or Catamaran, Bareboat or Skippered, you make your choice we make it come true</div>
                        <div className="background_title">explore</div>
                    </div>
                    <div className="book_inline">
                        <div className="book_block">
                            <div className="block_title icon-map-icon">Our destinations</div>
                            <div className="block_description">
                                Our base in Volos Marina is easily accessible and is also a
                                great starting point for your sailing trip.
                            </div>
                        </div>
                        <div className="book_block">
                            <div className="block_title icon-calendar">Travel calendar</div>
                            <div className="block_description">
                                Season starts from the month of April and lasts until end of
                                October. High season is from July to August
                            </div>
                        </div>
                        <div className="book_block">
                            <div className="block_title icon-calling">Easy booking</div>
                            <div className="block_description">
                                We cover your every step, from your first booking request
                                with our agents, to your official check-out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wolf_section">
                <div className="custom_container">
                    <div className="image_container">
                        <div className="image_block">
                            <img src={wolfImg} alt="wolf-img" />
                        </div>
                    </div>
                    <div className="wolf_block">
                        <div className="title_wrapper">
                            <div className="section_title">OVERVIEW</div>
                            <div className="main_title">Sea Wolf</div>
                            <div className="main_description">Sea Wolf is a perfect combination of luxury and performance</div>
                            <div className="background_title">yaht</div>
                        </div>
                        <div className="wolf_table">
                            <div className="table_inner">
                                <div className="table_block">
                                    <FiUsers />
                                    <span className='table-name'>GUESTS SLEEPING</span>
                                    <span className='table-number'>12</span>
                                </div>
                                <div className="table_block">
                                    <FiAnchor />
                                    <span className='table-name'>CABINS</span>
                                    <span className='table-number'>6</span>
                                </div>
                                <div className="table_block">
                                    <PiUsersThreeBold />
                                    <span className='table-name'>CREW</span>
                                    <span className='table-number'>8</span>
                                </div>
                                <div className="table_block">
                                    <FaRuler />
                                    <span className='table-name'>LENGTH</span>
                                    <span className='table-number'>42 m</span>
                                </div>
                            </div>
                            <div className="table_inner">
                                <div className="table_block">
                                    <MdSpeed />
                                    <span className='table-name'>CRUISING SPEED</span>
                                    <span className='table-number'>12 kt</span>
                                </div>
                                <div className="table_block">
                                    <AiOutlineCalendar />
                                    <span className='table-name'>YEARS</span>
                                    <span className='table-number'>08/18</span>
                                </div>
                                <div className="table_block">
                                    <FaRegListAlt />
                                    <span className='table-name'>BUILDER</span>
                                    <span className='table-number'>Mondomarine</span>
                                </div>
                                <div className="table_block">
                                    <FaOilCan />
                                    <span className='table-name'>WATER TANK</span>
                                    <span className='table-number'>1600 l</span>
                                </div>
                            </div>
                        </div>
                        <div className="site_btn">
                            download boat pdf <span className='icon-right'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ports_section" ref={porstRef}>
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">DESTINATIONS</div>
                        <div className="main_title">Ports & Harbours</div>
                        <div className="main_description">
                            Follow suggested itineraries or make your own
                            schedule and discover Kefalonia island at your own pace.
                        </div>
                        <div className="background_title">tour</div>
                    </div>
                    <div className="ports_wrapper">
                        <span className='animated-Blue-Line' style={{ transform: `translateY(${animeLine}px)` }} ></span>
                        <ul className="ports_list">
                            <li className='icon-map'><span className='day-span'>DAY  01</span><div className='port-name'>Sami</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  02</span><div className='port-name'>Vathy</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  03</span><div className='port-name'>Atokos</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  04</span><div className='port-name'>Kalamos</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  05</span><div className='port-name'>Syvota</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  06</span><div className='port-name'>Vassiliki</div></li>
                            <li className='icon-map'><span className='day-span'>DAY  07</span><div className='port-name'>Sami</div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="onboard_section">
                <div className="custom_container">
                    <div className="board_block">
                        <div className="title_wrapper">
                            <div className="section_title">SEA WOLF</div>
                            <div className="main_title">Onboard Amenities</div>
                            <div className="background_title">yaht</div>
                        </div>
                        <ul className="onboard_list">
                            <li><BsCheckLg />Air conditioning</li>
                            <li><BsCheckLg />Bimini top</li>
                            <li><BsCheckLg />Electric toilet</li>
                            <li><BsCheckLg />Autopilot</li>
                            <li><BsCheckLg />Dinghy</li>
                            <li><BsCheckLg />Refrigerator</li>
                        </ul>
                        <div className="site_btn">book now <span className='icon-right'></span></div>
                    </div>
                    <div className="image_container">
                        <div className="image_block">
                            <img src={onboardImg} alt="wolf-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tour_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">SAILING TOURS</div>
                        <div className="main_title">June ’23 Calendar</div>
                        <div className="main_description">Sami – Fiskardo – Kioni – Vathy – Atokos – Kalamos – Spartochori – Syvota – Vassiliki – Sami</div>
                        <div className="background_title">booking</div>
                    </div>
                    <ul className="calendar_list">
                        <li>
                            <div className='flag-wrapper'><BsFillBookmarkFill /><span>03</span>JUN</div>
                            <div className="block_info">
                                <div className="block_title">Sami, Kefalonia Booked</div>
                            </div>
                        </li>
                        <li>
                            <div className='flag-wrapper'><BsFillBookmarkFill /><span>10</span>JUN </div>
                            <div className="block_info">
                                <div className="block_title">Sami, Kefalonia</div>
                                <div className="block_price">€ 6500</div>
                                <div className="block_date">03.06. - 09.03.2023</div>
                            </div>
                        </li>
                        <li>
                            <div className='flag-wrapper'><BsFillBookmarkFill /><span>17</span>JUN </div>
                            <div className="block_info">
                                <div className="block_title">Sami, Kefalonia</div>
                                <div className="block_price">€ 6.950 <span>-22%</span></div>
                                <div className="block_date">03.05. - 10.11.2023</div>
                            </div>
                        </li>
                        <li>
                            <div className='flag-wrapper'><BsFillBookmarkFill /><span>24</span>JUN </div>
                            <div className="block_info">
                                <div className="block_title">Sami, Kefalonia</div>
                                <div className="block_price">€ 8.100 <span>-22%</span> </div>
                                <div className="block_date">03.06. - 10.08.2023</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="gallery_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">TAKE A LOOK</div>
                        <div className="main_title">Sea Wolf Gallery</div>
                        <div className="background_title">Gallery</div>
                    </div>
                    <Fancybox
                        options={{
                            Carousel: {
                                infinite: false,
                            },
                        }}
                    >
                        <ul className="gallery_list">
                            <li href={gallery1} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery1} alt="gallery-img" />
                            </li>
                            <li href={gallery2} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery2} alt="gallery-img" />
                            </li>
                            <li href={gallery3} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery3} alt="gallery-img" />
                            </li>
                            <li href={gallery4} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery4} alt="gallery-img" />
                            </li >
                            <li href={gallery5} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery5} alt="gallery-img" />
                            </li >
                            <li href={gallery6} data-fancybox="gallery">
                                <BsSearch />
                                <img src={gallery6} alt="gallery-img" />
                            </li>
                        </ul>
                    </Fancybox>
                </div>
            </div>
        </div>
    )
}

export default HomePage;