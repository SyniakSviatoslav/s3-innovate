
import "./index.css";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Coma from "../../../assets/coma.svg";

const Reviews = () => {
    return (
        <div id="reviews">
            <div className="slider-container">
                <img src={Coma} className="coma-1"></img>
                <img src={Coma} className="coma-2"></img>
                <Splide
                    options={{
                        rewind: true,
                        gap: '1rem',
                        arrows: 'slider'
                    }}
                    onMoved={ ( splide, newIndex ) => {
                        // eslint-disable-next-line
                        console.log( 'moved', newIndex );}}
                >
                    <SplideSlide>
                        <div className="slide">
                            <div className="slide-title-container">
                                <span className="slide-name"><strong>Mr Ang Kian Seng</strong>
                                </span>
                                <span className="slide-company">BCA’s Group Director of the Environmental Sustainability Group
                                </span>
                            </div>
                            <div className="line"></div>
                            <span className="slide-description"><i>“We are glad that S3 Innovate was able to overcome the challenges and meet our
                                expectations in the development of the portal. S3 was able to quickly apply its IT expertise to
                                integrate IOT, energy management and data collection
                                from the buildings’ subsystems together at the same time apply data
                                analytic to make sense of the data stored in the cloud.”
                            </i></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="slide">
                            <div className="slide-title-container">
                                <span className="slide-name"><strong>Curabitur mattis</strong>
                                </span>
                                <span className="slide-company">sus nisl, sollicitudin eu nibh sit amet
                                </span>
                            </div>
                            <div className="line"></div>
                            <span className="slide-description"><i>“Praesent erat lectus, accumsan et gravida at, convallis eget lectus. 
                                Quisque accumsan fringilla erat, ac malesuada libero semper vitae. Quisque id lorem posuere, semper tortor ut, pulvinar arcu. 
                                In eget lectus vel mi convallis porttitor eget et sapien. Nam iaculis, augue ac interdum lobortis, massa justo porta ligula, eu 
                                posuere diam enim ut nibh. Proin hendrerit efficitur pharetra. Suspendisse tempor nisi
                                 turpis, a sagittis felis bibendum et. Duis in scelerisque leo, id cursus mauris.”
                            </i></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="slide">
                            <div className="slide-title-container">
                                <span className="slide-name"><strong>Et varius </strong>
                                </span>
                                <span className="slide-company">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </div>
                            <div className="line"></div>
                            <span className="slide-description"><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam sed augue sed tellus lobortis auctor. Curabitur mattis condimentum rutrum. Nunc sollicitudin, 
                                ligula vitae sagittis blandit, diam turpis posuere urna, nec maximus sapien tellus sed massa. In id scelerisque nunc, nec faucibus enim. 
                                Vivamus tincidunt ligula a enim faucibus, non ullamcorper nisi semper. Donec congue dapibus turpis.”
                            </i></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="slide">
                            <div className="slide-title-container">
                                <span className="slide-name"><strong>Et varius </strong>
                                </span>
                                <span className="slide-company">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </div>
                            <div className="line"></div>
                            <span className="slide-description"><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam sed augue sed tellus lobortis auctor. Curabitur mattis condimentum rutrum. Nunc sollicitudin, 
                                ligula vitae sagittis blandit, diam turpis posuere urna, nec maximus sapien tellus sed massa. In id scelerisque nunc, nec faucibus enim. 
                                Vivamus tincidunt ligula a enim faucibus, non ullamcorper nisi semper. Donec congue dapibus turpis.”
                            </i></span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="slide">
                            <div className="slide-title-container">
                                <span className="slide-name"><strong>Et varius </strong>
                                </span>
                                <span className="slide-company">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                            </div>
                            <div className="line"></div>
                            <span className="slide-description"><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nullam sed augue sed tellus lobortis auctor. Curabitur mattis condimentum rutrum. Nunc sollicitudin, 
                                ligula vitae sagittis blandit, diam turpis posuere urna, nec maximus sapien tellus sed massa. In id scelerisque nunc, nec faucibus enim. 
                                Vivamus tincidunt ligula a enim faucibus, non ullamcorper nisi semper. Donec congue dapibus turpis.”
                            </i></span>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
        </div>
    );
}

export default Reviews;