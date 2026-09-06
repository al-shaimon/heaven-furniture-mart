import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const CuratedSpaces = dynamic(() => import("@/components/CuratedSpaces"));
const BespokeProcess = dynamic(() => import("@/components/BespokeProcess"));
const ShowroomMedia = dynamic(() => import("@/components/ShowroomMedia"));
const Showroom = dynamic(() => import("@/components/Showroom"));
const ProvenanceTrust = dynamic(() => import("@/components/ProvenanceTrust"));
const ConsultationCTA = dynamic(() => import("@/components/ConsultationCTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingActionBar = dynamic(() => import("@/components/FloatingActionBar"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <Hero />
        <CuratedSpaces />
        <BespokeProcess />
        <ShowroomMedia />
        <Showroom />
        <ProvenanceTrust />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}
