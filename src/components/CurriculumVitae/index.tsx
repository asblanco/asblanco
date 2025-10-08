import { useState, useEffect, useRef } from 'react';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';

const CurriculumVitae: React.FC = () => {
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
      className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Header */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
              <div className="flex-1">
                <p className="text-purple-600 font-medium text-sm uppercase tracking-wider mb-4">
                  Curriculum vitae
                </p>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                  I've delivered solutions across diverse domains for{' '}
                  <span className="text-purple-700">international organizations</span>
                </h2>
                <p className="text-gray-600 text-lg mt-6 max-w-2xl">
                  From small size companies to international organizations and major german companies.
                </p>
              </div>

              <div className="flex-shrink-0 self-end lg:mb-0">
                <a
                  href="./Andrea_CV_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors inline-block text-center"
                >
                  View Full CV
                </a>
              </div>
            </div>
          </div>

          <Experience />
          <Education />
          <Certifications />

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Want to see more details about my experience?
            </p>
            <a
              href="./Andrea_CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors inline-block"
            >
              View Full CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitae;