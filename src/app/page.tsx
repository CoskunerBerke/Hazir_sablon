import React from 'react';
import { businessConfig } from '@/config/business';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SpecialSection } from '@/components/sections/SpecialSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/layout/FloatingCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header config={businessConfig} />
      
      <main className="flex-1">
        <HeroSection config={businessConfig} />
        <TrustSection config={businessConfig} />
        <AboutSection config={businessConfig} />
        <ServicesSection config={businessConfig} />
        <SpecialSection config={businessConfig} />
        <GallerySection config={businessConfig} />
        <ReviewsSection config={businessConfig} />
        <ContactSection config={businessConfig} />
      </main>

      <Footer config={businessConfig} />
      <FloatingCTA config={businessConfig} />
    </div>
  );
}
