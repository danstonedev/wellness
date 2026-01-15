import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Landing } from './pages/Landing';
import { CaseStudy } from './components/case-study/CaseStudy';
import type { Population } from './types';
import './index.css';

type View = 'home' | 'case';

function App() {
  const [view, setView] = useState<View>('home');
  const [selectedPopulation, setSelectedPopulation] = useState<Population | null>(null);

  const handleSelectPopulation = (pop: Population) => {
    setSelectedPopulation(pop);
    setView('case');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedPopulation(null);
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 flex flex-col">
      <Header setView={setView} />

      <main className="flex-1">
        {view === 'home' && (
          <Landing onSelectPopulation={handleSelectPopulation} />
        )}

        {view === 'case' && selectedPopulation && (
          <CaseStudy
            population={selectedPopulation}
            onBack={handleBack}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
