import { type HistoricalEvent } from "@/types/history";

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    id: "mesir-kuno-giza",
    slug: "peradaban-mesir-kuno",
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
    slug: "peradaban-mesopotamia",
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
    slug: "kejayaan-yunani-kuno",
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
    confidence: "verified",
    references: [],
    tags: ["demokrasi", "filsafat", "eropa"],
  },
  {
    id: "kekaisaran-romawi",
    slug: "kekaisaran-romawi",
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
    confidence: "verified",
    references: [],
    tags: ["politik", "eropa", "imperium"],
  },
  {
    id: "islam-awal",
    slug: "kelahiran-islam",
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
    confidence: "verified",
    references: [],
    tags: ["agama", "timur-tengah"],
  },
  {
    id: "mongol-empire",
    slug: "kekaisaran-mongol",
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
    confidence: "verified",
    references: [],
    tags: ["militer", "asia"],
  },
  {
    id: "renaisans",
    slug: "renaisans-eropa",
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
    confidence: "verified",
    references: [],
    tags: ["seni", "budaya", "eropa"],
  },
  {
    id: "penjelajahan-columbus",
    slug: "penjelajahan-columbus",
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
    confidence: "verified",
    references: [],
    tags: ["eksplorasi", "amerika"],
  },
  {
    id: "revolusi-industri",
    slug: "revolusi-industri",
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
    confidence: "verified",
    references: [],
    tags: ["teknologi", "ekonomi", "eropa"],
  },
  {
    id: "revolusi-prancis",
    slug: "revolusi-prancis",
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
    slug: "kemerdekaan-indonesia",
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
    confidence: "verified",
    references: [],
    tags: ["kemerdekaan", "asia", "politik"],
  },
  {
    id: "runtuhnya-tembok-berlin",
    slug: "runtuhnya-tembok-berlin",
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
    confidence: "verified",
    references: [],
    tags: ["politik", "perang-dingin", "eropa"],
  }
];
