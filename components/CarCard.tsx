// Import necessary modules and components
"use client";
import { carProps } from "@/types";
import { calculateCarRent, generateCarImageURL } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetails, CustomButton } from ".";

// Define props interface for CarCard component
interface carCardProps {
  car: carProps; // Car data passed as a prop
}

// CarCard component definition
const CarCard = ({ car }: carCardProps) => {
  // Extract car properties using destructuring
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  // Calculate car rental rate
  const carRent = calculateCarRent(city_mpg, year);

  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Car card container
    <div className="car-card group transition-all duration-500">
      {/* Car make and model */}
      <div className="carCardContent">
        <h2 className="carCardContentTitle">
          {make} {model}
        </h2>
      </div>

      {/* Car rental rate */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* Car image */}
      <div className="relative w-full h-40 object-contain my-3 z-0">
        <Image
          src={generateCarImageURL(car)}
          alt={"sample"}
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Car details */}
      <div className="relative w-full mt-2 flex">
        {/* Display car details on hover */}
        <div className="flex group-hover:invisible w-full justify-between text-gray-100">
          {/* Transmission type */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/steering-wheel.svg"}
              alt={"steering"}
              width={20}
              height={20}
            />
            <p className="text-[14px] text-black">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/* Drive type */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src={"/tire.svg"} alt={"tire"} width={20} height={20} />
            <p className="text-[14px] text-black">{drive.toUpperCase()}</p>
          </div>
          {/* City MPG */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={"/gas.svg"}
              alt={"gas"}
              width={20}
              height={20}
              className="hudai"
            />
            <p className="text-[14px] text-black">{city_mpg} MPG</p>
          </div>
        </div>

        {/* View more button */}
        <div className="car-cardBtnContainer">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Car details modal */}
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard; // Export the CarCard component
