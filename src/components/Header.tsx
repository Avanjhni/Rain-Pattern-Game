import React from 'react';
import { CloudRain, Droplets } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 border-b border-blue-900/30 backdrop-blur-sm bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CloudRain className="text-blue-400" size={28} />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            RainFall Simulator
          </h1>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-2 text-blue-300">
            <Droplets size={16} />
            <span className="text-sm">Dynamic Grid Patterns</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;