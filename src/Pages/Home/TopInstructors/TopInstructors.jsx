import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";


import useTopInstructors from '../../../Hooks/useTopInstructors';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ToggleContext } from "../../../Provider/ToggleProvider";

const TopInstructors = () => {

    const [topInstructors] = useTopInstructors();
    const {isDark} = useContext(ToggleContext);
    const cardBackgroundClass = isDark ? "bg-indigo-200" : "bg-base-100";
    return (
        <div>
            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    topInstructors?.map((ins, index) =>

                        <SwiperSlide>
                            <div className={`card w-[500px] h-72 lg:card-side  ${cardBackgroundClass} shadow-2xl`}>
                                <figure><img className="w-[200px] h-full object-cover" src={ins.image} /></figure>
                                <div className="card-body">
                                    <div className="absolute top-2 right-4 ml-1 font-semibold">
                                        {index === 0 && <p className="badge badge-secondary mx-3">Top</p>}
                                        <p className="badge badge-secondary">Popular</p>
                                    </div>
                                    <h2 className="font-bold text-xl">
                                        {ins.name}

                                    </h2>
                                    <p className="text-lg font-semibold">Instructor</p>
                                    <p>Email: {ins.email}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

                <SwiperSlide>
                    <div className="bg-indigo-200 rounded-2xl shadow-2xl w-[500px] h-72 flex flex-col justify-center items-center">
                        <Link to="/allClasses">
                            <button className="text-black flex items-center justify-center gap-3 text-2xl font-bold mx-auto">
                                Show All <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>
    );
};

export default TopInstructors;