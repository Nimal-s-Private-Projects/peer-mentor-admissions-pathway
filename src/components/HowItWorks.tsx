import React from 'react';
import stepsIcon from '@/assets/icons/steps-icons.png';

const HowItWorks = () => {
  const steps = [
    {
      title: "Pick Your Mentor",
      description: "Browse profiles of current students and recent graduates from top universities. Find someone who matches your interests and goals."
    },
    {
      title: "Book a Session", 
      description: "Schedule a 1:1 video call at your convenience. Choose from 30-minute quick chats or full hour strategy sessions."
    },
    {
      title: "Get In-Depth Guidance",
      description: "Receive personalized advice on essays, extracurriculars, test prep, and everything you need to stand out in admissions."
    }
  ];

  return (
    <section id="how-it-works" className="section-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(var(--navy))' }}>
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'hsl(var(--teal) / 0.1)' }}>
                  <span className="text-2xl font-bold" style={{ color: 'hsl(var(--teal))' }}>
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'hsl(var(--navy))' }}>
                {step.title}
              </h3>
              <p className="text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;