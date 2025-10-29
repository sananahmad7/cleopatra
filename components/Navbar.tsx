"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF]  relative">
      <div
        className="
          flex items-center justify-between h-[60px] max-w-[975px] mx-auto
        "
      >
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={440}
              height={107}
              className="w-[190px]  md:w-[200px] 3xl:w-[197px] 3xl:h-[32px]"
            />
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div
          className=" 
            hidden sm:flex items-center justify-between gap-4 sm:gap-6 md:gap-8
            font-quicksand
          "
        >
          <button className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#051923] hover:text-[#006494] transition-colors">
            Support
          </button>
          <button className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#051923] hover:text-[#006494] transition-colors">
            Join Our Team
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-[#051923] text-3xl font-bold focus:outline-none mr-7"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="
            absolute top-[60px] left-0 w-full bg-white shadow-lg border-t
            flex flex-col items-center py-4 gap-4
            sm:hidden z-50
          "
        >
          <button className="text-[16px] font-quicksand font-bold text-[#051923] hover:text-[#006494] transition-colors">
            Support
          </button>
          <button className="text-[16px] font-quicksand font-bold text-[#051923] hover:text-[#006494] transition-colors">
            Join Our Team
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
