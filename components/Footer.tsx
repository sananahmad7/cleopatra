"use client";

import Image from "next/image";
import Link from "next/link";

/** Simple inline SVG set — monochrome, sized for 24×24 viewBox and inheriting currentColor */
function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "x": // X (Twitter)
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[18px] h-[18px] 3xl:w-5 3xl:h-5"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.416l-7.469 8.54L22 21.75h-6.708l-4.585-6.66-5.253 6.66H.594l7.982-8.47L2 2.25h6.708l4.292 6.277 5.244-6.277Z" />
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
          <path d="M14.75 3.25v2.08c0 1.6 1.33 3.36 3.53 3.78a7.2 7.2 0 0 0 1.97.09v2.43a7.9 7.9 0 0 1-4.6-1.52v5.4a5.75 5.75 0 1 1-5.75-5.74c.42 0 .84.05 1.24.15v2.5a2.76 2.76 0 1 0 1.99 2.65V3.25h1.62Z" />
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
          <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
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
          <path d="M13.5 21v-7.25h2.43l.37-2.98H13.5V8.85c0-.86.24-1.45 1.49-1.45h1.59V4.75c-.79-.1-1.59-.15-2.39-.15-2.37 0-4 1.45-4 4.11v2.06H7.5v2.98h2.69V21h3.31Z" />
        </svg>
      );

    default:
      return null;
  }
}

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
