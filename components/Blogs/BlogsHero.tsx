"use client";

import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; // safe 1x1 pixel

type SidePost = {
  title: string;
  href: string;
  image: { src: string; alt: string }; // put your real src later
};

export default function BlogsMain() {
  // Right column posts (leave image.src empty now; it will render the placeholder)
  const sidePosts: SidePost[] = [
    {
      title: "The CleoCrew Promise: Reliable Service Every Time",
      href: "/blogs/cleocrew-promise",
      image: { src: "/cleaner.webp", alt: "Cleaner giving thumbs up" },
    },
    {
      title: "The Psychology of a Clean Home: Why Tidy Spaces Boost Your Mood",
      href: "/blogs/clean-home-psychology",
      image: { src: "/reader.webp", alt: "Cozy living room" },
    },
    {
      title: "Join the Creator Program: Share, Earn & Inspire",
      href: "/blogs/creator-program",
      image: { src: "/meme.webp", alt: "Friends taking a selfie" },
    },
    {
      title: "Eco Friendly Cleaning: Simple Swaps for a Greener Home",
      href: "/blogs/eco-friendly-cleaning",
      image: { src: "/stuff.webp", alt: "Eco-friendly cleaning supplies" },
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[988px] 3xl:h-[646px]">
      <div
        className="
          flex flex-col lg:flex-row items-start
          px-4 sm:px-6 lg:px-0
          gap-6 lg:gap-8 3xl:gap-[27px]
        "
      >
        {/* LEFT — feature post (574 × 646 @ 3xl) */}
        <Link
          href="/blogs/quick-cleaning-hacks" // Navigate to Blog Detail page
          className="group block w-full lg:w-[574px]"
        >
          {/* Image */}
          <div
            className="relative w-full overflow-hidden rounded-3xl
                          h-[220px] sm:h-[310px] md:h-[400px] lg:h-[370px] 2xl:h-[380px] 3xl:h-[386px]"
          >
            <Image
              src={"/main.webp"} // ← put your real src string later
              alt="Main blog cover"
              fill
              sizes="(max-width: 1024px) 100vw, 574px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>

          {/* Heading (42/52 @ 3xl) */}
          <h1
            className="
              mt-4 font-torus font-semibold text-[#4B4B4B] tracking-[0.01em]
              text-[26px] leading-tight
              sm:text-[30px]
              md:text-[34px]
              2xl:text-[38px]
              3xl:text-[42px] 3xl:leading-[52px]
            "
          >
            10 Quick Cleaning Hacks For Busy Professionals
          </h1>

          {/* Description (18/24 @ 3xl) */}
          <p
            className="
              mt-2 font-quicksand font-semibold text-[#777777]
              text-[15px] leading-[22px]
              sm:text-[16px]
              md:text-[17px] md:leading-6
              2xl:text-[18px] 2xl:leading-6
            "
          >
            Pressed for time? These simple tricks will keep your home fresh and
            stress-free—without eating up your day.
          </p>
        </Link>

        {/* RIGHT — stacked articles (374 × 646 @ 3xl; each 374 × 142) */}
        <aside className="w-full lg:w-[374px] flex flex-col gap-5 md:gap-6 3xl:gap-[26px]">
          {sidePosts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="
                 items-center
               
                gap-4
                w-full
                min-h-[120px] md:min-h-[130px] 2xl:min-h-[115px] 3xl:min-h-[142px]
                flex flex-row
              "
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden rounded-2xl
                              w-24 h-24 
                              sm:w-[104px] sm:h-[104px]
                              md:w-[108px] md:h-[108px]
                               2xl:w-[169px] 2xl:h-[115px]
                              3xl:w-[159px] 3xl:h-[122px]"
              >
                <Image
                  src={p.image.src} // ← drop your path in p.image.src later
                  alt={p.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Title */}
              <h3
                className="font-torus font-semibold text-[#4B4B4B]
                             text-[15px] 2xl:max-w-[221px] sm:text-[16px] 2xl:text-[18px]
                             leading-tight "
              >
                {p.title}
              </h3>
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}
