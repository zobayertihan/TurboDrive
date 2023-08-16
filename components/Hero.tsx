// Import necessary modules and components
"use client";
import React from "react";
import CustomButton from "./CustomButton"; // Import the CustomButton component
import Image from "next/image";
import { useRouter } from "next/navigation";

// Hero component definition
const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {
    router.push("/allcars");
    // Handle scroll logic (not provided in the code)
  };

  return (
    <div className="hero">
      {/* Left section of the hero */}
      <div className="flex-1 pt-36 padding-x">
        {/* Hero title */}
        <h1 className="hero-title">
          Explore, Secure, or Hire a Car --effortlessly and promptly!
        </h1>
        {/* Hero subtitle */}
        <p className="hero-subtitle">
          Accelerate your car rental process with our hassle-free booking
          system.
        </p>
        {/* CustomButton component */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll} // Call handleScroll function on button click
        />
      </div>

      {/* Right section of the hero */}
      <div className="hero-imageContainer">
        <div className="hero-image">
          {/* Hero image */}
          <Image
            src="/hero.png"
            alt="hero-image"
            fill
            className="object-contain"
          />
        </div>
        {/* Hero image overlay */}
        <div className="hero-imageOverlay"></div>
      </div>
    </div>
  );
};

export default Hero; // Export the Hero component
