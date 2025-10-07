import { useState, useEffect } from 'react';
import { socialLinks } from '../config/socialLinks';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-20">

        {/* Centered Layout with circles as focal point */}
        <div className="flex items-end justify-center min-h-[70vh] relative pb-16">

          {/* Central Profile Image with Geometric Shapes */}
          <div className={`relative w-80 h-80 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Large dark geometric shape behind */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gray-900 rounded-full"></div>

            {/* Profile image container overlapping */}
            <div className="absolute top-16 left-16 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              {/* Andrea LEGO Image */}
              <img
                src="./AndreaLego.png"
                alt="Andrea S.B. - LEGO Character"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Side Content - starting from bottom of black circle */}
          <div
            className={`absolute left-0 bottom-20 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}
            style={{
              transform: isVisible ? `translateX(${scrollY * -1.5}px)` : 'translateX(-32px)',
              transition: isVisible ? 'none' : 'all 1000ms 300ms'
            }}
          >
            <div className="text-left max-w-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a <span className="relative">
                  <span className="text-gray-900 font-medium">Sr. Software Engineer</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                </span> specialising in frontend and fullstack development.
              </p>

              {/* Dotted line extending toward center */}
              <div className="w-full border-t border-dotted border-gray-300 my-6"></div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {/* LinkedIn */}
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Email */}
                <a href={socialLinks.email} className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636Z" />
                  </svg>
                </a>

                {/* Medium */}
                <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Content - starting from top right */}
          <div
            className={`absolute right-0 top-16 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-8'}`}
            style={{
              transform: isVisible ? `translateX(${scrollY * 1.5}px)` : 'translateX(32px)',
              transition: isVisible ? 'none' : 'all 1000ms 500ms'
            }}
          >
            <div className="text-right">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-none">
                Andrea
                <br />
                Sánchez Blanco
              </h1>

              {/* Dotted line extending toward center */}
              <div className="w-full border-t border-dotted border-gray-300 mt-4"></div>

              {/* Location */}
              <div className="flex items-center justify-end mt-4">
                <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-500 text-base font-light">
                  Munich, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selector - Bottom Right */}
      <div className="absolute bottom-2 right-8 z-50">
        <div className="flex items-center space-x-1 bg-gray-900 rounded px-3 py-1">
          <button className="text-white text-sm font-medium px-2 py-1 bg-gray-700 rounded">
            EN
          </button>
          <button className="text-gray-400 text-sm font-medium px-2 py-1 hover:text-white transition-colors">
            ES
          </button>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"></div>
    </section>
  );
};

export default Hero;