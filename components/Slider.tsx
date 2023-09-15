"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { CarCard } from ".";

const Slider = ({ allCars }: any) => {
  return (
    <div className="mb-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {allCars.map((car: any) => (
          <div key={car}>
            <SwiperSlide className="py-10">
              <CarCard car={car} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="my-2 flex justify-center">
        <Link
          className="text-center px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400 font-bold lg:w-1/6"
          href={"/allcars"}
        >
          See All Cars
        </Link>
      </div>
    </div>
  );
};

export default Slider;
