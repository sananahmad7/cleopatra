import Image from "next/image";
import Link from "next/link";

export default function BlogDetailHero() {
  return (
    <section
      className="
        w-full bg-[#C70163] text-white
        flex items-center
        3xl:h-[549px]
        py-10 md:py-12 3xl:py-0
      "
    >
      {/* Outer wrapper: centered + space-between children */}
      <div
        className="
          mx-auto w-full
          px-4 sm:px-6
          flex flex-col lg:flex-row justify-between items-center
          gap-8 lg:gap-10
          max-w-[1060px]
        "
      >
        {/* LEFT: text block (408×238 @ 3xl) */}
        <div
          className="
            flex flex-col
            gap-3 sm:gap-4
            text-white
            max-w-[560px]
            lg:max-w-[480px]
            3xl:w-[408px] 3xl:h-[238px] 3xl:gap-[10px]
          "
        >
          {/* Go back link */}
          <Link
            href="/blogs"
            aria-label="Back to blog"
            className="
              mb-2 inline-flex items-center gap-2
              text-white/90 hover:text-white
              text-sm md:text-base
            "
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
            <span>Back to blog</span>
          </Link>

          <h1
            className="
              font-torus font-semibold
              text-[28px] leading-[1.25]
              sm:text-[32px]
              md:text-[36px]
              2xl:text-[38px]
              3xl:text-[42px] 3xl:leading-[52px] tracking-[0.01em]
              capitalize
            "
          >
            10 Quick Cleaning Hacks For Busy Professionals
          </h1>

          <p
            className="
              font-quicksand font-semibold
              text-[15px] leading-[22px]
              sm:text-[16px]
              md:text-[17px] md:leading-6
              2xl:text-[18px] 2xl:leading-6
            "
          >
            Pressed for time? These simple tricks will keep your home fresh and
            stress-free—without eating up your day.
          </p>
        </div>

        {/* RIGHT: image (523×349 @ 3xl, radius 25) */}
        <div
          className="
            relative overflow-hidden rounded-[20px]
            w-full h-[220px]
            sm:h-[260px] md:h-[300px] lg:h-[320px]
            2xl:h-[330px]
            3xl:w-[523px] 3xl:h-[349px] 3xl:rounded-[25px]
          "
        >
          <Image
            src={"/main.webp"} // replace with your real image path
            alt="Blog cover"
            fill
            sizes="(max-width:1024px) 100vw, 523px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
