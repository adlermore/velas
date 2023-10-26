
import React, { useRef } from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mainSliderImg1 from '../assets/img/home-slider.jpg';
import mainSliderVidio1 from '../assets/video/slider-video.mp4';

const HomePage = () => {

    const videoRef = useRef(null);

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
                    <div className="slider_content"></div>
                </div>
                <div className='slider_container'>
                    <div className="slider_background">
                        <img src={mainSliderImg1} alt="main-slider" title='main-slider' />
                    </div>
                    <div className="slider_content"></div>
                </div>
            </Slider>
        </div>
    )
}

export default HomePage;