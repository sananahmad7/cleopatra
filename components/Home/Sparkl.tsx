"use client";
import Image from "next/image";

const Sparkl = () => {
  return (
    <div className="flex flex-col max-w-[988px]  h-[956px] mx-auto mt-30">
      <section
        className="
          mx-auto w-full max-w-[988px]
          flex flex-col md:flex-row items-center justify-between
          gap-8 md:gap-6 lg:gap-8 2xl:gap-16 3xl:gap-20
          px-4 sm:px-6 md:px-8 lg:px-4
          py-8 md:py-0
          3xl:h-[423px]
        "
        aria-label="Sparkl for Business teaser"
      >
        {/* LEFT — text stack */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start order-2 md:order-1">
          <div
            className="
              w-full max-w-[560px]
              md:max-w-none md:w-auto
              2xl:max-w-[520px]
              3xl:w-[479px]
              flex flex-col items-center md:items-start
              gap-4 md:gap-5
            "
          >
            {/* Title */}
            {/* Brand lockup (logo + text as one image) */}
            <div className="inline-flex items-center justify-center md:justify-start">
              <Image
                src="/sparkllogo.webp" // ← put your combined asset here
                alt="sparkl for business"
                width={1200} // intrinsic file size (any large enough value)
                height={250}
                priority
                className="
                    inline-block align-middle
                    w-auto
                    h-10 md:h-12 2xl:h-14 3xl:h-16  // ← controls visual size across breakpoints
                    select-none pointer-events-none // crisp + non-interactive
    "
                sizes="(max-width:768px) 70vw, (max-width:1280px) 50vw, 479px"
              />
            </div>

            {/* Description */}
            <p
              className="
                font-quicksand font-semibold text-[#777777]
                text-center md:text-left
                text-[16px] leading-[22px]
                md:text-[17px] md:leading-6
                2xl:text-[18px] 2xl:leading-6
                max-w-[90%] md:max-w-[60ch]
              "
            >
              Whether it's offices, gyms, or retail spaces, Cleopatra for
              Business is coming soon to bring trusted, on-demand cleanings to
              your workplace with flexible scheduling, vetted pros, and no
              contracts.
            </p>

            {/* Button */}
            <button
              type="button"
              className="
                inline-flex items-center justify-center
                rounded-[10px] bg-white text-[#FD037E] font-semibold
                border border-[#9F9F9F] border-b-[3px]
                shadow-[0_1px_0_rgba(0,0,0,0.06)]
                transition-transform duration-150 hover:-translate-y-px
                w-60 h-11
                md:w-[280px] md:h-12
                3xl:w-[330px] 3xl:h-12
              "
              aria-label="Coming Soon"
            >
              COMING SOON
            </button>
          </div>
        </div>

        {/* RIGHT — illustration */}
        <div
          className="
            relative shrink-0
            order-1 md:order-2
            w-[280px] h-[260px]
            sm:w-[320px] sm:h-[300px]
            md:w-[340px] md:h-[340px]
            lg:w-[380px] lg:h-[380px]
            2xl:w-[410px] 2xl:h-[390px]
            3xl:w-[426px] 3xl:h-[423px]
          "
        >
          <Image
            src="/sparkl1.webp"
            alt="Storefront with cleaner"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </section>
      <section
        className="
    mx-auto w-full max-w-[988px] mt-20
    flex flex-col md:flex-row items-center justify-between
    gap-8 md:gap-6 lg:gap-8 2xl:gap-16 3xl:gap-[83px]
    px-4 sm:px-6 md:px-8 lg:px-4
    py-8 md:py-0
    3xl:h-[423px]
  "
        aria-label="Tailored for You"
      >
        {/* Left: Illustration (426 × 423 @ 3xl) */}
        <div
          className="
      relative shrink-0
      order-1 md:order-1
      w-[280px] h-[260px]             /* xs */
      sm:w-[320px] sm:h-[300px]       /* sm */
      md:w-[340px] md:h-[340px]       /* md */
      lg:w-[380px] lg:h-[380px]       /* lg */
      2xl:w-[410px] 2xl:h-[390px]     /* 2xl */
      3xl:w-[426px] 3xl:h-[423px]     /* exact Figma */
    "
        >
          <Image
            src="/egyptlady.webp" /* replace with your asset path */
            alt="Cleaner wiping surface"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Right: Text column (fills remaining width; inner box centered) */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-start order-2 md:order-2 3xl:h-[482px]">
          {/* Inner content box (479 × 152 @ 3xl, gap 22) */}
          <div
            className="
        w-full max-w-[520px]
        md:max-w-none md:w-auto
        2xl:max-w-[500px]
        3xl:w-[479px] 3xl:h-[152px]
        flex flex-col items-center md:items-start
        gap-4 3xl:gap-[22px] justify-center
      "
          >
            {/* Title */}
            <h2
              className="
          font-torus font-bold tracking-[0.01em] text-[#FD037E]
          text-center md:text-left
          text-[34px] leading-10             /* phones */
          md:text-[40px] md:leading-[46px]   /* tablets */
          2xl:text-[48px] 2xl:leading-[54px]
          3xl:text-[45px] 3xl:leading-[58px] /* keep your value */
        "
            >
              Sparkler of the Month Jackeline R.
            </h2>

            {/* Description */}
            <p
              className="
          font-quicksand font-semibold text-[#777777]
          text-center md:text-left
          text-[16px] leading-[22px]
          md:text-[17px] md:leading-6
          2xl:text-[18px] 2xl:leading-6
          max-w-[90%] md:max-w-[90%]
        "
            >
              An elite cleaning standard crafted for those who expect more. Each
              CleoCrew member follows a precise, proven system designed to
              deliver exceptional results. From first impression to final
              walkthrough, every detail is handled with care, precision, and
              pride, delivering a cleaning fit for royalty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sparkl;
