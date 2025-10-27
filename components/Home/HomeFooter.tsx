import Image from "next/image";
import Link from "next/link";

export default function HomeFooter() {
  return (
    <footer className="w-full xl:mt-[-50]">
      {/* Top wave strip */}
      <div className="relative w-full">
        <Image
          src="/footerT.webp"
          alt="Footer wave"
          width={1928}
          height={900}
          priority
          className="block w-full h-auto select-none pointer-events-none" // ← block fixes baseline gap
          sizes="100vw"
        />
      </div>

      {/* Main footer area */}
      <div className="relative -mt-px bg-[#C70163]">
        {" "}
        {/* ← overlap by 1px to hide any seam */}
        <Image
          src="/footerB.webp"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 object-cover select-none pointer-events-none"
          sizes="100vw"
        />
        {/* Link columns */}
        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 py-10">
            {/* Apps */}
            <nav aria-labelledby="footer-apps">
              <h3 id="footer-apps" className="text-white font-semibold mb-3">
                Apps
              </h3>
              <ul className="space-y-2 text-[#DBDBDB] text-sm">
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Cleopatra for Android
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Cleopatra for iOS
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Help & Support */}
            <nav aria-labelledby="footer-help">
              <h3 id="footer-help" className="text-white font-semibold mb-3">
                Help &amp; Support
              </h3>
              <ul className="space-y-2 text-[#DBDBDB] text-sm">
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Client Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    CleoCrew Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Our Locations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Join Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Creator Program
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:opacity-90">
                    Our Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Privacy & Terms */}
            <nav aria-labelledby="footer-privacy">
              <h3 id="footer-privacy" className="text-white font-semibold mb-3">
                Privacy &amp; Terms
              </h3>
              <ul className="space-y-2 text-[#DBDBDB] text-sm">
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Notice at Collection
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Socials */}
            <nav aria-labelledby="footer-socials">
              <h3 id="footer-socials" className="text-white font-semibold mb-3">
                Socials
              </h3>
              <ul className="space-y-2 text-[#DBDBDB] text-sm">
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-90">
                    Pinterest
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Divider + copyright */}
        <div className="relative z-10 border-t border-white/20">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <p className="text-center text-[#DBDBDB] text-xs py-4">
              © 2025 Cleopatra Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
