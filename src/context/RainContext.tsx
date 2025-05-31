import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RainContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  speed: number;
  setSpeed: (speed: number) => void;
  intensity: number;
  setIntensity: (intensity: number) => void;
  theme: string;
  setTheme: (theme: string) => void;
  resetSimulation: () => void;
}

const RainContext = createContext<RainContextType | undefined>(undefined);

export const useRainContext = () => {
  const context = useContext(RainContext);
  if (!context) {
    throw new Error('useRainContext must be used within a RainProvider');
  }
  return context;
};

interface RainProviderProps {
  children: ReactNode;
}

export const RainProvider: React.FC<RainProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(3);
  const [intensity, setIntensity] = useState(2);
  const [theme, setTheme] = useState('default');
  
  const togglePlay = () => setIsPlaying(prev => !prev);
  
  const resetSimulation = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 100);
  };

  const value = {
    isPlaying,
    togglePlay,
    speed,
    setSpeed,
    intensity,
    setIntensity,
    theme,
    setTheme,
    resetSimulation
  };

  return <RainContext.Provider value={value}>{children}</RainContext.Provider>;
};