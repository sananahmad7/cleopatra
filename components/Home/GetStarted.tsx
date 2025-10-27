"use client";

export default function GetStarted() {
  return (
    <section
      className="
        max-w-[530px] w-full mx-auto 
        h-auto 3xl:h-[260px]
        flex flex-col items-center justify-center
        mt-35 px-4  gap-15     /* comfy sides on small screens */
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
      <div className=" ">
        <a
          href="#"
          className=" 
    relative inline-flex items-center justify-center
    rounded-xl bg-[#FD037E] text-white
    font-torus font-semibold uppercase tracking-wide
    transition-transform duration-150 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FD037E]

    /* sizes */
    w-[220px] h-11
    sm:w-60
    md:w-[260px] md:h-12
    2xl:w-[300px] 2xl:h-[52px]

    /* bottom 'shadow bar' */
    shadow-[0_4px_0_0_#C70163]
   hover:-translate-y-[1px] hover:shadow-[0_5px_0_0_#C70163]
    active:translate-y-0 active:shadow-[0_2px_0_0_#C70163]
  "
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
}
