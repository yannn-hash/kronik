import { type Civilization } from "@/types/history";

export const CIVILIZATIONS: Civilization[] = [
  {
    id: "mesir-kuno",
    name: {
      id: "Kekaisaran Mesir Kuno (Kerajaan Baru)",
      en: "Ancient Egyptian Empire (New Kingdom)"
    },
    era: "ancient",
    yearPeak: {
      id: "c. 1450 SM (Masa Thutmose III & Ramses II)",
      en: "c. 1450 BCE (Reign of Thutmose III & Ramesses II)"
    },
    color: "#0ea5e9", // Sky Blue
    capital: {
      name: { id: "Thebes (Luxor), Mesir", en: "Thebes (Luxor), Egypt" },
      lat: 25.6872,
      lng: 32.6396
    },
    summary: {
      id: "Imperium zaman keemasan firaun di sepanjang Lembah Nil dari Delta Mediterania hingga Nubia dan pesisir Levant.",
      en: "The golden age imperial zenith along the Nile Valley from the Mediterranean Delta to Nubia and the Levant."
    },
    boundaries: [
      [
        [31.8, 30.0],
        [33.5, 35.5],
        [34.5, 36.2],
        [31.0, 35.0],
        [28.0, 34.5],
        [22.0, 33.0],
        [18.5, 32.0],
        [19.0, 30.5],
        [24.0, 31.5],
        [30.0, 29.5],
        [31.8, 30.0]
      ]
    ]
  },
  {
    id: "kekaisaran-persia-akhemeniyah",
    name: {
      id: "Kekaisaran Akhemeniyah Persia",
      en: "Achaemenid Persian Empire"
    },
    era: "ancient",
    yearPeak: {
      id: "c. 500 SM (Masa Darius I & Koresh Agung)",
      en: "c. 500 BCE (Peak under Darius I & Cyrus the Great)"
    },
    color: "#ec4899", // Rose Pink
    capital: {
      name: { id: "Persepolis, Iran", en: "Persepolis, Iran" },
      lat: 29.9357,
      lng: 52.8897
    },
    summary: {
      id: "Kekaisaran terbesar era kuno yang membentang dari Lembah Indus di timur hingga Thrace, Mesir, dan Aegea di barat.",
      en: "The largest ancient empire spanning from the Indus Valley in the east to Thrace, Egypt, and the Aegean in the west."
    },
    boundaries: [
      [
        [41.5, 26.5],
        [42.0, 40.0],
        [43.0, 50.0],
        [42.0, 65.0],
        [37.0, 72.0],
        [25.0, 68.0],
        [24.0, 58.0],
        [29.0, 48.0],
        [28.0, 34.0],
        [31.5, 31.0],
        [36.0, 35.5],
        [38.5, 27.0],
        [41.5, 26.5]
      ]
    ]
  },
  {
    id: "kekaisaran-romawi",
    name: {
      id: "Kekaisaran Romawi (Puncak Wilayah)",
      en: "Roman Empire (Peak Extent)"
    },
    era: "classical",
    yearPeak: {
      id: "117 M (Masa Kaisar Trajan)",
      en: "117 CE (Under Emperor Trajan)"
    },
    color: "#ef4444", // Imperial Red
    capital: {
      name: { id: "Roma, Italia", en: "Rome, Italy" },
      lat: 41.9028,
      lng: 12.4964
    },
    summary: {
      id: "Kekaisaran adidaya Mediterania yang mencakup seluruh Eropa Barat dan Selatan, Timur Tengah, serta Afrika Utara.",
      en: "The Mediterranean superpower encompassing all of Western & Southern Europe, the Levant, and North Africa."
    },
    boundaries: [
      [
        [55.0, -3.0],
        [53.5, 6.0],
        [50.0, 8.0],
        [48.0, 16.0],
        [46.5, 28.0],
        [42.0, 42.0],
        [36.5, 43.0],
        [33.0, 36.0],
        [31.0, 32.5],
        [30.0, 31.0],
        [32.0, 20.0],
        [33.5, 10.0],
        [35.0, -1.0],
        [36.0, -6.0],
        [43.5, -9.0],
        [49.0, -1.5],
        [55.0, -3.0]
      ]
    ]
  },
  {
    id: "dinasti-han-tang",
    name: {
      id: "Kekaisaran Tiongkok Kuno (Han & Tang)",
      en: "Ancient Chinese Empire (Han & Tang)"
    },
    era: "classical",
    yearPeak: {
      id: "c. 100 SM – 750 M (Jalur Sutra & Chang'an)",
      en: "c. 100 BCE – 750 CE (Silk Road & Chang'an)"
    },
    color: "#f97316", // Imperial Orange
    capital: {
      name: { id: "Chang'an (Xi'an), Tiongkok", en: "Chang'an (Xi'an), China" },
      lat: 34.3416,
      lng: 108.9398
    },
    summary: {
      id: "Peradaban agung Tiongkok yang memadukan birokrasi Konfusianisme, penemuan kertas, dan jalur dagang lintas benua.",
      en: "The grand Chinese civilization combining Confucian bureaucracy, paper-making, and the transcontinental Silk Road."
    },
    boundaries: [
      [
        [41.0, 118.0],
        [40.0, 95.0],
        [43.0, 80.0],
        [39.0, 75.0],
        [35.0, 85.0],
        [28.0, 100.0],
        [22.0, 106.0],
        [22.0, 114.0],
        [30.0, 122.0],
        [38.0, 120.0],
        [41.0, 118.0]
      ]
    ]
  },
  {
    id: "kekaisaran-maurya-gupta",
    name: {
      id: "Kekaisaran Maurya & Gupta (India)",
      en: "Mauryan & Gupta Empires (India)"
    },
    era: "classical",
    yearPeak: {
      id: "c. 250 SM – 400 M (Ashoka & Chandragupta II)",
      en: "c. 250 BCE – 400 CE (Ashoka & Chandragupta II)"
    },
    color: "#8b5cf6", // Royal Purple
    capital: {
      name: { id: "Pataliputra (Patna), India", en: "Pataliputra (Patna), India" },
      lat: 25.61,
      lng: 85.1414
    },
    summary: {
      id: "Kekaisaran India kuno yang menyatukan anak benua di bawah panji Dharma Ashoka dan zaman keemasan sains-matematika Gupta.",
      en: "Ancient Indian empire uniting the subcontinent under Ashoka's Edicts and Gupta's golden age of mathematics and science."
    },
    boundaries: [
      [
        [34.0, 71.0],
        [32.0, 78.0],
        [28.0, 88.0],
        [26.0, 92.0],
        [21.5, 87.0],
        [15.0, 80.0],
        [10.0, 78.5],
        [12.0, 75.0],
        [19.0, 73.0],
        [24.0, 68.5],
        [30.0, 67.0],
        [34.0, 71.0]
      ]
    ]
  },
  {
    id: "peradaban-maya",
    name: {
      id: "Peradaban Maya Klasik",
      en: "Classic Maya Civilization"
    },
    era: "classical",
    yearPeak: {
      id: "c. 250 – 900 M (Era Kota Tikal, Calakmul & Palenque)",
      en: "c. 250 – 900 CE (Era of Tikal, Calakmul & Palenque)"
    },
    color: "#14b8a6", // Jade Teal
    capital: {
      name: { id: "Tikal, Guatemala", en: "Tikal, Guatemala" },
      lat: 17.222,
      lng: -89.6237
    },
    summary: {
      id: "Peradaban astronomi, kalender presisi, dan arsitektur piramida bertingkat di hutan tropis Mesoamerika.",
      en: "Mesoamerican civilization renowned for astronomy, intricate calendars, and monumental step pyramids."
    },
    boundaries: [
      [
        [21.5, -90.5],
        [21.5, -87.0],
        [18.5, -87.5],
        [15.5, -88.0],
        [14.5, -91.0],
        [16.0, -93.5],
        [18.5, -93.0],
        [21.5, -90.5]
      ]
    ]
  },
  {
    id: "kekaisaran-bizantium",
    name: {
      id: "Kekaisaran Romawi Timur (Bizantium)",
      en: "Byzantine Empire (Eastern Rome)"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 555 M (Masa Kaisar Yustinianus I)",
      en: "c. 555 CE (Under Emperor Justinian I)"
    },
    color: "#6366f1", // Byzantine Indigo
    capital: {
      name: { id: "Konstantinopel (Istanbul), Turki", en: "Constantinople (Istanbul), Turkey" },
      lat: 41.0082,
      lng: 28.9784
    },
    summary: {
      id: "Penerus Romawi Kristen di Timur yang membangun katedral mahakarya Hagia Sophia dan kodifikasi hukum sipil.",
      en: "The Christian continuation of the Roman Empire, famed for Hagia Sophia and Roman civil law codification."
    },
    boundaries: [
      [
        [46.0, 13.0],
        [44.0, 20.0],
        [42.0, 28.0],
        [41.5, 41.0],
        [37.0, 42.0],
        [33.5, 36.0],
        [31.0, 33.0],
        [32.0, 24.0],
        [36.0, 11.0],
        [37.0, -2.0],
        [41.0, 14.0],
        [45.5, 12.0],
        [46.0, 13.0]
      ]
    ]
  },
  {
    id: "kekhalifahan-islam",
    name: {
      id: "Kekhalifahan Islam (Umayyah & Abbasiyah)",
      en: "Islamic Caliphates (Umayyad & Abbasid)"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 750 – 850 M (Dari Andalusia hingga Lembah Indus)",
      en: "c. 750 – 850 CE (From Andalusia to the Indus Valley)"
    },
    color: "#10b981", // Emerald Green
    capital: {
      name: { id: "Baghdad, Irak (Sebelumnya Damaskus)", en: "Baghdad, Iraq (Earlier Damascus)" },
      lat: 33.3152,
      lng: 44.3661
    },
    summary: {
      id: "Kekhalifahan raksasa yang menyatukan rute perdagangan global dan memicu Zaman Keemasan sains dan filsafat.",
      en: "The vast caliphate that unified Afro-Eurasian trade and sparked the Islamic Golden Age of science and scholarship."
    },
    boundaries: [
      [
        [41.5, -4.0],
        [37.0, 3.0],
        [34.0, 25.0],
        [36.0, 36.0],
        [39.0, 48.0],
        [42.0, 60.0],
        [38.0, 70.0],
        [30.0, 72.0],
        [24.0, 68.0],
        [15.0, 52.0],
        [13.0, 45.0],
        [22.0, 38.0],
        [30.0, 30.0],
        [28.0, 10.0],
        [30.0, -8.0],
        [36.0, -9.0],
        [41.5, -4.0]
      ]
    ]
  },
  {
    id: "kedatuan-sriwijaya",
    name: {
      id: "Kedatuan Sriwijaya",
      en: "Srivijaya Maritime Empire"
    },
    era: "medieval",
    yearPeak: {
      id: "c. Abad ke-8 – 11 M (Penguasa Selat Malaka)",
      en: "c. 8th – 11th Century CE (Lords of Malacca Strait)"
    },
    color: "#f59e0b", // Maritime Amber
    capital: {
      name: { id: "Palembang, Sumatra, Indonesia", en: "Palembang, Sumatra, Indonesia" },
      lat: -2.9761,
      lng: 104.7754
    },
    summary: {
      id: "Imperium thalassokrasi maritim terbesar Asia Tenggara yang mengontrol jalur perdagangan maritim Jalur Sutra dan pusat studi Buddha.",
      en: "Southeast Asia's premier thalassocracy controlling maritime Silk Road trade and Buddhist scholarship."
    },
    boundaries: [
      [
        [10.0, 99.0],
        [7.0, 102.0],
        [3.0, 104.0],
        [1.5, 105.0],
        [-2.0, 106.5],
        [-6.5, 106.0],
        [-7.0, 104.5],
        [-4.5, 102.0],
        [0.0, 98.5],
        [5.5, 95.0],
        [9.0, 98.0],
        [10.0, 99.0]
      ]
    ]
  },
  {
    id: "kekaisaran-mongol",
    name: {
      id: "Kekaisaran Mongol (Pax Mongolica)",
      en: "Mongol Empire (Pax Mongolica)"
    },
    era: "medieval",
    yearPeak: {
      id: "1279 M (Masa Kubilai Khan & Jenghis Khan)",
      en: "1279 CE (Reign of Kublai Khan & Genghis Khan)"
    },
    color: "#eab308", // Golden Yellow
    capital: {
      name: { id: "Karakorum (Kemudian Khanbaliq/Beijing)", en: "Karakorum (Later Khanbaliq/Beijing)" },
      lat: 47.1978,
      lng: 102.8428
    },
    summary: {
      id: "Kekaisaran daratan bersambung terbesar dalam sejarah yang menghubungkan Eropa Timur hingga Samudra Pasifik.",
      en: "The largest contiguous land empire in human history, stretching from Eastern Europe to the Pacific Ocean."
    },
    boundaries: [
      [
        [55.0, 30.0],
        [57.0, 60.0],
        [56.0, 100.0],
        [52.0, 130.0],
        [40.0, 125.0],
        [25.0, 118.0],
        [22.0, 105.0],
        [30.0, 85.0],
        [32.0, 55.0],
        [33.0, 44.0],
        [38.0, 35.0],
        [47.0, 28.0],
        [52.0, 22.0],
        [55.0, 30.0]
      ]
    ]
  },
  {
    id: "kemaharajaan-majapahit",
    name: {
      id: "Kemaharajaan Majapahit",
      en: "Majapahit Maritime Empire"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 1350 – 1389 M (Hayam Wuruk & Mahapatih Gajah Mada)",
      en: "c. 1350 – 1389 CE (Hayam Wuruk & Gajah Mada)"
    },
    color: "#dc2626", // Surya Majapahit Red
    capital: {
      name: { id: "Trowulan, Jawa Timur, Indonesia", en: "Trowulan, East Java, Indonesia" },
      lat: -7.5583,
      lng: 112.3833
    },
    summary: {
      id: "Imperium maritim agung Nusantara yang menyatukan kepulauan di bawah wawasan persatuan Sumpah Palapa.",
      en: "The majestic Indonesian maritime empire that unified the archipelago under Gajah Mada's Palapa Oath."
    },
    boundaries: [
      [
        [5.0, 97.0],
        [5.0, 103.0],
        [4.5, 115.0],
        [3.0, 120.0],
        [1.0, 128.0],
        [-3.0, 131.0],
        [-8.5, 125.0],
        [-9.0, 115.0],
        [-8.5, 108.0],
        [-6.5, 104.0],
        [-1.0, 100.0],
        [5.0, 97.0]
      ]
    ]
  },
  {
    id: "kekaisaran-mali",
    name: {
      id: "Kekaisaran Mali",
      en: "Mali Empire"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 1324 M (Masa Kaisar Mansa Musa)",
      en: "c. 1324 CE (Reign of Mansa Musa)"
    },
    color: "#84cc16", // Sahara Lime
    capital: {
      name: { id: "Niani, Afrika Barat", en: "Niani, West Africa" },
      lat: 11.38,
      lng: -8.38
    },
    summary: {
      id: "Kekaisaran kaya raya emas dan garam di Afrika Barat yang menjadikan Timbuktu sebagai pusat universitas dan literatur Islam.",
      en: "The fabulously wealthy gold and salt empire of West Africa that established Timbuktu as a global hub of Islamic learning."
    },
    boundaries: [
      [
        [20.0, -2.0],
        [18.0, 4.0],
        [14.0, 3.0],
        [10.0, -5.0],
        [10.5, -12.0],
        [14.0, -17.0],
        [17.0, -16.0],
        [20.0, -8.0],
        [20.0, -2.0]
      ]
    ]
  },
  {
    id: "kekaisaran-aztec",
    name: {
      id: "Kekaisaran Aztec (Tiga Aliansi)",
      en: "Aztec Empire (Triple Alliance)"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 1519 M (Masa Moctezuma II)",
      en: "c. 1519 CE (Reign of Moctezuma II)"
    },
    color: "#06b6d4", // Cyan Turquoise
    capital: {
      name: { id: "Tenochtitlan (Mexico City), Meksiko", en: "Tenochtitlan (Mexico City), Mexico" },
      lat: 19.4326,
      lng: -99.1332
    },
    summary: {
      id: "Konfederasi militer Mesoamerika dengan sistem pertanian terapung chinampa dan ibu kota megah di atas Danau Texcoco.",
      en: "Mesoamerican military confederation famed for chinampa agriculture and its floating capital on Lake Texcoco."
    },
    boundaries: [
      [
        [21.0, -100.5],
        [21.0, -97.0],
        [18.5, -95.0],
        [16.0, -96.0],
        [16.0, -99.5],
        [18.0, -103.0],
        [20.0, -102.5],
        [21.0, -100.5]
      ]
    ]
  },
  {
    id: "kekaisaran-inca",
    name: {
      id: "Kekaisaran Inca (Tawantinsuyu)",
      en: "Inca Empire (Tawantinsuyu)"
    },
    era: "medieval",
    yearPeak: {
      id: "c. 1500 M (Masa Huayna Capac & Pachacuti)",
      en: "c. 1500 CE (Reign of Huayna Capac & Pachacuti)"
    },
    color: "#d97706", // Andean Gold
    capital: {
      name: { id: "Cusco, Peru", en: "Cusco, Peru" },
      lat: -13.5226,
      lng: -71.9673
    },
    summary: {
      id: "Imperium batu pegunungan Andes yang terhubung oleh jaringan jalan raya Qhapaq Ñan sepanjang 40.000 km.",
      en: "The Andean mountain empire interconnected by the 40,000-kilometer Qhapaq Ñan road network."
    },
    boundaries: [
      [
        [1.5, -78.5],
        [-0.5, -76.0],
        [-8.0, -74.0],
        [-15.0, -68.0],
        [-22.0, -65.0],
        [-34.0, -70.0],
        [-34.0, -72.0],
        [-24.0, -70.5],
        [-15.0, -75.5],
        [-5.0, -81.0],
        [1.5, -78.5]
      ]
    ]
  },
  {
    id: "kekaisaran-utsmaniyah",
    name: {
      id: "Kekaisaran Utsmaniyah (Ottoman)",
      en: "Ottoman Empire"
    },
    era: "early-modern",
    yearPeak: {
      id: "1683 M (Pengepungan Wina & Suleiman)",
      en: "1683 CE (Siege of Vienna & Suleiman the Magnificent)"
    },
    color: "#059669", // Ottoman Green
    capital: {
      name: { id: "Istanbul (Konstantinopel), Turki", en: "Istanbul (Constantinople), Turkey" },
      lat: 41.0082,
      lng: 28.9784
    },
    summary: {
      id: "Imperium lintas tiga benua yang menguasai jalur perdagangan antara Eropa, Timur Tengah, dan Afrika Utara.",
      en: "Transcontinental empire bridging Europe, the Middle East, and North Africa at the crossroads of global trade."
    },
    boundaries: [
      [
        [48.0, 16.5],
        [48.5, 25.0],
        [46.5, 36.0],
        [42.0, 45.0],
        [37.0, 48.0],
        [30.0, 48.0],
        [28.0, 35.0],
        [22.0, 38.0],
        [22.0, 31.0],
        [31.0, 25.0],
        [33.0, 10.0],
        [36.0, 2.0],
        [38.0, 15.0],
        [40.0, 20.0],
        [45.0, 15.0],
        [48.0, 16.5]
      ]
    ]
  }
];
