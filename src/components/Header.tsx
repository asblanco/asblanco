const Header: React.FC = () => {
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
            className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-wide"
          >
            BLOG
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;