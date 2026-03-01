import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import service from "../../../assets/slider/serivce.jpg";
import studio from "../../../assets/slider/studio.jpg";
import intorior from "../../../assets/slider/interoor design.jpg";
import celebrate from "../../../assets/slider/celebrate.jpg";
import about from "../../../assets/slider/about (1).jpg";
import { Link } from "react-router";
import { TiArrowDownThick } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";
import { RiHistoryFill } from "react-icons/ri";
import semi from "../../../assets/slider/semiImg1 (2).jpg";
// import semi2 from "../../../assets/slider/semiImg2.jpg";

const Banner3 = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={celebrate}
                alt="service"
                className="w-full  md:h-96 object-cover"
              />
            </figure>
            <div className="card-body flex justify-center  items-center">
              <h2 className="text-3xl mt-20 text-center font-bold">
                Celebration & Event Decoration With Our Service Package
              </h2>
              <p className="text-lg text-center md:w-1/2">
                We provide comprehensive decoration services for all types of
                events, ensuring every occasion becomes memorable and visually
                stunning. From weddings, birthdays, anniversaries, to corporate
                events and community celebrations, our professional team handles
                every detail with creativity and precision.
              </p>
              <Link to="/Service">
                <button className="btn mb-20 bg-white text-cyan-900">Explore More Service ...</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 w-full  image-full  shadow-sm">
            <figure>
              <img
                src={semi}
                alt="service"
                className="w-full md:h-96 object-cover"
              />
            </figure>
            <div className="card-body flex justify-center  items-center">
              <h2 className="text-3xl mt-20 text-center font-bold">
                Decoration Services
              </h2>
              <p className="text-lg text-center">
                Professional event and home decoration services tailored to your
                style and special moments.
              </p>
              <p className="text-xl text-cyan-200 flex justify-center gap-2 items-center">
                Click Here For More Service Explore <TiArrowDownThick />
              </p>
              <Link to='/Service'>
                {" "}
                 <button className="btn mb-20 bg-white text-cyan-900">Explore Services</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={studio}
                alt="studio"
                className="w-full md:h-96 object-cover"
              />
            </figure>
            <div className="card-body ">
              <div className="">
                <h2 className="font-bold md:mt-20 text-3xl">In-Studio Consultation</h2>
                <p className="w-1/2">
                  Visit our studio to discuss your decoration ideas in detail
                  with our expert designers. Get personalized guidance, material
                  samples, and a clear plan tailored to your space and event.
                </p>
              </div>
              <div className="">
                <h2 className="font-bold  text-3xl">
                  On-Site Decoration Service
                </h2>
                <p className="w-1/2">
                  Our professional team visits your location to design and
                  execute decorations perfectly suited to your space. From homes
                  to ceremonies, we ensure a seamless and stress-free decoration
                  experience.
                </p>
                 <Link to='/footer'>
                {" "}
                <button className="btn mt-4 bg-white text-cyan-900">Contact Us </button>
              </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
         <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={about}
                alt="intorior design"
                className="w-full md:h-96 object-cover"
              />
            </figure>
            <div className="card-body flex md:flex-row justify-center items-center">
           <div className='ml-10'>
               <h2 className="mt-20 text-3xl font-bold flex ">About Us</h2>
              <p className="text-lg mt-4 w-1/2">
                We are a modern and reliable Decoration Service Management Team
                dedicated to turning your special moments into beautiful and
                memorable experiences.
              </p>
              <Link to="/about">
                {" "}
                 <button className="btn mb-20 mt-2 bg-white text-cyan-900"><FaSearch></FaSearch> About Us </button>
              </Link>
           </div>
               {/* <div className=''>
                <motion.div   animate={{ y: [-10, 10] }}      
      transition={{
        y: {
          type: "spring",         
          stiffness: 100,             
          damping: 10,               
          repeat: Infinity,           
          repeatType: "mirror",       
        },
      }}
     >
      <img src={semi2} alt="semi" className="md:h-80 rounded-2xl object-cover" />
    </motion.div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img src={service} alt="" className="w-full h-96 object-cover" />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="">
                <h2 className="text-3xl font-bold">
                  Decoration Service Booking & Management System
                </h2>
                <p className="text-lg text-cyan-200 my-4 lg:w-1/2">
                  The system also provides a secure and seamless payment
                  process, ensuring a smooth booking experience from start to
                  finish. Customers can track their service status in real time,
                  receive timely notifications for updates, and share feedback
                  through ratings and reviews after service completion. Overall,
                  this platform enhances transparency, efficiency, and user
                  satisfaction by managing decoration services in a smart,
                  organized, and user-friendly way.
                </p>
                 <Link to="/Dashboard">
                {" "}
                 <button className="btn bg-white text-cyan-900">See your DashBoard</button>
              </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={intorior}
                alt="intorior design"
                className="w-full md:h-96 object-cover"
              />
            </figure>
           <div className="card-body flex md:flex-row justify-center items-center">
             <div className="">
               <h2 className=" text-3xl font-bold">
                Interior Design
              </h2>
              <p className="text-lg my-4 lg:w-1/2">
                Our interior design service focuses on creating beautiful,
                functional, and well-planned spaces that reflect your lifestyle
                and personality. We combine modern design principles with
                creative solutions to transform homes, offices, and commercial
                spaces into elegant and comfortable environments.
              </p>
              <Link to="/Service">
                {" "}
                 <button className="btn bg-white text-cyan-900">Explore More Services...</button>
              </Link>
             </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner3;
