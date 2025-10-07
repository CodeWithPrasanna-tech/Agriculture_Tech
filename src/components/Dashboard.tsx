import { Leaf, Calendar, TrendingUp, Sparkles, CheckCircle2, Zap } from 'lucide-react';

interface DashboardProps {
  t: any;
}

export default function Dashboard({ t }: DashboardProps) {
  const stats = [
    {
      label: t.totalCrops,
      value: '8',
      icon: Leaf,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      label: t.activeCrops,
      value: '5',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      label: t.upcomingEvents,
      value: '6',
      icon: Calendar,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/20 to-orange-500/20'
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl card-hover bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-br ${stat.gradient} p-4 rounded-2xl shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
                <p className="text-white/80 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                <p className="text-5xl font-black text-white mt-2">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-2xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white">Welcome to Your Farming Dashboard</h2>
          </div>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            This intelligent AI-powered portal revolutionizes your farming operations with cutting-edge technology and multilingual support.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Track 7-day weather forecasts with detailed temperature, rainfall, and humidity data',
              'Monitor crop growth stages and receive AI-powered care instructions for optimal yield',
              'Stay informed about government programs, subsidies, and training opportunities',
              'Get instant farming advice through our advanced multilingual chatbot assistant',
              'Access all features in your preferred language (English, Hindi, Tamil, Telugu, Bengali)',
              'Receive personalized recommendations based on your farm location and crop types'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 shadow-2xl card-hover">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-between">
              <span>Add New Crop</span>
              <Leaf className="w-5 h-5" />
            </button>
            <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-between">
              <span>View Weather Alerts</span>
              <Calendar className="w-5 h-5" />
            </button>
            <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-between">
              <span>Register for Camp</span>
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 shadow-2xl card-hover">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Today's Tips</h3>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold mb-1">Morning Task</p>
              <p className="text-white/80 text-sm">Check soil moisture levels in rice fields</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold mb-1">Weather Alert</p>
              <p className="text-white/80 text-sm">Light rain expected - perfect for transplanting</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white font-semibold mb-1">Reminder</p>
              <p className="text-white/80 text-sm">Organic farming workshop on Oct 17th</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
