import Benefits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import JoinWaitlist from "@/components/Home/JoinWaitlist";
import Pricing from "@/components/Home/Pricing";
import SlidingPanel from "@/components/Home/SlidingPanel";
import Sparkl from "@/components/Home/Sparkl";
import GetStarted from "@/components/Home/GetStarted";
import HomeFooter from "@/components/Home/HomeFooter";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SlidingPanel className="mx-auto" speed={26} />
      <Benefits />
      <JoinWaitlist />
      <Sparkl />
      <Pricing />
      <GetStarted />
      <HomeFooter />
    </div>
  );
}
