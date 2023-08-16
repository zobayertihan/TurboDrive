// Import necessary modules and components
"use client";
import { carDetailsProps } from "@/types";
import { generateCarImageURL } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { CustomButton } from ".";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// CarDetails component definition
const CarDetails = ({ car, isOpen, closeModal }: carDetailsProps) => {
  // State to manage the currently displayed photo and border style
  // console.log(car);
  const [photo, setPhoto] = useState(generateCarImageURL(car));
  const [border, setBorder] = useState("0");
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(session?.user);
  const userEmail = (session as { user?: { email?: string } })?.user?.email;
  const model = car.model;
  const handleBook = async () => {
    session ? router.push("/dashboard") : router.push("/login");

    try {
      const resCar = await fetch("api/carDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car,
          model,
          image: photo,
          email: userEmail,
        }),
      });
      if (resCar.ok) {
        console.log("Car Details Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed bg-black bg-opacity-25 inset-0" />
          </Transition.Child>
          {/* Car details panel */}
          <div className="inset-0 overflow-y-auto fixed">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              {/* Car details content */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl p-6 transition-all flex flex-col gap-5">
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => {
                      closeModal(), setBorder("0");
                      setPhoto(generateCarImageURL(car));
                    }}
                    className="absolute top-2 right-2 z-10  w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt={"close"}
                      height={20}
                      width={20}
                      className="object-contain"
                    />
                  </button>
                  {/* Car images */}
                  <div className="flex flex-1 flex-col gap-3">
                    {/* Main car image */}
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={photo}
                        alt={"sample"}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    {/* Additional car images */}
                    <div className="flex gap-3">
                      {/* Image with border */}
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "29")}
                          alt={"sample"}
                          fill
                          priority
                          className={`object-contain ${
                            border === "29"
                              ? "border border-red-600 rounded-lg"
                              : "border-none"
                          }`}
                          onClick={() => {
                            setPhoto(generateCarImageURL(car, "29"));
                            setBorder("29");
                          }}
                        />
                      </div>
                      {/* Image with border */}
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "33")}
                          alt={"sample"}
                          fill
                          priority
                          className={`object-contain ${
                            border === "33"
                              ? "border border-red-600 rounded-lg"
                              : "border-none"
                          }`}
                          onClick={() => {
                            setPhoto(generateCarImageURL(car, "33"));
                            setBorder("33");
                          }}
                        />
                      </div>
                      {/* Image with border */}
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageURL(car, "17")}
                          alt={"sample"}
                          fill
                          priority
                          className={`object-contain ${
                            border === "17"
                              ? "border border-red-600 rounded-lg"
                              : "border-none"
                          }`}
                          onClick={() => {
                            setPhoto(generateCarImageURL(car, "17"));
                            setBorder("17");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Car details */}
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    {/* Display car details */}
                    <div className="mt-3 gap-4 flex flex-wrap">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 text-right w-full"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-black-100">
                            {value}
                          </p>
                        </div>
                      ))}
                      <CustomButton
                        title="Book Now"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        handleClick={handleBook}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails; // Export the CarDetails component
