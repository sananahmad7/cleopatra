"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  // 🔗 Right-column policy links: fill in real URLs later
  const policyLinks = [
    { label: "TERMS OF SERVICE", href: "" },
    { label: "PRIVACY POLICY", href: "" },
    { label: "COOKIE POLICY", href: "" },
    { label: "NOTICE AT COLLECTION", href: "" },
    { label: "OUR LOCATIONS", href: "" },
    { label: "OUR BLOG", href: "/blogs" },
    { label: "CREATOR PROGRAM", href: "" },
  ];

  return (
    <footer
      className=" font-quicksand
        w-full bg-[#FD037E] text-white
        3xl:h-[491px] mt-40
      "
      aria-label="Site footer"
    >
      {/* content wrapper */}
      <div
        className="
          mx-auto w-full max-w-[1920px]
          px-6 sm:px-8 lg:px-10
          py-10 md:py-14 3xl:pb-10
          grid gap-10 md:gap-12
          md:grid-cols-3 items-start
        "
      >
        {/* LEFT: logo + socials */}
        <div className="flex flex-col items-start gap-3 md:gap-8 3xl:pt-20">
          <Image
            src="/logosimple.png"
            alt="Cleopatra logo"
            width={56}
            height={56}
            priority
          />

          {/* socials */}
          <div className="flex items-center gap-2 md:gap-2">
            {[
              { label: RiTwitterXLine, slug: "x" },
              { label: FaLinkedinIn, slug: "linkedin" },
              { label: FiYoutube, slug: "youtube" },

              { label: SiTiktok, slug: "tiktok" },

              { label: FaInstagram, slug: "instagram" },

              { label: FaFacebookF, slug: "facebook" },
            ].map((s) => (
              <Link
                key={s.slug}
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-white/70
                  w-[42px] h-10 md:w-[33px] md:h-[35px] lg:w-[45px] lg:h-[45px] 2xl:w-[45px] 2xl:h-[45px]
                  text-white hover:bg-white/10 transition
                "
              >
                {<s.label />}
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
            justify-self-left
          "
        >
          <h3 className=" lg:px-5 text-white text-lg font-semibold mb-5">
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
                    h-12  lg:px-5
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
          className="justify-self-start md:justify-self-center 3xl:pt-20"
        >
          <ul className="space-y-3 md:space-y-4 text-white/95">
            {policyLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href || "#"}
                  className="hover:opacity-90 text-sm md:text-[15px]"
                >
                  {item.label}
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
