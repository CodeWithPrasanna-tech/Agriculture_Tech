import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WeatherPrediction from './components/WeatherPrediction';
import CropTracker from './components/CropTracker';
import AwarenessCamps from './components/AwarenessCamps';
import Chatbot from './components/Chatbot';
import { translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'ta' | 'te' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'weather' | 'crops' | 'awareness'>('dashboard');

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <nav className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeSection === 'dashboard'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            {t.dashboard}
          </button>
          <button
            onClick={() => setActiveSection('weather')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeSection === 'weather'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            {t.weather}
          </button>
          <button
            onClick={() => setActiveSection('crops')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeSection === 'crops'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            {t.crops}
          </button>
          <button
            onClick={() => setActiveSection('awareness')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeSection === 'awareness'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            {t.awareness}
          </button>
        </nav>

        {activeSection === 'dashboard' && <Dashboard t={t} />}
        {activeSection === 'weather' && <WeatherPrediction t={t} language={language} />}
        {activeSection === 'crops' && <CropTracker t={t} language={language} />}
        {activeSection === 'awareness' && <AwarenessCamps t={t} language={language} />}
      </main>

      <Chatbot t={t} language={language} />
    </div>
  );
}

export default App;
