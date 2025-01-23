"use client";

import { useKindeAuth, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Navbar() {
  const { isAuthenticated, user } = useKindeAuth();

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="text-xl font-semibold">Blog 360</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="hidden md:inline">
                Hello, {user?.given_name || "User"}!
              </span>
              <LogoutLink>
                <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                  Logout
                </button>
              </LogoutLink>
            </>
          ) : (
            <LoginLink>
              <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </nav>

      <div className="md:hidden flex justify-between px-4 py-2 bg-gray-700">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>
    </header>
  );
}
