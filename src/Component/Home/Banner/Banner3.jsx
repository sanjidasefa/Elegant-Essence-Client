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
import feature from "../../../assets/slider/about (2).jpg";
import { Link } from "react-router";
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
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body lg:my-50 my-20 flex justify-center  items-center">
              <h2 className=" text-5xl text-center font-bold">
                Celebration & Event Decoration With Our Service Package
              </h2>
              <p className="text-lg text-center">
                We provide comprehensive decoration services for all types of
                events, ensuring every occasion becomes memorable and visually
                stunning. From weddings, birthdays, anniversaries, to corporate
                events and community celebrations, our professional team handles
                every detail with creativity and precision.
                <br />
                Clients can choose from themed setups, custom designs, and
                on-site execution, ensuring the décor matches the event’s style,
                venue, and mood. Our goal is to create an enchanting atmosphere
                that leaves a lasting impression on guests and brings your
                vision to life.
              </p>
              <Link to="/Service">
                <button className="btn bg-white text-cyan-900">Book Decoration Service</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 w-full  image-full  shadow-sm">
            <figure>
              <img
                src={service}
                alt="service"
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body my-50 flex justify-center  items-center">
              <h2 className=" text-5xl text-center font-bold">
                Decoration Services
              </h2>
              <p className="text-lg text-center">
                Professional event and home decoration services tailored to your
                style and special moments.
              </p>
              <p className="text-xl text-cyan-200">
                Click Here For More Service Explore
              </p>
              <Link to='/Service'>
                {" "}
                <button className="btn btn-primary">Explore Services</button>
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
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body my-50 ">
              <div className="text-center">
                <h2 className="font-bold text-3xl">In-Studio Consultation</h2>
                <p className="">
                  Visit our studio to discuss your decoration ideas in detail
                  with our expert designers. Get personalized guidance, material
                  samples, and a clear plan tailored to your space and event.
                </p>
              </div>
              <div className="text-center">
                <h2 className="font-bold  text-3xl">
                  On-Site Decoration Service
                </h2>
                <p className="">
                  Our professional team visits your location to design and
                  execute decorations perfectly suited to your space. From homes
                  to ceremonies, we ensure a seamless and stress-free decoration
                  experience.
                </p>
                 <Link to='/Dashboard/Decorators-List'>
                {" "}
                <button className="btn btn-primary">Explore Our Decorator's</button>
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
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body text-center lg:mb-40 p-20">
              <h2 className=" text-5xl text-center font-bold">About Us</h2>
              <p className="text-lg text-center">
                We are a modern and reliable Decoration Service Management Team
                dedicated to turning your special moments into beautiful and
                memorable experiences. From home decoration to ceremonies and
                special events, we provide creative, well-planned, and
                high-quality decoration solutions. Our services include
                In-Studio Consultation and On-Site Decoration Service. With
                in-studio consultations, clients can visit our studio to discuss
                ideas directly with our experienced designers, explore design
                concepts, and create a personalized decoration plan based on
                their needs and budget. Through our on-site services, our
                professional team visits the client’s location and executes the
                decoration seamlessly, ensuring perfection in every detail. We
                believe that every event is unique, and every client deserves a
                customized approach. That’s why we focus on creative design,
                premium materials, and timely execution to deliver complete
                satisfaction.
              </p>
              <Link to="/about">
                {" "}
                <button className="btn btn-primary ">About Us </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={feature}
                alt=""
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body lg:my-20 flex justify-center  items-center">
              <h2 className=" text-5xl text-center font-bold">
                Decoration Service Booking & Management System
              </h2>
              <p className="text-lg text-center lg:w-1/2">
                The Decoration Service Booking & Management System is a complete
                digital platform designed to simplify and streamline the entire
                decoration service journey. It allows customers to easily
                explore a variety of decoration packages, check real-time
                decorator availability, and select their preferred date and time
                slots with confidence. Users can choose between in-studio
                consultations or on-site decoration services based on their
                needs and convenience.
              </p>
              <p className="text-lg text-cyan-200 text-center lg:w-1/2">
                The system also provides a secure and seamless payment process,
                ensuring a smooth booking experience from start to finish.
                Customers can track their service status in real time, receive
                timely notifications for updates, and share feedback through
                ratings and reviews after service completion. Overall, this
                platform enhances transparency, efficiency, and user
                satisfaction by managing decoration services in a smart,
                organized, and user-friendly way.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure>
              <img
                src={intorior}
                alt="intorior design"
                className="w-full h-[80vh] object-cover"
              />
            </figure>
            <div className="card-body my-50 flex justify-center  items-center">
              <h2 className=" text-5xl text-center font-bold">
                Interior Design
              </h2>
              <p className="text-lg text-center lg:w-1/2">
                Our interior design service focuses on creating beautiful,
                functional, and well-planned spaces that reflect your lifestyle
                and personality. We combine modern design principles with
                creative solutions to transform homes, offices, and commercial
                spaces into elegant and comfortable environments.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner3;
