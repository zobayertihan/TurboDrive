"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="pt-36">
      {/* <div>
    <Lottie assets={"/signup.json"} />
  </div> */}
      <div className="max-w-[991px] w-[400px] mx-auto">
        <form
          action=""
          className="w-full relative z-10 pt-20 pb-16 px-16 bg-gray-50"
        >
          <h3 className="uppercase text-2xl font-semibold text-[#333] mb-8 text-center">
            Sign Up
          </h3>
          <div className="relative mt-5">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Name
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value.toString())}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Phone Number
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="mail"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Mail
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value.toString())}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="pass"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Password
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="confirmPass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value.toString())}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="confirmPass"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Confirm Password
            </label>
          </div>
          <button
            onClick={(e) => handleSignUp(e)}
            className="w-full h-12 mt-12 cursor-pointer flex items-center justify-center bg-[#72b7fc] text-[#fff] uppercase font-semibold text-xl hover:bg-blue-600"
          >
            <span>Register</span>
          </button>
          <h1 className="text-center mt-7">
            {"Already have an account? "}
            <Link href={"/login"} className="text-blue-600 font-semibold">
              Sign in
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
