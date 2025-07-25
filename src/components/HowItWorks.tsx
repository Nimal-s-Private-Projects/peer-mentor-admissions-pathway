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
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/50">
            <span className="text-2xl">⚡</span>
            <span className="text-purple-700 font-bold text-sm">SUPER SIMPLE PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            3 Steps to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No complicated forms or waiting lists. Get started in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-300 via-blue-300 to-green-300"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl relative z-10 border-4 border-white">
                  <span className="text-3xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600 max-w-sm mx-auto">
                {step.description}
              </p>
              
              {index === 0 && (
                <div className="mt-6 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-green-700 font-semibold text-sm">Browse instantly</span>
                </div>
              )}
              
              {index === 1 && (
                <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  <span className="text-blue-600">📅</span>
                  <span className="text-blue-700 font-semibold text-sm">Same-day availability</span>
                </div>
              )}
              
              {index === 2 && (
                <div className="mt-6 inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                  <span className="text-purple-600">🎯</span>
                  <span className="text-purple-700 font-semibold text-sm">Actionable insights</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;