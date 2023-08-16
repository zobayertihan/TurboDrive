import { MouseEventHandler } from "react";

// Props for a custom button component
export interface CustomButtonProps {
  title: string; // Button text
  containerStyles?: string; // Additional container styles
  handleClick?: MouseEventHandler<HTMLButtonElement>; // Click event handler
  btnType?: "button" | "submit"; // Button type: normal button or submit button
  textStyles?: string; // Additional text styles
  rightIcon?: string; // Name of the right icon (if any)
  isDisabled?: boolean; // Whether the button is disabled
}

// Props for searching a manufacturer
export interface searchManufacturerProps {
  manufacturer: string; // Selected manufacturer
  setManufacturer: (manufacturer: string) => void; // Function to set the selected manufacturer
}

// Props for car details
export interface carProps {
  city_mpg: number; // City miles per gallon
  class: string; // Car class
  combination_mpg: number; // Combined miles per gallon
  cylinders: number; // Number of cylinders
  displacement: number; // Engine displacement
  drive: string; // Drive type
  fuel_type: string; // Fuel type
  highway_mpg: number; // Highway miles per gallon
  make: string; // Car make
  model: string; // Car model
  transmission: string; // Transmission type
  year: number; // Manufacturing year
}

// Props for car details modal
export interface carDetailsProps {
  isOpen: boolean; // Whether the modal is open
  closeModal: () => void; // Function to close the modal
  car: carProps; // Car details
}

// Props for filtering cars
export interface FilterProps {
  manufacturer?: string; // Manufacturer filter
  year?: number; // Year filter
  fuel?: string; // Fuel type filter
  limit?: number; // Limit of results
  model?: string; // Model filter
}

// Props for an option in a select filter
export interface OptionProps {
  title: string; // Option display title
  value: string; // Option value
}

// Props for a custom filter component
export interface CustomFilterProps {
  title: string; // Filter title
  options: OptionProps[]; // Available options
}

// Props for showing more results
export interface showMoreProps {
  pageNumber: number; // Page number
  isNext: boolean; // Whether it's the next page
}

// Props for the home component
export interface HomeProps {
  searchParams: FilterProps; // Search parameters
}

export interface userProps {
  email?: string;
  pass?: string;
}

export interface userDetailsProps {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface oneCarDetailsProps {
  car?: Object;
  model: string;
  image: string;
  email: string;
}

export interface CarProps {
  searchParams: FilterProps;
  allCars: any[]; // Replace 'any' with your actual car type
}
