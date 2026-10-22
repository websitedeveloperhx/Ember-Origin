import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitStrip } from './components/BenefitStrip';
import { StoryFeature } from './components/StoryFeature';
import { BeverageCards } from './components/BeverageCards';
import { CoffeeRitual } from './components/CoffeeRitual';
import { CollectionGrid } from './components/CollectionGrid';
import { CommunityNotes } from './components/CommunityNotes';
import { NewsletterForm } from './components/NewsletterForm';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Beverage } from './types/coffee';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedBeverage, setSelectedBeverage] = useState<Beverage | null>(null);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#241915] flex flex-col font-sans selection:bg-[#C35B34] selection:text-white">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Top Navigation Bar */}
      <Header onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with 3D Coffee Cup Experience */}
        <Hero onOpenReservation={() => setReservationOpen(true)} />

        {/* 4. Horizontal Quick Benefits & Trust Strip */}
        <BenefitStrip />

        {/* 5. Story Feature ("Why People Come Back" & Tasting Room Hours) */}
        <StoryFeature />

        {/* 6. Signature Beverage Cards ("Make Your Morning Better") */}
        <BeverageCards onSelectBeverage={(bev) => setSelectedBeverage(bev)} />

        {/* 7. Daily Coffee Ritual (Photo-led Dark Editorial & Interactive Brew Guide) */}
        <CoffeeRitual />

        {/* 8. Full Collection & Artisanal Desserts Grid */}
        <CollectionGrid onSelectBeverage={(item) => setSelectedBeverage(item)} />

        {/* 9. Community Perspectives & Sample Notes */}
        <CommunityNotes />

        {/* 10. Newsletter Callout with Coffee Bean Accents */}
        <NewsletterForm />
      </main>

      {/* 11. Multi-Column Footer with Portfolio Disclaimer */}
      <Footer />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <ProductDetailModal
        beverage={selectedBeverage}
        onClose={() => setSelectedBeverage(null)}
        onBookTasting={() => {
          setSelectedBeverage(null);
          setReservationOpen(true);
        }}
      />
    </div>
  );
}
