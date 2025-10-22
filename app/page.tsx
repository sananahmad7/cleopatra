import Benefits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import SlidingPanel from "@/components/Home/SlidingPanel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SlidingPanel className="mx-auto" speed={26} />
      <Benefits />
      <div className="h-90" />
    </div>
  );
}
