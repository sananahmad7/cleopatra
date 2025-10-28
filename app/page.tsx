import Benefits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import JoinWaitlist from "@/components/Home/JoinWaitlist";
import Pricing from "@/components/Home/Pricing";
import SlidingPanel from "@/components/Home/SlidingPanel";
import Sparkl from "@/components/Home/Sparkl";
import GetStarted from "@/components/Home/GetStarted";
import HomeFooter from "@/components/Home/HomeFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <SlidingPanel className="mx-auto" speed={26} />
      <Benefits />
      <JoinWaitlist />
      <Sparkl />
      <Pricing />
      <GetStarted />

      {/* Footer behavior */}
      {/* Show HomeFooter only on md and up */}
      <div className="hidden md:block">
        <HomeFooter />
      </div>

      {/* Show Footer only on screens smaller than md */}
      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
}
