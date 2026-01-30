import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";     
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Location from "@/components/Location";
import FloorPlans from "@/components/FloorPlans";
import SmartHomeSection from "@/components/SmartHomeSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import OurProjects from "@/components/OurProjects";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import JoinUsSection from "@/components/JoinUsSection";
import CommunitySection from "@/components/CommunitySection";
 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About/>
      <Highlights/>
      <Location/>
      <FloorPlans/>
      <SmartHomeSection/>
      <AmenitiesSection/>
      <CommunitySection/>
      <JoinUsSection/>
      <OurProjects/>
      <FaqSection/>
      <Footer/>
    </main>
  );
}