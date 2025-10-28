"use client";
import * as React from "react";
import Image from "next/image";

type Feature = { label: string; icon: React.ReactNode };
type Props = {
  speed?: number; // seconds: higher = slower
  className?: string;
  items?: Feature[];
  pauseOnHover?: boolean;
};

const pink = "currentColor";
const PH = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="; // ← replace with real icon srcs

/** inline images (32×32 to match h-8 w-8) */
const Icons = {
  UserCheck: (
    <Image
      src={"/cleaners.png"} // replace with "/icons/user-check.png" (example)
      alt="Vetted Cleaners icon"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      priority
    />
  ),
  DollarCoin: (
    <Image
      src={"/pricing.png"} // replace with "/icons/dollar-coin.png"
      alt="Transparent Pricing icon"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      priority
    />
  ),
  Calendar: (
    <Image
      src={"/fast.png"} // replace with "/icons/calendar-check.png"
      alt="Fast Booking icon"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      priority
    />
  ),
  Diamond: (
    <Image
      src={"/premium.png"} // replace with "/icons/diamond.png"
      alt="Premium Service icon"
      width={32}
      height={32}
      className="h-8 w-8 object-contain"
      priority
    />
  ),
  Clock247: (
    <Image
      src={"/support.png"} // replace with "/icons/clock-247.png"
      alt="24/7 Support icon"
      width={34}
      height={34}
      className="h-8 w-8 object-contain"
      priority
    />
  ),
};

const defaultItems: Feature[] = [
  { label: "VETTED CLEANERS", icon: Icons.UserCheck },
  { label: "TRANSPARENT PRICING", icon: Icons.DollarCoin },
  { label: "FAST BOOKING", icon: Icons.Calendar },
  { label: "PREMIUM SERVICE", icon: Icons.Diamond },
  { label: "24/7 SUPPORT", icon: Icons.Clock247 },
];

export default function SlidingPanel({
  speed = 18,
  items = defaultItems,
  className = "",
  pauseOnHover = true,
}: Props) {
  // duplicate once like in the Clients marquee
  const row = [...items, ...items];

  return (
    <div className="border-y-2 border-[#E5E5E5] mt-20 md:mt-0">
      <div
        className={[
          "relative mx-auto w-[998px] h-16 max-w-full overflow-hidden flex items-center ",
          " mask-fade ",
          className,
          pauseOnHover ? "group" : "",
        ].join(" ")}
        aria-label="Premium features ticker"
      >
        <ul
          className={[
            "marquee flex items-center gap-[var(--gap)] min-w-max  ",
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
          ].join(" ")}
          style={
            {
              animationDuration: `${speed}s`,
              ["--gap" as any]: "1.5rem",
            } as React.CSSProperties
          }
        >
          {row.map((item, idx) => (
            <li
              key={idx}
              className="flex shrink-0 items-center gap-3 text-base md:text-[17px] font-semibold tracking-wide text-slate-700"
            >
              {/* color class left intact; will not affect images */}
              <span className="text-pink-500">{item.icon}</span>
              <span className="whitespace-nowrap text-[#777777]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <style jsx>{`
          .marquee {
            display: flex;
            width: max-content;
            will-change: transform;
            animation: marquee linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(calc(-50% - (var(--gap) / 2)), 0, 0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
