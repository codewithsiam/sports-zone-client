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


const Banner = () => {

    return (
        <div className="bg-gray-100">

            <div>

                <Swiper
                    loop={true}
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="md:h-[550px] w-screen object-cover"  src="https://challenge-magazine.org/wp-content/uploads/sites/6/2020/04/canva-boys-in-white-shirt-and-white-pants-playing-baseball-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="md:h-[550px] w-screen object-cover" src="https://i.ibb.co/gvqsTZ3/photo-1600679472829-3044539ce8ed-ixlib-rb-4-0.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="md:h-[550px] w-screen object-cover" src="https://i.ibb.co/HBRwrvk/badminton-concept-with-shuttlecock-racket-23-2149940872.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;