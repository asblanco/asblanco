import { useState, useEffect, useRef } from 'react';

const AboutWork: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-20 bg-white rounded-lg shadow-sm transform rotate-12"></div>
        <div className="absolute top-40 right-40 w-24 h-16 bg-yellow-200 rounded transform -rotate-6"></div>
        <div className="absolute bottom-32 right-16 w-28 h-24 bg-white rounded-lg shadow-sm"></div>
        <div className="absolute top-60 right-60 w-20 h-20 bg-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className={`grid lg:grid-cols-3 gap-16 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Small title */}
            <p className="text-purple-600 font-medium text-sm uppercase tracking-wider">
              About my work
            </p>
            
            {/* Main title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              8+ years of experience
              <span className="block text-purple-700">as a developer</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              I am a front-end developer with a strong foundation in design, 
              which leads to better user experiences in less time.
            </p>
            
            {/* Skills sections */}
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-12 mt-16">
              {/* Frontend Development */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  FRONT-END DEVELOPMENT
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I have extensive knowledge of HTML, CSS & JavaScript (ES6), TypeScript and experience with the 
                  3 most popular frameworks (React, Vue & Angular*). Add ambition, endless curiosity and a 
                  GTD-mindset and you have a pretty complete picture of me.
                </p>
                <p className="text-gray-500 text-xs italic">
                  *I'm not taking on jobs involving Angular or Vue at the moment, sorry!
                </p>
                
                {/* Tech stack icons */}
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">JS</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TS</span>
                  </div>
                  <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">⚛</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">V</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                </div>
              </div>
              
              {/* Digital Designer */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  DIGITAL DESIGNER
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I speak the designer mumbo-jumbo and dare to make design decisions while coding. This saves 
                  valuable development time, endless ping-ponging with designers and often looks even better than the 
                  original design. I also do not hesitate to work out something in Figma or Sketch myself.
                </p>
                
                {/* Design tools */}
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">F</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Decorative mockups */}
          <div className="relative">
            {/* Main mockup */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-yellow-300 rounded w-full"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/5"></div>
                </div>
              </div>
            </div>
            
            {/* Secondary mockup */}
            <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-md p-4 w-32 transform -rotate-12">
              <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <div className="space-y-1">
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                <div className="h-1 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;