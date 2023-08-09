"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3001" });
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("Credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        console.log(error);
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
          onSubmit={handleLogin}
        >
          <h3 className="uppercase text-2xl font-semibold text-[#333] mb-8 text-center">
            Sign In
          </h3>
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
              Email
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="password"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            // onClick={(e) => handleLogin(e)}
            // onClick={() => signIn()}
            className="w-full h-12 mt-12 cursor-pointer flex items-center justify-center bg-[#72b7fc] text-[#fff] uppercase font-semibold text-xl hover:bg-blue-600"
          >
            <span>Sign in</span>
          </button>
          <h1 className="text-center mt-7">
            {"Don't have an account? "}
            <Link href={"/signup"} className="text-blue-600 font-semibold">
              Sign up
            </Link>
          </h1>
          <div className="input-button">
            <button type="button" onClick={handleGoogleSignIn}>
              Sign In with Google{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
