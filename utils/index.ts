import { type } from "os"; // Import the 'os' module's 'type'

import { FilterProps, carProps } from "@/types"; // Import 'FilterProps' and 'carProps' types from "@/types" module
import { flushSync } from "react-dom"; // Import the 'flushSync' function from the 'react-dom' module

// Asynchronously fetch car data based on provided filters
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;
  const headers = {
    "X-RapidAPI-Key": process.env.XRapidAPIKey || "",
    "X-RapidAPI-Host": process.env.XRapidAPIHost || "",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json(); // Parse the response body as JSON
  return result; // Return the fetched car data
}

// Calculate estimated car rental rate per day
export const calculateCarRent = (city_mpg: number, year: number) => {
  const bestPrizePerDay = 50;
  const mailageFactor = 0.1;
  const ageFactor = 0.05;

  const mailageRate = city_mpg * mailageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = bestPrizePerDay + mailageRate + ageRate;

  return rentalRatePerDay.toFixed(0); // Return the calculated rental rate rounded to the nearest integer
};

// Generate a URL for fetching a car image based on car details and optional angle
export const generateCarImageURL = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`); // Optional angle parameter for image

  return `${url}`; // Return the generated image URL
};

// Update search parameters in the URL without reloading the page
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value); // Set the specified parameter with the given value

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`; // Construct the new URL

  return newPathName; // Return the updated URL
};
