import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[700px] 3xl:h-[820px] flex items-center justify-center bg-[#FFFFFF] p-4 ">
      <div className="w-full md:max-w-[900px] 2xl:max-w-[975px] mx-auto  h-auto md:h-[414px] flex flex-col md:flex-row items-stretch md:gap-8 gap-8 bg-white rounded-lg overflow-hidden ">
        {/* Left side - Image */}
        <div className="w-full sm:h-[400px] md:w-[400px] h-[300px] md:h-[414px] relative shrink-0">
          <Image
            src="/cleaninglady.webp"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-[400px]  flex flex-col justify-center items-center md:items-start px-6 md:px-4 md:pr-6 py-8 md:py-0">
          <h2 className="w-full md:w-[350px] lg:w-[400px]  md:h-[72px] font-torus font-bold text-[28px] md:text-[28px] leading-9 md:leading-9 text-center md:text-left text-[#4B4B4B] mb-8 md:mb-6">
            The easiest, most trusted way to book your next cleaning.
          </h2>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:mt-10 lg:mt-0 md:w-auto">
            {/* App Store Button */}
            <button className="flex items-center justify-center  md:justify-start gap-3 md:gap-2 bg-white text-black px-5 py-3 md:px-4 md:py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 shadow-sm transition-colors">
              <svg
                className="w-8 h-8 md:w-7 md:h-7 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">Download on the</div>
                <div className="text-sm md:text-xs font-semibold leading-tight">
                  App Store
                </div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center justify-center md:justify-start gap-3 md:gap-2 shadow-sm bg-white text-black px-5 py-3 md:px-4 md:py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
              <svg
                className="w-8 h-8 md:w-7 md:h-7 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">Get it on</div>
                <div className="text-sm md:text-xs font-semibold leading-tight">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
