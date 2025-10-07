import { Sprout, Globe, Sparkles } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: 'en' | 'hi' | 'ta' | 'te' | 'bn') => void;
  t: any;
}

export default function Header({ language, setLanguage, t }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white to-emerald-100 p-3 rounded-2xl shadow-lg">
                <Sprout className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">{t.title}</h1>
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-emerald-100 text-sm md:text-base font-medium mt-1">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
            <Globe className="w-5 h-5 text-emerald-200" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-white text-gray-800 px-4 py-2 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300 cursor-pointer shadow-md"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400"></div>
    </header>
  );
}
