import { Leaf, Calendar, TrendingUp } from 'lucide-react';

interface DashboardProps {
  t: any;
}

export default function Dashboard({ t }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{t.totalCrops}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">8</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{t.activeCrops}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">{t.upcomingEvents}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">6</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome to Your Farming Dashboard</h2>
        <div className="space-y-4 text-gray-600">
          <p className="leading-relaxed">
            This intelligent portal helps you manage your farming operations efficiently. Here's what you can do:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Track 7-day weather forecasts with detailed temperature, rainfall, and humidity data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Monitor crop growth stages and receive care instructions for optimal yield</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Stay informed about government programs, subsidies, and training camps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Get instant farming advice through our AI-powered chatbot assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Access all features in your preferred language (English, Hindi, Tamil, Telugu, Bengali)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
