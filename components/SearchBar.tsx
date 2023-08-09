// Import necessary modules and components
"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer"; // Import the SearchManufacturer component
import Image from "next/image";
import { useRouter } from "next/navigation";

// SearchButton component for the search icon
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    {/* Search icon */}
    <Image
      src={"/magnifying-glass.svg"}
      alt={"search"}
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

// SearchBar component definition
const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Function to handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if manufacturer and model are empty
    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    // Call the updateSearchParams function
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  // Function to update search parameters in URL and navigate
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete "model" parameter
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete "manufacturer" parameter
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    // Navigate to the new URL
    router.push(newPathName);
  };

  return (
    <div>
      {/* Search form */}
      <form className="searchbar" onSubmit={handleSearch}>
        {/* Search bar item for manufacturer */}
        <div className="searchbar-item">
          {/* SearchManufacturer component */}
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
          {/* SearchButton for small screens */}
          <SearchButton otherClasses="sm:hidden" />
        </div>
        {/* Search bar item for model */}
        <div className="searchbar-item">
          {/* Model icon */}
          <Image
            src={"/model-icon.png"}
            alt={"model-icon"}
            height={25}
            width={25}
            className="absolute ml-4 w-[20px] h-[20px]"
          />
          {/* Model input */}
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar-input"
          />
          {/* SearchButton for small screens */}
          <SearchButton otherClasses="sm:hidden" />
        </div>
        {/* SearchButton for larger screens */}
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component
