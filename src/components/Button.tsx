import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // className is part of ButtonHTMLAttributes, but we can make it explicit for clarity if desired
  // className?: string; 
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-150 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Export default for easier dynamic import or if preferred by project conventions
// export default Button;
