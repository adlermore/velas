
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
import bgInner from '../assets/img/bg_inner.jpg';
import contactImg from '../assets/img/image_contact.jpg';
import onboardImg from '../assets/img/image_shape_02.jpg';
import travelImg1 from '../assets/img/Group01.png';
import travelImg2 from '../assets/img/Group02.png';
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
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { MdStarRate } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa6';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiAnchor } from 'react-icons/bi';
import { MdModeOfTravel } from 'react-icons/md';
import { RiShip2Line } from 'react-icons/ri';
import { GiShipWheel } from 'react-icons/gi';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SellectOption = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
];

const HomePage = () => {

    const [animeLine, setanimeLine] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

    const porstRef = useRef(null);
    const videoRef = useRef(null);
    const callRef = useRef(null);

    const handleScroll = () => {
        if (window.innerWidth > 991) {
            if (window.scrollY >= porstRef.current.offsetTop - 400 && window.scrollY <= porstRef.current.offsetTop) {
                setanimeLine((window.scrollY - 2100) / 8)
            }
            if (window.scrollY >= callRef.current.offsetTop - 800 && window.scrollY - 300 <= callRef.current.offsetTop) {
                setanimeLine((window.scrollY - 5000) / 10)
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        shouldFocusError: false,
    });


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

    const onSubmit = () => {
        console.log('success !');
    };

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsReviews = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                }
            }
        ]
    };

    return (
        <div className='home-wrapper'>
            <div className="main_slider">
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
            </div>
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
            <div className="reviews_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">VELAS EXPERIENCE</div>
                        <div className="main_title">What Our Customers Say</div>
                        <div className="background_title">reviews</div>
                    </div>
                    <div className="reviews_slider">
                        <Slider {...settingsReviews}>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        Very reliable
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Very reliable, good service and advice, clear processing
                                        via the customer portal.
                                    </div>
                                    <div className="user_name">
                                        Urlich Distelkamp
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        It cannot be better
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Great service. We had a great holiday! Many thanks to Mario, the greatest skipper.
                                    </div>
                                    <div className="user_name">
                                        Frank Reinboth
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        Very good support
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Excellent support when choosing the charter area and organizing a suitable ship.
                                    </div>
                                    <div className="user_name">
                                        Marc Sellac
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        Reliable as always
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        As always, I received excellent advice. I have booked boats
                                        with Velas for years.
                                    </div>
                                    <div className="user_name">
                                        Franz Zimmerman
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        Reliable as always
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        As always, I received excellent advice. I have booked boats
                                        with Velas for years.
                                    </div>
                                    <div className="user_name">
                                        Franz Zimmerman
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        It cannot be better
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Great service. We had a great holiday! Many thanks to Mario, the greatest skipper.
                                    </div>
                                    <div className="user_name">
                                        Frank Reinboth
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        Very good support
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Excellent support when choosing the charter area and organizing a suitable ship.
                                    </div>
                                    <div className="user_name">
                                        Marc Sellac
                                    </div>
                                </div>
                            </div>
                            <div className='reviews_block'>
                                <div className="review_inner">
                                    <div className="icon_block">
                                        <BsFillBookmarkFill />
                                        <span className='quote'>
                                            <BiSolidQuoteAltRight />
                                        </span>
                                    </div>
                                    <div className="quote_name">
                                        It cannot be better
                                    </div>
                                    <div className="rate_inline">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <div className="description">
                                        Great service. We had a great holiday! Many thanks to Mario, the greatest skipper.
                                    </div>
                                    <div className="user_name">
                                        Frank Reinboth
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="call_section" ref={callRef}>
                <div className="inner_bg">
                    <img src={bgInner} alt="bg-inner" style={{ transform: `translateY(-${animeLine}px)` }} />
                </div>
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">CONTACT US</div>
                        <div className="main_title">Call Our Experts</div>
                        <div className="main_description">Discuss your charter questions with a Vacation Planner today!</div>
                        <div className="background_title">CONTACT</div>
                    </div>
                    <a href="/#" className="call_inline">
                        <span className="call_icon"><FaPhone /></span>
                        <span className='number-span'>+44(0)2380457733</span>
                    </a>
                </div>
            </div>
            <div className="travel_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">BOOK TODAY</div>
                        <div className="main_title">Travel Itinerary</div>
                        <div className="background_title">Velas</div>
                    </div>
                    <div className="travel_line_container">
                        <div className="left_block">
                            <div className="travel_image">
                                <img src={travelImg1} alt="travelImg" />
                            </div>
                            <div className="travel_image bottom-mode">
                                <img src={travelImg2} alt="travelImg" />
                            </div>
                        </div>
                        <div className="right_block">
                            <div className="day_circle">Day<span>1</span></div>
                            <div className="info_container">
                                <div className="info_title">
                                    From Sami to Ithaca
                                </div>
                                <div className="info_description">
                                    Book a private yacht in paradise with the world’s premier yacht charter company. Travel with confidence.
                                    <br />
                                    <br />
                                    Departure: 09:00 AM
                                    <br />
                                    <br />
                                    Distance: 40nm
                                    <br />
                                    <br />
                                    Arrival: 12:00 AM
                                </div>
                            </div>
                            <div className="day_circle day-two">Day<span>2</span></div>
                            <div className="info_container top-mode">
                                <div className="info_title">
                                    Beautiful Beaches
                                </div>
                                <div className="info_description">
                                    After an exciting first day, we are sure that you and your guests will want to spend some quality time in peace and serenity. Explore the latest motor yachts.
                                    <br />
                                    <br />
                                    Distance: 60nm
                                    <br />
                                    <br />
                                    Hidden beaches
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts_section">
                <div className="custom_container">
                    <div className="contacts_inline">
                        <div className="contacts_inner">
                            <div className="title_wrapper">
                                <div className="section_title">GET IN TOUCH</div>
                                <div className="main_title">Interested in this yacht?</div>
                                <div className="background_title">CONTACT</div>
                            </div>
                            <div className="contacts_form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={errors?.user_name?.type === "required" ? "form-block  has-error" : "form-block"}  >
                                        <input placeholder="First Name*" className="form-control" name="user_name" {...register("user_name", { required: true })} />
                                        <p className="error-info" >This field is required</p>
                                    </div>
                                    <div className={errors?.user_surname?.type === "required" ? "form-block has-error" : "form-block"}  >
                                        <input placeholder="Last Name*" className="form-control" name="user_surname" {...register("user_surname", { required: true })} />
                                        <p className="error-info" >This field is required</p>
                                    </div>
                                    <div className={errors?.user_email?.type === "required" || errors?.user_email?.type === "pattern" ? "mail_inline form-block has-error" : "mail_inline form-block"}  >
                                        <input placeholder="Email" className="form-control" name="user_email" {...register("user_email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        {errors?.user_email?.type === "pattern" ? <p className="error-info email-info" >invalid Email</p> :
                                            <p className="error-info" >This field is required</p>}
                                    </div>
                                    <div className={errors?.phone_number?.type === "required" ? "form-block has-error" : "form-block"}  >
                                        <input type="number" placeholder="Phone Number" className="form-control" name="phone_number" {...register("phone_number", { required: true })} />
                                        <p className="error-info" >This field is required</p>
                                    </div>
                                    <div className='form-block' >
                                        <DatePicker
                                            showIcon
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </div>
                                    <div className={errors?.number?.type === "required" ? "form-block sellect_section has-error" : "form-block"}  >
                                        <Controller
                                            name="number"
                                            control={control}
                                            rules={{ required: 'Number of guests*' }}
                                            render={({ field }) => (
                                                <Select
                                                    className=" register_sellect"
                                                    options={SellectOption}
                                                    placeholder="Number of guests*"
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <p className="error-info" >This field is required</p>
                                    </div>
                                    <div className={errors?.comment?.type === "required" ? "form-block textarea-block  has-error" : " textarea-block form-block"}  >
                                        <textarea name="comment" placeholder="Message" className="form-control textarea_input"   {...register("comment", { required: true })} />
                                        <p className="error-info" >This field is required</p>
                                    </div>
                                    <button type='submit' className="site_btn send-btn">send <span className='icon-right'></span></button>
                                </form>
                            </div>
                        </div>
                        <div className="contact_article">
                            <div className="contact_container">
                                <div className="contact_img">
                                    <img src={contactImg} alt="contact-img" />
                                </div>
                                <div className="contact_info">
                                    <div className="inner_desc">
                                        YOUR CAPTAIN
                                    </div>
                                    <div className="contact_name">
                                        Lucas Seamore
                                    </div>
                                    <div className="contact_number">
                                        <FaPhone />  + 33 489 039 464
                                    </div>
                                    <div className="contact_mail">
                                        <BiEditAlt /> info@velasyachting.com
                                    </div>
                                    <ul className="contact_socilal_list">
                                        <li><a href="/#"><BiLogoFacebook /></a></li>
                                        <li><a href="/#"><BiLogoTwitter /></a></li>
                                        <li><a href="/#"><BiLogoInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="analytic_inline">
                        <div className="analytic_block">
                            <BiAnchor />
                            <div className="info">
                                <div className="number"> 15</div>
                                <div className="desc">YEARS IN BUSINESS</div>
                            </div>
                        </div>
                        <div className="analytic_block">
                            <MdModeOfTravel />
                            <div className="info">
                                <div className="number"> 12+</div>
                                <div className="desc">TRAVEL ROUTES</div>
                            </div>
                        </div>
                        <div className="analytic_block">
                            <RiShip2Line />
                            <div className="info">
                                <div className="number">02</div>
                                <div className="desc">STARTING LOCATIONS</div>
                            </div>
                        </div>
                        <div className="analytic_block">
                            <GiShipWheel />
                            <div className="info">
                                <div className="number"> 06</div>
                                <div className="desc">CERTIFIED SKIPPERS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;