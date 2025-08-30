import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="heading-primary">
                Hi, I'm <span className="text-primary-600">Adi Berisha</span>
              </h1>
              <p className="text-2xl text-gray-600 font-medium">
                Computer Science & Engineering Student
              </p>
              <p className="text-body text-lg">
                Passionate developer with expertise in React, Next.js, and full-stack development. 
                Currently pursuing my degree at UBT College while building innovative web applications.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">8.8/10</div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full transform rotate-6 scale-110"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white text-6xl font-bold">AB</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
