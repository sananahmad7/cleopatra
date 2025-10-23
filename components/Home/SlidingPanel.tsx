"use client";
import * as React from "react";

type Feature = { label: string; icon: React.ReactNode };
type Props = {
  speed?: number; // seconds: higher = slower
  className?: string;
  items?: Feature[];
  pauseOnHover?: boolean;
};

const pink = "currentColor";

/** inline SVGs (upsized) */
const Icons = {
  UserCheck: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke={pink}
      strokeWidth="1.8"
    >
      <path d="M15 19a6 6 0 0 0-12 0" />
      <circle cx="9" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </svg>
  ),
  DollarCoin: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke={pink}
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" />
    </svg>
  ),
  Calendar: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke={pink}
      strokeWidth="1.8"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  Diamond: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke={pink}
      strokeWidth="1.8"
    >
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M6 3l6 18L18 3M2 9h20" />
    </svg>
  ),
  Clock247: (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke={pink}
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <text x="12" y="20" textAnchor="middle" fontSize="6" fill={pink}>
        24/7
      </text>
    </svg>
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
    <div
      className={[
        "relative mx-auto w-[998px] h-16 max-w-full overflow-hidden flex items-center xs:mt-10 lg:mt-0",
        "border-y border-gray-300 mask-fade",
        className,
        pauseOnHover ? "group" : "",
      ].join(" ")}
      aria-label="Premium features ticker"
    >
      <ul
        className={[
          // use CSS var gap so we can compensate in keyframes
          "marquee flex items-center gap-[var(--gap)] min-w-max",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
        ].join(" ")}
        style={
          {
            animationDuration: `${speed}s`,
            // Tailwind gap-6 = 1.5rem → keep your original spacing
            ["--gap" as any]: "1.5rem",
          } as React.CSSProperties
        }
      >
        {row.map((item, idx) => (
          <li
            key={idx}
            className="flex shrink-0 items-center gap-3 text-base md:text-[17px] font-semibold tracking-wide text-slate-700"
          >
            <span className="text-pink-500">{item.icon}</span>
            <span className="whitespace-nowrap">{item.label}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          will-change: transform; /* smoother GPU scrolling */
          animation: marquee linear infinite;
        }

        /* Move one full set PLUS half the inter-item gap
           so the loop ends at the exact start of the duplicate list. */
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
  );
}
