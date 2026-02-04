import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

import softSkillImg from '../../assets/soft.PNG';
import projectManagement from '../../assets/projectManagement.PNG';
const Testimonials = () => {
  const certificates = [
    { id: 1, name: 'Soft Skills Training', img: softSkillImg },
     { id: 1, name: 'Foundations of Project Management', img: projectManagement }
    // Add more certificates here
  ];

  return (
    <section id="testimonials">
      <h5>My Achievements</h5>
      <h2>Certificates</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {certificates.map((cert) => (
          <SwiperSlide className="testimonial" key={cert.id}>
            <a href={cert.img} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.img}
                alt={cert.name}
                className="certificate-img"
              />
            </a>
            <h5 className="client__name">{cert.name}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
