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
    <section id="counselors" className="section-light py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(var(--navy))' }}>
          Meet Your Counselors
        </h2>
        
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
                <div key={index} className="card">
                  <img 
                    src={counselor.photo} 
                    alt={`Photo of ${counselor.name}`}
                    className="card-photo"
                  />
                  <h3 className="card-name">
                    {counselor.name}, {counselor.school}
                  </h3>
                  <p className="card-major">
                    {counselor.major} • Admits: {counselor.admits}
                  </p>
                  <p className="card-blurb">
                    <em>&ldquo;{counselor.blurb}&rdquo;</em>
                  </p>
                  <div className="card-footer">
                    <span className="badge">{counselor.rate}</span>
                    <a 
                      href={counselor.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn Profile of ${counselor.name}`}
                    >
                      <img 
                        src={linkedinIcon} 
                        alt="LinkedIn icon" 
                        className="linkedin-icon"
                      />
                    </a>
                  </div>
                  <a 
                    href={counselor.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full inline-block text-center"
                  >
                    Book Now
                  </a>
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