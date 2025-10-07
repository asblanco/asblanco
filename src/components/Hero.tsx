import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
                src="/AndreaLego.png"
                alt="Andrea S.B. - LEGO Character"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Side Content - starting from bottom of black circle */}
          <div className={`absolute left-0 bottom-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="text-left max-w-md">
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a Sr. Software Engineer specialising in frontend and fullstack development.
              </p>

              {/* Dotted line extending toward center */}
              <div className="w-full border-t border-dotted border-gray-300 my-6"></div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-sm">🔒</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-sm">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-white text-sm">@</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Content - starting from top right */}
          <div className={`absolute right-0 top-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="text-right">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-none">
                Andrea
                <br />
                Sánchez Blanco
              </h1>

              {/* Dotted line extending toward center */}
              <div className="w-full border-t border-dotted border-gray-300 mt-4"></div>
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