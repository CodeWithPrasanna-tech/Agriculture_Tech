import { useState } from 'react';
import { Sprout, Calendar, TrendingUp, AlertCircle, Plus } from 'lucide-react';

interface CropTrackerProps {
  t: any;
  language: string;
}

interface Crop {
  id: number;
  name: string;
  plantingDate: string;
  currentStage: string;
  stageNumber: number;
  totalStages: number;
  daysUntilHarvest: number;
  areaAcres: number;
  careInstructions: string;
}

export default function CropTracker({ t }: CropTrackerProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [crops] = useState<Crop[]>([
    {
      id: 1,
      name: 'Rice',
      plantingDate: '2025-09-01',
      currentStage: 'Tillering',
      stageNumber: 3,
      totalStages: 7,
      daysUntilHarvest: 98,
      areaAcres: 5,
      careInstructions: 'Maintain 2-3 inches water level. Watch for pests. Apply nitrogen fertilizer.',
    },
    {
      id: 2,
      name: 'Wheat',
      plantingDate: '2025-08-15',
      currentStage: 'Jointing',
      stageNumber: 4,
      totalStages: 7,
      daysUntilHarvest: 70,
      areaAcres: 3,
      careInstructions: 'Third irrigation needed. Apply nitrogen fertilizer. Monitor for weeds.',
    },
    {
      id: 3,
      name: 'Cotton',
      plantingDate: '2025-07-20',
      currentStage: 'Flowering',
      stageNumber: 4,
      totalStages: 6,
      daysUntilHarvest: 112,
      areaAcres: 4,
      careInstructions: 'Maintain adequate moisture. Monitor for bollworms. Apply insecticides if needed.',
    },
  ]);

  const getStageColor = (stageNumber: number, totalStages: number) => {
    const percentage = (stageNumber / totalStages) * 100;
    if (percentage < 30) return 'bg-red-500';
    if (percentage < 60) return 'bg-yellow-500';
    if (percentage < 90) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{t.cropGrowth}</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          {t.addCrop}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Add New Crop</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.cropName}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Rice, Wheat, Cotton"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.plantingDate}
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.area}
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="5"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Add Crop
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sprout className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">{crop.name}</h3>
                    <p className="text-green-100 text-sm">{crop.areaAcres} acres</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-green-100">{t.daysUntilHarvest}</p>
                  <p className="text-2xl font-bold">{crop.daysUntilHarvest}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-sm">
                  {t.plantingDate}: <span className="font-semibold">{crop.plantingDate}</span>
                </span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{t.currentStage}</span>
                  <span className="text-sm font-bold text-green-600">
                    {crop.stageNumber} / {crop.totalStages}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${getStageColor(crop.stageNumber, crop.totalStages)} transition-all duration-500`}
                    style={{ width: `${(crop.stageNumber / crop.totalStages) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm font-semibold text-gray-800 mt-2">{crop.currentStage}</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">
                      {t.careInstructions}
                    </p>
                    <p className="text-sm text-blue-800">{crop.careInstructions}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-medium flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {t.viewDetails}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-3">Crop Growth Predictions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-sm opacity-90">Rice - Next Stage</p>
            <p className="text-2xl font-bold mt-1">Stem Elongation</p>
            <p className="text-sm opacity-90 mt-1">Expected in 14 days</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-sm opacity-90">Wheat - Next Stage</p>
            <p className="text-2xl font-bold mt-1">Heading</p>
            <p className="text-sm opacity-90 mt-1">Expected in 12 days</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-sm opacity-90">Cotton - Next Stage</p>
            <p className="text-2xl font-bold mt-1">Boll Development</p>
            <p className="text-sm opacity-90 mt-1">Expected in 28 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
