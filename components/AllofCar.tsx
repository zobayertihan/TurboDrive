"use client";
import { useEffect, useState } from "react";
import { fetchCars } from "@/utils";
import { CarCard, CustomFilter, SearchBar, ShowMore } from ".";
import { fuels, yearsOfProduction } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AllofCars = () => {
  //   const router = useRouter();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams1 = useSearchParams();

  console.log(router, pathname, searchParams1);

  const [searchParams, setSearchParams] = useState({
    manufacturer: "",
    year: "2022",
    fuel: "",
    limit: 10,
    model: "",
  });

  const [allCars, setAllCars] = useState([]);
  const manufacturer = searchParams1.get("manufacturer");
  const year = searchParams1.get("year");
  const fuel = searchParams1.get("fuel");
  const limit = searchParams1.get("limit");
  const model = searchParams1.get("model");

  console.log(manufacturer, year, fuel, limit, model);
  useEffect(() => {
    //   const { query } = router;

    setSearchParams({
      manufacturer: manufacturer ? manufacturer.toString() : "",
      year: year ? year.toString() : "2022",
      fuel: Array.isArray(fuel) ? fuel[0].toString() : fuel || "",
      limit: limit ? parseInt(limit.toString(), 10) : 10,
      model: model ? model.toString() : "",
    });

    const fetchAndSetCars = async () => {
      const fetchedCars = await fetchCars({
        manufacturer: manufacturer ? manufacturer.toString() : "",
        year: year ? parseInt(year.toString(), 10) : 2022,
        fuel: Array.isArray(fuel) ? fuel[0].toString() : fuel || "",
        limit: limit ? parseInt(limit.toString(), 10) : 10,
        model: model ? model.toString() : "",
      });

      setAllCars(fetchedCars);
    };

    fetchAndSetCars();
  }, []);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

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
              {allCars.map((car) => (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default AllofCars;
