import React from 'react';

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
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
            TopIvyBuddy
          </h2>
        </div>
        
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/90 font-medium text-sm">🔥 Trusted by 2,500+ students</span>
        </div>
        
        <h1 className="mb-8 leading-tight text-4xl md:text-5xl lg:text-6xl font-bold" style={{ background: 'none', WebkitTextFillColor: 'initial' }}>
          <span className="text-white">Get Into Your </span>
          <span className="text-yellow-300">Dream College</span>
          <span className="text-white"> With </span>
          <span className="text-yellow-300">Real Students</span>
          <span className="text-white"> Who Made It</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90 font-medium">
          1-on-1 mentorship from current students at Harvard, MIT, Stanford & more. 
          <span className="text-yellow-300 font-bold"> Skip the guesswork.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={scrollToCounselors}
            className="btn-primary text-lg px-8 py-4 text-white shadow-2xl"
          >
            🚀 Find Your Mentor Now
          </button>
          <div className="text-white/80 text-sm">
            <span className="font-semibold">Starting at $75/hour</span> • 30-min sessions available
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Real students, not consultants</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Recent admits to top schools</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Book instantly</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;