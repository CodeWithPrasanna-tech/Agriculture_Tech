import { Sprout, Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: 'en' | 'hi' | 'ta' | 'te' | 'bn') => void;
  t: any;
}

export default function Header({ language, setLanguage, t }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <Sprout className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{t.title}</h1>
              <p className="text-green-100 text-sm md:text-base">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-300"
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
    </header>
  );
}
