import Link from "next/link";

const BlogDetailContent = () => {
  return (
    <div
      className="
        mx-auto w-full max-w-[988px]
        mt-10 2xl:mt-20
        h-auto 3xl:h-[1498px]
        px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 2xl:px-8
        py-6 sm:py-7 md:py-8 lg:py-10
        
      "
    >
      {/* Intro */}
      <p
        className="
          font-quicksand font-semibold text-[777777]
          text-[15px] leading-[22px]
          xs:text-[15.5px]
          sm:text-[16px]
          md:text-[16.5px]
          lg:text-[17px]
          2xl:text-[17.5px]
          3xl:text-[18px] 3xl:leading-6
        "
      >
        When work deadlines and family responsibilities pile up, cleaning often
        feels like the last thing you have time for. But a messy home can add to
        stress, making it harder to unwind. That’s why we’ve rounded up 10
        quick, no-fuss cleaning hacks designed especially for busy professionals
        like you.
      </p>

      {/* ========= UTILITIES ========= */}
      {/* Heading utility to keep sizes consistent */}
      {/*
        Base → compact phones
        3xl → your original “md” intention (largest)
      */}
      {/* Hack 1 */}
      <h3
        className="
          mt-6 font-torus font-bold text-[4B4B4B]
          text-[18px] leading-[26px]
          xs:text-[19px]
          sm:text-[20px]
          md:text-[21px]
          lg:text-[22px]
          2xl:text-[23px]
          3xl:text-[24px] 3xl:leading-[30px]
        "
      >
        Hack 1: The 2 Minute Counter Reset
      </h3>
      <p
        className="
          font-quicksand font-semibold text-[777777]
          text-[15px] leading-[22px]
          sm:text-[16px]
          md:text-[16.5px]
          lg:text-[17px]
          2xl:text-[17.5px]
          3xl:text-[18px] 3xl:leading-6
        "
      >
        Before heading out or winding down, wipe your kitchen and bathroom
        counters with a microfiber cloth. It instantly makes the space look
        cleaner.
      </p>

      {/* Hack 2 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 2: Microwave Magic
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Heat a bowl of water with lemon slices for 3 minutes. Steam loosens
        stains, and you can wipe the inside clean effortlessly.
      </p>

      {/* Hack 3 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 3: The Shoe Drop Zone
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Keep a small rack or basket near the door. Shoes off = less dirt tracked
        around the house.
      </p>

      {/* Hack 4 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 4: The 10 Minute Tidy Rule
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Before bed, set a timer for 10 minutes and quickly put away items in the
        living room or bedroom. You’ll wake up to a clutter-free space.
      </p>

      {/* Hack 5 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 5: Multi-Task Dusting
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        While on a phone call, grab a duster and tackle shelves or baseboards.
        It’s quick, mindless, and efficient.
      </p>

      {/* Hack 6 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 6: Bathroom Wipe-Down
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Keep disinfectant wipes handy. A daily 30-second sink + faucet wipe
        prevents buildup and saves hours later.
      </p>

      {/* Hack 7 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 7: Laundry Basket Trick
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Have one basket for clothes and one for “random stuff.” This makes
        tidying up in a hurry a breeze.
      </p>

      {/* Hack 8 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 8: Use Doormats Wisely
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        One outside, one inside. This simple trick cuts dirt and dust by half.
      </p>

      {/* Hack 9 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 9: Freshen Fabrics with Baking Soda
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        Sprinkle baking soda on sofas or carpets, leave for 15 minutes, then
        vacuum. Instant freshness!
      </p>

      {/* Hack 10 */}
      <h3 className="mt-6 font-torus font-bold text-[4B4B4B] text-[18px] leading-[26px] xs:text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] 2xl:text-[23px] 3xl:text-[24px] 3xl:leading-[30px]">
        Hack 10: Delegate to CleoCrew
      </h3>
      <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
        The ultimate hack? Let the professionals handle the deep cleaning. Book
        a CleoCrew pro in under 60 seconds and free up your time.
      </p>

      {/* Closing paragraphs */}
      <div className="mt-6 space-y-4">
        <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
          A clean home doesn’t have to take hours. With these simple hacks, you
          can maintain a tidy space even on your busiest days and create an
          environment that feels calm and welcoming. Remember, consistency is
          the secret—small daily habits add up to a big difference over time.
        </p>
        <p className="font-quicksand font-semibold text-[777777] text-[15px] leading-[22px] sm:text-[16px] md:text-[16.5px] lg:text-[17px] 2xl:text-[17.5px] 3xl:text-[18px] 3xl:leading-6">
          But you don’t have to do it all on your own. When life gets
          overwhelming, the CleoCrew is just a click away. Our trusted
          professionals can handle the heavy lifting, so you can spend more time
          on the things that truly matter—whether that’s focusing on work,
          enjoying family moments, or simply relaxing in a space that feels
          fresh and stress-free.
        </p>
      </div>

      <div className="mt-20 flex justify-center">
        <Link
          href="#"
          className="
      relative inline-flex items-center justify-center
      w-full max-w-[600px]
      rounded-[18px] bg-white
      border border-[#9F9F9F]              /* stays gray */
      h-12 sm:h-12 md:h-14 3xl:h-16
      px-6 sm:px-10
      text-sm sm:text-base md:text-[17px] 3xl:text-[20px]
      shadow-[0_6px_0_0_#B5B5B5]           /* bottom bar */
      transition-transform duration-150
      hover:-translate-y-[1px] hover:shadow-[0_7px_0_0_#B5B5B5]
      active:translate-y-0 active:shadow-[0_3px_0_0_#B5B5B5]
      focus-visible:outline-none focus:outline-none focus:ring-0
    "
        >
          <span className="font-torus font-semibold uppercase tracking-wide text-[#FD037E]">
            BOOK YOUR NEXT CLEANING NOW
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailContent;
