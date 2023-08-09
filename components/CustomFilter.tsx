// Import necessary modules and components
"use client";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Router } from "next/router"; // Import Router from next/router (not needed)
import { type } from "os"; // Import type from os (not needed)
import React, { useState, Fragment } from "react";

// CustomFilter component definition
const CustomFilter = ({ title, options }: CustomFilterProps) => {
  // Use the useRouter hook to access the router object
  const router = useRouter();

  // State to track the selected option
  const [selected, setSelected] = useState(options[0]);

  // Function to update the search parameters and navigate
  const handleUpdateParams = (e: { title: string; value: string }) => {
    // Generate the new path with updated search parameters
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    // Use the router's push method to navigate to the new path
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      {/* Listbox for displaying filter options */}
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button to open the filter options */}
          <Listbox.Button className="custom-filterButton">
            <span className="block truncate">{selected.title}</span>
            {/* Chevron icon */}
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              alt={"Chevron Up Down"}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          {/* Transition for filter options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* List of filter options */}
            <Listbox.Options className="custom-filterOptions">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    // Display the option title
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter; // Export the CustomFilter component
