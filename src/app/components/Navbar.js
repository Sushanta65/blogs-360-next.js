import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-gray-800 p-4 text-white">
            <nav className="flex justify-between">
            <div>
              <Link href="/" className="mr-4">Home</Link>
              <Link href="/profile" className="mr-4">Profile</Link>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;