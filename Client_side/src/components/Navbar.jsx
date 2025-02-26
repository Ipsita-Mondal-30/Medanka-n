import React, { useRef, useState, useEffect } from "react";
import { FaHospitalUser, FaPrescriptionBottleAlt, FaPills } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import GlowingButton from "./GlowingButton";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import SideScroll from "./SideScroll";
import { useNavigate } from "react-router-dom";
import medanka from "../assets/medanka.png";

function Navbar() {
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Custom blue glowing button for emergency
  const BlueGlowingButton = ({ size }) => {
    return (
      <button className={`relative font-dm-sans bg-blue-600 text-white ${
        size === "small" ? "px-3 py-1.5 text-sm" : "px-5 py-2 text-base"
      } font-medium tracking-wide rounded-md hover:bg-blue-700 transition-all duration-300 
      before:absolute before:inset-0 before:rounded-md before:bg-blue-400 before:animate-pulse before:opacity-70 before:blur-xl
      hover:shadow-lg hover:shadow-blue-500/50`}>
        EMERGENCY
      </button>
    );
  };

  return (
    <>
      <nav className={`flex fixed top-0 left-0 w-full h-[10vh] justify-between px-4 lg:px-12 text-xl z-20
        ${scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white/80 backdrop-blur-sm"} 
        transition-all duration-300`}>
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center no-underline">
            <img
              src={medanka}
              alt="Medanka logo"
              className="h-16 w-auto object-contain"
            />
            <div className="pl-2 font-montserrat text-2xl lg:text-3xl max-md:text-xl font-semibold tracking-tight">
              <span className="text-blue-700">Med</span>
              <span className="text-gray-800">anka</span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden lg:flex gap-x-10 text-slate-700 font-dm-sans">
          <div
            onClick={() => {
              navigate("/image-to-text");
            }}
            className="flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            <FaPrescriptionBottleAlt size={18} />
            <span>Prescription</span>
          </div>

          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a className="flex items-center gap-2 font-medium no-underline cursor-pointer text-slate-700 transition-all duration-200 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 pb-1">
              <RiUserHeartLine size={20} />
              <span>Account</span>
            </a>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 py-3 px-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl text-slate-700 min-w-[200px] font-dm-sans border border-gray-100">
                <a
                  onClick={() => navigate("/hospital-signin")}
                  className="cursor-pointer flex items-center gap-2 py-2.5 hover:text-blue-700 transition-all duration-200"
                >
                  Hospital Login
                </a>
                <div className="h-px bg-gray-100 my-1"></div>
                <a
                  onClick={() =>
                    navigate("/patient-signup/66d316beb1edbdc0f279c00e")
                  }
                  className="cursor-pointer flex items-center gap-2 py-2.5 hover:text-blue-700 transition-all duration-200"
                >
                  Patient Login
                </a>
                <div className="h-px bg-gray-100 my-1"></div>
                <a
                  onClick={() => navigate("/doctor-login")}
                  className="cursor-pointer flex items-center gap-2 py-2.5 hover:text-blue-700 transition-all duration-200"
                >
                  Doctor Login
                </a>
                <div className="h-px bg-gray-100 my-1"></div>
                <div
                  onClick={() => {
                    localStorage.removeItem("token");
                    alert("You have successfully logged out.");
                  }}
                  className="cursor-pointer flex items-center gap-2 py-2.5 hover:text-blue-700 transition-all duration-200"
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => navigate("/dispensation")}
            className="flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 pb-1"
          >
            <FaPills size={18} />
            <span>Medication</span>
          </div>
        </div>

        {/* Emergency Button and Hamburger for mobile */}
        <div className="flex items-center">
          <div
            onClick={() => navigate("/emergency")}
            className="pr-4 lg:pr-0"
          >
            <BlueGlowingButton size="small" />
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer lg:hidden"
          >
            {nav ? (
              <RxCross1 size={28} className="text-gray-700" />
            ) : (
              <RxHamburgerMenu size={28} className="text-gray-700" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {nav && <SideScroll nav={nav} />}
      </nav>
      
      {/* Add custom font imports to the head of your document */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        
        .font-dm-sans {
          font-family: 'DM Sans', sans-serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  );
}

export default Navbar;