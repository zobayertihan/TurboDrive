// "use client";
import { fetchCars } from "@/utils";
// import React, { useEffect, useState } from "react";
import { CarCard } from ".";
// import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Slider from "./Slider";

const PopularCars = async () => {
  const allCars = await fetchCars({
    manufacturer: "",
    year: 2022,
    fuel: "",
    limit: 10,
    model: "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <section className="mt-20">
      <p className="text-center font-bold text-2xl">Explore Our Popular Cars</p>
      <Slider allCars={allCars} />
    </section>
  );
};

export default PopularCars;
