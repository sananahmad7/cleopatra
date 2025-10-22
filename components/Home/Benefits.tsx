import Image from "next/image";

const Benefits = () => {
  return (
    <div className=" max-w-[998px] h-[2139px] mx-auto mt-45">
      <section
        className="
          mx-auto max-w-full w-full
          flex flex-col md:flex-row items-center justify-between
          gap-8 md:gap-10 2xl:gap-14 3xl:gap-[82px]
          3xl:w-[988px] 3xl:h-[522px]
        "
        aria-label="Clean. Simple. Stress-Free."
      >
        {/* Left: Copy block (479 × 522 at 3xl) */}
        <div
          className="
            order-2 md:order-1
            w-full
            md:max-w-[560px] 2xl:max-w-[520px]
            3xl:w-[479px] 3xl:h-[522px]
            flex flex-col justify-center
            gap-4 md:gap-5 3xl:gap-[22px]
          "
        >
          {/* Title (keep 3xl sizing) */}
          <h1
            className="
              font-torus font-bold tracking-[0.01em] text-[#EB2F96]
              text-[32px] leading-[38px]    /* xs default */
              md:text-[44px] md:leading-[50px]
              2xl:text-[50px] 2xl:leading-[56px]
              3xl:text-[52px] 3xl:leading-[58px]
            "
          >
            <span className="block">Clean. Simple.</span>
            <span className="block">Stress Free.</span>
          </h1>

          {/* Description */}
          <div className="space-y-3 md:space-y-4">
            <p
              className="
                font-quicksand font-semibold text-slate-700
                text-[16px] leading-[22px]
                md:text-[17px] md:leading-[24px]
                2xl:text-[18px] 2xl:leading-[24px]
              "
            >
              Cleopatra makes it easy to book a cleaner you can trust. No back
              and forth, no hidden fees. Just fast, reliable service with a few
              taps and total peace of mind.
            </p>
            <p
              className="
                font-quicksand font-semibold text-slate-700
                text-[16px] leading-[22px]
                md:text-[17px] md:leading-[24px]
                2xl:text-[18px] 2xl:leading-[24px]
              "
            >
              We built Cleopatra for people who value their time and don’t want
              to chase quotes or wonder if someone will actually show up. With a
              streamlined booking experience and dependable pros who arrive
              ready to shine, Cleopatra lets you skip the stress and get back to
              what matters most.
            </p>

            {/* How Booking Works */}
            <div
              className="
                font-quicksand font-semibold text-slate-700
                text-[16px] leading-[22px]
                md:text-[17px] md:leading-[24px]
                2xl:text-[18px] 2xl:leading-[24px]
              "
            >
              <p className="mb-1">How Booking Works:</p>
              <ol className="list-decimal pl-5 md:pl-6 space-y-1">
                <li>Tell us about your space and cleaning needs</li>
                <li>We’ll match you with a top-rated cleaner nearby</li>
                <li>Pay securely and relax</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Right: Illustration (426 × 423 at 3xl) */}
        <div
          className="
            order-1 md:order-2 relative shrink-0
            w-[260px] h-[240px]        /* xs */
            md:w-[340px] md:h-[320px]  /* md */
            2xl:w-[400px] 2xl:h-[390px]/* 2xl */
            3xl:w-[426px] 3xl:h-[423px]/* keep design at 3xl */
          "
        >
          <Image
            src="/clean-simple.png"
            alt="Cleaner arriving with supplies"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </section>
    </div>
  );
};

export default Benefits;
