import React from 'react';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CounselorCarousel from '@/components/CounselorCarousel';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <CounselorCarousel />
      <Advantages />
      <Footer />
    </main>
  );
};

export default Index;
