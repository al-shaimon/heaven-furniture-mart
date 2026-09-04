import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CuratedSpaces from "@/components/CuratedSpaces";
import BespokeProcess from "@/components/BespokeProcess";
import ShowroomVideo from "@/components/ShowroomVideo";
import SocialGallery from "@/components/SocialGallery";
import Showroom from "@/components/Showroom";
import ProvenanceTrust from "@/components/ProvenanceTrust";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <ScrollRevealProvider />
      <Navbar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <Hero />
        <CuratedSpaces />
        <BespokeProcess />
        <ShowroomVideo />
        <SocialGallery />
        <Showroom />
        <ProvenanceTrust />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
