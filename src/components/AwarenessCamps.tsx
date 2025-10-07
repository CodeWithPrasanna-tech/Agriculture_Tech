import { MapPin, Calendar, User, Phone, Tag } from 'lucide-react';

interface AwarenessCampsProps {
  t: any;
  language: string;
}

interface Camp {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  organizer: string;
  contact: string;
  category: string;
}

export default function AwarenessCamps({ t }: AwarenessCampsProps) {
  const camps: Camp[] = [
    {
      id: 1,
      title: 'Modern Farming Techniques Workshop',
      description:
        'Learn about latest farming technologies, precision agriculture, and sustainable farming practices. Free registration for all farmers.',
      location: 'District Agriculture Office, Delhi',
      date: '2025-10-12',
      organizer: 'Ministry of Agriculture',
      contact: '1800-180-1551',
      category: 'Training',
    },
    {
      id: 2,
      title: 'Organic Farming Certification Program',
      description:
        'Get certified in organic farming methods. Learn about organic fertilizers, pest control, and market opportunities for organic produce.',
      location: 'Krishi Vigyan Kendra, Punjab',
      date: '2025-10-17',
      organizer: 'National Organic Farming Association',
      contact: '9876543210',
      category: 'Training',
    },
    {
      id: 3,
      title: 'Government Subsidy Awareness Camp',
      description:
        'Information about available government subsidies for farmers including PM-KISAN, crop insurance, and equipment subsidies.',
      location: 'Village Panchayat Hall, Haryana',
      date: '2025-10-14',
      organizer: 'Department of Agriculture',
      contact: '1800-180-1551',
      category: 'Subsidy',
    },
    {
      id: 4,
      title: 'Water Conservation and Drip Irrigation',
      description:
        'Workshop on water-saving techniques, drip irrigation installation, and government assistance programs for irrigation systems.',
      location: 'Agricultural University, Maharashtra',
      date: '2025-10-22',
      organizer: 'Water Resources Department',
      contact: '9988776655',
      category: 'Awareness',
    },
    {
      id: 5,
      title: 'Crop Insurance and Risk Management',
      description:
        'Learn about Pradhan Mantri Fasal Bima Yojana (PMFBY) and how to protect your crops from weather-related losses.',
      location: 'Block Development Office, Karnataka',
      date: '2025-10-19',
      organizer: 'Insurance Regulatory Authority',
      contact: '1800-266-6868',
      category: 'Awareness',
    },
    {
      id: 6,
      title: 'Digital Farming and Mobile Apps',
      description:
        'Introduction to farming apps, online markets, weather apps, and digital payment systems for modern farmers.',
      location: 'Community Center, Tamil Nadu',
      date: '2025-10-15',
      organizer: 'Digital India Initiative',
      contact: '9123456789',
      category: 'Training',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'training':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'subsidy':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'awareness':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.upcomingCamps}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="border-2 border-gray-200 rounded-xl hover:border-green-500 transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold leading-tight">{camp.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                      camp.category
                    )} bg-white`}
                  >
                    {camp.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">{camp.description}</p>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{t.location}</p>
                      <p className="text-sm text-gray-800 font-medium">{camp.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{t.date}</p>
                      <p className="text-sm text-gray-800 font-medium">
                        {new Date(camp.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{t.organizer}</p>
                      <p className="text-sm text-gray-800 font-medium">{camp.organizer}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{t.contact}</p>
                      <p className="text-sm text-gray-800 font-medium">{camp.contact}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  {t.register}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Government Schemes & Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2">PM-KISAN Scheme</h4>
            <p className="text-sm opacity-90 mb-2">
              Direct income support of ₹6,000 per year to farmers. Check eligibility and apply online.
            </p>
            <p className="text-xs font-semibold">Helpline: 1800-180-1551</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2">Crop Insurance (PMFBY)</h4>
            <p className="text-sm opacity-90 mb-2">
              Protect your crops from natural disasters. Low premium, high coverage for peace of mind.
            </p>
            <p className="text-xs font-semibold">Helpline: 1800-266-6868</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2">Soil Health Card</h4>
            <p className="text-sm opacity-90 mb-2">
              Get free soil testing and nutrient recommendations for optimal crop growth.
            </p>
            <p className="text-xs font-semibold">Visit: soilhealth.dac.gov.in</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold text-lg mb-2">Kisan Credit Card</h4>
            <p className="text-sm opacity-90 mb-2">
              Easy access to credit for farming needs. Apply through your bank with minimal documentation.
            </p>
            <p className="text-xs font-semibold">Interest Rate: 4% (with subsidy)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
