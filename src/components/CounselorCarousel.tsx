import React, { useRef } from 'react';
import janeProfile from '@/assets/profile-jane.jpg';
import alexProfile from '@/assets/profile-alex.jpg';
import sarahProfile from '@/assets/profile-sarah.jpg';
import linkedinIcon from '@/assets/icons/linkedin.png';

const CounselorCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const counselors = [
    {
      name: "Jane Doe",
      school: "MIT '26",
      major: "Computer Science",
      admits: "Harvard, Stanford, Caltech",
      blurb: "Hi, I'm Jane—I led my robotics team to nationals and love cracking the code on stellar essays.",
      rate: "$75/hr",
      photo: janeProfile,
      linkedinUrl: "https://linkedin.com/in/janedoe",
      bookingUrl: "https://calendly.com/periasamynimal/30min"
    },
    {
      name: "Alex Chen",
      school: "Stanford '25", 
      major: "Economics",
      admits: "Yale, Princeton, MIT",
      blurb: "Former debate captain who turned his passion for policy into compelling personal statements.",
      rate: "$80/hr",
      photo: alexProfile,
      linkedinUrl: "https://linkedin.com/in/alexchen",
      bookingUrl: "https://calendly.com/alexchen-counseling"
    },
    {
      name: "Sarah Johnson",
      school: "Harvard '26",
      major: "Biology",
      admits: "MIT, Johns Hopkins, Duke",
      blurb: "Pre-med student who mastered the art of showcasing research experience in applications.",
      rate: "$85/hr", 
      photo: sarahProfile,
      linkedinUrl: "https://linkedin.com/in/sarahjohnson",
      bookingUrl: "https://calendly.com/sarahjohnson-counseling"
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="counselors" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-2xl">🎓</span>
            <span className="text-purple-700 font-semibold text-sm">PROVEN MENTORS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Your Success Squad
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real students who cracked the code to top universities. They've been exactly where you are now.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation arrows - only show on desktop */}
          <button 
            onClick={scrollLeft}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            style={{ marginLeft: '-20px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            style={{ marginRight: '-20px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          {/* Carousel container */}
          <div 
            ref={carouselRef}
            className="carousel px-4 md:px-0"
          >
            <div className="carousel-track">
              {counselors.map((counselor, index) => (
                <div key={index} className="card group">
                  <div className="flex items-start gap-4 mb-6">
                    <img 
                      src={counselor.photo} 
                      alt={`Photo of ${counselor.name}`}
                      className="card-photo"
                    />
                    <div className="flex-1">
                      <h3 className="card-name">
                        {counselor.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🏛️</span>
                        <span className="font-bold text-blue-600 text-lg">{counselor.school}</span>
                      </div>
                      <p className="text-gray-600 font-medium">{counselor.major}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">🎯</span>
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Also Got Into</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-lg">{counselor.admits}</p>
                  </div>
                  
                  <div className="mb-6 bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">💭</span>
                      <span className="text-sm font-semibold text-gray-700">WHAT THEY SAY</span>
                    </div>
                    <p className="card-blurb text-gray-700 italic">
                      &ldquo;{counselor.blurb}&rdquo;
                    </p>
                  </div>
                  
                  <div className="card-footer items-center">
                    <div className="flex items-center gap-3">
                      <span className="badge text-sm">{counselor.rate}</span>
                      <a 
                        href={counselor.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn Profile of ${counselor.name}`}
                        className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        <img 
                          src={linkedinIcon} 
                          alt="LinkedIn icon" 
                          className="w-5 h-5"
                        />
                      </a>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-1">⚡ Usually responds in 1hr</div>
                    </div>
                  </div>
                  
                  <a 
                    href={counselor.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-block text-center relative overflow-hidden group-hover:scale-105 transition-transform"
                  >
                    📅 Book Your Session
                  </a>
                  
                  <div className="mt-3 text-center">
                    <span className="text-xs text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                      ✨ 30-min intro sessions available
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselorCarousel;