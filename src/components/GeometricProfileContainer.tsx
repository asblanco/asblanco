interface GeometricProfileContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isVisible?: boolean;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: {
    container: 'w-10 h-10',
    background: 'w-8 h-8',
    content: 'top-2 left-2 w-6 h-6',
    border: 'border'
  },
  md: {
    container: 'w-48 h-48',
    background: 'w-40 h-40',
    content: 'top-8 left-8 w-32 h-32',
    border: 'border-4'
  },
  lg: {
    container: 'w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80',
    background: 'w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72',
    content: 'top-8 left-8 w-32 h-32 md:top-12 md:left-12 md:w-40 md:h-40 lg:top-16 lg:left-16 lg:w-56 lg:h-56',
    border: 'border-4'
  },
  xl: {
    container: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96',
    background: 'w-56 h-56 md:w-72 md:h-72 lg:w-88 lg:h-88',
    content: 'top-12 left-12 w-40 h-40 md:top-16 md:left-16 md:w-48 md:h-48 lg:top-20 lg:left-20 lg:w-64 lg:h-64',
    border: 'border-4'
  }
};

export default function GeometricProfileContainer({ 
  size = 'lg', 
  isVisible = true, 
  children, 
  className = '' 
}: GeometricProfileContainerProps) {
  const classes = sizeClasses[size];
  
  return (
    <div className={`relative ${classes.container} mx-auto lg:mx-0 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}`}>
      {/* Large dark geometric shape behind */}
      <div className={`absolute top-0 left-0 ${classes.background} bg-gray-900 rounded-full`}></div>

      {/* Content container overlapping */}
      <div className={`absolute ${classes.content} rounded-full overflow-hidden ${classes.border} border-white shadow-2xl z-10`}>
        {children}
      </div>
    </div>
  );
}