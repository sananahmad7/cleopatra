"use client";

import Image from "next/image";
import Link from "next/link";

/** Simple inline SVG set — monochrome, sized for 24×24 viewBox and inheriting currentColor */
function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "x": // Twitter / X (monochrome "X")
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          {/* stylized X */}
          <path d="M2 3.25h4.1l5.01 6.68 5.32-6.68H22l-7.6 9.3 7.9 10.2h-4.18l-5.56-7.21-5.73 7.21H2l8.25-10.4L2 3.25Zm6.37 15.5 3.58-4.48 3.45 4.48H8.37Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          {/* LI round-corner tile + "in" monogram */}
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3.5 9.25h2.96V21H3.5V9.25ZM9.25 9.25h2.84v1.6h.04c.4-.76 1.39-1.84 3.22-1.84 2.44 0 4.28 1.6 4.28 5.05V21h-2.98v-6.16c0-1.5-.54-2.53-1.88-2.53-1.03 0-1.64.69-1.91 1.36-.1.24-.13.57-.13.9V21H9.25V9.25Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          {/* YT rounded rectangle + play triangle */}
          <path d="M23 12c0-2.22-.2-3.71-.52-4.63a3.13 3.13 0 0 0-1.86-1.86C19.7 5.2 12 5.2 12 5.2s-7.7 0-8.62.31A3.13 3.13 0 0 0 1.52 7.37C1.2 8.29 1 9.78 1 12s.2 3.71.52 4.63c.34.98 1.09 1.74 2.06 2.06.92.31 8.42.31 8.42.31s7.7 0 8.62-.31a3.13 3.13 0 0 0 2.06-2.06c.32-.92.52-2.41.52-4.63ZM9.75 8.9l6.14 3.1-6.14 3.1V8.9Z" />
        </svg>
      );

    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          {/* TikTok note with tail */}
          <path d="M14.75 3.5v8.06a4.06 4.06 0 1 1-3.07-1.2V8.48a6.35 6.35 0 1 0 6.64 6.33v-5.1a6.6 6.6 0 0 0 3.68 1.15V8.6c-1.66-.02-3.5-.74-4.76-2.03-1.2-1.23-1.49-2.38-1.49-3.07h-1Zm0 0Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="geometricPrecision"
        >
          {/* outer rounded square */}
          <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
          {/* lens */}
          <circle cx="12" cy="12" r="3.6" />
          {/* flash dot (filled) */}
          <circle
            cx="16.3"
            cy="7.7"
            r="1.1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          {/* Fb 'f' */}
          <path d="M13.5 21v-7.25h2.43l.37-2.98H13.5V8.85c0-.86.24-1.45 1.49-1.45h1.59V4.75c-.79-.1-1.59-.15-2.39-.15-2.37 0-4 1.45-4 4.11v2.06H7.5v2.98h2.69V21h3.31Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Footer() {
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
              { label: "Twitter / X", slug: "x" },
              { label: "LinkedIn", slug: "linkedin" },
              { label: "YouTube", slug: "youtube" },
              { label: "TikTok", slug: "tiktok" },
              { label: "Instagram", slug: "instagram" },
              { label: "Facebook", slug: "facebook" },
            ].map((s) => (
              <Link
                key={s.slug}
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-white/70
                  w-[42px] h-[42px] 3xl:w-[46px] 3xl:h-[46px]
                  text-white hover:bg-white/10 transition
                "
                aria-label={s.label}
              >
                <SocialIcon name={s.slug} />
                <span className="sr-only">{s.label}</span>
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
            md:justify-self-center
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
          className="justify-self-start md:justify-self-center 3xl:pt-20"
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
