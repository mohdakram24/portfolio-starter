import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";


const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Highly professional brand development, design and implementation... very strategic and engaged. I highly recommend her as a part of structuring development team of new business or project.",
    },
    {
      img: profilePic2,
      review:
        "It helped us deliver beautiful, performance-driven video creative, with phenomenal results. Their mobile-first design expertise allows us to amplify our campaigns and reach new users more efficiently.",
    },
    {
      img: profilePic3,
      review:
        "The staff and support are second to none. They are polished, proficient, accessible and patient.",
    },
    {
      img: profilePic4,
      review:
        "This is an outstanding inn which is centrally located... The service was superb, and the amenities outmatch the competition.",
    },
  ];



  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  )
}

export default Testimonials