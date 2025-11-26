import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AvailableClasses } from './components/AvailableClasses';
import { PrincipalAddress } from './components/PrincipalAddress';
import { VisionMission } from './components/VisionMission';
import { AboutUs } from './components/AboutUs';
import { OurOffers } from './components/OurOffers';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AvailableClasses />
      <PrincipalAddress />
      <VisionMission />
      <AboutUs />
      <OurOffers />
      <Gallery />
      <Testimonials />
      <Footer />
      <ContactModal />
    </div>
  );
}