import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[60px] bg-white">
      <div
        className="
          flex items-center justify-between h-full
          px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-[300px] 3xl:px-[422px] border
        "
      >
        {/* Logo */}
        <div className="border">
          <Image src="/logo.png" alt="logo" width={240} height={44} />
        </div>
        {/* Buttons (hidden on mobile) */}
        <div
          className="
            hidden sm:flex items-center justify-between gap-4 sm:gap-6 md:gap-8
            font-quicksand border
          "
        >
          <button className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#051923] hover:text-[#006494] transition-colors">
            Support
          </button>
          <button className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#051923] hover:text-[#006494] transition-colors">
            Join Our Team
          </button>
        </div>

        {/* Mobile Menu (☰) */}
        <button className="sm:hidden text-[#051923] text-2xl font-bold">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
