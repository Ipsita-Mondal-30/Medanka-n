import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-black ">
      <div className="container flex flex-wrap items-start justify-between px-4 mx-auto lg:items-center">
        
        {/* Review Section */}
        <div className="mb-8 lg:w-1/3 lg:mb-0">
          <h2 className="mb-4 text-2xl font-bold">Please drop your review</h2>
          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 text-white bg-transparent focus:outline-none"
            />
            <button className="ml-2 text-2xl transition duration-300 transform hover:scale-110">
              &#8594;
            </button>
          </div>
        </div>

        {/* Social Handles */}
        <div className="mb-8 lg:w-1/4 lg:mb-0">
          <h3 className="mb-4 text-lg font-semibold">Social Handles</h3>
          <ul className="space-y-3">
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Instagram</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">WhatsApp</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Community</li>
            <li className="italic transition duration-300 cursor-pointer hover:text-gray-400">Mail</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="lg:w-1/4">
          <h3 className="mb-4 text-lg font-semibold">Support</h3>
          <ul className="space-y-3">
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Get all hospitals</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Help & FAQ</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Terms & Conditions</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Privacy Policy</li>
            <li className="transition duration-300 cursor-pointer hover:text-gray-400">Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-4 mt-10 text-center border-t border-gray-600">
        <p className="text-sm">© 2024 CityCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
