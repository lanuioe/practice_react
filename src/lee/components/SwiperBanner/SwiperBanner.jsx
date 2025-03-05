// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default function SwiperBanner() {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={true}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/assets/SwiperBanner/banner01.jpg" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/SwiperBanner/banner02.jpg" alt="banner2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/SwiperBanner/banner03.jpg" alt="banner3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
