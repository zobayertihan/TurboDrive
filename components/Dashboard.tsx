"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { carDetailsProps } from "@/types";
import { generateCarImageURL } from "@/utils";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { CustomButton } from ".";

const Dashboard = () => {
  const { data: session } = useSession();
  const email = (session as { user?: { email?: string } })?.user?.email;
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getCars?email=${email}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCars(data.cars);
        } else {
          console.log("Error");
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchData();
  }, [email, cars]);

  return (
    <section className="flex-1 pt-36 padding-x">
      {/* <div>Dashboard</div> */}
      <h1 className="text-4xl text-center my-10 font-bold underline">
        Booked Car
      </h1>
      <div>
        {cars?.map((car: any, index: number) =>
          index === 0 ? (
            <Card key={car?._id} className="w-3/4 mx-auto md:flex-row flex">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <Image
                  src={car?.photo}
                  alt={"car Image"}
                  height={500}
                  width={500}
                />
              </CardHeader>
              <CardBody className="w-full">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 capitalize"
                >
                  {car?.car?.make} {car?.model}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal mt-5">
                  <div>
                    {Object.entries(car?.car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 text-right w-full"
                        key={key}
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="font-semibold text-black-100">
                          {value as string}
                        </p>
                      </div>
                    ))}
                    <div className="flex justify-between items-center ">
                      <p className="text-grey capitalize">Booking Date: </p>
                      <p className="font-semibold text-black-100">
                        {new Date(car.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Typography>
                {/* <CustomButton
                  title="Delete"
                  containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                  textStyles="text-white text-[14px] leading-[17px] font-bold"
                  // handleClick={handleDelete}
                /> */}
              </CardBody>
            </Card>
          ) : (
            <ul key={car._id}>
              {index === 1 && (
                <li>
                  <div className="gap-10 mt-10 grid grid-cols-1 md:grid-cols-3">
                    <p className="text-center font-bold text-black-100 text-xl">
                      Image
                    </p>
                    <p className="text-center font-bold text-black-100 text-xl">
                      Model
                    </p>
                    <p className="text-center font-bold text-black-100 text-xl">
                      Booking Date
                    </p>
                  </div>
                </li>
              )}
              <li style={{ listStyle: "none", paddingLeft: 0 }}>
                <div className="gap-10 mt-10 grid grid-cols-1 md:grid-cols-3">
                  <div className="flex justify-center items-center">
                    <Image
                      src={car.photo}
                      alt={"car Image"}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <p>
                      {car.car.make} {car.model}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p>{new Date(car.createdAt).toLocaleDateString()}</p>
                  </div>
                  {/* <CustomButton
                  title="Delete"
                  containerStyles="w-20 py-[16px] rounded-full bg-primary-blue"
                  textStyles="text-white text-[14px] leading-[17px] font-bold"
                  // handleClick={handleDelete}
                /> */}
                </div>
              </li>
            </ul>
          )
        )}
      </div>
      {/* ------------------------- */}
      {/* <div>
        <ul>
          {cars.reverse().map((car: any, index: number) =>
            index === 0 ? (
              <h2 key={car._id} className="text-3xl">
                {car.car.make} {car.model}
              </h2>
            ) : (
              <li key={car._id}>
                {car.car.make} {car.model}
              </li>
            )
          )}
        </ul>
      </div> */}
    </section>
  );
};

export default Dashboard;
