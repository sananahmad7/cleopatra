"use client";

import Image from "next/image";
import Link from "next/link";

type Post = {
  href: string;
  title: string;
  imgAlt: string;
  src: string;
};

const posts: Post[] = [
  {
    href: "/blogs/quick-cleaning-hacks",
    title: "10 Quick Cleaning Hacks for Busy Professionals",
    imgAlt: "Cleaning supplies on a table",
    src: "/procleaning.webp",
  },
  {
    href: "/blogs/cleocrew-promise",
    title: "The CleoCrew Promise: Reliable Service Every Time",
    imgAlt: "Cleaner smiling at the camera",
    src: "/cleanhome.webp",
  },
  {
    href: "/blogs/creator-program",
    title: "Join the Creator Program: Share, Earn & Inspire",
    imgAlt: "Friends creating content together",
    src: "/meme.webp",
  },
  {
    href: "/blogs/eco-friendly-cleaning",
    title: "Eco-Friendly Cleaning: Simple Swaps for a Greener Home",
    imgAlt: "Eco friendly cleaning set on a tray",
    src: "/stuff.webp",
  },
];

export default function AllArticles() {
  return (
    <section
      className="
        mt-40 mx-auto w-full max-w-[988px]
        px-4 sm:px-6 md:px-0
        3xl:h-[959px]
      "
      aria-label="All Articles"
    >
      {/* Title */}
      <h2
        className="
          font-torus font-bold text-[#FD037E] tracking-[0.01em]
          text-[34px] leading-10
          sm:text-[40px] sm:leading-[46px]
          md:text-[44px] md:leading-[52px]
          2xl:text-[45px] 2xl:leading-[54px]     /* tuned for laptops */
          3xl:text-[52px] 3xl:leading-[58px]     /* Figma at 3xl */
        "
      >
        All Articles
      </h2>

      {/* Grid (2 columns ≥ md) */}
      <div
        className="
          mt-6 grid grid-cols-1 md:grid-cols-2
          gap-6 md:gap-8
          2xl:gap-9                      /* 36px on laptops */
          3xl:gap-10                 /* 40px on big monitors */
          3xl:h-[804px]
        "
      >
        {posts.map((p, i) => (
          <Link
            key={p.href}
            href={p.href}
            className="
              group block w-full rounded-[20px]
              3xl:h-[382px]
            "
          >
            {/* Image */}
            <div
              className="
                relative overflow-hidden rounded-[22px]
                h-[200px] sm:h-[220px] md:h-[230px] lg:h-60
                2xl:h-[246px]                /* laptop-specific */
                3xl:h-[274px]                /* leaves room for title to reach 382px */
              "
            >
              <Image
                src={p.src}
                alt={p.imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 474px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={i === 0}
              />
            </div>

            {/* Article title */}
            <h3
              className="
                mt-4 text-[#4B4B4B] font-torus font-semibold
                text-[20px] leading-7
                sm:text-[24px] sm:leading-8
                md:text-[26px]
                2xl:text-[27px] 2xl:leading-8   /* laptop tune */
                3xl:text-[32px] 3xl:leading-10  /* Figma: 32/40 */
              "
            >
              {p.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Bottom button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/blogs"
          className="
            inline-flex items-center justify-center
            rounded-[10px] bg-white text-[#FD037E] font-semibold
            [border-width:1px] border-[#E7E7E7] border-b-[3px]
            shadow-[0_1px_0_rgba(0,0,0,0.06)]
            transition-transform duration-150 hover:-translate-y-px
            text-xs sm:text-sm

            /* sizing */
            w-[220px] h-11
            md:w-[260px] md:h-12
            2xl:w-[280px]                 /* smaller on laptops */
            3xl:w-[330px] 3xl:h-12 3xl:py-[11px] 3xl:px-[113px]
          "
        >
          READ MORE
        </Link>
      </div>
    </section>
  );
}
