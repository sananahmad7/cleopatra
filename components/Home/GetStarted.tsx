"use client";

export default function GetStarted() {
  return (
    <section
      className="
        max-w-[530px] w-full mx-auto 
        h-auto 3xl:h-[260px]
        flex flex-col items-center justify-center
        mt-15 md:mt-20 lg:mt-30 2xl:mt-40 px-4      
        space-y-6 sm:space-y-8 3xl:space-y-10
      "
      aria-label="Book a Cleaning with Sparkl"
    >
      {/* Title */}
      <h2
        className="
          font-torus font-bold text-center text-[#FD037E] tracking-[0.01em]
          leading-tight
          text-[26px]           /* phones */
          xs:text-[28px]
          sm:text-[34px]        /* small phones / landscape */
          md:text-[40px]        /* tablets */
          2xl:text-[47px]       /* laptops/desktops */
          3xl:text-[60px]       /* large monitors / figma scale */
        "
      >
        <span className="block">Book a Cleaning</span>
        <span className="block">with Sparkl</span>
      </h2>

      {/* CTA */}
      <a
        href="#"
        className="
          relative z-10 pointer-events-auto select-none
          inline-flex items-center justify-center
          rounded-xl bg-[#FD037E] text-white
          font-torus font-semibold uppercase tracking-wide
          transition-transform duration-150 cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD037E]

          /* sizes */
          w-[220px] h-11
          sm:w-60
          md:w-[260px] md:h-12
          2xl:w-[300px] 2xl:h-[52px]

          /* bottom 'shadow bar' (the raised pill look) */
          shadow-[0_4px_0_0_#C70163]
          hover:-translate-y-px hover:shadow-[0_5px_0_0_#C70163]
          active:translate-y-0 active:shadow-[0_2px_0_0_#C70163]
        "
      >
        GET STARTED
      </a>
    </section>
  );
}
