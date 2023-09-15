import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import React from "react";
import { CarCard, CustomFilter, SearchBar, ShowMore } from ".";
import { fuels, yearsOfProduction } from "@/constants";

const AllCars = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer,
    year: searchParams.year,
    fuel: searchParams.fuel,
    limit: searchParams.limit,
    model: searchParams.model,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <div className="flex-1 pt-36 padding-x">
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home-textContainer">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars of your choice</p>
        </div>
        <div className="home-filters">
          <SearchBar />
          <div className="home-filterContainer">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home-classWrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home-errorContainer">
            <h2 className="text-black text-xl font-bold">Oops, No Result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCars;
