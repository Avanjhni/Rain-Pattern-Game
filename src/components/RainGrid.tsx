import React, { useEffect, useState } from 'react';
import { useRainContext } from '../context/RainContext';
import { getRandomColor } from '../utils/colors';

interface RainGridProps {
  rows: number;
  columns: number;
}

interface RainDrop {
  id: string;
  row: number;
  col: number;
  color: string;
  active: boolean;
  falling: boolean;
}

const RainGrid: React.FC<RainGridProps> = ({ rows, columns }) => {
  const { isPlaying, speed, intensity, theme } = useRainContext();
  const [grid, setGrid] = useState<RainDrop[]>([]);
  const [gridCells, setGridCells] = useState<boolean[][]>(
    Array(rows).fill(null).map(() => Array(columns).fill(false))
  );

  useEffect(() => {
    const initialGrid: RainDrop[] = [];
    setGrid(initialGrid);
    setGridCells(Array(rows).fill(null).map(() => Array(columns).fill(false)));
  }, [rows, columns]);

  useEffect(() => {
    if (!isPlaying) return;

    const rainInterval = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = prevGrid.filter(drop => drop.row < rows - 1 || !drop.falling);
        return newGrid.map(drop => {
          if (drop.falling && drop.row < rows - 1) {
            return { ...drop, row: drop.row + 1 };
          }
          return drop;
        });
      });

      const dropCount = Math.floor(Math.random() * intensity) + 1;
      
      setGrid(prevGrid => {
        const newDrops: RainDrop[] = [];
        for (let i = 0; i < dropCount; i++) {
          const col = Math.floor(Math.random() * columns);
          if (!gridCells[0][col]) {
            const newDrop: RainDrop = {
              id: `drop-${Date.now()}-${i}-${Math.random()}`,
              row: 0,
              col,
              color: getRandomColor(theme),
              active: true,
              falling: true
            };
            newDrops.push(newDrop);
            
            const newGridCells = [...gridCells];
            newGridCells[0][col] = true;
            setGridCells(newGridCells);
          }
        }
        return [...prevGrid, ...newDrops];
      });

      setGridCells(prevGridCells => {
        const newGridCells = Array(rows).fill(null).map(() => Array(columns).fill(false));
        grid.forEach(drop => {
          if (drop.row >= 0 && drop.row < rows && drop.col >= 0 && drop.col < columns) {
            newGridCells[drop.row][drop.col] = true;
          }
        });
        return newGridCells;
      });
    }, 1000 / speed);

    return () => clearInterval(rainInterval);
  }, [isPlaying, speed, rows, columns, grid, gridCells, intensity, theme]);

  return (
    <div 
      className="grid w-full h-full" 
      style={{ 
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
        backgroundColor: '#374151'
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const raindrop = grid.find(drop => drop.row === row && drop.col === col);
        
        return (
          <div 
            key={`cell-${row}-${col}`}
            className="w-full h-full bg-black"
            style={{
              backgroundColor: raindrop ? raindrop.color : 'black',
            }}
          />
        );
      })}
    </div>
  );
};

export default RainGrid;