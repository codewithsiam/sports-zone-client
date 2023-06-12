import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";


const Banner = () => {

    return (
        <div className="bg-red-100 h-screen w-full">
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Autoplay, Pagination]}
                className="mySwiper"
            >
                {/* football  */}
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/yyq4vdr/KIDS-FOOTBALL-TRAININ-width-1605-height-583-format-webp.webp)" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl md:text-5xl text-white font-bold uppercase">Football Camps</h1>
                                <p className="mb-5 ">Unleash your potential at our transformative Football Summer Camps. Experience top-tier coaching, specialized training, and unforgettable moments. Join us to elevate your game and create lifelong memories.</p>
                                <Link to="/allClasses">
                                    <button className="btn btn-primary text-white rounded-full">View Prices</button>
                                </Link>
                                <Link to="/instructors">
                                    <button className="btn btn-info rounded-full btn-outline ml-5">Talk To An Advisor</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* cricket  */}
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/6Xrwr17/illustration-batsman-cricket-game-watercolor-background-banner-ai-generated-852336-7222.jpg)" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl md:text-5xl text-white font-bold uppercase">Cricket Camps</h1>
                                <p className="mb-5">Elevate your cricket skills at our dynamic Cricket Summer Camps. Receive expert coaching, enhance your technique, and compete in thrilling matches. Join us to unleash your potential and make unforgettable memories.</p>
                                <Link to="/allClasses">
                                    <button className="btn btn-primary text-white rounded-full">View Prices</button>
                                </Link>
                                <Link to="/instructors">
                                    <button className="btn btn-info rounded-full btn-outline ml-5">Talk To An Advisor</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                {/* football  */}
                {/* <img className="h-screen w-screen object-cover" src="https://i.ibb.co/yyq4vdr/KIDS-FOOTBALL-TRAININ-width-1605-height-583-format-webp.webp" /> */}



                {/* volleyball  */}
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/X7Gj70N/140506-28736ac1-21d3-48cb-a904-2298c1a0a091.png)" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5  text-2xl md:text-5xl text-white font-bold uppercase" style={{ lineHeight: "1" }}>Volleyball Camps</h1>
                                <p className="mb-5">Join our high-energy Volleyball Summer Camps to take your game to new heights. Train with experienced coaches, improve your skills, and participate in exciting competitions. Embrace the spirit of teamwork and passion for the game. Register now for an unforgettable volleyball experience.</p>
                                <Link to="/allClasses">
                                    <button className="btn btn-primary text-white rounded-full">View Prices</button>
                                </Link>
                                <Link to="/instructors">
                                    <button className="btn btn-info rounded-full btn-outline ml-5">Talk To An Advisor</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;