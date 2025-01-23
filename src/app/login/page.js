import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center -mt-52">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Hey! You are not Logged In.
        </h2>
        <p className="text-gray-600 mb-6">
          If you want to visit your profile, you need to log in first.
        </p>
        <LoginLink>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </LoginLink>
      </div>
    </div>
  );
};

export default Page;
