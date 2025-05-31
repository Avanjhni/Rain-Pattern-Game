import React, { useRef, useEffect } from 'react';
import { useRainContext } from '../context/RainContext';
import RainGrid from './RainGrid';

const RainSimulation: React.FC = () => {
  const { isPlaying, speed, theme } = useRainContext();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex flex-col items-center">
      <div 
        ref={containerRef}
        className="w-[600px] h-[800px] relative border border-gray-700 rounded-lg overflow-hidden bg-black"
      >
        <RainGrid rows={20} columns={15} />
      </div>
    </div>
  );
};

export default RainSimulation;