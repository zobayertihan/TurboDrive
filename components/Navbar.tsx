// Import necessary modules and components
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CustomButton from "./CustomButton"; // Import the CustomButton component
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { signIn, signOut, useSession } from "next-auth/react";
// import { disconnectMongoDB } from "@/lib/mongodb";

// Navbar component definition
const Navbar = () => {
  const router = useRouter();
  type test = {
    name: "string" | " ";
    email: "string";
    image: "string";
  };
  const { data: session } = useSession();
  const myData: any = session?.user;
  // Function to handle login button click
  const handleLogin = () => {
    signIn();
  };
  const handleSignOut = async () => {
    signOut();
    // await disconnectMongoDB();
  };

  return (
    <header className="w-full absolute z-10">
      {/* Navigation bar */}
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        {/* Logo and link to home page */}
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        {session ? (
          <div className="flex justify-center items-center">
            <Link href={"/dashboard"}>
              <p className="text-primary-blue">{myData?.name}</p>
            </Link>
            <CustomButton
              title={"Sign Out"}
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              btnType="button"
              handleClick={handleSignOut} // Call handleLogin function on button click
            />
          </div>
        ) : (
          <CustomButton
            title={"Sign In"}
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            btnType="button"
            handleClick={handleLogin} // Call handleLogin function on button click
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar; // Export the Navbar component
