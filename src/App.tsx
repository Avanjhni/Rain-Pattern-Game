import React from 'react';
import RainSimulation from './components/RainSimulation';
import Header from './components/Header';
import Footer from './components/Footer';
import Controls from './components/Controls';
import { RainProvider } from './context/RainContext';

function App() {
  return (
    <RainProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(35,38,59,0.5)_0%,_rgba(17,24,39,0.2)_100%)]"></div>
        <div className="relative z-10 flex-1 flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-3/4">
                <RainSimulation />
              </div>
              <div className="w-full lg:w-1/4">
                <Controls />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </RainProvider>
  );
}

export default App;