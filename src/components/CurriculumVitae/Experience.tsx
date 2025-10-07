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

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      logo: "./thoughtworks_logo.jpeg",
      logoColor: "bg-white",
      title: "Senior Consultant Developer",
      company: "ThoughtWorks GmbH",
      location: "Munich, Germany",
      period: "August 2019 – July 2025",
      technologies: "",
      role: "Full-stack developer working on cross-functional teams",
      languages: "JavaScript/TS, Kotlin, Neo4j",
      frameworks: "React, Spring Boot, Ktor",
      tooling: "TDD, Pairing, , CI/CD, Agile methodologies"
    },
    {
      id: 2,
      logo: "./parkside_logo.png",
      logoColor: "bg-white",
      title: "Software Engineer",
      company: "Parkside Informationstechnologie GmbH",
      location: "Graz, Austria",
      period: "August 2017 – June 2019",
      technologies: "",
      role: "Frontend developer",
      languages: "JavaScript, TypeScript, PHP, HTML, CSS/SASS",
      frameworks: "ReactJS, Redux, Typo3, jQuery, Bootstrap",
      tooling: "Docker, Kubernetes, ElasticSearch, Gulp, Composer"
    },
    {
      id: 3,
      logo: "./uvigo_logo.jpeg",
      logoColor: "bg-white",
      title: "Computer Infrastructure Scholarship",
      company: "Universidade de Vigo",
      location: "Ourense, Spain",
      period: "November 2015 – July 2016",
      technologies: "",
      role: "Responsible for fixing the computer related problems that arised on campus.",
      languages: "System Administration, Technical Support",
      frameworks: "Windows, Linux, Antivirus Systems",
      tooling: "Hardware diagnostics, System imaging, Network troubleshooting"
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
    <section ref={sectionRef}>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Logo and Basic Info */}
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${exp.logoColor} rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 overflow-hidden`}>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{exp.company} ({exp.location})</p>
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
    </section>
  );
};

export default Experience;