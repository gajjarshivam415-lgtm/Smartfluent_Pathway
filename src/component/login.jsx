import React, { useState } from "react";
import LeftLog from "./leftLog";

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  return (
    <div className="absolute w-full h-screen  flex justify-center items-center ">
      <div className="w-4xl h-fit  text-white flex justify-center mt-4 shadow-[0_15px_50px_rgba(0,0,0,0.3)] relative border  rounded-2xl overflow-hidden">
        {/* left part */}
        <LeftLog />

        {/* right part */}
        <div className="w-3/5  p-10 bg-white text-black ">
          <div className="py-4 text-2xl flex justify-around font-bold border-b-2 border-gray-400">
            <a onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'text-blue-600 underline cursor-pointer' : 'cursor-pointer'}>Login</a>
            <a onClick={() => setActiveTab('signup')} className={activeTab === 'signup' ? 'text-blue-600 underline cursor-pointer' : 'cursor-pointer'}>Sign Up</a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="py-8 text-3xl font-medium">
              <h1>Welcome back</h1>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xl font-medium">Email</label>
              <input
                className="text-md p-3 border border-gray-500 rounded-xl outline-none"
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                required
              />
              <label className="text-xl font-medium">Password</label>
              <input
                className="text-md p-3 border border-gray-500 rounded-xl outline-none"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
              />
              <a
                href="http://"
                className="text-right text-[var(--primary)] underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex flex-col gap-5 py-6">
              <div className="">
                <input className="" type="checkbox" name="" id="" />
                <label className="ml-2 font-medium">Remember me</label>
              </div>
              <button className="bg-[var(--primary)] py-2 rounded-full text-white font-bold text-xl transition duration-500 cursor-pointer hover:bg-[var(--secondary)]">
                Login
              </button>
              <label className="text-center">
                Don't have an account?{" "}
                <a href="#Sign_up" className="text-[var(--primary)] underline">
                  Sign up
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
