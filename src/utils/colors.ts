import { ColorTheme } from '../types';

// Color theme definitions
const colorThemes: Record<string, string[]> = {
  default: [
    '#3b82f6', // blue
    '#8b5cf6', // purple
  ],
  rainbow: [
    '#ef4444', // red
    '#f97316', // orange
    '#f59e0b', // amber
    '#84cc16', // lime
    '#10b981', // emerald
    '#06b6d4', // cyan
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#d946ef', // fuchsia
  ]
};

/**
 * Get a random color from the selected theme
 */
export const getRandomColor = (theme: string): string => {
  const colors = colorThemes[theme] || colorThemes.default;
  return colors[Math.floor(Math.random() * colors.length)];
};