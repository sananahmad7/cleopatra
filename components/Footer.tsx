"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className=" font-quicksand
        w-full bg-[#FD037E] text-white
        3xl:h-[491px]
      "
      aria-label="Site footer"
    >
      {/* content wrapper */}
      <div
        className="
          mx-auto w-full max-w-[1920px]
          px-6 sm:px-8 lg:px-10
          py-10 md:py-14 3xl:py-0
          grid gap-10 md:gap-12
          md:grid-cols-3 items-start
        "
      >
        {/* LEFT: logo + socials */}
        <div className="flex flex-col items-start gap-6 md:gap-8 3xl:pt-20">
          <Image
            src="/logosimple.png"
            alt="Cleopatra logo"
            width={56}
            height={56}
          />
          {/* socials */}
          <div className="flex items-center gap-4">
            {[
              { label: "Twitter / X", char: "X" },
              { label: "LinkedIn", char: "in" },
              { label: "YouTube", char: "▶" },
              { label: "TikTok", char: "♫" },
              { label: "Instagram", char: "◎" },
              { label: "Facebook", char: "f" },
            ].map((s) => (
              <Link
                key={s.label}
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-white/70
                  w-[42px] h-[42px] 3xl:w-[46px] 3xl:h-[46px]
                  text-white hover:bg-white/10 transition
                "
                aria-label={s.label}
              >
                <span className="text-sm 3xl:text-base font-semibold">
                  {s.char}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER: Apps box (460×270 @ 3xl, top offset ≈80px) */}
        <div
          className="
            w-full max-w-[520px]
            2xl:max-w-[480px]
            3xl:max-w-[460px] 3xl:h-[270px] 3xl:pt-20
            justify-self-center
          "
        >
          <h3 className="px-4 md:px-5 text-white text-lg font-semibold mb-5">
            Apps
          </h3>

          <ul className="divide-y divide-white/20 rounded-xl overflow-hidden bg-white/0">
            {["Cleopatra for Android", "CLEOPATRA FOR IOS", "HELP CENTER"].map(
              (t) => (
                <li key={t}>
                  <Link
                    href="#"
                    className="
                    flex items-center justify-between
                    h-12 px-4 md:px-5
                    text-white/95 hover:bg-white/5 transition
                  "
                  >
                    <span className="text-sm md:text-[15px]">{t}</span>
                    <span aria-hidden className="text-xl leading-none">
                      →
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT: policy links */}
        <nav
          aria-label="Policies"
          className="justify-self-start md:justify-self-end 3xl:pt-20"
        >
          <ul className="space-y-3 md:space-y-4 text-white/95">
            {[
              "TERMS OF SERVICE",
              "PRIVACY POLICY",
              "COOKIE POLICY",
              "NOTICE AT COLLECTION",
              "OUR LOCATIONS",
              "OUR BLOG",
              "CREATOR PROGRAM",
            ].map((t) => (
              <li key={t}>
                <Link
                  href="#"
                  className="hover:opacity-90 text-sm md:text-[15px]"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* divider + copyright */}
      <div className="border-t border-white/30">
        <p className="text-center text-white/90 text-xs py-4">
          © 2025 Cleopatra Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
