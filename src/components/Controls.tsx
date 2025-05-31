import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useRainContext } from '../context/RainContext';

const Controls: React.FC = () => {
  const { 
    isPlaying, 
    togglePlay, 
    speed, 
    setSpeed, 
    intensity,
    setIntensity,
    resetSimulation
  } = useRainContext();

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-500/20">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-300">Rain Controls</h2>
      
      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          <button 
            onClick={togglePlay}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button 
            onClick={resetSimulation}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(147,51,234,0.5)]"
            aria-label="Reset"
          >
            <RotateCcw size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="speed" className="block text-sm font-medium text-gray-300 mb-1">
              Speed: {speed}x
            </label>
            <input 
              id="speed"
              type="range" 
              min="1" 
              max="10" 
              value={speed} 
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="intensity" className="block text-sm font-medium text-gray-300 mb-1">
              Intensity: {intensity}
            </label>
            <input 
              id="intensity"
              type="range" 
              min="1" 
              max="5" 
              value={intensity} 
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;