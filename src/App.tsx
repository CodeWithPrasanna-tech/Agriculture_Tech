import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WeatherPrediction from './components/WeatherPrediction';
import CropTracker from './components/CropTracker';
import AwarenessCamps from './components/AwarenessCamps';
import Chatbot from './components/Chatbot';
import { translations } from './utils/translations';
import { Home, CloudSun, Sprout, GraduationCap } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'ta' | 'te' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'weather' | 'crops' | 'awareness'>('dashboard');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const t = translations[language];

  const navItems = [
    { id: 'dashboard' as const, label: t.dashboard, icon: Home, gradient: 'from-emerald-500 to-teal-600' },
    { id: 'weather' as const, label: t.weather, icon: CloudSun, gradient: 'from-sky-500 to-blue-600' },
    { id: 'crops' as const, label: t.crops, icon: Sprout, gradient: 'from-lime-500 to-green-600' },
    { id: 'awareness' as const, label: t.awareness, icon: GraduationCap, gradient: 'from-amber-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJhMiAyIDAgMCAwIDItMnYtMmgtMnYyaC0yem0wLTRoMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2Mmgydi0yem0tMiAwdjJoMnYtMmgtMnptLTIgMGgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6bTAtMmgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header
          language={language}
          setLanguage={setLanguage}
          t={t}
        />

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-2xl scale-105 hover:scale-110`
                      : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="animate-fadeIn">
            {activeSection === 'dashboard' && <Dashboard t={t} />}
            {activeSection === 'weather' && <WeatherPrediction t={t} language={language} />}
            {activeSection === 'crops' && <CropTracker t={t} language={language} />}
            {activeSection === 'awareness' && <AwarenessCamps t={t} language={language} />}
          </div>
        </main>
      </div>

      <Chatbot t={t} language={language} />
    </div>
  );
}

export default App;
