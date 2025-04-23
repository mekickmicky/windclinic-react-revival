
import React from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamPreview from "@/components/TeamPreview";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="font-sans bg-white">
    <NavBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamPreview />
      <ContactSection />
    </main>
    <footer className="py-6 bg-windgray text-center text-windblue text-sm">
      © {new Date().getFullYear()} WindClinic. Todos los derechos reservados.
    </footer>
  </div>
);

export default Index;
