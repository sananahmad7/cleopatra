"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogDetailRelated() {
  const posts = [
    {
      href: "/blogs/pro-cleaning-signs",
      title: "5 Signs It’s Time to Book a Professional Cleaning",
      imgAlt: "Person sorting laundry on a couch",
      src: "/procleaning.webp",
    },
    {
      href: "/blogs/clean-home-psychology",
      title: "The Psychology of a Clean Home: Why Tidy Spaces Boost Your Mood",
      imgAlt: "Person reading on a sofa with coffee",
      src: "/cleanhome.webp",
    },
  ];

  return (
    <section
      className="
        mx-auto w-full max-w-[988px]
        px-4 sm:px-6 lg:px-0
        3xl:h-[577px] mt-20
      "
      aria-label="Most Popular Posts"
    >
      {/* Title (52/58 at 3xl) */}
      <h2
        className="
          font-torus font-bold text-[#FD037E] tracking-[0.01em]
          text-[34px] leading-10
          sm:text-[40px] sm:leading-[46px]
          md:text-[46px] md:leading-[52px]
          3xl:text-[52px] 3xl:leading-[58px]
        "
      >
        Most Popular Posts
      </h2>

      {/* Row of two articles (gap 40 at 3xl) */}
      <div
        className="
          mt-6 grid grid-cols-1 md:grid-cols-2
          gap-6 md:gap-8 3xl:gap-10
          3xl:h-[422px]
        "
      >
        {posts.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="
              group block w-full
              rounded-[20px]
              3xl:h-[382px]
            "
          >
            {/* Image */}
            <div
              className="
                relative overflow-hidden rounded-[22px]
                h-[200px] sm:h-[230px] md:h-60 lg:h-[250px] 2xl:h-[260px]
              "
            >
              <Image
                src={p.src} // ← replace with your image path
                alt={p.imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 474px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={i === 0}
              />
            </div>

            {/* Article title (32/40 at 3xl) */}
            <h3
              className="
                mt-4 font-torus font-semibold text-[#4B4B4B]
                text-[22px] leading-7
                sm:text-[26px] sm:leading-8
                md:text-[28px]
                2xl:text-[30px]
                3xl:text-[32px] 3xl:leading-10
              "
            >
              {p.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* View All button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/blogs"
          className="
            inline-flex items-center justify-center
            rounded-[14px] bg-white text-[#FD037E] font-semibold
            [border-width:1px] border-[#9F9F9F] border-b-[3px]
            px-8 py-3
            border border-[]      
            text-xs sm:text-sm
            shadow-[0_1px_0_rgba(0,0,0,0.06)]
            transition-transform duration-150 hover:-translate-y-px

               /* sizing */
            w-[220px] h-11
            md:w-[260px] md:h-12
            2xl:w-[280px]                 /* smaller on laptops */
            3xl:w-[330px] 3xl:h-12 3xl:py-[11px] 3xl:px-[113px]
          "
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  );
}
