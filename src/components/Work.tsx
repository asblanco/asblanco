import { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const Work: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Complete redesign of a fashion e-commerce platform, focusing on user experience and conversion optimization.',
      tags: ['UI/UX', 'React', 'E-commerce'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Designed and developed a mobile banking application with focus on security and user-friendly interface.',
      tags: ['Mobile', 'Fintech', 'React Native'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Created a comprehensive dashboard for a B2B SaaS platform with complex data visualization needs.',
      tags: ['Dashboard', 'Data Viz', 'Vue.js'],
      gradient: 'from-purple-500 to-indigo-500'
    }
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
      id="work" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Selected Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl opacity-20">
                    {project.id === 1 && '🛍️'}
                    {project.id === 2 && '📱'}
                    {project.id === 3 && '📊'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;