import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[611px] 3xl:h-[670px] flex items-center mt-10 md:mt-0  bg-[#FFFFFF] p-4 ">
      <div className="border w-full md:max-w-[900px] 2xl:max-w-[975px] mx-auto  h-auto  flex flex-col md:flex-row items-stretch md:gap-8 gap-8 bg-white rounded-lg overflow-hidden ">
        {/* Left side - Image */}
        <div className="w-full sm:h-[400px] md:w-[350px] h-[300px] md:h-[380px] relative shrink-0">
          <Image
            src="/cleaninglady.webp"
            alt="logo"
            fill
            className="object-cover md:object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="border w-full   flex flex-col justify-center  md:items-start px-6 md:px-4 md:pr-6 py-8 md:py-0">
          <h2 className="w-full border md:max-w-[400px] lg:max-w-[500px] lg:w-[500px]  md:h-[72px] font-torus font-extrabold text-[20px] md:text-[23px] 2xl:text-[35px] leading-9 md:leading-9 text-center md:text-left text-[#4B4B4B] mb-8 md:mb-6">
            The easiest, most trusted way to book your next cleaning.
          </h2>

          {/* App Store / Google Play badges */}
          <div className="flex flex-col sm:justify-center sm:flex-row gap-4 w-full md:w-auto mx-auto">
            {/* App Store */}
            <a
              href="#"
              aria-label="Download on the App Store"
              className="
      inline-flex items-center justify-center gap-2.5
      w-[180px] h-[58px]
      rounded-[10px] bg-white text-[#1E1E1E]
      px-[7px] py-2
      border border-[#E1E1E1] border-b-[3px]
      hover:bg-gray-50 transition-colors
    "
            >
              {/* Apple icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>

              <div className="leading-tight">
                <div className="text-[14px] font-medium">Download on the</div>
                <div className="text-[16px] font-semibold">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="
      inline-flex items-center justify-center gap-2.5
      w-[180px] h-[58px]
      rounded-[10px] bg-white text-[#1E1E1E]
      px-[7px] py-2
      border border-[#E1E1E1] border-b-[3px]
      hover:bg-gray-50 transition-colors
    "
            >
              {/* Play icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85A1.5 1.5 0 0 1 3 20.5Zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27Zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18L17.89 14.5 15.39 12l2.5-2.5 2.27 1.31ZM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66Z" />
              </svg>

              <div className="leading-tight">
                <div className="text-[14px] font-medium">Get it on</div>
                <div className="text-[16px] font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
