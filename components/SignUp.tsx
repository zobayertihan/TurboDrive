"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useContext } from "react";

const SignUp = () => {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const { name, email, phone, password, confirmPassword } = formData;
  const [error, setError] = useState("");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phone || !email || !password || !confirmPassword) {
      setError("Fill all the fields");
      return;
    }

    try {
      const resUser = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUser.json();

      if (user) {
        setError("User already exists");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          confirmPassword,
        }),
      });
      if (res.ok) {
        console.log("OK");
        setFormData(initialFormData);
        setError("");
        router.push("/");
      } else {
        console.log("User Regestration failled!!");
      }
    } catch (error) {
      console.log("An Error Occured", error);
    }
  };

  return (
    <div className="pt-36">
      {/* <div>
    <Lottie assets={"/signup.json"} />
  </div> */}
      <div className="max-w-[991px] w-[400px] mx-auto">
        <form
          className="w-full relative z-10 pt-20 pb-16 px-16 bg-gray-50"
          onSubmit={(e) => handleSignUp(e)}
        >
          <h3 className="uppercase text-2xl font-semibold text-[#333] mb-8 text-center">
            Sign Up
          </h3>
          <div className="relative mt-5">
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              id="email"
              value={email}
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Mail
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="password"
              value={password}
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Password
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute font-semibold text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-transparent"
            >
              Confirm Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-12 mt-12 cursor-pointer flex items-center justify-center bg-[#72b7fc] text-[#fff] uppercase font-semibold text-xl hover:bg-blue-600"
          >
            <span>Register</span>
          </button>
          <div className="mt-2">
            {error && (
              <div className="text-red-500 px-2 py-1">
                <p>{error}</p>
              </div>
            )}
          </div>
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
