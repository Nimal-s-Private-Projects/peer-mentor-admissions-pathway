import React from 'react';
import topIvyBuddyLogo from '@/assets/topivybuddy-logo.png';

const Hero = () => {
  const scrollToCounselors = () => {
    const counselorsSection = document.getElementById('counselors');
    if (counselorsSection) {
      counselorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-gradient min-h-[100vh] md:min-h-[80vh] flex items-center justify-center px-4 relative">
      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="mb-8 flex justify-center">
          <img 
            src={topIvyBuddyLogo} 
            alt="TopIvyBuddy Logo" 
            className="h-20 md:h-24 drop-shadow-2xl"
          />
        </div>
        
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/90 font-medium text-sm">🔥 Trusted by 2,500+ families nationwide</span>
        </div>
        
        <h1 className="mb-8 leading-tight text-white">
          Your Child's Dream College Acceptance Starts Here
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90 font-medium">
          Our hand-selected mentors are current students at Harvard, MIT, Stanford & more who know exactly what it takes. 
          <span className="text-yellow-300 font-bold"> Real results, proven track record.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={scrollToCounselors}
            className="btn-primary text-lg px-10 py-5 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            📚 Meet Our Mentors
          </button>
          <div className="text-white/80 text-sm">
            <span className="font-semibold">Premium guidance starting at $75/hour</span> • Complimentary consultations available
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="font-medium">Boutique, personalized approach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="font-medium">Current students at top universities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span className="font-medium">Results-driven methodology</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;