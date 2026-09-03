import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import CuratedSpaces from "@/components/CuratedSpaces";
import BespokeProcess from "@/components/BespokeProcess";
import ProvenanceTrust from "@/components/ProvenanceTrust";
import Showroom from "@/components/Showroom";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <ScrollRevealProvider />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <BrandIntro />
        <CuratedSpaces />
        <BespokeProcess />
        <ProvenanceTrust />
        <Showroom />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
