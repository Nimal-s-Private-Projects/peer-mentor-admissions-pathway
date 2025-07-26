import React, { useRef } from 'react';
import janeProfile from '@/assets/maanya.jpeg';
import alexProfile from '@/assets/echo.jpeg';
import sarahProfile from '@/assets/profile-rachel.jpeg';
import linkedinIcon from '@/assets/icons/linkedin.png';

const CounselorCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const counselors = [
    {
      name: "Maanya Arora",
      school: "Harvard '29",
      major: "Computer Science",
      admits: "Harvard, Carnegie Melon, Northwestern, UCLA",
      blurb: "Hi, I’m Maanya, a rising freshman at Harvard College studying CS and Economics. I’m interested in exploring the intersection of technology with public policy and human behavior in order to drive real-world impact. As a first-gen student, I know it can get hard when you have no idea where to even start on your college apps. Don’t worry—the application process isn’t as daunting as it seems, and we’re here to help!",
      rate: "$75/hr",
      photo: janeProfile,
      linkedinUrl: "https://www.linkedin.com/in/maanyaarora07/",
      bookingUrl: "https://calendly.com/periasamynimal/30min"
    },
    {
      name: "Ethan Cho",
      school: "Berkeley'29", 
      major: "Haas - Spieker Business",
      admits: "Berkeley - Haas, Cornell Dyson, USC Marshall, Cypress College",
      blurb: "Just a young boy trying to become Hokage.",
      rate: "$75/hr",
      photo: alexProfile,
      linkedinUrl: "https://www.linkedin.com/in/ethan-cho-a2b74b270/",
      bookingUrl: "https://calendly.com/periasamynimal/30min"
    },
    {
      name: "Rachel Yoon",
      school: "Yale '29",
      major: "Chemical Engineering",
      admits: "Yale, Princeton, Berkeley, Carengie Melon",
      blurb: "Hey there, Im Rachel— I led soil-lead research in OC, founded a countywide environmental justice committee, preside over my debate team, and design freelance—honing my strengths in public speaking, leadership, and design.",
      rate: "$75/hr", 
      photo: sarahProfile,
      linkedinUrl: "https://www.linkedin.com/in/racheljiyoon/",
      bookingUrl: "https://calendly.com/periasamynimal/30min"
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
          <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 mb-6" style={{ background: 'linear-gradient(90deg, hsl(215, 28%, 33%, 0.1), hsl(107, 17%, 45%, 0.1))' }}>
            <span className="text-2xl">🎓</span>
            <span className="font-semibold text-sm" style={{ color: 'hsl(215, 28%, 33%)' }}>BATTLE-TESTED COUNSELORS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're students who cracked the code to top universities. We've been exactly where you are now.
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
                <div key={index} className="card group md:flex md:flex-col">
                  <div className="md:flex-1">
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
                          <span className="font-bold text-lg" style={{ color: 'hsl(215, 28%, 33%)' }}>{counselor.school}</span>
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
                        <span className="text-sm font-semibold text-gray-700">Who Are You?</span>
                      </div>
                      <p className="card-blurb text-gray-700 italic">
                        &ldquo;{counselor.blurb}&rdquo;
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:mt-auto">
                    <div className="card-footer items-center">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="badge text-sm flex-shrink-0">{counselor.rate}</span>
                        <a 
                          href={counselor.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn Profile of ${counselor.name}`}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0"
                        >
                          <img 
                            src={linkedinIcon} 
                            alt="LinkedIn icon" 
                            className="w-5 h-5"
                          />
                        </a>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-[10px] text-gray-500 mb-1 leading-tight">⚡ Usually responds in 1hr</div>
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
                      <span className="text-xs font-semibold bg-gray-50 px-3 py-1 rounded-full" style={{ color: 'hsl(107, 17%, 45%)' }}>
                        ✨ 30-min intro sessions available
                      </span>
                    </div>
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