import React from 'react';

const Advantages = () => {
  const advantages = [
    {
      title: "Personal insight, not generic coaching",
      description: "We give you authentic advice as students who recently went through the exact same process you're facing."
    },
    {
      title: "100% remote, fully on your schedule", 
      description: "Meet with us from anywhere, at times that work for you. No commuting, no scheduling conflicts."
    },
    {
      title: "Real admit lists, proven strategies",
      description: "We actually got into top schools and know what admissions officers want to see."
    }
  ];

  return (
    <section id="advantages" className="section-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(var(--navy))' }}>
          Why We&apos;re Different
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'hsl(var(--teal) / 0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'hsl(var(--teal))' }}>
                    {index === 0 && (
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 11v6M19 14h6" />
                    )}
                    {index === 1 && (
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    )}
                    {index === 2 && (
                      <circle cx="12" cy="12" r="3" />
                    )}
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'hsl(var(--navy))' }}>
                {advantage.title}
              </h3>
              <p className="text-base leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;