import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface ChatbotProps {
  t: any;
  language: string;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot({ t, language }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: getWelcomeMessage(language),
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string, lang: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    const responses: { [key: string]: { [key: string]: string } } = {
      weather: {
        en: "Based on the 7-day forecast, we're expecting light rain on Thursday and moderate rain on Friday. It's a good time to prepare your fields for planting. Make sure drainage is adequate to prevent waterlogging.",
        hi: "7 दिन के पूर्वानुमान के अनुसार, गुरुवार को हल्की बारिश और शुक्रवार को मध्यम बारिश की उम्मीद है। रोपण के लिए अपने खेतों को तैयार करने का यह अच्छा समय है। जलभराव को रोकने के लिए जल निकासी पर्याप्त होनी चाहिए।",
        ta: "7 நாள் முன்னறிவிப்பின்படி, வியாழன் அன்று லேசான மழை மற்றும் வெள்ளி அன்று மிதமான மழை எதிர்பார்க்கப்படுகிறது. நடவுக்கு உங்கள் வயல்களைத் தயார்படுத்த இது நல்ல நேரம். நீர் தேங்குவதைத் தடுக்க வடிகால் போதுமானதாக இருப்பதை உறுதிசெய்யவும்.",
        te: "7 రోజుల అంచనా ప్రకారం, గురువారం తేలికపాటి వర్షం మరియు శుక్రవారం మితమైన వర్షం అంచనా. నాటడానికి మీ పొలాలను సిద్ధం చేయడానికి ఇది మంచి సమయం. నీరు నిలవకుండా నిరోధించడానికి డ్రైనేజీ తగినంతగా ఉండేలా చూసుకోండి.",
        bn: "৭ দিনের পূর্বাভাস অনুযায়ী, বৃহস্পতিবার হালকা বৃষ্টি এবং শুক্রবার মাঝারি বৃষ্টির সম্ভাবনা রয়েছে। রোপণের জন্য আপনার জমি প্রস্তুত করার এটি ভাল সময়। জলাবদ্ধতা রোধ করতে নিষ্কাশন পর্যাপ্ত তা নিশ্চিত করুন।",
      },
      rice: {
        en: "For rice cultivation: Ensure 2-3 inches water level during tillering stage. Apply nitrogen fertilizer (40-50 kg per acre). Watch for stem borers and leaf folders. Use pesticides if pest population exceeds threshold.",
        hi: "चावल की खेती के लिए: कल्ले निकलने के दौरान 2-3 इंच पानी का स्तर सुनिश्चित करें। नाइट्रोजन उर्वरक (40-50 किलो प्रति एकड़) डालें। तना छेदक और पत्ती मोड़क का ध्यान रखें। यदि कीट संख्या सीमा से अधिक हो तो कीटनाशक का उपयोग करें।",
        ta: "நெல் சாகுபடிக்கு: கன்று பிரியும் நிலையில் 2-3 அங்குல நீர் மட்டத்தை உறுதிசெய்யவும். நைட்ரஜன் உரம் (ஏக்கருக்கு 40-50 கிலோ) இடவும். தண்டு துளைப்பான்கள் மற்றும் இலை மடிப்பான்களை கவனிக்கவும். பூச்சி எண்ணிக்கை வரம்பை மீறினால் பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்.",
        te: "వరి సాగుకు: పంజ విడిపే దశలో 2-3 అంగుళాల నీటి మట్టాన్ని నిర్ధారించండి. నత్రజని ఎరువు (ఎకరుకు 40-50 కిలోలు) వేయండి. కాండపురుగులు మరియు ఆకు మడతలను గమనించండి. చీడల సంఖ్య పరిమితిని దాటితే పురుగుమందులను ఉపయోగించండి.",
        bn: "ধান চাষের জন্য: কুশি পর্যায়ে ২-৩ ইঞ্চি জলের স্তর নিশ্চিত করুন। নাইট্রোজেন সার (একর প্রতি ৪০-৫০ কেজি) প্রয়োগ করুন। কাণ্ড ছিদ্রকারী এবং পাতা মোড়ানো পোকার দিকে নজর রাখুন। পোকার সংখ্যা সীমা অতিক্রম করলে কীটনাশক ব্যবহার করুন।",
      },
      wheat: {
        en: "Wheat care tips: Provide third irrigation during jointing stage. Apply nitrogen fertilizer at this stage. Control weeds using herbicides or manual weeding. Monitor for aphids and apply neem-based pesticides if needed.",
        hi: "गेहूं की देखभाल युक्तियाँ: गांठ बनने के दौरान तीसरी सिंचाई करें। इस स्तर पर नाइट्रोजन उर्वरक डालें। शाकनाशी या हाथ से निराई-गुड़ाई द्वारा खरपतवार नियंत्रित करें। एफिड्स की निगरानी करें और यदि आवश्यक हो तो नीम आधारित कीटनाशक लगाएं।",
        ta: "கோதுமை பராமரிப்பு குறிப்புகள்: இணைப்பு நிலையில் மூன்றாவது பாசனம் வழங்கவும். இந்த கட்டத்தில் நைட்ரஜன் உரம் இடவும். களைக்கொல்லிகள் அல்லது கைமுறை களை எடுப்பதன் மூலம் களைகளை கட்டுப்படுத்தவும். அசுவினிகளை கண்காணித்து தேவைப்பட்டால் வேம்பு அடிப்படையிலான பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்.",
        te: "గోధుమ సంరక్షణ చిట్కాలు: కలయిక దశలో మూడవ నీటిపారుదల అందించండి. ఈ దశలో నత్రజని ఎరువు వేయండి. కలుపు సంహారకాలు లేదా చేతి కలుపు తీయడం ద్వారా కలుపుమొక్కలను నియంత్రించండి. పేలులను పర్యవేక్షించండి మరియు అవసరమైతే వేప ఆధారిత పురుగుమందులను వర్తించండి.",
        bn: "গমের যত্ন টিপস: জোড়া লাগানোর পর্যায়ে তৃতীয় সেচ প্রদান করুন। এই পর্যায়ে নাইট্রোজেন সার প্রয়োগ করুন। আগাছানাশক বা হাতে আগাছা দূর করে আগাছা নিয়ন্ত্রণ করুন। এফিড পর্যবেক্ষণ করুন এবং প্রয়োজনে নিম-ভিত্তিক কীটনাশক প্রয়োগ করুন।",
      },
      subsidy: {
        en: "Available subsidies: 1) PM-KISAN: ₹6,000/year direct income support. 2) Equipment subsidy: 40-50% on tractors and farm equipment. 3) Drip irrigation: 80-90% subsidy available. 4) Organic farming: Special certification support. Call 1800-180-1551 for more details.",
        hi: "उपलब्ध सब्सिडी: 1) PM-KISAN: ₹6,000/वर्ष प्रत्यक्ष आय समर्थन। 2) उपकरण सब्सिडी: ट्रैक्टर और कृषि उपकरण पर 40-50%। 3) ड्रिप सिंचाई: 80-90% सब्सिडी उपलब्ध। 4) जैविक खेती: विशेष प्रमाणन समर्थन। अधिक जानकारी के लिए 1800-180-1551 पर कॉल करें।",
        ta: "கிடைக்கும் மானியங்கள்: 1) PM-KISAN: ₹6,000/ஆண்டு நேரடி வருமான ஆதரவு। 2) உபகரண மானியம்: டிராக்டர்கள் மற்றும் விவசாய உபகரணங்களில் 40-50%। 3) சொட்டு நீர்ப்பாசனம்: 80-90% மானியம் கிடைக்கிறது। 4) இயற்கை விவசாயம்: சிறப்பு சான்றிதழ் ஆதரவு। மேலும் விவரங்களுக்கு 1800-180-1551 அழைக்கவும்.",
        te: "అందుబాటులో ఉన్న సబ్సిడీలు: 1) PM-KISAN: ₹6,000/సంవత్సరం ప్రత్యక్ష ఆదాయ మద్దతు। 2) పరికరాల సబ్సిడీ: ట్రాక్టర్లు మరియు వ్యవసాయ పరికరాలపై 40-50%। 3) డ్రిప్ నీటిపారుదల: 80-90% సబ్సిడీ అందుబాటులో ఉంది। 4) సేంద్రీయ వ్యవసాయం: ప్రత్యేక ధృవీకరణ మద్దతు. మరిన్ని వివరాలకు 1800-180-1551కు కాల్ చేయండి.",
        bn: "উপলব্ধ ভর্তুকি: 1) PM-KISAN: ₹6,000/বছর সরাসরি আয় সহায়তা। 2) সরঞ্জাম ভর্তুকি: ট্রাক্টর এবং কৃষি সরঞ্জামে 40-50%। 3) ড্রিপ সেচ: 80-90% ভর্তুকি উপলব্ধ। 4) জৈব চাষ: বিশেষ সার্টিফিকেশন সহায়তা। আরও বিস্তারিত জানতে 1800-180-1551 কল করুন।",
      },
      pest: {
        en: "For pest control: 1) Monitor crops regularly for early detection. 2) Use neem-based organic pesticides first. 3) Apply chemical pesticides only if pest population exceeds economic threshold. 4) Follow integrated pest management (IPM) practices. 5) Maintain field hygiene.",
        hi: "कीट नियंत्रण के लिए: 1) प्रारंभिक पहचान के लिए फसलों की नियमित निगरानी करें। 2) पहले नीम आधारित जैविक कीटनाशक का उपयोग करें। 3) रासायनिक कीटनाशक तभी लगाएं जब कीट संख्या आर्थिक सीमा से अधिक हो। 4) एकीकृत कीट प्रबंधन (IPM) प्रथाओं का पालन करें। 5) खेत की स्वच्छता बनाए रखें।",
        ta: "பூச்சி கட்டுப்பாட்டுக்கு: 1) ஆரம்ப கண்டறிதலுக்காக பயிர்களை தொடர்ந்து கண்காணிக்கவும்। 2) முதலில் வேம்பு அடிப்படையிலான இயற்கை பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்। 3) பூச்சி எண்ணிக்கை பொருளாதார வரம்பை மீறினால் மட்டுமே இரசாயன பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்। 4) ஒருங்கிணைந்த பூச்சி மேலாண்மை (IPM) நடைமுறைகளைப் பின்பற்றவும்। 5) வயல் சுகாதாரத்தை பராமரிக்கவும்.",
        te: "చీడ నియంత్రణ కోసం: 1) ముందస్తు గుర్తింపు కోసం పంటలను క్రమం తప్పకుండా పర్యవేక్షించండి। 2) ముందుగా వేప ఆధారిత సేంద్రీయ పురుగుమందులను ఉపయోగించండి। 3) చీడల సంఖ్య ఆర్థిక పరిమితిని దాటితేనే రసాయన పురుగుమందులను వర్తించండి। 4) సమీకృత చీడ నిర్వహణ (IPM) పద్ధతులను అనుసరించండి। 5) పొలం పరిశుభ్రతను నిర్వహించండి.",
        bn: "কীটপতঙ্গ নিয়ন্ত্রণের জন্য: 1) প্রাথমিক সনাক্তকরণের জন্য নিয়মিত ফসল পর্যবেক্ষণ করুন। 2) প্রথমে নিম-ভিত্তিক জৈব কীটনাশক ব্যবহার করুন। 3) শুধুমাত্র তখনই রাসায়নিক কীটনাশক প্রয়োগ করুন যখন কীটপতঙ্গের সংখ্যা অর্থনৈতিক সীমা অতিক্রম করে। 4) সমন্বিত কীটপতঙ্গ ব্যবস্থাপনা (IPM) অনুশীলন অনুসরণ করুন। 5) ক্ষেত্রের স্বাস্থ্যবিধি বজায় রাখুন।",
      },
      fertilizer: {
        en: "Fertilizer recommendations: 1) Get soil testing done first (free via Soil Health Card). 2) Use balanced NPK as per soil test results. 3) Apply organic manure before chemical fertilizers. 4) Split nitrogen application for better efficiency. 5) Use micronutrients if deficiency is detected.",
        hi: "उर्वरक सिफारिशें: 1) पहले मिट्टी परीक्षण कराएं (मृदा स्वास्थ्य कार्ड के माध्यम से मुफ्त)। 2) मिट्टी परीक्षण परिणाम के अनुसार संतुलित NPK का उपयोग करें। 3) रासायनिक उर्वरकों से पहले जैविक खाद लगाएं। 4) बेहतर दक्षता के लिए नाइट्रोजन का विभाजित अनुप्रयोग करें। 5) कमी पाए जाने पर सूक्ष्म पोषक तत्वों का उपयोग करें।",
        ta: "உர பரிந்துரைகள்: 1) முதலில் மண் பரிசோதனை செய்யவும் (மண் ஆரோக்கிய அட்டை வழியாக இலவசம்)। 2) மண் பரிசோதனை முடிவுகளின்படி சமநிலை NPK ஐப் பயன்படுத்தவும்। 3) இரசாயன உரங்களுக்கு முன் கரிம உரத்தை இடவும்। 4) சிறந்த திறனுக்காக நைட்ரஜன் பயன்பாட்டை பிரிக்கவும்। 5) குறைபாடு கண்டறியப்பட்டால் நுண்ணூட்டச்சத்துக்களைப் பயன்படுத்தவும்.",
        te: "ఎరువుల సిఫార్సులు: 1) ముందుగా మట్టి పరీక్షించండి (నేల ఆరోగ్య కార్డు ద్వారా ఉచితం)। 2) నేల పరీక్ష ఫలితాల ప్రకారం సమతుల NPK ఉపయోగించండి। 3) రసాయన ఎరువులకు ముందు సేంద్రీయ పేడ వేయండి। 4) మెరుగైన సామర్థ్యం కోసం నత్రజని వర్తింపును విభజించండి। 5) లోపం గుర్తించబడితే సూక్ష్మపోషకాలను ఉపయోగించండి.",
        bn: "সার সুপারিশ: 1) প্রথমে মাটি পরীক্ষা করান (মাটি স্বাস্থ্য কার্ডের মাধ্যমে বিনামূল্যে)। 2) মাটি পরীক্ষার ফলাফল অনুযায়ী সুষম NPK ব্যবহার করুন। 3) রাসায়নিক সারের আগে জৈব সার প্রয়োগ করুন। 4) ভাল দক্ষতার জন্য নাইট্রোজেন প্রয়োগ বিভক্ত করুন। 5) ঘাটতি সনাক্ত হলে মাইক্রোনিউট্রিয়েন্ট ব্যবহার করুন।",
      },
    };

    for (const [key, value] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return value[lang] || value.en;
      }
    }

    const defaultResponses: { [key: string]: string } = {
      en: "I can help you with weather forecasts, crop care tips, pest control, fertilizers, and government subsidies. What would you like to know?",
      hi: "मैं मौसम पूर्वानुमान, फसल देखभाल युक्तियाँ, कीट नियंत्रण, उर्वरक और सरकारी सब्सिडी में आपकी सहायता कर सकता हूं। आप क्या जानना चाहेंगे?",
      ta: "வானிலை முன்னறிவிப்புகள், பயிர் பராமரிப்பு குறிப்புகள், பூச்சி கட்டுப்பாடு, உரங்கள் மற்றும் அரசாங்க மானியங்கள் குறித்து நான் உங்களுக்கு உதவ முடியும். நீங்கள் என்ன தெரிந்துகொள்ள விரும்புகிறீர்கள்?",
      te: "వాతావరణ అంచనాలు, పంట సంరక్షణ చిట్కాలు, చీడ నియంత్రణ, ఎరువులు మరియు ప్రభుత్వ సబ్సిడీలతో నేను మీకు సహాయం చేయగలను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
      bn: "আমি আপনাকে আবহাওয়া পূর্বাভাস, ফসলের যত্ন টিপস, কীটপতঙ্গ নিয়ন্ত্রণ, সার এবং সরকারি ভর্তুকি সম্পর্কে সাহায্য করতে পারি। আপনি কী জানতে চান?",
    };

    return defaultResponses[lang] || defaultResponses.en;
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage, language),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[600px]">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-full">
                <Bot className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold">{t.aiAssistant}</h3>
                <p className="text-xs text-green-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="bg-green-100 p-2 rounded-full h-8 w-8 flex-shrink-0">
                    <Bot className="w-4 h-4 text-green-600" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex-shrink-0">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.askQuestion}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getWelcomeMessage(lang: string): string {
  const welcomeMessages: { [key: string]: string } = {
    en: "Hello! I'm your AI farming assistant. I can help you with weather forecasts, crop care, pest control, fertilizers, and government subsidies. How can I assist you today?",
    hi: "नमस्ते! मैं आपका एआई खेती सहायक हूं। मैं मौसम पूर्वानुमान, फसल देखभाल, कीट नियंत्रण, उर्वरक और सरकारी सब्सिडी में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?",
    ta: "வணக்கம்! நான் உங்கள் AI விவசாய உதவியாளர். வானிலை முன்னறிவிப்புகள், பயிர் பராமரிப்பு, பூச்சி கட்டுப்பாடு, உரங்கள் மற்றும் அரசாங்க மானியங்கள் குறித்து நான் உங்களுக்கு உதவ முடியும். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    te: "నమస్కారం! నేను మీ AI వ్యవసాయ సహాయకుడిని. వాతావరణ అంచనాలు, పంట సంరక్షణ, చీడ నియంత్రణ, ఎరువులు మరియు ప్రభుత్వ సబ్సిడీలతో నేను మీకు సహాయం చేయగలను. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    bn: "হ্যালো! আমি আপনার AI কৃষি সহায়ক। আমি আবহাওয়া পূর্বাভাস, ফসলের যত্ন, কীটপতঙ্গ নিয়ন্ত্রণ, সার এবং সরকারি ভর্তুকি সম্পর্কে আপনাকে সাহায্য করতে পারি। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
  };
  return welcomeMessages[lang] || welcomeMessages.en;
}
