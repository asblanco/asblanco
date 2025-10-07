interface EducationItem {
  id: number;
  logo: string;
  logoColor: string;
  degree: string;
  institution: string;
  period: string;
  thesis: {
    title: string;
    description: string;
    link?: {
      text: string;
      url: string;
    };
  };
  additional: {
    title: string;
    description: string;
  };
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      logo: "./uvigo_logo.jpeg",
      logoColor: "bg-white",
      degree: "BSc in Computer Science, Software Engineering",
      institution: "Universidade de Vigo, Spain",
      period: "2012 - 2017",
      thesis: {
        title: "Squizer - Simple Quiz Manager 2017",
        description: "SPA web application to manage and generate multiple choice tests using Angular 4, Materialize CSS, Django REST framework and PostgreSQL."
      },
      additional: {
        title: "International Experience",
        description: "Awarded with ISEP scholarship for a one-year exchange program in California State University East Bay (CSUEB), California, USA during 2016 - 2017."
      }
    },
    {
      id: 2,
      logo: "./mamk_logo.png",
      logoColor: "bg-white",
      degree: "BSc in Information Technology",
      institution: "University of Applied Sciences of Mikkeli, Finland",
      period: "2014 - 2016",
      thesis: {
        title: "Development of hybrid mobile applications using Ionic Framework",
        description: "Graded 5/5, available in",
        link: {
          text: "theseus.fi",
          url: "https://www.theseus.fi/handle/10024/114145"
        }
      },
      additional: {
        title: "Focus Area",
        description: "Mobile Application Development, Hybrid Technologies, Cross-platform Development"
      }
    }
  ];

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Education
      </h3>

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${edu.logoColor} rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 overflow-hidden`}>
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              </div>

              <div>
                <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  Thesis Project
                </h5>
                <p className="text-gray-700 text-sm">
                  <strong>{edu.thesis.title}</strong><br />
                  {edu.thesis.description}
                  {edu.thesis.link && (
                    <>
                      {' '}
                      <a
                        href={edu.thesis.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {edu.thesis.link.text}
                      </a>
                      . Study of the advantages and disadvantages of web-based hybrid apps.
                    </>
                  )}
                </p>
              </div>

              <div>
                <h5 className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  {edu.additional.title}
                </h5>
                <p className="text-gray-700 text-sm">
                  {edu.additional.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;