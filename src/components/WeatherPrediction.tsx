import { Cloud, CloudRain, Droplets, Wind, Sun, CloudDrizzle, CloudSun, Sprout } from 'lucide-react';

interface WeatherPredictionProps {
  t: any;
  language: string;
}

interface WeatherDay {
  day: string;
  date: string;
  tempMin: number;
  tempMax: number;
  rainfall: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

export default function WeatherPrediction({ t }: WeatherPredictionProps) {
  const weatherData: WeatherDay[] = [
    {
      day: 'Monday',
      date: 'Oct 7',
      tempMin: 18,
      tempMax: 32,
      rainfall: 0,
      humidity: 45,
      windSpeed: 12,
      condition: 'Sunny',
    },
    {
      day: 'Tuesday',
      date: 'Oct 8',
      tempMin: 19,
      tempMax: 33,
      rainfall: 0,
      humidity: 42,
      windSpeed: 10,
      condition: 'Clear',
    },
    {
      day: 'Wednesday',
      date: 'Oct 9',
      tempMin: 20,
      tempMax: 34,
      rainfall: 2,
      humidity: 48,
      windSpeed: 15,
      condition: 'Partly Cloudy',
    },
    {
      day: 'Thursday',
      date: 'Oct 10',
      tempMin: 19,
      tempMax: 31,
      rainfall: 5,
      humidity: 55,
      windSpeed: 18,
      condition: 'Light Rain',
    },
    {
      day: 'Friday',
      date: 'Oct 11',
      tempMin: 18,
      tempMax: 30,
      rainfall: 8,
      humidity: 60,
      windSpeed: 20,
      condition: 'Moderate Rain',
    },
    {
      day: 'Saturday',
      date: 'Oct 12',
      tempMin: 17,
      tempMax: 29,
      rainfall: 3,
      humidity: 58,
      windSpeed: 16,
      condition: 'Cloudy',
    },
    {
      day: 'Sunday',
      date: 'Oct 13',
      tempMin: 18,
      tempMax: 31,
      rainfall: 0,
      humidity: 50,
      windSpeed: 12,
      condition: 'Partly Cloudy',
    },
  ];

  const getWeatherIcon = (condition: string) => {
    if (condition.includes('Rain')) {
      return <CloudRain className="w-16 h-16 text-blue-400 drop-shadow-lg" />;
    } else if (condition.includes('Cloudy')) {
      return <Cloud className="w-16 h-16 text-slate-400 drop-shadow-lg" />;
    } else if (condition.includes('Drizzle')) {
      return <CloudDrizzle className="w-16 h-16 text-cyan-400 drop-shadow-lg" />;
    } else {
      return <Sun className="w-16 h-16 text-yellow-400 drop-shadow-lg" />;
    }
  };

  const getWeatherGradient = (condition: string, isToday: boolean) => {
    if (isToday) return 'from-emerald-500 to-teal-500';
    if (condition.includes('Rain')) return 'from-blue-500 to-cyan-500';
    if (condition.includes('Cloudy')) return 'from-slate-500 to-gray-500';
    return 'from-amber-500 to-orange-500';
  };

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
        <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
          <CloudSun className="w-10 h-10" />
          {t.weatherForecast}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {weatherData.map((day, index) => {
            const isToday = index === 0;
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl card-hover ${
                  isToday
                    ? 'bg-gradient-to-br from-emerald-500/90 to-teal-500/90 ring-4 ring-white/50'
                    : 'bg-white/10 backdrop-blur-md border border-white/20'
                } p-5 shadow-xl`}
              >
                {isToday && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {t.today}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <p className={`text-lg font-bold ${isToday ? 'text-white' : 'text-white'}`}>{day.day}</p>
                  <p className={`text-sm ${isToday ? 'text-white/80' : 'text-white/70'}`}>{day.date}</p>
                </div>

                <div className="flex justify-center my-6">
                  {getWeatherIcon(day.condition)}
                </div>

                <div className={`text-center mb-4 pb-4 border-b ${isToday ? 'border-white/30' : 'border-white/20'}`}>
                  <p className={`text-3xl font-black ${isToday ? 'text-white' : 'text-white'}`}>
                    {day.tempMax}°C
                  </p>
                  <p className={`text-sm ${isToday ? 'text-white/80' : 'text-white/70'}`}>
                    Low: {day.tempMin}°C
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <CloudRain className="w-4 h-4 text-cyan-300" />
                      <span className={`text-xs font-medium ${isToday ? 'text-white' : 'text-white/90'}`}>
                        {t.rainfall}
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${isToday ? 'text-white' : 'text-white'}`}>{day.rainfall} mm</span>
                  </div>

                  <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-300" />
                      <span className={`text-xs font-medium ${isToday ? 'text-white' : 'text-white/90'}`}>
                        {t.humidity}
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${isToday ? 'text-white' : 'text-white'}`}>{day.humidity}%</span>
                  </div>

                  <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-slate-300" />
                      <span className={`text-xs font-medium ${isToday ? 'text-white' : 'text-white/90'}`}>
                        {t.wind}
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${isToday ? 'text-white' : 'text-white'}`}>{day.windSpeed} km/h</span>
                  </div>
                </div>

                <p className={`text-center text-sm font-semibold mt-4 ${isToday ? 'text-white' : 'text-white/90'}`}>
                  {day.condition}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 shadow-2xl">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Sprout className="w-8 h-8" />
            Farming Tips Based on Weather
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <CloudRain className="w-6 h-6 text-cyan-300" />
                <span className="text-white font-bold">Thursday</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">Light rain expected - Good time for transplanting rice seedlings</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Cloud className="w-6 h-6 text-blue-300" />
                <span className="text-white font-bold">Friday</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">Moderate rain - Ensure proper drainage in fields to prevent waterlogging</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-6 h-6 text-sky-300" />
                <span className="text-white font-bold">This Week</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">High humidity - Monitor crops for fungal diseases and apply preventive measures</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Wind className="w-6 h-6 text-slate-300" />
                <span className="text-white font-bold">Friday</span>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">Strong winds - Secure young plants and provide support to tall crops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
