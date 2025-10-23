"use client";

export default function GetStarted() {
  return (
    <section
      className="
        max-w-[530px] w-full mx-auto 
        h-auto 3xl:h-[260px]
        flex flex-col items-center justify-center
        mt-30 px-4       /* comfy sides on small screens */
      "
      aria-label="Book a Cleaning with Sparkl"
    >
      {/* Title */}
      <h2
        className="
          font-torus font-bold text-center text-[#FD037E] tracking-[0.01em]
          leading-tight
          text-[26px]           /* phones (<=374–640) */
          xs:text-[28px]
          sm:text-[34px]        /* small phones / landscape */
          md:text-[40px]        /* tablets */
          2xl:text-[47px]       /* big screens */
         
        "
      >
        <span className="block">Book a Cleaning</span>
        <span className="block">with Sparkl</span>
      </h2>

      {/* Button */}
      <a
        href="/get-started"
        className="
         mt-5 md:mt-8 3xl:mt-14
          inline-flex items-center justify-center
          rounded-full bg-[#FD037E] text-white
          shadow-[0_1px_0_rgba(0,0,0,0.08)]
          transition-transform duration-150 hover:-translate-y-px
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD037E]
          
          /* responsive sizing */
          w-[200px] h-10         /* phones */
          xs:w-[220px]
          sm:w-60 sm:h-11
          md:w-[260px] md:h-12   /* tablets */
          2xl:w-[300px] 2xl:h-[52px]
          

          /* text */
          text-[11px] sm:text-xs md:text-sm 3xl:text-base font-semibold uppercase tracking-wide
        "
      >
        GET STARTED
      </a>
    </section>
  );
}
