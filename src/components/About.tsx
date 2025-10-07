import { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    'UI/UX Design',
    'Frontend Development', 
    'React',
    'TypeScript',
    'Figma',
    'Adobe Creative Suite',
    'Astro',
    'Tailwind CSS'
  ];

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
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate designer and developer with over 5 years of experience 
                creating digital products. I believe in the power of good design to solve 
                real problems and create meaningful connections.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines user-centered design principles with modern development 
                practices to deliver experiences that are both beautiful and functional.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not designing or coding, you can find me exploring new technologies,
                contributing to open source projects, or enjoying a good cup of coffee while
                sketching new ideas.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Skills & Tools
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-105 hover:bg-blue-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;