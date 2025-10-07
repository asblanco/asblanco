interface Certification {
  id: number;
  logo: string;
  logoColor: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId: string | null;
  tags: string[];
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      logo: "./microsoft_logo.png",
      logoColor: "bg-white",
      title: "Networking Fundamentals",
      issuer: "Microsoft MTA",
      issued: "November 2016",
      credentialId: null,
      tags: ["MTA Networking Fundamentals"]
    },
    {
      id: 2,
      logo: "./microsoft_logo.png",
      logoColor: "bg-white",
      title: "Networking Fundamentals",
      issuer: "Microsoft MTA",
      issued: "September 2014",
      credentialId: "E966-5292",
      tags: ["MTA Networking Fundamentals"]
    }
  ];

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Certifications
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${cert.logoColor} rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 overflow-hidden`}>
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {cert.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">
                  Issued: {cert.issued}
                  {cert.credentialId && ` • Credential ID: ${cert.credentialId}`}
                </p>
                <div className="mt-3">
                  {cert.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;