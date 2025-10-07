interface HeaderProps {
  currentPage?: 'home' | 'blog';
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const isBlogPage = currentPage === 'blog';

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <a href="/" className="font-bold text-lg text-gray-900 tracking-tight hover:text-purple-600 transition-colors">
            ANDREA S.B.
          </a>
        </div>
        
        {/* Blog Link */}
        <div>
          <a 
            href="/blog" 
            className={`text-sm tracking-wide transition-all duration-300 relative group ${
              isBlogPage 
                ? 'text-purple-600 font-bold' 
                : 'text-gray-900 font-medium hover:text-purple-600'
            }`}
          >
            BLOG
            {/* Underline effect - only on hover */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;