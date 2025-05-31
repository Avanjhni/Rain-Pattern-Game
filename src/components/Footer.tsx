import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-6 border-t border-blue-900/30 backdrop-blur-sm bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="mb-2 md:mb-0">
          <p>© 2025 RainFall Simulator</p>
        </div>
        
        <div className="flex items-center gap-1">
          <span>Created with</span>
          <Heart className="h-4 w-4 text-red-400" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;