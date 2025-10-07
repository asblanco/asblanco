import { useState, useEffect, useRef } from 'react';

interface Experience {
  id: number;
  logo: string;
  logoColor: string;
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string;
  role: string;
  languages: string;
  frameworks: string;
  tooling: string;
}

const CurriculumVitae: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      logo: "AS",
      logoColor: "bg-blue-600",
      title: "Lead front-end developer, freelance",
      company: "Acme Software Solutions, Madrid",
      location: "Madrid",
      period: "June 2023 – now",
      technologies: "Astro, TypeScript, React, Vite, Storybook, Tailwind",
      role: "Front-end developer (primary), designer & scrum master",
      languages: "TypeScript, JavaScript, HTML, CSS/Sass/BEM",
      frameworks: "React, Vue, Angular",
      tooling: "Vite, Turbo repo, Nx, Webpack, Babel and more"
    },
    {
      id: 2,
      logo: "TS",
      logoColor: "bg-red-500",
      title: "Senior front-end developer, freelance",
      company: "Tech Startup Solutions, Barcelona",
      location: "Barcelona",
      period: "November 2022 – June 2023",
      technologies: "TypeScript, React, GraphQL, Apollo Server, Testing Library",
      role: "Front-end developer (primary), designer & scrum master",
      languages: "TypeScript, JavaScript, HTML, CSS/Sass/BEM",
      frameworks: "React, Vue, Angular",
      tooling: "Vite, Turbo repo, Nx, Webpack, Babel and more"
    },
    {
      id: 3,
      logo: "CN",
      logoColor: "bg-blue-700",
      title: "Senior front-end developer, freelance",
      company: "CloudNative, Silicon Valley (US) - Remote",
      location: "Remote",
      period: "August 2021 – July 2022",
      technologies: "TypeScript, React, Testing Library/Jest, Cypress",
      role: "Front-end developer (primary), designer & scrum master",
      languages: "TypeScript, JavaScript, HTML, CSS/Sass/BEM",
      frameworks: "React, Vue, Angular",
      tooling: "Vite, Turbo repo, Nx, Webpack, Babel and more"
    },
    {
      id: 4,
      logo: "CR",
      logoColor: "bg-yellow-500",
      title: "Lead front-end developer @ team Conversion rate optimisation, freelance",
      company: "Conversion Rate Experts, London",
      location: "London",
      period: "March 2020 – August 2021",
      technologies: "JavaScript, React, A/B Testing, Analytics",
      role: "Front-end developer (primary), designer & scrum master",
      languages: "TypeScript, JavaScript, HTML, CSS/Sass/BEM",
      frameworks: "React, Vue, Angular",
      tooling: "Vite, Turbo repo, Nx, Webpack, Babel and more"
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
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Header */}
          <div className="mb-16">
            <p className="text-purple-600 font-medium text-sm uppercase tracking-wider mb-4">
              Curriculum vitae
            </p>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
              I've worked on many different domains for{' '}
              <span className="text-purple-700">international organizations</span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl">
              From international startups to large organizations such as the 
              Spanish Railways and major tech companies.
            </p>
          </div>

          {/* Experience List */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Left: Logo and Basic Info */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${exp.logoColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{exp.logo}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                      <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                        {exp.technologies}
                      </p>
                    </div>
                  </div>

                  {/* Middle: What I do */}
                  <div>
                    <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      What I do
                    </h4>
                    <p className="text-gray-900 font-medium text-sm mb-4">
                      {exp.role}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                          Languages
                        </h5>
                        <p className="text-gray-700 text-sm">{exp.languages}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                          Frameworks
                        </h5>
                        <p className="text-gray-700 text-sm">{exp.frameworks}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Tooling */}
                  <div>
                    <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Tooling
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exp.tooling}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">UPM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Master's in Computer Science
                      </h4>
                      <p className="text-gray-600 text-sm">Universidad Politécnica de Madrid</p>
                      <p className="text-gray-500 text-sm">2018 - 2020</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Specialization
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Software Engineering & Web Technologies
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Key Subjects
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Advanced Web Development, Software Architecture, Database Systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">UC3M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Bachelor's in Computer Engineering
                      </h4>
                      <p className="text-gray-600 text-sm">Universidad Carlos III de Madrid</p>
                      <p className="text-gray-500 text-sm">2014 - 2018</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Focus Area
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Computer Science & Information Systems
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Achievements
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Magna Cum Laude, Dean's List
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">AWS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      AWS Certified Solutions Architect
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Amazon Web Services</p>
                    <p className="text-gray-500 text-xs">Issued: March 2023 • Expires: March 2026</p>
                    <div className="mt-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Cloud Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">⚛</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      React Developer Certification
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Meta (Facebook)</p>
                    <p className="text-gray-500 text-xs">Issued: January 2023</p>
                    <div className="mt-3">
                      <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                        Frontend Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">GCP</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Google Cloud Professional Developer
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Google Cloud Platform</p>
                    <p className="text-gray-500 text-xs">Issued: September 2022 • Expires: September 2025</p>
                    <div className="mt-3">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Cloud Development
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">TS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      TypeScript Advanced Certification
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Microsoft</p>
                    <p className="text-gray-500 text-xs">Issued: June 2022</p>
                    <div className="mt-3">
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        Programming Languages
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Want to see more details about my experience?
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
              Download Full CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitae;