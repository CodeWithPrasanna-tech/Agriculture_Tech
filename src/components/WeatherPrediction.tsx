import { Cloud, CloudRain, Droplets, Wind, Sun, CloudDrizzle } from 'lucide-react';

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
      return <CloudRain className="w-12 h-12 text-blue-500" />;
    } else if (condition.includes('Cloudy')) {
      return <Cloud className="w-12 h-12 text-gray-500" />;
    } else if (condition.includes('Drizzle')) {
      return <CloudDrizzle className="w-12 h-12 text-blue-400" />;
    } else {
      return <Sun className="w-12 h-12 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.weatherForecast}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weatherData.map((day, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                index === 0
                  ? 'from-green-50 to-green-100 border-2 border-green-500'
                  : 'from-gray-50 to-blue-50 border border-gray-200'
              } rounded-lg p-4 hover:shadow-lg transition-all`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-800">{day.day}</p>
                  <p className="text-sm text-gray-600">{day.date}</p>
                  {index === 0 && (
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded mt-1 inline-block">
                      {t.today}
                    </span>
                  )}
                </div>
                {getWeatherIcon(day.condition)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-700">
                    {t.temperature}: {day.tempMin}°C - {day.tempMax}°C
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">
                    {t.rainfall}: {day.rainfall} mm
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm text-gray-700">
                    {t.humidity}: {day.humidity}%
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {t.wind}: {day.windSpeed} km/h
                  </span>
                </div>

                <p className="text-sm font-medium text-gray-800 mt-3 pt-2 border-t">
                  {day.condition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Farming Tips Based on Weather</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Light rain expected on Thursday - Good time for transplanting rice seedlings</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Moderate rain on Friday - Ensure proper drainage in fields to prevent waterlogging</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>High humidity this week - Monitor crops for fungal diseases and apply preventive measures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>Strong winds on Friday - Secure young plants and provide support to tall crops</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
