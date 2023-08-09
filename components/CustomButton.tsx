// Import necessary modules and components
"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

// CustomButton component definition
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    // Button element with specified attributes and styles
    <button
      disabled={false} // Button is not disabled
      type={btnType || "button"} // Use the provided btnType prop or default to "button"
      className={`custom-btn ${containerStyles}`} // Apply custom styles and containerStyles
      onClick={handleClick} // Call the provided handleClick function on click
    >
      {/* Button text */}
      <span className={`flex-1 ${textStyles}`}>{`${title}`}</span>

      {/* Right icon (if provided) */}
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="rightIcon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton; // Export the CustomButton component
