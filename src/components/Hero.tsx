import React from 'react';

const Hero = () => {
  const scrollToCounselors = () => {
    const counselorsSection = document.getElementById('counselors');
    if (counselorsSection) {
      counselorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero-gradient min-h-[100vh] md:min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="mb-6 leading-tight">
          Real College-Admissions Advice from Those Who&apos;ve Been There
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Connect 1:1 with peer mentors from top universities—no fluff, just your roadmap to success.
        </p>
        <button 
          onClick={scrollToCounselors}
          className="btn-primary text-lg"
        >
          Browse Counselors
        </button>
      </div>
    </header>
  );
};

export default Hero;