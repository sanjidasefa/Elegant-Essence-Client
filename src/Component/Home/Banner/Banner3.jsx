import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";
import { TiArrowDownThick } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import service from "../../../assets/slider/serivce.jpg";
import studio from "../../../assets/slider/studio.jpg";
import intorior from "../../../assets/slider/interoor design.jpg";
import celebrate from "../../../assets/slider/celebrate.jpg";
import about from "../../../assets/slider/about (1).jpg";
import semi from "../../../assets/slider/semiImg1 (2).jpg";

const Banner3 = () => {
  const overlayClass = "absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex flex-col justify-center px-10 md:px-20 text-white";

  return (
    <div className="rounded-[2rem] overflow-hidden shadow-2xl">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-[500px] md:h-[600px]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={celebrate} className="w-full h-full object-cover" alt="Celebrate" />
            <div className={overlayClass}>
              <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-2xl leading-tight">
                Celebrate Moments <br /> <span className="text-cyan-400">With Perfection</span>
              </h2>
              <p className="text-lg text-slate-200 max-w-xl mb-8 hidden md:block italic">
                From weddings to corporate events, we handle every detail with creativity and precision.
              </p>
              <Link to="/Service">
                <button className="btn bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-xl px-8 w-fit">
                  Explore Packages
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={semi} className="w-full h-full object-cover" alt="Services" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
              <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">Decoration Services</h2>
              <p className="text-xl text-cyan-200 flex items-center gap-2 mb-8 font-bold">
                Tailored to your style <TiArrowDownThick className="animate-bounce" />
              </p>
              <Link to="/Service">
                <button className="btn bg-white text-cyan-900 border-none rounded-full px-10 hover:scale-105 transition-transform">
                  Browse Services
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={studio} className="w-full h-full object-cover" alt="Studio" />
            <div className="absolute inset-0 bg-slate-900/60 flex items-end p-10 md:p-20">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-2xl">
                <h2 className="text-3xl font-bold text-cyan-400 mb-2">In-Studio Consultation</h2>
                <p className="text-slate-100 mb-6">Visit our studio for personalized guidance and material samples.</p>
                <Link to="/footer">
                  <button className="btn btn-sm bg-cyan-500 border-none text-white">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img src={about} className="w-full h-full object-cover" alt="About" />
            <div className={overlayClass}>
              <h2 className="text-4xl font-black mb-4">Who We Are</h2>
              <p className="text-lg mb-8 max-w-lg">A modern Decoration Management Team turning dreams into reality.</p>
              <Link to="/about">
                <button className="btn bg-white text-slate-900 gap-2 rounded-xl">
                  <FaSearch /> Learn More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #0891b2 !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          transform: scale(0.7);
        }
      `}</style>
    </div>
  );
};

export default Banner3;