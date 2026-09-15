
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import Programs from "@/components/Programs/Programs";

import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import PlacementCarousel from "@/components/PlacementCarousel/PlacementCarousel";
import CampusLife from "@/components/CampusLife/CampusLife";
import Affiliation from "@/components/Affiliation/Affiliation";

import "./landing.css";

export default function Home() {
  return (
    <main className="landing-page">


      <Hero />
      <Affiliation/>
      <Programs />
     <PlacementCarousel/>
 
     <LogoMarquee/>
     <CampusLife/>
  

      


       <Stats />


    </main>
  );
}