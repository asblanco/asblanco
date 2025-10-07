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
      logo: "TW",
      logoColor: "bg-red-600",
      title: "Senior Consultant Developer",
      company: "ThoughtWorks, Munich, Germany",
      location: "Munich, Germany",
      period: "August 2019 – July 2025",
      technologies: "Full Stack Development, TDD, Pairing, Trunk-based Development, Agile",
      role: "Worked for several automotive clients, full stack, using latest programming practices like pairing, trunk based development, test driven development (TDD) and agile methodologies. Participated in the Tech Lead Development Programme (TLDP) from May to June 2022.",
      languages: "JavaScript, TypeScript, Java, Python",
      frameworks: "React, Spring Boot, Node.js",
      tooling: "TDD, Pairing, Trunk-based Development, CI/CD, Agile methodologies"
    },
    {
      id: 2,
      logo: "PS",
      logoColor: "bg-blue-600",
      title: "Software Engineer",
      company: "Parkside, Graz, Austria",
      location: "Graz, Austria",
      period: "August 2017 – June 2019",
      technologies: "ReactJS, Redux, Sagas, TypeScript, Typo3, Docker, Kubernetes",
      role: "Frontend Developer worked with: grawe.at using Typo3, Composer, SASS, Gulp, jQuery, Bootstrap, Docker, and rollingpin.at using ReactJS, Redux, Sagas, Typescript, Bootstrap, Kubernetes, ElasticSearch.",
      languages: "JavaScript, TypeScript, PHP, HTML, CSS/SASS",
      frameworks: "ReactJS, Redux, Typo3, jQuery, Bootstrap",
      tooling: "Docker, Kubernetes, ElasticSearch, Gulp, Composer"
    },
    {
      id: 3,
      logo: "UV",
      logoColor: "bg-green-600",
      title: "Computer Infrastructure Scholarship",
      company: "Universidade de Vigo, Ourense, Spain",
      location: "Ourense, Spain",
      period: "November 2015 – July 2016",
      technologies: "System Administration, Hardware/Software Troubleshooting, IT Support",
      role: "Worked with two IT university employees, responsible for fixing the computer related problems that arised on campus. My tasks during the placement were to format, configure, scan for viruses, fix possible software or hardware harms and install software like the official university antivirus into computers, among others PC related activities.",
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
                  I've worked on many different domains for{' '}
                  <span className="text-purple-700">international organizations</span>
                </h2>
                <p className="text-gray-600 text-lg mt-6 max-w-2xl">
                  From international startups to large organizations such as the 
                  Spanish Railways and major tech companies.
                </p>
              </div>
              
              <div className="flex-shrink-0 self-end lg:mb-0">
                <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors">
                  Download Full CV
                </button>
              </div>
            </div>
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
                      <span className="text-white font-bold text-sm">UV</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        BSc in Computer Science, Software Engineering
                      </h4>
                      <p className="text-gray-600 text-sm">Universidade de Vigo, Spain</p>
                      <p className="text-gray-500 text-sm">2012 - 2017</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Thesis Project
                    </h5>
                    <p className="text-gray-700 text-sm">
                      <strong>Squizer - Simple Quiz Manager 2017</strong><br/>
                      SPA web application to manage and generate multiple choice tests using Angular 4, Materialize CSS, Django REST framework and PostgreSQL.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      International Experience
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Awarded with ISEP scholarship for a one-year exchange program in California State University East Bay (CSUEB), California, USA during 2016 - 2017.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">FI</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        BSc in Information Technology
                      </h4>
                      <p className="text-gray-600 text-sm">University of Applied Sciences of Mikkeli, Finland</p>
                      <p className="text-gray-500 text-sm">2014 - 2016</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Thesis Project
                    </h5>
                    <p className="text-gray-700 text-sm">
                      <strong>Development of hybrid mobile applications using Ionic Framework</strong><br/>
                      Graded 5/5, available in theseus.fi. Study of the advantages and disadvantages of web-based hybrid apps.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                      Focus Area
                    </h5>
                    <p className="text-gray-700 text-sm">
                      Mobile Application Development, Hybrid Technologies, Cross-platform Development
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
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">MS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      MTA: Networking Fundamentals - Certified 2016
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Microsoft</p>
                    <p className="text-gray-500 text-xs">Issued: November 2016</p>
                    <div className="mt-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Networking Fundamentals
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">MS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Microsoft MTA
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">Microsoft</p>
                    <p className="text-gray-500 text-xs">Issued: September 2014 • Credential ID: E966-5292</p>
                    <div className="mt-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        Microsoft Technology Associate
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