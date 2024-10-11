"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { images } from "@/data/images";
import { Box, Image } from "@chakra-ui/react";

export default function AnimeSlider() {
  
  return (
    <div>
      {/* Swiper slider animation */}
      <Swiper
        pagination={true}
        modules={[Autoplay]}
        loop={true}
        autoplay={{delay: 3000}}
        className="mySwiper"
        slidesPerView={1}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <Box h={{ base: '500px', sm: '300px', md: "100vh"}} w="100%">
              <Image w="100%" h="100%" objectFit="cover" src={img.image} alt="anime" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
