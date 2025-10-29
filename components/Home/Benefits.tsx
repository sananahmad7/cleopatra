import Image from "next/image";

const Benefits = () => {
  return (
    <div className=" max-w-[998px] h-[2139px] mx-auto mt-20 3xl:mt-28  ">
      <section
        className="
    mx-auto w-full
    flex flex-col md:flex-row items-center justify-between
    gap-8 md:gap-10 2xl:gap-14 3xl:gap-[82px]
    px-4 sm:px-6 md:px-8 lg:px-4
    py-8 md:py-0
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
    items-center md:items-start
    gap-4 md:gap-5 3xl:gap-[22px]
  "
        >
          {/* Title (keep 3xl sizing) */}
          <h1
            className="
      font-torus font-bold tracking-[0.01em] text-[#FD037E]
      text-center md:text-left
      text-[32px] leading-[38px]            /* xs default */
      md:text-[44px] md:leading-[50px]
      2xl:text-[50px] 2xl:leading-14
      3xl:text-[52px] 3xl:leading-[58px]
    "
          >
            <span className="block">Clean. Simple.</span>
            <span className="block">Stress Free.</span>
          </h1>

          {/* Description */}
          <div className="space-y-3 max-w-140 md:max-w-full md:space-y-4 text-[#777777] text-center md:text-left">
            <p
              className="
        font-quicksand font-semibold 
        text-[16px] leading-[22px]
        md:text-[17px] md:leading-6
        2xl:text-[18px] 2xl:leading-6
      "
            >
              Cleopatra makes it easy to book a cleaner you can trust. No back
              and forth, no hidden fees. Just fast, reliable service with a few
              taps and total peace of mind.
            </p>

            <p
              className="
        font-quicksand font-semibold 
        text-[16px] leading-[22px]
        md:text-[17px] md:leading-6
        2xl:text-[18px] 2xl:leading-6
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
        font-quicksand font-semibold 
        text-[16px] leading-[22px]
        md:text-[17px] md:leading-6
        2xl:text-[18px] 2xl:leading-6
        text-center md:text-left
      "
            >
              <p className="mb-1">How Booking Works:</p>

              {/* Centered on small screens, indented on md+ */}
              <ol className="list-decimal list-inside pl-0  space-y-1 inline-block mx-auto text-left md:mx-0">
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
      w-[280px] h-[260px]             /* xs */
      sm:w-[320px] sm:h-[300px]       /* sm */
      md:w-[340px] md:h-80            /* md */
      lg:w-[380px] lg:h-[380px]       /* lg */
      2xl:w-[400px] 2xl:h-[390px]     /* 2xl */
      3xl:w-[426px] 3xl:h-[423px]     /* 3xl exact */
    "
        >
          <Image
            src="/clean-simple.webp"
            alt="Cleaner arriving with supplies"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </section>

      <section
        className="
    mx-auto w-full max-w-[988px] mt-20
    flex flex-col md:flex-row items-center justify-between
    gap-8 md:gap-6 lg:gap-8 2xl:gap-16 3xl:gap-[82px]
    px-4 sm:px-6 md:px-8 lg:px-4
    py-8 md:py-0
    3xl:h-[423px]
  "
        aria-label="Powered by Trust"
      >
        {/* Left: Illustration (426 × 423 @ 3xl) — stays on top on small screens */}
        <div
          className="
      relative shrink-0
      w-[280px]  h-[260px]            /* xs */
      sm:w-[320px] sm:h-[300px]       /* sm */
      md:w-[360px] md:h-80            /* md */
      lg:w-[380px] lg:h-[360px]       /* lg */
      2xl:w-[400px] 2xl:h-[380px]     /* 2xl */
      3xl:w-[426px] 3xl:h-[423px]     /* exact Figma */
    "
        >
          <Image
            src="/Trust.webp" /* replace with your asset path */
            alt="Handshake with shield icon"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Right: Content column (fills remaining width; centers on small) */}
        <div
          className="
      w-full md:w-auto
      flex items-center justify-center md:justify-start
      3xl:h-[423px]
    "
        >
          {/* Inner box (≈479 × 176 @ 3xl, gap 22) */}
          <div
            className="
        w-full max-w-[520px]
        md:max-w-none md:w-auto
        2xl:max-w-[500px]
        3xl:w-[479px] 3xl:h-44
        flex flex-col items-center md:items-start
        gap-4 3xl:gap-[22px]
      "
          >
            {/* Title */}
            <h2
              className="
          font-torus font-bold tracking-[0.01em] text-[#FD037E]
          text-center md:text-left
          text-[34px] leading-10
          md:text-[40px] md:leading-[46px]
          2xl:text-[48px] 2xl:leading-[54px]
          3xl:text-[52px] 3xl:leading-[58px]
        "
            >
              Powered by Trust
            </h2>

            {/* Description */}
            <p
              className="
          font-quicksand font-semibold text-[#777777]
          text-center md:text-left
          text-[16px] leading-[22px]
          md:text-[17px] md:leading-6
          2xl:text-[18px] 2xl:leading-6
          max-w-[90%] md:max-w-[48ch]
        "
            >
              Every CleoCrew member (what we call our cleaners) is vetted and
              tested in-app. We run background checks and review job photos to
              ensure every clean meets our standards.
            </p>
          </div>
        </div>
      </section>
      <section
        className="
    mx-auto w-full max-w-[988px] mt-20 
    flex flex-col md:flex-row items-center justify-between
    gap-8 md:gap-6 lg:gap-8 2xl:gap-16 3xl:gap-[82px]
    px-4 sm:px-6 md:px-8 lg:px-4
    py-8 md:py-0
    3xl:h-[423px]
  "
        aria-label="Routine Made Easy"
      >
        {/* Left: Text column (fills remaining width) */}
        <div className="order-2 md:order-1 w-full md:w-auto flex items-center justify-center md:justify-start 3xl:h-[423px]">
          {/* Inner text box (479 × 152 @ 3xl, gap 22) */}
          <div
            className="
        w-full max-w-[520px]
        md:max-w-none md:w-auto
        2xl:max-w-[500px]
        3xl:w-[479px] 3xl:h-[152px]
        flex flex-col items-center md:items-start
        gap-4 3xl:gap-[22px]
      "
          >
            <h2
              className="
          font-torus font-bold
          text-center md:text-left
          text-[34px] leading-10       /* phones */
          md:text-[40px] md:leading-[46px] /* tablets */
          2xl:text-[48px] 2xl:leading-[54px]
          3xl:text-[52px] 3xl:leading-[58px]
          tracking-[0.01em] text-[#FD037E]
        "
            >
              Routine Made Easy
            </h2>

            <p
              className="
          font-quicksand font-semibold text-[#777777]
          text-center md:text-left
          text-[16px] leading-[22px]
          md:text-[17px] md:leading-6
          2xl:text-[18px] 2xl:leading-6
          max-w-[90%] md:max-w-[60ch]
        "
            >
              Recurring cleanings, smart reminders, and quick rebooking make it
              simple to keep your space consistently clean without having to
              think twice.
            </p>
          </div>
        </div>

        {/* Right: Illustration (426 × 423 @ 3xl) */}
        <div
          className="
      relative shrink-0
      order-1 md:order-2
      w-[260px] h-60                  /* xs */
      sm:w-[320px] sm:h-[300px]       /* sm */
      md:w-[360px] md:h-80            /* md */
      lg:w-[400px] lg:h-[380px]       /* lg */
      2xl:w-[410px] 2xl:h-[390px]     /* 2xl */
      3xl:w-[426px] 3xl:h-[423px]     /* Figma exact */
    "
        >
          <Image
            src="/RoutineEasy.webp" /* put your asset in /public */
            alt="Cleaner with schedule and reminders"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
      </section>

      <section
        className="
    mx-auto w-full max-w-[988px] mt-20
    flex flex-col md:flex-row items-center justify-between
    gap-8 md:gap-6 lg:gap-8 2xl:gap-16 3xl:gap-[83px]
    px-4 sm:px-6 md:px-8 lg:px-4
    py-8 md:py-0
    3xl:h-[423px] 
  "
        aria-label="Tailored for You"
      >
        {/* Left: Illustration (426 × 423 @ 3xl) */}
        <div
          className="
      relative shrink-0
      order-1 md:order-1
      w-[260px] h-60                  /* xs */
      sm:w-[320px] sm:h-[300px]       /* sm */
      md:w-[360px] md:h-80            /* md */
      lg:w-[400px] lg:h-[380px]       /* lg */
      2xl:w-[410px] 2xl:h-[390px]     /* 2xl */
      3xl:w-[426px] 3xl:h-[423px]     /* exact Figma */
    "
        >
          <Image
            src="/Tailored.webp" /* replace with your asset path */
            alt="Cleaner wiping surface"
            fill
            priority
            className="object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Right: Text column (fills remaining width; inner box centered) */}
        <div className="order-2 md:order-2 w-full md:w-auto flex items-center justify-center md:justify-start 3xl:h-[423px]">
          {/* Inner content box (479 × 152 @ 3xl, gap 22) */}
          <div
            className="
        w-full max-w-[520px]
        md:max-w-none md:w-auto
        2xl:max-w-[500px]
        3xl:w-[479px] 3xl:h-[152px]
        flex flex-col items-center md:items-start
        gap-4 3xl:gap-[22px]
      "
          >
            {/* Title */}
            <h2
              className="
          font-torus font-bold
          text-center md:text-left
          text-[34px] leading-10        /* phones */
          md:text-[40px] md:leading-[46px]  /* tablets */
          2xl:text-[48px] 2xl:leading-[54px]
          3xl:text-[52px] 3xl:leading-[58px]/* exact Figma */
          tracking-[0.01em] text-[#FD037E]
        "
            >
              Tailored for You
            </h2>

            {/* Description */}
            <p
              className="
          font-quicksand font-semibold text-[#777777]
          text-center md:text-left
          text-[16px] leading-[22px]
          md:text-[17px] md:leading-6
          2xl:text-[18px] 2xl:leading-6
          max-w-[90%] md:max-w-[60ch]
        "
            >
              We match you with the right Sparkler based on your location,
              preferences, and past feedback, so every clean feels just right
              for your space and your routine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
