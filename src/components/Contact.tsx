import { useState, useEffect, useRef } from 'react';

interface ContactMethod {
  icon: string;
  label: string;
  href: string;
  description: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contactMethods: ContactMethod[] = [
    {
      icon: '✉️',
      label: 'Email',
      href: 'mailto:hello@emanuelesaladino.com',
      description: 'hello@emanuelesaladino.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/asblanco',
      description: 'Connect professionally'
    },
    {
      icon: '🐦',
      label: 'Twitter',
      href: 'https://twitter.com/emanuelesaladino',
      description: 'Follow my updates'
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
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello, feel free to reach out.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {method.label}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl animate-bounce">
              👋
            </div>
            <p className="mt-4 text-gray-600">
              Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;