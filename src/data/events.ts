import { type HistoricalEvent } from "@/types/history";

export const HISTORICAL_EVENTS: HistoricalEvent[] = ([
  {
    id: "mesir-kuno-giza",
    slug: { id: "peradaban-mesir-kuno", en: "ancient-egypt" },
    title: { id: "Pembangunan Piramida Giza", en: "Construction of Giza Pyramids" },
    summary: { 
      id: "Puncak arsitektur Kerajaan Lama Mesir. Piramida Agung dibangun sebagai makam Firaun Khufu.", 
      en: "The architectural pinnacle of the Egyptian Old Kingdom. The Great Pyramid was built as a tomb for Pharaoh Khufu." 
    },
    year: -2580,
    era: "ancient",
    location: {
      name: { id: "Giza, Mesir", en: "Giza, Egypt" },
      lat: 29.9792,
      lng: 31.1342,
    },
    image: "/images/events/mesir-kuno-giza.jpg",
    confidence: "verified",
    references: [
      {
        author: "Ian Shaw",
        title: "The Oxford History of Ancient Egypt",
        publisher: "Oxford University Press",
        year: 2003,
      },
      {
        author: "Mark Lehner",
        title: "The Complete Pyramids",
        publisher: "Thames & Hudson",
        year: 2008,
        url: "https://archive.org/details/completepyramids0000lehn",
      }
    ],
    tags: ["arsitektur", "mesir", "kuno"],
  },
  {
    id: "mesopotamia-uruk",
    slug: { id: "peradaban-mesopotamia", en: "mesopotamian-civilization" },
    title: { id: "Kebangkitan Uruk", en: "Rise of Uruk" },
    summary: {
      id: "Salah satu kota pertama di dunia, pusat peradaban Sumeria di Mesopotamia, tempat lahirnya tulisan paku (Cuneiform).",
      en: "One of the world's first cities, the center of Sumerian civilization in Mesopotamia, birthplace of Cuneiform writing."
    },
    year: -3200,
    era: "ancient",
    location: {
      name: { id: "Uruk (Irak Modern)", en: "Uruk (Modern Iraq)" },
      lat: 31.3222,
      lng: 45.6258,
    },
    confidence: "verified",
    references: [],
    tags: ["kota", "sumeria", "tulisan"],
  },
  {
    id: "yunani-kuno-athena",
    slug: { id: "kejayaan-yunani-kuno", en: "ancient-greece" },
    title: { id: "Zaman Keemasan Athena", en: "Golden Age of Athens" },
    summary: {
      id: "Masa di mana demokrasi, filsafat, dan seni Yunani berkembang pesat di bawah kepemimpinan Perikles.",
      en: "A period where Greek democracy, philosophy, and art flourished under the leadership of Pericles."
    },
    year: -448,
    era: "classical",
    location: {
      name: { id: "Athena, Yunani", en: "Athens, Greece" },
      lat: 37.9838,
      lng: 23.7275,
    },
    image: "/images/events/yunani-kuno-athena.jpg",
    confidence: "verified",
    references: [],
    tags: ["demokrasi", "filsafat", "eropa"],
  },
  {
    id: "kekaisaran-romawi",
    slug: { id: "kekaisaran-romawi", en: "roman-empire" },
    title: { id: "Pendirian Kekaisaran Romawi", en: "Founding of the Roman Empire" },
    summary: {
      id: "Augustus Caesar menjadi Kaisar pertama, menandai akhir dari Republik Romawi dan dimulainya Pax Romana.",
      en: "Augustus Caesar becomes the first Emperor, marking the end of the Roman Republic and the beginning of the Pax Romana."
    },
    year: -27,
    era: "classical",
    location: {
      name: { id: "Roma, Italia", en: "Rome, Italy" },
      lat: 41.8902,
      lng: 12.4922,
    },
    image: "/images/events/kekaisaran-romawi.jpg",
    confidence: "verified",
    references: [],
    tags: ["politik", "eropa", "imperium"],
  },
  {
    id: "islam-awal",
    slug: { id: "kelahiran-islam", en: "birth-of-islam" },
    title: { id: "Kelahiran Islam & Hijrah", en: "Birth of Islam & Hijrah" },
    summary: {
      id: "Nabi Muhammad memimpin umat Muslim dari Makkah ke Madinah, menandai tahun pertama dalam kalender Hijriah.",
      en: "Prophet Muhammad led the Muslims from Mecca to Medina, marking the first year in the Hijri calendar."
    },
    year: 622,
    era: "medieval",
    location: {
      name: { id: "Makkah & Madinah, Arab Saudi", en: "Mecca & Medina, Saudi Arabia" },
      lat: 24.4672,
      lng: 39.6112,
    },
    image: "/images/events/islam-awal.jpg",
    confidence: "verified",
    references: [],
    tags: ["agama", "timur-tengah"],
  },
  {
    id: "mongol-empire",
    slug: { id: "kekaisaran-mongol", en: "mongol-empire" },
    title: { id: "Ekspansi Kekaisaran Mongol", en: "Mongol Empire Expansion" },
    summary: {
      id: "Genghis Khan menyatukan suku-suku stepa dan memulai penaklukan besar-besaran melintasi Asia dan Eropa.",
      en: "Genghis Khan united the steppe tribes and launched massive conquests across Asia and Europe."
    },
    year: 1206,
    era: "medieval",
    location: {
      name: { id: "Karakorum, Mongolia", en: "Karakorum, Mongolia" },
      lat: 47.1983,
      lng: 102.8238,
    },
    image: "/images/events/mongol-empire.jpg",
    confidence: "verified",
    references: [],
    tags: ["militer", "asia"],
  },
  {
    id: "renaisans",
    slug: { id: "renaisans-eropa", en: "european-renaissance" },
    title: { id: "Puncak Renaisans", en: "High Renaissance" },
    summary: {
      id: "Zaman kebangkitan kembali seni, sains, dan budaya klasik yang berpusat di Florence.",
      en: "A period of revival of classical art, science, and culture centered in Florence."
    },
    year: 1490,
    era: "medieval",
    location: {
      name: { id: "Florence, Italia", en: "Florence, Italy" },
      lat: 43.7695,
      lng: 11.2558,
    },
    image: "/images/events/renaisans.jpg",
    confidence: "verified",
    references: [],
    tags: ["seni", "budaya", "eropa"],
  },
  {
    id: "penjelajahan-columbus",
    slug: { id: "penjelajahan-columbus", en: "columbus-exploration" },
    title: { id: "Pelayaran Columbus", en: "Columbus Voyages" },
    summary: {
      id: "Christopher Columbus tiba di benua Amerika, membuka era eksplorasi dan kolonisasi Eropa secara global.",
      en: "Christopher Columbus arrived in the Americas, opening an era of European global exploration and colonization."
    },
    year: 1492,
    era: "medieval",
    location: {
      name: { id: "Kepulauan Bahama", en: "Bahamas" },
      lat: 24.0,
      lng: -74.0,
    },
    image: "/images/events/penjelajahan-columbus.jpg",
    confidence: "verified",
    references: [],
    tags: ["eksplorasi", "amerika"],
  },
  {
    id: "revolusi-industri",
    slug: { id: "revolusi-industri", en: "industrial-revolution" },
    title: { id: "Awal Revolusi Industri", en: "Dawn of the Industrial Revolution" },
    summary: {
      id: "Transisi menuju proses manufaktur baru dengan ditemukannya mesin uap, mengubah drastis ekonomi dan masyarakat dunia.",
      en: "The transition to new manufacturing processes with the invention of the steam engine, drastically changing global economy and society."
    },
    year: 1760,
    era: "early-modern",
    location: {
      name: { id: "Manchester, Inggris", en: "Manchester, England" },
      lat: 53.4808,
      lng: -2.2426,
    },
    image: "/images/events/revolusi-industri.jpg",
    confidence: "verified",
    references: [],
    tags: ["teknologi", "ekonomi", "eropa"],
  },
  {
    id: "revolusi-prancis",
    slug: { id: "revolusi-prancis", en: "french-revolution" },
    title: { id: "Revolusi Prancis", en: "French Revolution" },
    summary: {
      id: "Runtuhnya monarki absolut Prancis (Penyerbuan Bastille), menginspirasi gerakan demokrasi modern di seluruh dunia.",
      en: "The collapse of the French absolute monarchy (Storming of the Bastille), inspiring modern democratic movements worldwide."
    },
    year: 1789,
    era: "early-modern",
    location: {
      name: { id: "Paris, Prancis", en: "Paris, France" },
      lat: 48.8566,
      lng: 2.3522,
    },
    image: "/images/events/revolusi-prancis.jpg",
    confidence: "verified",
    references: [
      {
        author: "William Doyle",
        title: "The Oxford History of the French Revolution",
        publisher: "Oxford University Press",
        year: 2002,
      }
    ],
    tags: ["politik", "revolusi", "eropa"],
  },
  {
    id: "kemerdekaan-indonesia",
    slug: { id: "kemerdekaan-indonesia", en: "indonesian-independence" },
    title: { id: "Proklamasi Kemerdekaan Indonesia", en: "Proclamation of Indonesian Independence" },
    summary: {
      id: "Soekarno dan Hatta memproklamasikan kemerdekaan Indonesia dari penjajahan Belanda dan Jepang.",
      en: "Sukarno and Hatta proclaimed Indonesia's independence from Dutch and Japanese colonial rule."
    },
    year: 1945,
    era: "modern",
    location: {
      name: { id: "Jakarta, Indonesia", en: "Jakarta, Indonesia" },
      lat: -6.2088,
      lng: 106.8456,
    },
    image: "/images/events/kemerdekaan-indonesia.jpg",
    confidence: "verified",
    references: [],
    tags: ["kemerdekaan", "asia", "politik"],
  },
  {
    id: "runtuhnya-tembok-berlin",
    slug: { id: "runtuhnya-tembok-berlin", en: "fall-of-berlin-wall" },
    title: { id: "Runtuhnya Tembok Berlin", en: "Fall of the Berlin Wall" },
    summary: {
      id: "Peristiwa simbolis yang menandai berakhirnya Perang Dingin dan menyatukan kembali Jerman.",
      en: "A symbolic event marking the end of the Cold War and the reunification of Germany."
    },
    year: 1989,
    era: "modern",
    location: {
      name: { id: "Berlin, Jerman", en: "Berlin, Germany" },
      lat: 52.52,
      lng: 13.405,
    },
    image: "/images/events/runtuhnya-tembok-berlin.jpg",
    confidence: "verified",
    references: [],
    tags: ["politik", "perang-dingin", "eropa"],
  }
,
  {
    id: "lembah-indus",
    slug: { id: "peradaban-lembah-indus", en: "indus-valley-civilization" },
    title: { id: "Peradaban Lembah Indus", en: "Indus Valley Civilization" },
    summary: { id: "Salah satu peradaban awal terbesar dengan tata kota paling maju di zamannya (Mohenjo-Daro & Harappa).", en: "One of the largest early civilizations with the most advanced city planning of its time (Mohenjo-Daro & Harappa)." },
    year: -2500,
    era: "ancient",
    location: { name: { id: "Mohenjo-Daro, Pakistan", en: "Mohenjo-Daro, Pakistan" }, lat: 27.3292, lng: 68.1388 },
    image: "/images/events/lembah-indus.jpg",
    confidence: "verified",
    references: [],
    tags: ["kota","asia","kuno"]
  },
  {
    id: "dinasti-shang",
    slug: { id: "dinasti-shang", en: "shang-dynasty" },
    title: { id: "Dinasti Shang", en: "Shang Dynasty" },
    summary: { id: "Dinasti pertama Tiongkok yang tercatat dalam sejarah, terkenal dengan kerajinan perunggu dan tulisan tulang ramalan.", en: "The first historically recorded dynasty of China, famous for bronze work and oracle bone script." },
    year: -1600,
    era: "ancient",
    location: { name: { id: "Anyang, Tiongkok", en: "Anyang, China" }, lat: 36.1, lng: 114.3333 },
    image: "/images/events/dinasti-shang.jpg",
    confidence: "verified",
    references: [],
    tags: ["asia","kuno","budaya"]
  },
  {
    id: "kekaisaran-maurya",
    slug: { id: "kekaisaran-maurya", en: "mauryan-empire" },
    title: { id: "Kekaisaran Maurya (Ashoka)", en: "Mauryan Empire (Ashoka)" },
    summary: { id: "Kekaisaran India kuno yang menyatukan hampir seluruh anak benua di bawah pimpinan Kaisar Ashoka yang memeluk Buddha.", en: "Ancient Indian empire that united most of the subcontinent under Emperor Ashoka, who embraced Buddhism." },
    year: -250,
    era: "classical",
    location: { name: { id: "Pataliputra, India", en: "Pataliputra, India" }, lat: 25.61, lng: 85.1414 },
    image: "/images/events/kekaisaran-maurya.jpg",
    confidence: "verified",
    references: [],
    tags: ["politik","agama","asia"]
  },
  {
    id: "islamic-golden-age",
    slug: { id: "masa-keemasan-islam", en: "islamic-golden-age" },
    title: { id: "Masa Keemasan Islam", en: "Islamic Golden Age" },
    summary: { id: "Era pencapaian ilmiah, budaya, dan ekonomi yang luar biasa berpusat di Rumah Kebijaksanaan (House of Wisdom) Baghdad.", en: "Era of immense scientific, cultural, and economic achievements centered around the House of Wisdom in Baghdad." },
    year: 800,
    era: "medieval",
    location: { name: { id: "Baghdad, Irak", en: "Baghdad, Iraq" }, lat: 33.3152, lng: 44.3661 },
    image: "/images/events/islamic-golden-age.jpg",
    confidence: "verified",
    references: [],
    tags: ["sains","budaya","timur-tengah"]
  },
  {
    id: "kekaisaran-aztec",
    slug: { id: "kekaisaran-aztec", en: "aztec-empire" },
    title: { id: "Puncak Kekaisaran Aztec", en: "Peak of the Aztec Empire" },
    summary: { id: "Peradaban Mesoamerika yang membangun ibu kota megah Tenochtitlan di atas danau Texcoco.", en: "Mesoamerican civilization that built the magnificent capital Tenochtitlan on Lake Texcoco." },
    year: 1428,
    era: "medieval",
    location: { name: { id: "Tenochtitlan, Meksiko", en: "Tenochtitlan, Mexico" }, lat: 19.4326, lng: -99.1332 },
    image: "/images/events/kekaisaran-aztec.jpg",
    confidence: "verified",
    references: [],
    tags: ["amerika","kota","budaya"]
  },
  {
    id: "kekaisaran-inca",
    slug: { id: "kekaisaran-inca", en: "inca-empire" },
    title: { id: "Kekaisaran Inca", en: "Inca Empire" },
    summary: { id: "Kekaisaran terbesar di Amerika pra-Columbus, terkenal dengan arsitektur batu monumental seperti Machu Picchu.", en: "The largest empire in pre-Columbian America, known for monumental stone architecture like Machu Picchu." },
    year: 1438,
    era: "medieval",
    location: { name: { id: "Cusco, Peru", en: "Cusco, Peru" }, lat: -13.5226, lng: -71.9673 },
    image: "/images/events/kekaisaran-inca.jpg",
    confidence: "verified",
    references: [],
    tags: ["amerika","arsitektur"]
  },
  {
    id: "pelayaran-zheng-he",
    slug: { id: "pelayaran-zheng-he", en: "zheng-he-voyages" },
    title: { id: "Armada Harta Zheng He", en: "Zheng He's Treasure Fleet" },
    summary: { id: "Laksamana Cheng Ho dari Dinasti Ming memimpin armada raksasa mengarungi Samudra Hindia, membangun relasi diplomatik dan dagang.", en: "Admiral Zheng He of the Ming Dynasty led massive fleets across the Indian Ocean, establishing trade and diplomacy." },
    year: 1405,
    era: "medieval",
    location: { name: { id: "Nanjing, Tiongkok", en: "Nanjing, China" }, lat: 32.0603, lng: 118.7969 },
    image: "/images/events/pelayaran-zheng-he.jpg",
    confidence: "verified",
    references: [],
    tags: ["eksplorasi","asia","ekonomi"]
  },
  {
    id: "perang-dunia-1",
    slug: { id: "perang-dunia-1", en: "world-war-1" },
    title: { id: "Perang Dunia I", en: "World War I" },
    summary: { id: "Pembunuhan Archduke Franz Ferdinand memicu salah satu konflik global paling mematikan dalam sejarah (The Great War).", en: "The assassination of Archduke Franz Ferdinand sparked one of the deadliest global conflicts in history (The Great War)." },
    year: 1914,
    era: "modern",
    location: { name: { id: "Sarajevo, Bosnia", en: "Sarajevo, Bosnia" }, lat: 43.8563, lng: 18.4131 },
    image: "/images/events/perang-dunia-1.jpg",
    confidence: "verified",
    references: [],
    tags: ["perang","eropa","politik"]
  },
  {
    id: "perang-dunia-2",
    slug: { id: "perang-dunia-2", en: "world-war-2" },
    title: { id: "Perang Dunia II", en: "World War II" },
    summary: { id: "Konflik paling merusak dalam sejarah umat manusia yang berakhir dengan penjatuhan bom atom pertama.", en: "The most destructive conflict in human history, ending with the dropping of the first atomic bombs." },
    year: 1939,
    era: "modern",
    location: { name: { id: "Berlin, Jerman", en: "Berlin, Germany" }, lat: 52.52, lng: 13.405 },
    image: "/images/events/perang-dunia-2.jpg",
    confidence: "verified",
    references: [],
    tags: ["perang","global"]
  },
  {
    id: "apollo-11",
    slug: { id: "pendaratan-bulan", en: "moon-landing" },
    title: { id: "Pendaratan Manusia di Bulan", en: "Moon Landing" },
    summary: { id: "Misi Apollo 11 berhasil mendaratkan manusia (Neil Armstrong & Buzz Aldrin) di permukaan bulan untuk pertama kalinya.", en: "Apollo 11 mission successfully landed humans (Neil Armstrong & Buzz Aldrin) on the lunar surface for the first time." },
    year: 1969,
    era: "modern",
    location: { name: { id: "Bulan (Peluncuran: Florida, AS)", en: "Moon (Launch: Florida, USA)" }, lat: 28.5721, lng: -80.648 },
    image: "/images/events/apollo-11.jpg",
    confidence: "verified",
    references: [],
    tags: ["sains","teknologi","eksplorasi"]
  }
] as HistoricalEvent[]).sort((a, b) => a.year - b.year);