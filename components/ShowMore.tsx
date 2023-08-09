// Import necessary modules and components
"use client";
import { showMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from "."; // Import the CustomButton component
import { updateSearchParams } from "@/utils"; // Import the updateSearchParams function

// ShowMore component definition
const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
  const router = useRouter();

  // Handle navigation to show more results
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; // Calculate new limit for pagination
    const newPathName = updateSearchParams("limit", `${newLimit}`); // Update the limit parameter in the URL

    router.push(newPathName); // Navigate to the new URL with updated limit
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* Show the "Show More" button if it's not the last page */}
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore; // Export the ShowMore component
