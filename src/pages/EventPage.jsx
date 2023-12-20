
import React, { useRef, useEffect, useState } from 'react';
import '../assets/scss/HomePage/_homePage.scss';
import mainSliderImg1 from '../assets/img/home-slider.jpg';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import gallery1 from '../assets/img/gallery_01.jpg';
import gallery2 from '../assets/img/gallery_02.jpg';
import gallery3 from '../assets/img/gallery_03.jpg';
import gallery4 from '../assets/img/gallery_04.jpg';
import gallery5 from '../assets/img/gallery_05.jpg';
import gallery6 from '../assets/img/gallery_06.jpg';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { BsSearch } from 'react-icons/bs';
import AnimatedSVG from '../components/AnimatedSVG';


const EventPage = () => {

    const [EventName, setEventName] = useState('See Wolf');


    const svgData = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTYuNDQgOTE5LjQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMntmaWxsOiMwMDAwMjQ7fS5jbHMtMXtvcGFjaXR5OjAuMjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlZlbGFzX21hc2s8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzMS41NywxNjkuMzFjLTE1LjExLDAtMjkuMzIsNS43LTQxLjA4LDE2LjQ3LTEzLjcxLDEyLjU1LTIxLjY4LDMxLjI0LTIxLjg2LDUxLjI5LS4xNywxOC40Miw3LjQxLDM3LjI4LDIwLjgxLDUxLjc0LDEzLjk0LDE1LDMyLjE0LDIzLjMyLDUxLjI0LDIzLjMySDI0MWMxNy4zNy0uMDgsMzQuNzctNy41OCw0Ny43My0yMC41NiwxMi43OC0xMi43OSwyMC4wOS0yOS42LDIwLTQ2LjFDMzA4LjcsMjA3LDI3MC40NiwxNjkuMzEsMjMxLjU3LDE2OS4zMVpNMjQxLDMwMi4xM2MtMTcuNC4wOC0zMy04LTQ0LjE3LTIwLjEyLTExLjM5LTEyLjI5LTE4LjMtMjguNy0xOC4xNi00NC44NXM2LjE1LTMyLjU5LDE4LjYyLTQ0YzQxLjE3LTM3LjY5LDEwMS40NSw4Ljk0LDEwMS41NCw1Mi4zNEMyOTguODQsMjc0LjE2LDI3Mi4zMiwzMDIsMjQxLDMwMi4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOTcuMjQsMTkzLjE1Yy0xMi40NywxMS40Mi0xOC40NywyNy44OC0xOC42Miw0NHM2Ljc3LDMyLjU2LDE4LjE2LDQ0Ljg1YzExLjIxLDEyLjEsMjYuNzcsMjAuMiw0NC4xNywyMC4xMiwzMS4zNy0uMTUsNTcuODktMjgsNTcuODMtNTYuNjRDMjk4LjY5LDIwMi4wOSwyMzguNDEsMTU1LjQ2LDE5Ny4yNCwxOTMuMTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODA4LjA2LDYwMi43NGMtOC04LjI5LTE2LjMzLTE2Ljg3LTIzLjI5LTI1LjU2cy0xMS43My0xNi40NS0xNC45LTI0Yy0xMS0yNi4zMy00LjY1LTU1LjY4LDItODYuNzYsMi4wNS05LjU0LDQuMTctMTkuNCw1Ljc0LTI5LjE1LDUuMzQtMzMuMTIsMy4yMi02MS4xLTYuNDktODUuNTUtMTIuMTItMzAuNS0zNi45NC01NC02Ni40MS02My0xMS0zLjMyLTIyLjIzLTQuNjItMzMuMTItNS44OC0xNC42My0xLjY5LTI4LjQ2LTMuMjktMzkuNC05LjUzLTIyLjU1LTEyLjg2LTI3LTQwLjYxLTMxLjYxLTcwLS43Ni00Ljc3LTEuNTQtOS43LTIuNC0xNC40N0M1OTAsMTQzLjM3LDU2OC43MiwxMDAuNiw1MzYuNjQsNjUuMTVjLTIwLjI5LTIyLjQzLTUzLjgtNTAuODctOTguMTYtNTlhMTIzLjgxLDEyMy44MSwwLDAsMC0yMi4zNi0yYy0zNy4wNiwwLTcwLjY5LDE1LjktODcuNzksNDEuNDktMjQuNjUsMzYuODktMTIuMiw4MC41Ny0xLjIxLDExOS4xMSwzLjI3LDExLjQ5LDYuMzcsMjIuMzUsOC42MiwzMywxNS4yNCw3Mi4yNC0yLjgxLDEwOC4wOS0xNC45MywxMjMtMTYuMzUsMjAuMTYtNDMuMDksMzAuMzgtNzkuNDYsMzAuMzgtMy41NiwwLTcuMjctLjEtMTEtLjI5LTQzLjIxLTIuMjUtNzMuMzgtMzguNDktMTAyLjU1LTczLjU1Qzk5LDI0Mi43Niw2OS4yNSwyMDcsMjYuODgsMjA3QTg0LjI1LDg0LjI1LDAsMCwwLDAsMjExLjY1djExLjg5Qzk2LjY1LDE4Ni4yOCwxMjYuMDcsMzU2LjcsMjI5LjU1LDM2Mi4wOGMxNDcuNTEsNy42NywxMjUuODMtMTI5LjM1LDExNy43Ny0xNjcuNTgtMTAuMTgtNDguMjMtMzcuMTktMTAxLjA4LTkuMTgtMTQzLDE5LjQyLTI5LjA3LDYxLjQ3LTQxLjA1LDk4LTM0LjM0czY3LjY5LDI5LDkxLjQ0LDU1LjI2QzU1OCwxMDYsNTc4LjQ3LDE0Ny4xMiw1ODYuMjIsMTkwLjE4YzYuMTIsMzMuOTIsOCw3NC41MywzOS44OCw5Mi43NCwyMS45NSwxMi41Miw1MC40Miw5LDc1LDE2LjQ4LDI3Ljc3LDguNDEsNDguNzUsMzAuNzcsNTguNzMsNTUuOTFzMTAuMDYsNTIuNzUsNS43OSw3OS4yYy02LjYsNDEtMjMuMSw4My43My03LDEyMi40Myw0LDkuNiw5LjgzLDE4LjQ3LDE2LjYsMjYuOTQsMjYuNjUsMzMuMzIsNjcuNzEsNjAuNDMsNjcuNTUsMTAwLjgtLjEsMjYtMTkuNDMsNDkuODktNDQuNDgsNjIuMjVzLTU0Ljg1LDE0LjUzLTgzLjExLDExLjQyYy0zNi42LTQtNzUuMzctMTYuMTQtMTA4Ljg2LTIuMDUtMjksMTIuMTctNDUuNyw0MS4wNS03My42Niw1NS0yMiwxMS00OS45MSwxMS4yNi03Mi4xNC43Mi0zNC40NC0xNi4zNC01NS4xNy01Ni05My42Ny02MC41QzMzNi41Miw3NDgsMzA5LDc2OS4xNCwyOTIuNzQsNzkyLjgzUzI2OCw4NDQuNywyNDguNTgsODY2LjJDMTY4LDk1NS41MywxNS4yMiw4NTcuNjgsMCw4NDcuNTh2MTUuODhjMi4xMywxLjM1LDQuNTUsMi44Miw3LjM1LDQuNDhhMzk0Ljg3LDM5NC44NywwLDAsMCwzOSwyMGMyOSwxMi45NSw3Mi40OCwyOC4zOSwxMTUuMiwyOC4zOWgwYzQxLjA4LDAsNzMuNTItMTQsOTYuNDEtNDEuNzMsMTEuMzUtMTMuNzIsMTkuNC0yOC45NSwyNy4xOC00My42OSw1LjctMTAuNzksMTEuMDktMjEsMTcuNjQtMzAuNTRDMzE0Ljg4LDc4Mi43OSwzMzYuMzQsNzY0LDM2MC4zNiw3NjRhNDQuNTYsNDQuNTYsMCwwLDEsNS4yOS4zMWMxOC44OCwyLjE4LDMzLjY4LDE1LjUsNDkuMzUsMjkuNiwxMi4yMSwxMSwyNC44MywyMi4zNSw0MC41NiwyOS44MWE5Ni41OSw5Ni41OSwwLDAsMCw4Mi42NC0uODJjMTQuODEtNy40MSwyNi4zNi0xOC4xNSwzNy41My0yOC41MywxMS40LTEwLjYsMjIuMTYtMjAuNiwzNS40MS0yNi4xOCw5LjEyLTMuODMsMTkuNTctNS42OSwzMi01LjY5LDE0LjIyLDAsMjguOTEsMi4zNCw0NC40Nyw0LjgyLDguNjgsMS4zOCwxNy42NSwyLjgyLDI2LjQ5LDMuNzlhMjE4LjEzLDIxOC4xMywwLDAsMCwyMy43NywxLjM0YzI1LDAsNDcuMjMtNC42OCw2Ni0xMy45MywzMS0xNS4yOCw1MS4wNi00My45Miw1MS4xNy03M0M4NTUuMDksNjUxLjM0LDgzMS4xOCw2MjYuNjMsODA4LjA2LDYwMi43NFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNDguNTgsODY2LjJjMTkuMzktMjEuNSwyNy45My00OS42OCw0NC4xNi03My4zN3M0My43OC00NC43OSw3NC4xMi00MS4yOGMzOC41LDQuNDYsNTkuMjMsNDQuMTYsOTMuNjcsNjAuNSwyMi4yMywxMC41NCw1MC4xOCwxMC4yNiw3Mi4xNC0uNzIsMjgtMTQsNDQuNy00Mi44Niw3My42Ni01NSwzMy40OS0xNC4wOSw3Mi4yNi0yLDEwOC44NiwyLjA1LDI4LjI2LDMuMTEsNTguMDYuOTQsODMuMTEtMTEuNDJzNDQuMzgtMzYuMjQsNDQuNDgtNjIuMjVjLjE2LTQwLjM3LTQwLjktNjcuNDgtNjcuNTUtMTAwLjgtNi43Ny04LjQ3LTEyLjYxLTE3LjM0LTE2LjYtMjYuOTQtMTYuMTItMzguNy4zOC04MS40NSw3LTEyMi40Myw0LjI3LTI2LjQ1LDQuMTktNTQuMDctNS43OS03OS4ycy0zMS00Ny41LTU4LjczLTU1LjkxYy0yNC41Ny03LjQ0LTUzLTQtNzUtMTYuNDgtMzEuOTItMTguMjEtMzMuNzYtNTguODItMzkuODgtOTIuNzRDNTc4LjQ3LDE0Ny4xMiw1NTgsMTA2LDUyNy41OCw3Mi40MWMtMjMuNzUtMjYuMjUtNTQuOS00OC41Ni05MS40NC01NS4yNnMtNzguNTgsNS4yNy05OCwzNC4zNGMtMjgsNDEuOTMtMSw5NC43OCw5LjE4LDE0Myw4LjA2LDM4LjIzLDI5Ljc0LDE3NS4yNS0xMTcuNzcsMTY3LjU4QzEyNi4wNywzNTYuNyw5Ni42NSwxODYuMjgsMCwyMjMuNTR2NjI0QzE1LjIyLDg1Ny42OCwxNjgsOTU1LjUzLDI0OC41OCw4NjYuMloiLz48L3N2Zz4'

    useEffect(() => {
        const element = document.getElementById('curr_container');
        const path = window.location.href;
        const parts = path.split("/");
        const desiredPart = parts.slice(parts.indexOf("eventPage") + 1).join("/");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (desiredPart === 'Wolf') {
            setEventName('See Wolf')
        } else if (desiredPart === 'Lagoon') {
            setEventName('Sea Lagoon')
        } else if (desiredPart === 'Pearl') {
            setEventName('White Pearl')
        }
    }, [])

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

    return (
        <div className='event-wrapper' id="curr_container">
            <div className="event_hero" style={{ backgroundImage: `url(${mainSliderImg1})` }}>
                <div className="custom_container">
                    <div className="hero_content">
                        <div className="title_wrapper center_mode">
                            <div className="main_title">Event</div>
                            <div className="background_title">yaht</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event_section gallery_section">
                <div className="custom_container">
                    <div className="title_wrapper center_mode">
                        <div className="section_title">OVERVIEW</div>
                        <div className="main_title">{EventName}</div>
                        <div className="main_description">Sea Wolf is a perfect combination of luxury and performance</div>
                        <div className="background_title">yaht</div>
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
            <div className="wrapper_test">
                <AnimatedSVG svgData={svgData} />
            </div>
        </div>
    )
}

export default EventPage;