import Image from "next/image";
import Link from "next/link";

const JoinWaitlist = () => {
  return (
    <section className=" flex  items-center  w-full h-[780px] 3xl:h-[940px] bg-[#C70163] mt-115 md:mt-[-90] 2xl:mt-40">
      <div
        className="
        mx-auto w-full max-w-[1163px]
        flex flex-col md:flex-row items-center md:items-stretch justify-between 
        gap-6 md:gap-8 2xl:gap-10 3xl:gap-4 
        3xl:h-[534px]
      "
        aria-label="Get Ready for Sparkl — Join Our Waitlist"
      >
        {/* LEFT: Illustration (563 × 534 @ 3xl) */}
        <div
          className="
          relative shrink-0
          w-[280px] h-[260px]            /* xs */
          sm:w-[360px] sm:h-[330px]      /* sm */
          md:w-[420px] md:h-[390px]      /* md */
          lg:w-[470px] lg:h-[430px]      /* lg */
          2xl:w-[520px] 2xl:h-[490px]    /* 2xl */
          3xl:w-[563px] 3xl:h-[534px]    /* exact Figma */
        "
        >
          <Image
            src="/waitlist.webp" /* <-- replace with your image path */
            alt="Sparkl cleaner holding checklist"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* RIGHT: Centered content box (576 × 207 @ 3xl, gap 49) */}
        <div className="w-full flex items-center justify-center 3xl:h-[534px]">
          <div
            className="
            w-full max-w-[560px]
            2xl:max-w-[560px]
            3xl:w-xl 3xl:h-[207px]
            flex flex-col items-center text-center
            gap-6 3xl:gap-[49px]
          "
          >
            {/* Headings */}
            <div className="space-y-2">
              <h3
                className="
                font-torus italic font-semibold uppercase tracking-[0.01em]
                text-white
                text-[22px] leading-7           /* phones */
                sm:text-[28px] sm:leading-[34px]
                md:text-[32px] md:leading-[38px]      /* tablets */
                2xl:text-[38px] 2xl:leading-11
                3xl:text-[42px] 3xl:leading-[49px]     /* Figma exact */
              "
              >
                Get Ready for Sparkl
              </h3>

              <h2
                className="
                font-torus italic font-bold uppercase 
                text-[#FF4CB5] 
                text-[34px] leading-[38px] 
                sm:text-[40px] sm:leading-11
                md:text-[48px] md:leading-[49px]
                2xl:text-[58px] 2xl:leading-[49px]
                3xl:text-[55px] 3xl:leading-[49px]     /* Figma exact */
              "
              >
                Join Our Waitlist
              </h2>
            </div>

            {/* CTA button (145 × 48, radius 10, 1/1/3/1 borders, 11/16 padding) */}

            <Link
              href="https://example.com"
              target="_blank"
              className="
        inline-flex items-center justify-center
        w-[145px] h-12 rounded-[10px] 
        bg-white text-[#FD037E]
        font-torus font-semibold uppercase tracking-wide
        px-4 py-[11px]
         shadow-[0_1px_0_rgba(0,0,0,0.06)]
            transition-transform duration-150 hover:-translate-y-px
            [border-width:1px] border-[#9F9F9F] border-b-[3px]
      "
            >
              GET 60 FREE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
