"use client";

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { isAuthenticated, user, isLoading } = useKindeAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center -mt-52">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user?.given_name || "User"}!
        </h1>
        <p className="text-gray-600">
          You’re now logged into your profile. Explore and make the most of our
          services!
        </p>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}
