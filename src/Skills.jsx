import { register } from "swiper/element/bundle";
import reactimage from "./images/SkillImages/React.svg.png";
import cimage from "./images/SkillImages/cpp.svg.png";
import cpimage from "./images/SkillImages/cp.jpeg";
import cssimage from "./images/SkillImages/CSS.png";
import htmlimage from "./images/SkillImages/html.png";
import htmlcssimage from "./images/SkillImages/CSHT.svg.png";

import javaimage from "./images/SkillImages/Java_programming_language_logo.svg.png";
import jsimage from "./images/SkillImages/javascript_logo.png";
import pythonimage from "./images/SkillImages/Python.svg.png";
import tailwindimage from "./images/SkillImages/tailwing1.png";

// register Swiper custom elements
register();
// function skill(){
//   return (
//     <div>

//     </div>
//     )
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "./styles.css";
import image1 from "./images/Name_logo.png";
// import required modules
import { FreeMode, Pagination } from "swiper";

function Skills() {
  return (
    <div id="skills" className="   ">
      <div>
        <h1 className="flex justify-center text-4xl md:text-5xl pt-10 pb-3 font-Header text-bluedark">
          Skills
        </h1>
      </div>
      <br />
      <div className="p-10 md:px-28">
        <Swiper
          //    slidesPerView={3}
          // spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            0: {
              width: 180,
              height: 200,
              slidesperview: 1,
              spaceBetween: 60,
            },
            480: {
              width: 180,
              height: 200,
              slidesperview: 3,
              spaceBetween: 100,
            },
            768: {
              width: 180,
              height: 200,
              slidesperview: 3,
              spaceBetween: 100,
            },
          }}
          className="mySwiper pb-14 md:pb-16"
        >
          <SwiperSlide className="flex  justify-center shadow-xl">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={reactimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center   overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={cpimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={pythonimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={tailwindimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={cimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={javaimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={jsimage}></img>
          </SwiperSlide>
          <SwiperSlide className="flex  justify-center overflow-hidden shadow-lg">
            <img className="m-2 h-24 w-28 md:h-32 md:w-36" src={htmlcssimage}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Skills;
