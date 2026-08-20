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
            type: "book"
      },
      {
            author: "Mark Lehner",
            title: "The Complete Pyramids",
            publisher: "Thames & Hudson",
            year: 2008,
            type: "book",
            url: "https://archive.org/details/completepyramids0000lehn"
      },
      {
            author: "Zahi Hawass",
            title: "Mountains of the Pharaohs: The Untold Story of the Pyramid Builders",
            publisher: "Doubleday",
            year: 2006,
            type: "book"
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
    image: "/images/events/mesopotamia-uruk.jpg",
    confidence: "verified",
    references: [
      {
            author: "Marc Van De Mieroop",
            title: "A History of the Ancient Near East, ca. 3000-323 BC",
            publisher: "Wiley-Blackwell",
            year: 2015,
            type: "book"
      },
      {
            author: "Samuel Noah Kramer",
            title: "History Begins at Sumer: Thirty-Nine Firsts in Recorded History",
            publisher: "University of Pennsylvania Press",
            year: 1988,
            type: "book"
      },
      {
            author: "Guillermo Algaze",
            title: "The Uruk World System: The Dynamics of Expansion of Early Mesopotamian Civilization",
            publisher: "University of Chicago Press",
            year: 2008,
            type: "book"
      }
],
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
    confidence: "verified",
    references: [
      {
        author: "Donald Kagan",
        title: "Pericles of Athens and the Birth of Democracy",
        publisher: "The Free Press",
        year: 1991,
        type: "book",
      },
      {
        author: "Simon Hornblower",
        title: "The Greek World: 479–323 BC",
        publisher: "Routledge",
        year: 2011,
        type: "book",
      },
      {
        author: "Encyclopedia Britannica",
        title: "Ancient Greek Civilization: The Classical Period",
        publisher: "Encyclopædia Britannica, Inc.",
        year: 2024,
        type: "encyclopedia",
        url: "https://www.britannica.com/place/ancient-Greece/The-classical-period",
      }
    ],
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
    references: [
      {
            author: "Mary Beard",
            title: "SPQR: A History of Ancient Rome",
            publisher: "W. W. Norton & Company",
            year: 2015,
            type: "book"
      },
      {
            author: "Adrian Goldsworthy",
            title: "Augustus: First Emperor of Rome",
            publisher: "Yale University Press",
            year: 2014,
            type: "book"
      },
      {
            author: "Ronald Syme",
            title: "The Roman Revolution",
            publisher: "Oxford University Press",
            year: 2002,
            type: "book"
      }
],
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
    references: [
      {
            author: "Martin Lings",
            title: "Muhammad: His Life Based on the Earliest Sources",
            publisher: "Inner Traditions",
            year: 2006,
            type: "book"
      },
      {
            author: "Fred M. Donner",
            title: "Muhammad and the Believers: At the Origins of Islam",
            publisher: "Harvard University Press",
            year: 2010,
            type: "book"
      },
      {
            author: "Karen Armstrong",
            title: "Muhammad: A Prophet for Our Time",
            publisher: "HarperOne",
            year: 2007,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1582650893333-e02fb28532f4?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Jack Weatherford",
            title: "Genghis Khan and the Making of the Modern World",
            publisher: "Crown",
            year: 2004,
            type: "book"
      },
      {
            author: "Timothy May",
            title: "The Mongol Conquests in World History",
            publisher: "Reaktion Books",
            year: 2012,
            type: "book"
      },
      {
            author: "Morris Rossabi",
            title: "The Mongols and Global History",
            publisher: "W. W. Norton & Company",
            year: 2011,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1542385317-0c7f2129c5fc?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Jacob Burckhardt",
            title: "The Civilization of the Renaissance in Italy",
            publisher: "Penguin Classics",
            year: 1990,
            type: "book"
      },
      {
            author: "Paul Johnson",
            title: "The Renaissance: A Short History",
            publisher: "Modern Library",
            year: 2002,
            type: "book"
      },
      {
            author: "Jerry Brotton",
            title: "The Renaissance: A Very Short Introduction",
            publisher: "Oxford University Press",
            year: 2006,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1500673922987-e212871f15f5?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Alfred W. Crosby",
            title: "The Columbian Exchange: Biological and Cultural Consequences of 1492",
            publisher: "Praeger",
            year: 2003,
            type: "book"
      },
      {
            author: "Felipe Fernández-Armesto",
            title: "Columbus",
            publisher: "Oxford University Press",
            year: 1991,
            type: "book"
      },
      {
            author: "Samuel Eliot Morison",
            title: "Admiral of the Ocean Sea: A Life of Christopher Columbus",
            publisher: "Little, Brown and Company",
            year: 1942,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1565881478148-5c4e9dce23be?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Eric Hobsbawm",
            title: "The Age of Revolution: 1789–1848",
            publisher: "Vintage",
            year: 1996,
            type: "book"
      },
      {
            author: "Robert C. Allen",
            title: "The British Industrial Revolution in Global Perspective",
            publisher: "Cambridge University Press",
            year: 2009,
            type: "book"
      },
      {
            author: "E. J. Hobsbawm",
            title: "Industry and Empire: The Birth of the Industrial Revolution",
            publisher: "The New Press",
            year: 1999,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "William Doyle",
            title: "The Oxford History of the French Revolution",
            publisher: "Oxford University Press",
            year: 2002,
            type: "book"
      },
      {
            author: "Simon Schama",
            title: "Citizens: A Chronicle of the French Revolution",
            publisher: "Vintage",
            year: 1990,
            type: "book"
      },
      {
            author: "François Furet",
            title: "Interpreting the French Revolution",
            publisher: "Cambridge University Press",
            year: 1981,
            type: "book"
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
    image: "https://images.unsplash.com/photo-1589370724817-48f029052dae?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "M.C. Ricklefs",
            title: "A History of Modern Indonesia since c. 1200 (4th Edition)",
            publisher: "Stanford University Press",
            year: 2008,
            type: "book"
      },
      {
            author: "Benedict Anderson",
            title: "Java in a Time of Revolution: Occupation and Resistance, 1944–1946",
            publisher: "Cornell University Press",
            year: 1972,
            type: "book"
      },
      {
            author: "George McTurnan Kahin",
            title: "Nationalism and Revolution in Indonesia",
            publisher: "Cornell University Press",
            year: 2003,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1599940824399-b87987207ea9?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Mary Elise Sarotte",
            title: "The Collapse: The Accidental Opening of the Berlin Wall",
            publisher: "Basic Books",
            year: 2014,
            type: "book"
      },
      {
            author: "Victor Sebestyen",
            title: "Revolution 1989: The Fall of the Soviet Empire",
            publisher: "Pantheon Books",
            year: 2009,
            type: "book"
      },
      {
            author: "Frederick Taylor",
            title: "The Berlin Wall: A World Divided, 1961–1989",
            publisher: "HarperCollins",
            year: 2006,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1621376841267-31c360c74900?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Jonathan Mark Kenoyer",
            title: "Ancient Cities of the Indus Valley Civilization",
            publisher: "Oxford University Press",
            year: 1998,
            type: "book"
      },
      {
            author: "Gregory L. Possehl",
            title: "The Indus Civilization: A Contemporary Perspective",
            publisher: "AltaMira Press",
            year: 2002,
            type: "book"
      },
      {
            author: "UNESCO World Heritage Centre",
            title: "Archaeological Ruins at Moenjodaro",
            publisher: "UNESCO",
            year: 2024,
            type: "archive",
            url: "https://whc.unesco.org/en/list/138/"
      }
],
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
    image: "https://images.unsplash.com/photo-1508804185872-47d8b920bf05?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Kwang-chih Chang",
            title: "Shang Civilization",
            publisher: "Yale University Press",
            year: 1980,
            type: "book"
      },
      {
            author: "David N. Keightley",
            title: "Sources of Shang History: The Oracle-Bone Inscriptions of Bronze Age China",
            publisher: "University of California Press",
            year: 1985,
            type: "book"
      },
      {
            author: "Michael Loewe & Edward L. Shaughnessy",
            title: "The Cambridge History of Ancient China",
            publisher: "Cambridge University Press",
            year: 1999,
            type: "encyclopedia"
      }
],
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
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Romila Thapar",
            title: "Aśoka and the Decline of the Mauryas",
            publisher: "Oxford University Press",
            year: 1997,
            type: "book"
      },
      {
            author: "Upinder Singh",
            title: "A History of Ancient and Early Medieval India",
            publisher: "Pearson Longman",
            year: 2008,
            type: "book"
      },
      {
            author: "Nayanjot Lahiri",
            title: "Ashoka in Ancient India",
            publisher: "Harvard University Press",
            year: 2015,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1542125574-e866e447b97e?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Jim Al-Khalili",
            title: "The House of Wisdom: How Arabic Science Saved Ancient Knowledge and Gave Us the Renaissance",
            publisher: "Penguin Press",
            year: 2011,
            type: "book"
      },
      {
            author: "George Saliba",
            title: "Islamic Science and the Making of the European Renaissance",
            publisher: "MIT Press",
            year: 2007,
            type: "book"
      },
      {
            author: "Jonathan Lyons",
            title: "The House of Wisdom: How the Arabs Transformed Western Civilization",
            publisher: "Bloomsbury Press",
            year: 2009,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
        author: "Michael E. Smith",
        title: "The Aztecs (3rd Edition)",
        publisher: "Wiley-Blackwell",
        year: 2012,
        type: "book",
      },
      {
        author: "Frances Berdan",
        title: "Aztec Archaeology and Ethnohistory",
        publisher: "Cambridge University Press",
        year: 2014,
        type: "book",
      },
      {
        author: "INAH (Instituto Nacional de Antropología e Historia)",
        title: "Templo Mayor y el Recinto Sagrado de Tenochtitlan",
        publisher: "Secretaría de Cultura de México",
        year: 2023,
        type: "archive",
        url: "https://www.templomayor.inah.gob.mx/",
      }
    ],
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
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Terence N. D'Altroy",
            title: "The Incas",
            publisher: "Wiley-Blackwell",
            year: 2014,
            type: "book"
      },
      {
            author: "Brian S. Bauer",
            title: "The Development of the Inca State",
            publisher: "University of Texas Press",
            year: 1992,
            type: "book"
      },
      {
            author: "John Hemming",
            title: "The Conquest of the Incas",
            publisher: "Mariner Books",
            year: 2003,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Edward L. Dreyer",
            title: "Zheng He: China and the Oceans in the Early Ming Dynasty, 1405–1433",
            publisher: "Pearson Longman",
            year: 2007,
            type: "book"
      },
      {
            author: "Louise Levathes",
            title: "When China Ruled the Seas: The Treasure Fleet of the Dragon Throne, 1405–1433",
            publisher: "Oxford University Press",
            year: 1996,
            type: "book"
      },
      {
            author: "Sally K. Church",
            title: "The Colossal Ships of Zheng He: Image or Reality?",
            publisher: "Bulletin of SOAS",
            year: 2005,
            type: "journal"
      }
],
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
    image: "https://images.unsplash.com/photo-1582236372557-81765c3bb203?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Margaret MacMillan",
            title: "The War That Ended Peace: The Road to 1914",
            publisher: "Random House",
            year: 2013,
            type: "book"
      },
      {
            author: "Christopher Clark",
            title: "The Sleepwalkers: How Europe Went to War in 1914",
            publisher: "Harper",
            year: 2013,
            type: "book"
      },
      {
            author: "Hew Strachan",
            title: "The First World War",
            publisher: "Viking",
            year: 2003,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1503525287515-585eeeb33fcb?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "Antony Beevor",
            title: "The Second World War",
            publisher: "Little, Brown and Company",
            year: 2012,
            type: "book"
      },
      {
            author: "Richard Overy",
            title: "Why the Allies Won",
            publisher: "W. W. Norton & Company",
            year: 1996,
            type: "book"
      },
      {
            author: "Max Hastings",
            title: "Inferno: The World at War, 1939–1945",
            publisher: "Knopf",
            year: 2011,
            type: "book"
      }
],
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
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop",
    confidence: "verified",
    references: [
      {
            author: "James R. Hansen",
            title: "First Man: The Life of Neil A. Armstrong",
            publisher: "Simon & Schuster",
            year: 2005,
            type: "book"
      },
      {
            author: "Andrew Chaikin",
            title: "A Man on the Moon: The Voyages of the Apollo Astronauts",
            publisher: "Penguin Books",
            year: 2007,
            type: "book"
      },
      {
            author: "NASA History Division",
            title: "Apollo 11 Mission Report",
            publisher: "National Aeronautics and Space Administration",
            year: 1969,
            type: "archive",
            url: "https://history.nasa.gov/alsj/a11/a11.html"
      }
],
    tags: ["sains","teknologi","eksplorasi"]
  },
  {
  id: "gobekli-tepe",
  slug: {
    id: "gobekli-tepe",
    en: "gobekli-tepe"
  },
  title: {
    id: "Kompleks Megalitikum Göbekli Tepe",
    en: "Göbekli Tepe Megalithic Complex"
  },
  summary: {
    id: "Kuil megalitikum bertiang batu T tertua di dunia yang dibangun oleh komunitas pemburu-peramu sebelum munculnya pertanian.",
    en: "The world's oldest megalithic T-shaped pillar temple complex built by hunter-gatherers prior to agriculture."
  },
  year: -9500,
  era: "ancient",
  location: {
    name: {
      id: "Şanlıurfa, Turki",
      en: "Şanlıurfa, Turkey"
    },
    lat: 37.2231,
    lng: 38.9225
  },
  confidence: "verified",
  references: [
    {
      author: "Klaus Schmidt",
      title: "Göbekli Tepe: A Stone Age Sanctuary in South-Eastern Anatolia",
      publisher: "ex oriente",
      year: 2012,
      type: "book"
    },
    {
      author: "Lee Clare",
      title: "Göbekli Tepe, Turkey: A brief summary of research at a new World Heritage Site",
      publisher: "e-Forschungsberichte",
      year: 2020,
      type: "journal"
    }
  ],
  tags: [
    "kuno",
    "arsitektur",
    "monumen",
    "timur-tengah"
  ]
},
  {
  id: "catalhoyuk",
  slug: {
    id: "catalhoyuk",
    en: "catalhoyuk"
  },
  title: {
    id: "Proto-Kota Neolitikum Çatalhöyük",
    en: "Çatalhöyük Neolithic Proto-City"
  },
  summary: {
    id: "Permukiman proto-kota Neolitikum terbesar di mana rumah-rumah bata lumpur saling menempel rapat tanpa jalan darat dan dimasuki dari atap.",
    en: "The largest Neolithic proto-city where mudbrick houses shared walls without ground streets, accessed via rooftop ladders."
  },
  year: -7100,
  era: "ancient",
  location: {
    name: {
      id: "Konya, Turki",
      en: "Konya, Turkey"
    },
    lat: 37.6667,
    lng: 32.8167
  },
  confidence: "verified",
  references: [
    {
      author: "Ian Hodder",
      title: "The Leopard's Tale: Revealing the Mysteries of Çatalhöyük",
      publisher: "Thames & Hudson",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "kota",
    "budaya",
    "arsitektur"
  ]
},
  {
  id: "peradaban-caral-supe",
  slug: {
    id: "peradaban-caral-supe",
    en: "caral-supe-civilization"
  },
  title: {
    id: "Kota Suci Caral-Supe",
    en: "Sacred City of Caral-Supe"
  },
  summary: {
    id: "Pusat peradaban dan arsitektur monumental piramida teras tertua di benua Amerika yang berkembang tanpa tembikar dan senjata perang.",
    en: "The oldest known monumental civilization and platform pyramid center in the Americas, flourishing peacefully without ceramics."
  },
  year: -3000,
  era: "ancient",
  location: {
    name: {
      id: "Lembah Supe, Peru",
      en: "Supe Valley, Peru"
    },
    lat: -10.8933,
    lng: -77.5208
  },
  confidence: "verified",
  references: [
    {
      author: "Ruth Shady Solís",
      title: "The Sacred City of Caral-Supe",
      publisher: "Instituto Nacional de Cultura",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "amerika",
    "arsitektur",
    "kota"
  ]
},
  {
  id: "piramida-djoser",
  slug: {
    id: "piramida-djoser",
    en: "pyramid-of-djoser"
  },
  title: {
    id: "Piramida Bertingkat Djoser di Saqqara",
    en: "Step Pyramid of Djoser at Saqqara"
  },
  summary: {
    id: "Monumen batu potong raksasa pertama di Mesir Kuno yang dirancang oleh arsitek legendaris Imhotep untuk Firaun Djoser.",
    en: "The first monumental stone-cut pyramid complex in Ancient Egypt, engineered by polymath Imhotep for Pharaoh Djoser."
  },
  year: -2670,
  era: "ancient",
  location: {
    name: {
      id: "Saqqara, Mesir",
      en: "Saqqara, Egypt"
    },
    lat: 29.8713,
    lng: 31.2164
  },
  confidence: "verified",
  references: [
    {
      author: "Mark Lehner",
      title: "The Complete Pyramids",
      publisher: "Thames & Hudson",
      year: 1997,
      type: "book"
    }
  ],
  tags: [
    "mesir",
    "kuno",
    "arsitektur",
    "monumen"
  ]
},
  {
  id: "stonehenge",
  slug: {
    id: "stonehenge",
    en: "stonehenge"
  },
  title: {
    id: "Monumen Megalitikum Stonehenge",
    en: "Stonehenge Megalithic Monument"
  },
  summary: {
    id: "Lingkaran batu megalitikum prasejarah ikonik di dataran Salisbury dengan kesejajaran astronomis terhadap titik balik matahari (solstis).",
    en: "Iconic prehistoric megalithic stone circle in Salisbury Plain aligned precisely with the solar solstices."
  },
  year: -2500,
  era: "ancient",
  location: {
    name: {
      id: "Wiltshire, Inggris",
      en: "Wiltshire, England"
    },
    lat: 51.1789,
    lng: -1.8262
  },
  confidence: "verified",
  references: [
    {
      author: "Mike Parker Pearson",
      title: "Stonehenge: A New Understanding",
      publisher: "The Experiment",
      year: 2013,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "eropa",
    "monumen",
    "budaya"
  ]
},
  {
  id: "kodeks-hammurabi",
  slug: {
    id: "kodeks-hammurabi",
    en: "code-of-hammurabi"
  },
  title: {
    id: "Prasasti Kodeks Hukum Hammurabi",
    en: "Law Code Stele of Hammurabi"
  },
  summary: {
    id: "Kumpulan 282 pasal hukum perdata dan pidana kuneiform Babilonia yang dipahat pada tugu batu basal hitam di bawah doktrin 'mata ganti mata'.",
    en: "Collection of 282 Babylonian laws inscribed in cuneiform on a black diorite stele enshrining lex talionis principles."
  },
  year: -1754,
  era: "ancient",
  location: {
    name: {
      id: "Babilonia (Hillah), Irak",
      en: "Babylon (Hillah), Iraq"
    },
    lat: 32.5422,
    lng: 44.4211
  },
  confidence: "verified",
  references: [
    {
      author: "Martha T. Roth",
      title: "Law Collections from Mesopotamia and Asia Minor",
      publisher: "Scholars Press",
      year: 1997,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "hukum",
    "timur-tengah",
    "tulisan"
  ]
},
  {
  id: "letusan-thera-santorini",
  slug: {
    id: "letusan-thera-santorini",
    en: "thera-santorini-eruption"
  },
  title: {
    id: "Letusan Supervolkanik Thera (Santorini)",
    en: "Minoan Super-Eruption of Thera (Santorini)"
  },
  summary: {
    id: "Letusan gunung berapi dahsyat di Laut Aegea yang memicu tsunami besar dan mempercepat keruntuhan peradaban maritim Minoa.",
    en: "Cataclysmic Aegean volcanic eruption that generated massive tsunamis, devastating the Minoan maritime civilization."
  },
  year: -1600,
  era: "ancient",
  location: {
    name: {
      id: "Santorini, Yunani",
      en: "Santorini, Greece"
    },
    lat: 36.4072,
    lng: 25.3961
  },
  confidence: "verified",
  references: [
    {
      author: "Floyd W. McCoy & Grant Heiken",
      title: "Volcanic Hazards and Disasters in Human Antiquity",
      publisher: "GSA",
      year: 2000,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "eropa",
    "maritim",
    "global"
  ]
},
  {
  id: "perang-troya",
  slug: {
    id: "perang-troya",
    en: "trojan-war"
  },
  title: {
    id: "Perang Troya & Runtuhnya Zaman Perunggu",
    en: "Trojan War & Bronze Age Collapse"
  },
  summary: {
    id: "Konflik bersenjata legendaris antara bangsa Akhaia Yunani Mikene dan kota berbenteng Troya di pesisir barat Anatolia.",
    en: "Legendary armed conflict between Mycenaean Greeks and the fortified city of Troy on the Anatolian coast."
  },
  year: -1190,
  era: "ancient",
  location: {
    name: {
      id: "Hisarlik (Troya), Turki",
      en: "Hisarlik (Troy), Turkey"
    },
    lat: 39.9575,
    lng: 26.2389
  },
  confidence: "verified",
  references: [
    {
      author: "Eric H. Cline",
      title: "1177 B.C.: The Year Civilization Collapsed",
      publisher: "Princeton University Press",
      year: 2014,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "perang",
    "eropa",
    "timur-tengah"
  ]
},
  {
  id: "peradaban-olmek",
  slug: {
    id: "peradaban-olmek",
    en: "olmec-civilization"
  },
  title: {
    id: "Pusat Kebudayaan Olmek di San Lorenzo",
    en: "Olmec Mother Culture at San Lorenzo"
  },
  summary: {
    id: "Peradaban pionir Mesoamerika yang memahat patung kepala kolosal raksasa dari batu basal dan merintis ritual permainan bola kuno.",
    en: "The Mesoamerican 'Mother Culture' that sculpted colossal stone heads from basalt and pioneered the ritual ballgame."
  },
  year: -1200,
  era: "ancient",
  location: {
    name: {
      id: "San Lorenzo Tenochtitlán, Meksiko",
      en: "San Lorenzo Tenochtitlán, Mexico"
    },
    lat: 17.7533,
    lng: -94.7594
  },
  confidence: "verified",
  references: [
    {
      author: "Richard A. Diehl",
      title: "The Olmecs: America's First Civilization",
      publisher: "Thames & Hudson",
      year: 2004,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "amerika",
    "budaya",
    "seni"
  ]
},
  {
  id: "kerajaan-kush-meroe",
  slug: {
    id: "kerajaan-kush-meroe",
    en: "kingdom-of-kush-meroe"
  },
  title: {
    id: "Kerajaan Kush & Piramida Meroë",
    en: "Kingdom of Kush & Pyramids of Meroë"
  },
  summary: {
    id: "Kerajaan kaya emas dan industri besi di Sudan kuno yang pernah menaklukkan Mesir sebagai Firaun Hitam Dinasti ke-25.",
    en: "Gold-rich Nubian kingdom in ancient Sudan that ruled Egypt as the 25th Black Pharaoh Dynasty and built steep pyramids."
  },
  year: -1070,
  era: "ancient",
  location: {
    name: {
      id: "Meroë, Sudan",
      en: "Meroë, Sudan"
    },
    lat: 16.9388,
    lng: 33.7494
  },
  confidence: "verified",
  references: [
    {
      author: "Derek A. Welsby",
      title: "The Kingdom of Kush: The Napatan and Meroitic Empires",
      publisher: "British Museum Press",
      year: 1996,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "afrika",
    "arsitektur",
    "monumen"
  ]
},
  {
  id: "dinasti-zhou-mandat-langit",
  slug: {
    id: "dinasti-zhou-mandat-langit",
    en: "zhou-dynasty-mandate-of-heaven"
  },
  title: {
    id: "Dinasti Zhou & Konsep Mandat Langit",
    en: "Zhou Dynasty & Mandate of Heaven"
  },
  summary: {
    id: "Dinasti terpanjang dalam sejarah Tiongkok yang meletakkan fondasi filosofis legitimasi kekuasaan politik Mandat Langit (Tianming).",
    en: "China's longest-ruling dynasty that formulated the foundational political philosophy of the Mandate of Heaven (Tianming)."
  },
  year: -1046,
  era: "ancient",
  location: {
    name: {
      id: "Haojing (Xi'an), Tiongkok",
      en: "Haojing (Xi'an), China"
    },
    lat: 34.2655,
    lng: 108.7753
  },
  confidence: "verified",
  references: [
    {
      author: "Edward L. Shaughnessy",
      title: "Sources of Western Zhou History",
      publisher: "University of California Press",
      year: 1991,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "asia",
    "politik",
    "filsafat"
  ]
},
  {
  id: "kebangkitan-fenisia-kartago",
  slug: {
    id: "kebangkitan-fenisia-kartago",
    en: "phoenician-carthage-founding"
  },
  title: {
    id: "Pendirian Kota Kartago oleh Bangsa Fenisia",
    en: "Founding of Carthage by Phoenicians"
  },
  summary: {
    id: "Koloni maritim bangsa Fenisia di Afrika Utara yang tumbuh menjadi imperium perdagangan laut adidaya di Mediterania Barat.",
    en: "Phoenician maritime trading colony in North Africa that expanded into the dominant naval empire of the Western Mediterranean."
  },
  year: -814,
  era: "ancient",
  location: {
    name: {
      id: "Kartago (Tunis), Tunisia",
      en: "Carthage (Tunis), Tunisia"
    },
    lat: 36.8531,
    lng: 10.3231
  },
  confidence: "verified",
  references: [
    {
      author: "Richard Miles",
      title: "Carthage Must Be Destroyed: The Rise and Fall of an Ancient Civilization",
      publisher: "Penguin",
      year: 2010,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "afrika",
    "maritim",
    "ekonomi"
  ]
},
  {
  id: "kerajaan-urartu-van",
  slug: {
    id: "kerajaan-urartu-van",
    en: "kingdom-of-urartu-van"
  },
  title: {
    id: "Benteng Danau Van & Kerajaan Urartu",
    en: "Van Fortress & Kingdom of Urartu"
  },
  summary: {
    id: "Kerajaan Zaman Besi di Dataran Tinggi Armenia yang terkenal dengan benteng batu di puncak tebing, metalurgi canggih, dan jaringan saluran air.",
    en: "Iron Age mountain kingdom in the Armenian Highlands renowned for cliff-top stone fortresses, advanced metallurgy, and aqueducts."
  },
  year: -860,
  era: "ancient",
  location: {
    name: {
      id: "Benteng Van, Turki",
      en: "Van Fortress, Turkey"
    },
    lat: 38.5009,
    lng: 43.3444
  },
  confidence: "verified",
  references: [
    {
      author: "Paul E. Zimansky",
      title: "Ancient Ararat: A Handbook of Urartian Studies",
      publisher: "Caravan Books",
      year: 1998,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "arsitektur",
    "timur-tengah",
    "militer"
  ]
},
  {
  id: "kerajaan-phrygia-midas",
  slug: {
    id: "kerajaan-phrygia-midas",
    en: "phrygian-kingdom-gordion"
  },
  title: {
    id: "Kerajaan Phrygia & Makam Midas di Gordion",
    en: "Phrygian Kingdom & Tomb of Midas at Gordion"
  },
  summary: {
    id: "Pusat peradaban Anatolia Zaman Besi di Gordion dengan tradisi metalurgi perunggu megah yang melahirkan legenda 'Sentuhan Emas Raja Midas'.",
    en: "Iron Age Anatolian civilization at Gordion whose lavish bronze metalwork inspired the mythical 'Golden Touch of King Midas'."
  },
  year: -750,
  era: "ancient",
  location: {
    name: {
      id: "Gordion (Yassıhöyük), Turki",
      en: "Gordion (Yassıhöyük), Turkey"
    },
    lat: 39.65,
    lng: 31.9833
  },
  confidence: "verified",
  references: [
    {
      author: "C. Brian Rose",
      title: "The Archaeology of Phrygian Gordion",
      publisher: "Penn Museum",
      year: 2012,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "timur-tengah",
    "budaya",
    "seni"
  ]
},
  {
  id: "perpustakaan-ashurbanipal",
  slug: {
    id: "perpustakaan-ashurbanipal",
    en: "library-of-ashurbanipal"
  },
  title: {
    id: "Perpustakaan Kerajaan Ashurbanipal di Niniwe",
    en: "Royal Library of Ashurbanipal at Nineveh"
  },
  summary: {
    id: "Koleksi lebih dari 30.000 lempengan tanah liat kuneiform Asiria yang memuat catatan hukum, sains, serta mahakarya sastra Epik Gilgamesh.",
    en: "Collection of over 30,000 Assyrian cuneiform tablets preserving science, administrative records, and the Epic of Gilgamesh."
  },
  year: -668,
  era: "ancient",
  location: {
    name: {
      id: "Niniwe (Mosul), Irak",
      en: "Nineveh (Mosul), Iraq"
    },
    lat: 36.3589,
    lng: 43.1528
  },
  confidence: "verified",
  references: [
    {
      author: "Julian Reade",
      title: "Assyrian Sculpture",
      publisher: "British Museum Press",
      year: 1998,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "literatur",
    "timur-tengah",
    "tulisan"
  ]
},
  {
  id: "babilonia-baru-ishtar",
  slug: {
    id: "babilonia-baru-ishtar",
    en: "neo-babylonian-ishtar-gate"
  },
  title: {
    id: "Puncak Babilonia Baru & Gerbang Ishtar",
    en: "Neo-Babylonian Zenith & Ishtar Gate"
  },
  summary: {
    id: "Masa kejayaan Raja Nebukadnezar II yang mendirikan Gerbang Ishtar berglasir biru, Ziggurat Etemenanki, dan Taman Gantung Babilonia.",
    en: "The imperial zenith of Nebuchadnezzar II featuring the glazed-blue Ishtar Gate, Etemenanki Ziggurat, and Hanging Gardens."
  },
  year: -605,
  era: "ancient",
  location: {
    name: {
      id: "Babilonia, Irak",
      en: "Babylon, Iraq"
    },
    lat: 32.5422,
    lng: 44.4211
  },
  confidence: "verified",
  references: [
    {
      author: "Marc Van De Mieroop",
      title: "King Hammurabi of Babylon",
      publisher: "Blackwell Publishing",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "arsitektur",
    "timur-tengah",
    "kota"
  ]
},
  {
  id: "makam-koresh-agung",
  slug: {
    id: "makam-koresh-agung",
    en: "tomb-of-cyrus-the-great"
  },
  title: {
    id: "Makam Koresh Agung di Pasargadae",
    en: "Tomb of Cyrus the Great at Pasargadae"
  },
  summary: {
    id: "Monumen makam batu pendiri Kekaisaran Persia Akhemeniyah yang mendeklarasikan piagam penghormatan keragaman budaya pertama di dunia (Silinder Koresh).",
    en: "Stone tomb monument of Cyrus the Great who promulgated the Cyrus Cylinder, an early declaration of cultural and religious tolerance."
  },
  year: -530,
  era: "ancient",
  location: {
    name: {
      id: "Pasargadae, Iran",
      en: "Pasargadae, Iran"
    },
    lat: 30.1983,
    lng: 53.1772
  },
  confidence: "verified",
  references: [
    {
      author: "David Stronach",
      title: "Pasargadae: A Report on the Excavations",
      publisher: "Clarendon Press",
      year: 1978,
      type: "book"
    }
  ],
  tags: [
    "kuno",
    "timur-tengah",
    "monumen",
    "politik"
  ]
},
  {
  id: "peradaban-norte-chico",
  slug: {
    id: "peradaban-norte-chico",
    en: "norte-chico-civilization"
  },
  title: {
    id: "Peradaban Lembah Fortaleza & Pativilca",
    en: "Norte Chico Civilization Valleys"
  },
  summary: {
    id: "Jaringan 30 pusat permukiman perkotaan pra-keramik di pesisir Peru tengah yang mendasari perkembangan peradaban Andes awal.",
    en: "Network of 30 pre-ceramic urban monumental settlements along Peru's central coast forming the bedrock of Andean civilization."
  },
  year: -2800,
  era: "ancient",
  location: {
    name: {
      id: "Barranca, Peru",
      en: "Barranca, Peru"
    },
    lat: -10.75,
    lng: -77.75
  },
  confidence: "verified",
  references: [
    {
      author: "Jonathan Haas & Winifred Creamer",
      title: "Power and the Emergence of Complex Polities in the Peruvian Preceramic",
      publisher: "Archaeological Papers of the AAA",
      year: 2006,
      type: "journal"
    }
  ],
  tags: [
    "kuno",
    "amerika",
    "kota",
    "budaya"
  ]
},
  {
  id: "pertempuran-marathon",
  slug: {
    id: "pertempuran-marathon",
    en: "battle-of-marathon"
  },
  title: {
    id: "Pertempuran Marathon",
    en: "Battle of Marathon"
  },
  summary: {
    id: "Kemenangan spektakuler pasukan infanteri Athena pimpinan Miltiades dalam memukul mundur invasi gelombang pertama Kekaisaran Persia ke daratan Yunani.",
    en: "Decisive Athenian victory led by Miltiades repelling the first Persian imperial invasion of mainland Greece."
  },
  year: -490,
  era: "classical",
  location: {
    name: {
      id: "Marathon, Yunani",
      en: "Marathon, Greece"
    },
    lat: 38.1544,
    lng: 23.9625
  },
  confidence: "verified",
  references: [
    {
      author: "Peter Krentz",
      title: "The Battle of Marathon",
      publisher: "Yale University Press",
      year: 2010,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "eropa",
    "militer",
    "demokrasi"
  ]
},
  {
  id: "pertempuran-thermopylae",
  slug: {
    id: "pertempuran-thermopylae",
    en: "battle-of-thermopylae"
  },
  title: {
    id: "Pertempuran Celah Thermopylae",
    en: "Battle of Thermopylae Pass"
  },
  summary: {
    id: "Pertahanan terakhir heroik Raja Leonidas bersama 300 prajurit Sparta dan sekutu Yunani menahan laju jutaan tentara Persia pimpinan Raja Xerxes I.",
    en: "Legendary last stand of King Leonidas, 300 Spartan hoplites, and Greek allies against the invading Persian army of Xerxes I."
  },
  year: -480,
  era: "classical",
  location: {
    name: {
      id: "Thermopylae, Yunani",
      en: "Thermopylae, Greece"
    },
    lat: 38.7967,
    lng: 22.5361
  },
  confidence: "verified",
  references: [
    {
      author: "Paul Cartledge",
      title: "Thermopylae: The Battle That Changed the World",
      publisher: "Overlook Press",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "eropa",
    "militer"
  ]
},
  {
  id: "ekspedisi-aleksander-agung",
  slug: {
    id: "ekspedisi-aleksander-agung",
    en: "conquests-of-alexander-the-great"
  },
  title: {
    id: "Ekspedisi Penaklukan Aleksander Agung",
    en: "Conquests of Alexander the Great"
  },
  summary: {
    id: "Kampanye militer legendaris Raja Makedonia yang menumbangkan Kekaisaran Persia dan menyebarkan kebudayaan Helenistik dari Yunani hingga Sungai Indus.",
    en: "Legendary campaign of the Macedonian king who overthrew the Persian Empire and spread Hellenistic culture to the Indus River."
  },
  year: -334,
  era: "classical",
  location: {
    name: {
      id: "Pella, Yunani",
      en: "Pella, Greece"
    },
    lat: 40.7583,
    lng: 22.5211
  },
  confidence: "verified",
  references: [
    {
      author: "Robin Lane Fox",
      title: "Alexander the Great",
      publisher: "Penguin Books",
      year: 2004,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "imperium",
    "eropa",
    "asia"
  ]
},
  {
  id: "perpustakaan-alexandria",
  slug: {
    id: "perpustakaan-alexandria",
    en: "library-of-alexandria"
  },
  title: {
    id: "Perpustakaan Agung Alexandria",
    en: "Great Library of Alexandria"
  },
  summary: {
    id: "Pusat penelitian, matematika, dan penyimpanan gulungan naskah ilmu pengetahuan terbesar di dunia helenistik yang didirikan Dinasti Ptolemaik.",
    en: "The greatest intellectual hub and papyrus scroll library of the ancient Mediterranean world under the Ptolemaic Dynasty."
  },
  year: -285,
  era: "classical",
  location: {
    name: {
      id: "Alexandria, Mesir",
      en: "Alexandria, Egypt"
    },
    lat: 31.2001,
    lng: 29.9187
  },
  confidence: "verified",
  references: [
    {
      author: "Lionel Casson",
      title: "Libraries in the Ancient World",
      publisher: "Yale University Press",
      year: 2001,
      type: "book"
    }
  ],
  tags: [
    "sains",
    "literatur",
    "mesir",
    "filsafat"
  ]
},
  {
  id: "penyatuan-qin-tembok-besar",
  slug: {
    id: "penyatuan-qin-tembok-besar",
    en: "qin-unification-great-wall"
  },
  title: {
    id: "Penyatuan Qin & Tembok Besar Pertama",
    en: "Qin Unification & Early Great Wall"
  },
  summary: {
    id: "Kaisar Qin Shi Huang menyatukan Tiongkok dari era Perang Antar-Negara, membakukan aksara dan mata uang, serta menghubungkan benteng Tembok Besar.",
    en: "Emperor Qin Shi Huang unified Warring States China, standardized writing and currency, and linked the frontier Great Wall fortresses."
  },
  year: -221,
  era: "classical",
  location: {
    name: {
      id: "Xianyang (Shaanxi), Tiongkok",
      en: "Xianyang (Shaanxi), China"
    },
    lat: 34.3644,
    lng: 108.7089
  },
  confidence: "verified",
  references: [
    {
      author: "Mark Edward Lewis",
      title: "The Early Chinese Empires: Qin and Han",
      publisher: "Harvard University Press",
      year: 2007,
      type: "book"
    }
  ],
  tags: [
    "asia",
    "imperium",
    "politik",
    "monumen"
  ]
},
  {
  id: "perang-punisia-hannibal",
  slug: {
    id: "perang-punisia-hannibal",
    en: "second-punic-war-hannibal"
  },
  title: {
    id: "Perang Punisia II & Kampanye Hannibal",
    en: "Second Punic War & Hannibal's Campaign"
  },
  summary: {
    id: "Jenderal Kartago Hannibal Barca memimpin pasukan dan gajah perang melintasi Pegunungan Alpen untuk menghancurkan legiun Romawi di Pertempuran Cannae.",
    en: "Carthaginian general Hannibal Barca led war elephants across the Alps, orchestrating the encirclement of Roman legions at Cannae."
  },
  year: -218,
  era: "classical",
  location: {
    name: {
      id: "Cannae (Barletta), Italia",
      en: "Cannae (Barletta), Italy"
    },
    lat: 41.3144,
    lng: 16.1489
  },
  confidence: "verified",
  references: [
    {
      author: "Adrian Goldsworthy",
      title: "The Punic Wars",
      publisher: "Cassell",
      year: 2000,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "militer",
    "eropa",
    "afrika"
  ]
},
  {
  id: "jalur-sutra-han",
  slug: {
    id: "jalur-sutra-han",
    en: "han-dynasty-silk-road"
  },
  title: {
    id: "Pembukaan Jalur Sutra Lintas Benua",
    en: "Opening of the Transcontinental Silk Road"
  },
  summary: {
    id: "Diplomat Zhang Qian merintis jaringan perdagangan darat lintas benua yang menghubungkan sutra Tiongkok dengan Kekaisaran Romawi dan India.",
    en: "Envoy Zhang Qian established transcontinental trade routes connecting Chinese silk caravans with Rome, Parthia, and India."
  },
  year: -130,
  era: "classical",
  location: {
    name: {
      id: "Dunhuang (Gansu), Tiongkok",
      en: "Dunhuang (Gansu), China"
    },
    lat: 40.1421,
    lng: 94.6619
  },
  confidence: "verified",
  references: [
    {
      author: "Peter Frankopan",
      title: "The Silk Roads: A New History of the World",
      publisher: "Bloomsbury",
      year: 2015,
      type: "book"
    }
  ],
  tags: [
    "ekonomi",
    "asia",
    "global",
    "diplomasi"
  ]
},
  {
  id: "pembunuhan-julius-caesar",
  slug: {
    id: "pembunuhan-julius-caesar",
    en: "assassination-of-julius-caesar"
  },
  title: {
    id: "Pembunuhan Julius Caesar (Ides of March)",
    en: "Assassination of Julius Caesar (Ides of March)"
  },
  summary: {
    id: "Pembunuhan Diktator Seumur Hidup Julius Caesar oleh para senator di Teater Pompey yang memicu perang saudara dan lahirnya Kekaisaran Romawi.",
    en: "The assassination of Dictator Julius Caesar by senators in the Curia of Pompey, triggering civil wars that birthed the Roman Empire."
  },
  year: -44,
  era: "classical",
  location: {
    name: {
      id: "Roma, Italia",
      en: "Rome, Italy"
    },
    lat: 41.8953,
    lng: 12.4725
  },
  confidence: "verified",
  references: [
    {
      author: "Barry Strauss",
      title: "The Death of Caesar: The Story of History's Most Famous Assassination",
      publisher: "Simon & Schuster",
      year: 2015,
      type: "book"
    }
  ],
  tags: [
    "politik",
    "eropa",
    "imperium"
  ]
},
  {
  id: "letusan-vesuvius-pompeii",
  slug: {
    id: "letusan-vesuvius-pompeii",
    en: "eruption-of-mount-vesuvius"
  },
  title: {
    id: "Letusan Gunung Vesuvius & Kota Pompeii",
    en: "Eruption of Vesuvius & Pompeii"
  },
  summary: {
    id: "Letusan piroklastik dahsyat Gunung Vesuvius yang mengubur kota makmur Romawi Pompeii dan Herculaneum di bawah material abu setinggi 6 meter.",
    en: "Catastrophic eruption of Mount Vesuvius entombing the Roman cities of Pompeii and Herculaneum beneath volcanic ash."
  },
  year: 79,
  era: "classical",
  location: {
    name: {
      id: "Pompeii (Napoli), Italia",
      en: "Pompeii (Naples), Italy"
    },
    lat: 40.7508,
    lng: 14.4869
  },
  confidence: "verified",
  references: [
    {
      author: "Mary Beard",
      title: "Pompeii: The Life of a Roman Town",
      publisher: "Profile Books",
      year: 2008,
      type: "book"
    }
  ],
  tags: [
    "eropa",
    "kota",
    "budaya"
  ]
},
  {
  id: "colosseum-roma",
  slug: {
    id: "colosseum-roma",
    en: "colosseum-of-rome"
  },
  title: {
    id: "Pembangunan Amfiteater Colosseum Roma",
    en: "Construction of the Roman Colosseum"
  },
  summary: {
    id: "Peresmian amfiteater batu elips Flavianus berkapasitas 50.000 penonton sebagai simbol kejayaan arsitektur beton dan pertunjukan gladiator Romawi.",
    en: "Inauguration of the Flavian Amphitheater holding 50,000 spectators, an engineering masterpiece of Roman concrete and gladiator spectacles."
  },
  year: 80,
  era: "classical",
  location: {
    name: {
      id: "Roma, Italia",
      en: "Rome, Italy"
    },
    lat: 41.8902,
    lng: 12.4922
  },
  confidence: "verified",
  references: [
    {
      author: "Keith Hopkins & Mary Beard",
      title: "The Colosseum",
      publisher: "Harvard University Press",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "eropa",
    "arsitektur",
    "monumen",
    "budaya"
  ]
},
  {
  id: "teotihuacan-piramida-matahari",
  slug: {
    id: "teotihuacan-piramida-matahari",
    en: "teotihuacan-pyramid-of-the-sun"
  },
  title: {
    id: "Metropolis Kuno Teotihuacan",
    en: "Ancient Metropolis of Teotihuacan"
  },
  summary: {
    id: "Kota kosmopolitan terbesar Mesoamerika pra-Columbus dengan tata ruang 'Jalan Kematian' dan Piramida Raksasa Matahari.",
    en: "The largest pre-Columbian Mesoamerican metropolis featuring the Avenue of the Dead and colossal Pyramid of the Sun."
  },
  year: 100,
  era: "classical",
  location: {
    name: {
      id: "San Juan Teotihuacán, Meksiko",
      en: "San Juan Teotihuacán, Mexico"
    },
    lat: 19.6925,
    lng: -98.8436
  },
  confidence: "verified",
  references: [
    {
      author: "George L. Cowgill",
      title: "Ancient Teotihuacan: Early Urbanism in Central Mexico",
      publisher: "Cambridge University Press",
      year: 2015,
      type: "book"
    }
  ],
  tags: [
    "amerika",
    "kota",
    "arsitektur",
    "monumen"
  ]
},
  {
  id: "kerajaan-aksum-etiopia",
  slug: {
    id: "kerajaan-aksum-etiopia",
    en: "kingdom-of-aksum"
  },
  title: {
    id: "Kerajaan Aksum & Obelisk Megalit",
    en: "Kingdom of Aksum & Giant Obelisks"
  },
  summary: {
    id: "Kekuatan perdagangan maritim Laut Merah di Tanduk Afrika yang mencetak koin emas sendiri dan mendirikan tugu obelisk monolitik raksasa.",
    en: "Red Sea maritime trading powerhouse in the Horn of Africa that minted gold coinage and erected colossal carved stelae."
  },
  year: 100,
  era: "classical",
  location: {
    name: {
      id: "Aksum, Etiopia",
      en: "Axum, Ethiopia"
    },
    lat: 14.1311,
    lng: 38.7239
  },
  confidence: "verified",
  references: [
    {
      author: "Stuart Munro-Hay",
      title: "Aksum: An African Civilisation of Late Antiquity",
      publisher: "Edinburgh University Press",
      year: 1991,
      type: "book"
    }
  ],
  tags: [
    "afrika",
    "ekonomi",
    "maritim",
    "monumen"
  ]
},
  {
  id: "petra-nabatea",
  slug: {
    id: "petra-nabatea",
    en: "petra-nabataean-kingdom"
  },
  title: {
    id: "Kota Batu Karang Petra & Bangsa Nabatea",
    en: "Rock-Cut City of Petra & Nabataeans"
  },
  summary: {
    id: "Ibu kota pedagang dupa Nabatea yang memahat fasad arsitektur megah Al-Khazneh langsung pada tebing batu pasir merah gurun.",
    en: "Nabataean incense trade capital renowned for carving the monumental Al-Khazneh facade directly into rose-red canyon cliffs."
  },
  year: 100,
  era: "classical",
  location: {
    name: {
      id: "Petra (Ma'an), Yordania",
      en: "Petra (Ma'an), Jordan"
    },
    lat: 30.3285,
    lng: 35.4444
  },
  confidence: "verified",
  references: [
    {
      author: "Jane Taylor",
      title: "Petra and the Lost Kingdom of the Nabataeans",
      publisher: "I.B. Tauris",
      year: 2001,
      type: "book"
    }
  ],
  tags: [
    "timur-tengah",
    "arsitektur",
    "monumen",
    "ekonomi"
  ]
},
  {
  id: "kekaisaran-kushan-kanishka",
  slug: {
    id: "kekaisaran-kushan-kanishka",
    en: "kushan-empire-kanishka"
  },
  title: {
    id: "Kekaisaran Kushan & Seni Buddha Gandhara",
    en: "Kushan Empire & Greco-Buddhist Gandhara Art"
  },
  summary: {
    id: "Imperium multikultural di persimpangan India, Persia, dan Helenistik yang memelopori perpaduan seni patung Buddha Gandhara.",
    en: "Crossroads empire blending Greek, Persian, and Indian cultures, pioneering Greco-Buddhist Gandharan stone sculpture."
  },
  year: 127,
  era: "classical",
  location: {
    name: {
      id: "Peshawar, Pakistan",
      en: "Peshawar, Pakistan"
    },
    lat: 34.0151,
    lng: 71.5249
  },
  confidence: "verified",
  references: [
    {
      author: "B.A. Litvinsky",
      title: "History of Civilizations of Central Asia (Vol. II)",
      publisher: "UNESCO",
      year: 1996,
      type: "encyclopedia"
    }
  ],
  tags: [
    "asia",
    "agama",
    "seni",
    "budaya"
  ]
},
  {
  id: "garis-garis-nazca",
  slug: {
    id: "garis-garis-nazca",
    en: "nazca-lines-geoglyphs"
  },
  title: {
    id: "Geoglif Misterius Garis-Garis Nazca",
    en: "Mysterious Geoglyphs of the Nazca Lines"
  },
  summary: {
    id: "Ratusan gambar raksasa hewan, burung, dan pola geometris yang digoreskan di tanah gurun pantai Peru oleh peradaban Nazca kuno.",
    en: "Hundreds of immense animal, avian, and geometric geoglyphs etched into the arid coastal desert plateau of southern Peru."
  },
  year: 200,
  era: "classical",
  location: {
    name: {
      id: "Nazca (Ica), Peru",
      en: "Nazca (Ica), Peru"
    },
    lat: -14.739,
    lng: -75.13
  },
  confidence: "verified",
  references: [
    {
      author: "Helaine Silverman & Donald A. Proulx",
      title: "The Nasca",
      publisher: "Blackwell",
      year: 2002,
      type: "book"
    }
  ],
  tags: [
    "amerika",
    "seni",
    "budaya",
    "monumen"
  ]
},
  {
  id: "tiga-kerajaan-tiongkok-samkok",
  slug: {
    id: "tiga-kerajaan-tiongkok-samkok",
    en: "three-kingdoms-period-china"
  },
  title: {
    id: "Era Tiga Kerajaan Tiongkok (Samkok)",
    en: "Three Kingdoms Period of China"
  },
  summary: {
    id: "Persaingan militer dan intrik strategi politik legendaris antara negara bagian Wei, Shu, dan Wu setelah runtuhnya Dinasti Han.",
    en: "Legendary era of military strategy and political rivalry among the rival states of Wei, Shu, and Wu post-Han collapse."
  },
  year: 220,
  era: "classical",
  location: {
    name: {
      id: "Luoyang (Henan), Tiongkok",
      en: "Luoyang (Henan), China"
    },
    lat: 34.6197,
    lng: 112.454
  },
  confidence: "verified",
  references: [
    {
      author: "Rafe de Crespigny",
      title: "A Biographical Dictionary of Later Han to the Three Kingdoms",
      publisher: "Brill",
      year: 2007,
      type: "book"
    }
  ],
  tags: [
    "asia",
    "perang",
    "politik",
    "militer"
  ]
},
  {
  id: "konsili-nicea-pertama",
  slug: {
    id: "konsili-nicea-pertama",
    en: "first-council-of-nicaea"
  },
  title: {
    id: "Konsili Ekumenis Pertama di Nicea",
    en: "First Ecumenical Council of Nicaea"
  },
  summary: {
    id: "Pertemuan uskup-uskup Kristen sedunia yang dihimpun Kaisar Konstantinus I untuk merumuskan Pengakuan Iman Nicea dan kalender Paskah.",
    en: "Historic assembly of Christian bishops convened by Emperor Constantine I formulating the Nicene Creed and Easter calendar."
  },
  year: 325,
  era: "classical",
  location: {
    name: {
      id: "İznik (Bursa), Turki",
      en: "İznik (Bursa), Turkey"
    },
    lat: 40.4286,
    lng: 29.7214
  },
  confidence: "verified",
  references: [
    {
      author: "R.P.C. Hanson",
      title: "The Search for the Christian Doctrine of God",
      publisher: "T&T Clark",
      year: 1988,
      type: "book"
    }
  ],
  tags: [
    "agama",
    "filsafat",
    "eropa",
    "timur-tengah"
  ]
},
  {
  id: "kerajaan-kutai-martadipura",
  slug: {
    id: "kerajaan-kutai-martadipura",
    en: "kutai-martadipura-kingdom"
  },
  title: {
    id: "Prasasti Yupa Kerajaan Kutai Martadipura",
    en: "Yupa Inscriptions of Kutai Martadipura"
  },
  summary: {
    id: "Kerajaan Hindu tertua di Nusantara yang tercatat dalam sejarah, dibuktikan oleh 7 tiang batu Yupa persembahan Raja Mulawarman.",
    en: "The earliest recorded Hindu kingdom in the Indonesian archipelago, attested by seven sacrificial Sanskrit Yupa stone pillars."
  },
  year: 400,
  era: "classical",
  location: {
    name: {
      id: "Muara Kaman (Kutai Kartanegara), Indonesia",
      en: "Muara Kaman (East Kalimantan), Indonesia"
    },
    lat: -0.3475,
    lng: 116.8042
  },
  confidence: "verified",
  references: [
    {
      author: "J.G. de Casparis",
      title: "Indonesian Palaeography",
      publisher: "Brill",
      year: 1975,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "asia",
    "kuno",
    "tulisan",
    "agama"
  ]
},
  {
  id: "universitas-nalanda-gupta",
  slug: {
    id: "universitas-nalanda-gupta",
    en: "nalanda-mahavihara-university"
  },
  title: {
    id: "Mahavihara Universitas Nalanda",
    en: "Nalanda Mahavihara University"
  },
  summary: {
    id: "Pusat pendidikan tinggi residensial monastik internasional terbesar di India kuno yang mengkaji astronomi, logika, tata bahasa, dan filsafat.",
    en: "Ancient India's premier international residential monastic university teaching Buddhist philosophy, astronomy, and mathematics."
  },
  year: 427,
  era: "classical",
  location: {
    name: {
      id: "Nalanda (Bihar), India",
      en: "Nalanda (Bihar), India"
    },
    lat: 25.1357,
    lng: 85.4452
  },
  confidence: "verified",
  references: [
    {
      author: "Sukumar Dutt",
      title: "Buddhist Monks and Monasteries of India",
      publisher: "Motilal Banarsidass",
      year: 1988,
      type: "book"
    }
  ],
  tags: [
    "asia",
    "sains",
    "filsafat",
    "agama"
  ]
},
  {
  id: "kerajaan-tarumanegara",
  slug: {
    id: "kerajaan-tarumanegara",
    en: "tarumanagara-kingdom"
  },
  title: {
    id: "Prasasti Ciaruteun Kerajaan Tarumanegara",
    en: "Ciaruteun Inscription of Tarumanagara"
  },
  summary: {
    id: "Kerajaan kuno di Jawa Barat pimpinan Raja Purnawarman yang memahat cetak telapak kaki menyerupai Dewa Wisnu dan menggali Sungai Gomati.",
    en: "Ancient West Javanese kingdom of King Purnawarman renowned for rock-carved royal footprints and the Gomati irrigation canal."
  },
  year: 450,
  era: "classical",
  location: {
    name: {
      id: "Ciampea (Bogor), Indonesia",
      en: "Ciampea (Bogor), Indonesia"
    },
    lat: -6.5971,
    lng: 106.7978
  },
  confidence: "verified",
  references: [
    {
      author: "Poesponegoro & Notosusanto",
      title: "Sejarah Nasional Indonesia II: Zaman Kuno",
      publisher: "Balai Pustaka",
      year: 2008,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "asia",
    "monumen",
    "tulisan"
  ]
},
  {
  id: "runtuhnya-romawi-barat",
  slug: {
    id: "runtuhnya-romawi-barat",
    en: "fall-of-western-roman-empire"
  },
  title: {
    id: "Runtuhnya Kekaisaran Romawi Barat (476 M)",
    en: "Fall of the Western Roman Empire (476 CE)"
  },
  summary: {
    id: "Panglima Odoaker menggulingkan kaisar terakhir Romulus Augustulus di Ravenna, menandai berakhirnya supremasi politik Romawi di Eropa Barat.",
    en: "Germanic general Odoacer deposed Emperor Romulus Augustulus in Ravenna, marking the end of Western Roman imperial rule."
  },
  year: 476,
  era: "classical",
  location: {
    name: {
      id: "Ravenna, Italia",
      en: "Ravenna, Italy"
    },
    lat: 44.4183,
    lng: 12.2035
  },
  confidence: "verified",
  references: [
    {
      author: "Peter Heather",
      title: "The Fall of the Roman Empire: A New History",
      publisher: "Oxford University Press",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "politik",
    "eropa",
    "imperium",
    "perang"
  ]
},
  {
  id: "kerajaan-himyar-yaman",
  slug: {
    id: "kerajaan-himyar-yaman",
    en: "himyarite-kingdom-yemen"
  },
  title: {
    id: "Kerajaan Himyar & Perdagangan Dupa Arabia",
    en: "Himyarite Kingdom & Incense Trade"
  },
  summary: {
    id: "Kerajaan penguasa Arabia selatan yang mengendalikan jalur dupa dan rempah-rempah maritim serta mengelola sistem bendungan raksasa Marib.",
    en: "South Arabian kingdom dominating the maritime spice and incense routes and engineering the Great Marib Dam."
  },
  year: 110,
  era: "classical",
  location: {
    name: {
      id: "Zafar (Ibb), Yaman",
      en: "Zafar (Ibb), Yemen"
    },
    lat: 14.215,
    lng: 44.405
  },
  confidence: "verified",
  references: [
    {
      author: "Christian Julien Robin",
      title: "Arabia and Ethiopia in Late Antiquity",
      publisher: "Oxford University Press",
      year: 2012,
      type: "book"
    }
  ],
  tags: [
    "timur-tengah",
    "ekonomi",
    "maritim",
    "budaya"
  ]
},
  {
  id: "pembangunan-hagia-sophia",
  slug: {
    id: "pembangunan-hagia-sophia",
    en: "construction-of-hagia-sophia"
  },
  title: {
    id: "Pembangunan Katedral Hagia Sophia",
    en: "Construction of Hagia Sophia"
  },
  summary: {
    id: "Kaisar Bizantium Yustinianus I meresmikan katedral megah berkubah gantung raksasa yang menjadi mahakarya arsitektur dunia Kristen dan Islam.",
    en: "Byzantine Emperor Justinian I consecrated the monumental pendentive dome cathedral, an architectural marvel of Christian and Islamic history."
  },
  year: 537,
  era: "medieval",
  location: {
    name: {
      id: "Istanbul, Turki",
      en: "Istanbul, Turkey"
    },
    lat: 41.0086,
    lng: 28.9802
  },
  confidence: "verified",
  references: [
    {
      author: "Rowland J. Mainstone",
      title: "Hagia Sophia: Architecture, Structure and Liturgy",
      publisher: "Thames & Hudson",
      year: 1988,
      type: "book"
    }
  ],
  tags: [
    "arsitektur",
    "agama",
    "eropa",
    "timur-tengah",
    "monumen"
  ]
},
  {
  id: "prasasti-kedukan-bukit-sriwijaya",
  slug: {
    id: "prasasti-kedukan-bukit-sriwijaya",
    en: "kedukan-bukit-srivijaya-expedition"
  },
  title: {
    id: "Ekspedisi Suci Dapunta Hyang (Sriwijaya)",
    en: "Sacred Expedition of Dapunta Hyang (Srivijaya)"
  },
  summary: {
    id: "Prasasti beraksara Pallawa tertua tentang perjalanan suci (siddhayatra) Dapunta Hyang memimpin 20.000 bala tentara mendirikan Kedatuan Sriwijaya.",
    en: "Oldest Pallava-inscribed stone recording King Dapunta Hyang's sacred voyage with 20,000 troops establishing the Srivijaya realm."
  },
  year: 682,
  era: "medieval",
  location: {
    name: {
      id: "Palembang (Sumatra Selatan), Indonesia",
      en: "Palembang (South Sumatra), Indonesia"
    },
    lat: -2.9903,
    lng: 104.7567
  },
  confidence: "verified",
  references: [
    {
      author: "George Cœdès",
      title: "The Indianized States of Southeast Asia",
      publisher: "University of Hawaii Press",
      year: 1968,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "maritim",
    "asia",
    "imperium",
    "tulisan"
  ]
},
  {
  id: "pertempuran-tours-poitiers",
  slug: {
    id: "pertempuran-tours-poitiers",
    en: "battle-of-tours-poitiers"
  },
  title: {
    id: "Pertempuran Tours (Poitiers)",
    en: "Battle of Tours (Poitiers)"
  },
  summary: {
    id: "Panglima Franka Charles Martel memimpin kavaleri berat mengalahkan pasukan Kekhalifahan Umayyah pimpinan Abdul Rahman Al-Ghafiqi di Prancis tengah.",
    en: "Frankish leader Charles Martel's heavy infantry defeated the Umayyad caliphate army of Abdul Rahman Al-Ghafiqi in central France."
  },
  year: 732,
  era: "medieval",
  location: {
    name: {
      id: "Poitiers / Tours, Prancis",
      en: "Poitiers / Tours, France"
    },
    lat: 46.5802,
    lng: 0.3404
  },
  confidence: "verified",
  references: [
    {
      author: "David Levering Lewis",
      title: "God's Crucible: Islam and the Making of Europe, 570–1215",
      publisher: "W.W. Norton",
      year: 2008,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "militer",
    "eropa",
    "agama"
  ]
},
  {
  id: "pembangunan-candi-borobudur",
  slug: {
    id: "pembangunan-candi-borobudur",
    en: "construction-of-borobudur"
  },
  title: {
    id: "Pembangunan Mahakarya Candi Borobudur",
    en: "Construction of Borobudur Temple"
  },
  summary: {
    id: "Monumen candi Buddha Mahayana berundak terbesar di dunia yang dibangun oleh Wangsa Syailendra di Dataran Kedu dengan 2.672 panel relief.",
    en: "The world's largest Buddhist stepped stupa monument erected by the Sailendra Dynasty in Central Java featuring 2,672 relief panels."
  },
  year: 825,
  era: "medieval",
  location: {
    name: {
      id: "Magelang (Jawa Tengah), Indonesia",
      en: "Magelang (Central Java), Indonesia"
    },
    lat: -7.6079,
    lng: 110.2038
  },
  confidence: "verified",
  references: [
    {
      author: "John Miksic",
      title: "Borobudur: Golden Tales of the Buddhas",
      publisher: "Tuttle Publishing",
      year: 1990,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "arsitektur",
    "monumen",
    "agama",
    "seni"
  ]
},
  {
  id: "pembangunan-candi-prambanan",
  slug: {
    id: "pembangunan-candi-prambanan",
    en: "construction-of-prambanan"
  },
  title: {
    id: "Pembangunan Kompleks Percandian Prambanan",
    en: "Construction of Prambanan Temple"
  },
  summary: {
    id: "Kompleks candi Hindu Trimurti termegah di Asia Tenggara yang didirikan Raja Rakai Pikatan dari Mataram Kuno untuk memuja Dewa Siwa.",
    en: "Southeast Asia's grandest Hindu Trimurti temple complex built by King Rakai Pikatan of Ancient Mataram dedicated to Shiva."
  },
  year: 856,
  era: "medieval",
  location: {
    name: {
      id: "Sleman / Klaten, Indonesia",
      en: "Sleman / Klaten, Indonesia"
    },
    lat: -7.752,
    lng: 110.4914
  },
  confidence: "verified",
  references: [
    {
      author: "Roy E. Jordaan",
      title: "In Praise of Prambanan: Dutch Essays on the Loro Jonggrang Temple Complex",
      publisher: "KITLV Press",
      year: 1996,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "arsitektur",
    "monumen",
    "agama",
    "seni"
  ]
},
  {
  id: "dinasti-song-penemuan-mesiu",
  slug: {
    id: "dinasti-song-penemuan-mesiu",
    en: "song-dynasty-gunpowder-inventions"
  },
  title: {
    id: "Era Inovasi Sains & Mesiu Dinasti Song",
    en: "Song Dynasty Scientific & Gunpowder Era"
  },
  summary: {
    id: "Zaman keemasan inovasi Tiongkok yang memelopori formula mesiu militer, jarum kompas maritim, dan uang kertas pertama di dunia (Jiaozi).",
    en: "Golden age of Chinese technological innovation pioneering military gunpowder formulas, mariner magnetic compasses, and paper currency."
  },
  year: 1044,
  era: "medieval",
  location: {
    name: {
      id: "Kaifeng (Henan), Tiongkok",
      en: "Kaifeng (Henan), China"
    },
    lat: 34.7972,
    lng: 114.3072
  },
  confidence: "verified",
  references: [
    {
      author: "Joseph Needham",
      title: "Science and Civilisation in China (Vol. 5)",
      publisher: "Cambridge University Press",
      year: 1986,
      type: "book"
    }
  ],
  tags: [
    "sains",
    "teknologi",
    "asia",
    "ekonomi"
  ]
},
  {
  id: "penaklukan-norman-1066",
  slug: {
    id: "penaklukan-norman-1066",
    en: "norman-conquest-1066"
  },
  title: {
    id: "Penaklukan Norman atas Inggris (1066)",
    en: "Norman Conquest of England (1066)"
  },
  summary: {
    id: "Adipati William dari Normandia mengalahkan Raja Harold II dalam Pertempuran Hastings, merombak bahasa Inggris, dan menyusun Domesday Book.",
    en: "Duke William of Normandy defeated King Harold II at the Battle of Hastings, fundamentally transforming English culture and law."
  },
  year: 1066,
  era: "medieval",
  location: {
    name: {
      id: "Hastings (East Sussex), Inggris",
      en: "Hastings (East Sussex), England"
    },
    lat: 50.9136,
    lng: 0.4878
  },
  confidence: "verified",
  references: [
    {
      author: "David Bates",
      title: "William the Conqueror",
      publisher: "Yale University Press",
      year: 2016,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "eropa",
    "politik",
    "hukum"
  ]
},
  {
  id: "perang-salib-pertama-yerusalem",
  slug: {
    id: "perang-salib-pertama-yerusalem",
    en: "first-crusade-siege-of-jerusalem"
  },
  title: {
    id: "Perang Salib I & Perebutan Yerusalem",
    en: "First Crusade & Capture of Jerusalem"
  },
  summary: {
    id: "Pasukan ksatria Kristen Eropa Barat merebut kota Yerusalem setelah seruan Paus Urbanus II di Clermont, mendirikan Kerajaan Latin Yerusalem.",
    en: "Western European Crusader knights captured Jerusalem following Pope Urban II's council, establishing the Latin Kingdom of Jerusalem."
  },
  year: 1099,
  era: "medieval",
  location: {
    name: {
      id: "Yerusalem",
      en: "Jerusalem"
    },
    lat: 31.7683,
    lng: 35.2137
  },
  confidence: "verified",
  references: [
    {
      author: "Thomas Asbridge",
      title: "The First Crusade: A New History",
      publisher: "Oxford University Press",
      year: 2004,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "agama",
    "timur-tengah",
    "eropa"
  ]
},
  {
  id: "pembangunan-angkor-wat",
  slug: {
    id: "pembangunan-angkor-wat",
    en: "construction-of-angkor-wat"
  },
  title: {
    id: "Pembangunan Monumen Candi Angkor Wat",
    en: "Construction of Angkor Wat Temple"
  },
  summary: {
    id: "Candi monumen keagamaan terbesar di dunia yang dibangun oleh Raja Suryavarman II dari Kekaisaran Khmer sebagai representasi Gunung Meru.",
    en: "The world's largest religious stone monument built by Khmer Emperor Suryavarman II representing the cosmic Mount Meru."
  },
  year: 1150,
  era: "medieval",
  location: {
    name: {
      id: "Siem Reap, Kamboja",
      en: "Siem Reap, Cambodia"
    },
    lat: 13.4125,
    lng: 103.867
  },
  confidence: "verified",
  references: [
    {
      author: "Michael Freeman & Claude Jacques",
      title: "Ancient Angkor",
      publisher: "River Books",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "arsitektur",
    "asia",
    "monumen",
    "agama"
  ]
},
  {
  id: "magna-carta-1215",
  slug: {
    id: "magna-carta-1215",
    en: "signing-of-magna-carta"
  },
  title: {
    id: "Penandatanganan Piagam Agung Magna Carta",
    en: "Sealing of the Magna Carta"
  },
  summary: {
    id: "Raja John dari Inggris menandatangani piagam bersejarah di Runnymede yang membatasi kesewenang-wenangan monarki di hadapan supremasi hukum.",
    en: "King John of England granted the historic charter at Runnymede establishing that the sovereign is subject to the rule of law."
  },
  year: 1215,
  era: "medieval",
  location: {
    name: {
      id: "Runnymede (Surrey), Inggris",
      en: "Runnymede (Surrey), England"
    },
    lat: 51.4442,
    lng: -0.5653
  },
  confidence: "verified",
  references: [
    {
      author: "Nicholas Vincent",
      title: "Magna Carta: A Very Short Introduction",
      publisher: "Oxford University Press",
      year: 2012,
      type: "book"
    }
  ],
  tags: [
    "hukum",
    "politik",
    "demokrasi",
    "eropa"
  ]
},
  {
  id: "pertempuran-ain-jalut",
  slug: {
    id: "pertempuran-ain-jalut",
    en: "battle-of-ain-jalut"
  },
  title: {
    id: "Pertempuran Ain Jalut (1260)",
    en: "Battle of Ain Jalut (1260)"
  },
  summary: {
    id: "Tentara Mamluk Kairo pimpinan Sultan Saifuddin Qutuz dan Baibars mematahkan gerak maju pasukan Mongol Ilkhanat pertama kali di Levant.",
    en: "Mamluk Sultan Qutuz and Baibars inflicted the first permanent strategic defeat on the Mongol army in the Levant."
  },
  year: 1260,
  era: "medieval",
  location: {
    name: {
      id: "Lembah Jezreel, Palestina / Israel",
      en: "Jezreel Valley, Palestine / Israel"
    },
    lat: 32.55,
    lng: 35.3667
  },
  confidence: "verified",
  references: [
    {
      author: "Reuven Amitai-Preiss",
      title: "Mongols and Mamluks: The Mamluk-Ilkhanid War, 1260–1281",
      publisher: "Cambridge University Press",
      year: 1995,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "militer",
    "timur-tengah",
    "islam"
  ]
},
  {
  id: "kesultanan-samudera-pasai",
  slug: {
    id: "kesultanan-samudera-pasai",
    en: "samudera-pasai-sultanate"
  },
  title: {
    id: "Kesultanan Samudera Pasai di Aceh",
    en: "Samudera Pasai Sultanate in Aceh"
  },
  summary: {
    id: "Kerajaan Islam maritim pertama di Nusantara yang didirikan Sultan Malikussaleh, menjadi pusat percetakan koin emas Deureuham dan studi Islam.",
    en: "The first Islamic maritime sultanate in the Indonesian archipelago founded by Sultan Malikussaleh, minting gold Deureuham coins."
  },
  year: 1267,
  era: "medieval",
  location: {
    name: {
      id: "Lhokseumawe (Aceh), Indonesia",
      en: "Lhokseumawe (Aceh), Indonesia"
    },
    lat: 5.1801,
    lng: 97.1408
  },
  confidence: "verified",
  references: [
    {
      author: "Anthony Reid",
      title: "Southeast Asia in the Age of Commerce, 1450-1680",
      publisher: "Yale University Press",
      year: 1993,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "maritim",
    "agama",
    "ekonomi"
  ]
},
  {
  id: "perjalanan-marco-polo",
  slug: {
    id: "perjalanan-marco-polo",
    en: "travels-of-marco-polo"
  },
  title: {
    id: "Perjalanan Marco Polo ke Istana Kubilai Khan",
    en: "Travels of Marco Polo to Kublai Khan"
  },
  summary: {
    id: "Penjelajah Venesia Marco Polo mengarungi Jalur Sutra menuju Tiongkok Dinasti Yuan, menuliskan catatan legendaris tentang kekayaan Asia.",
    en: "Venetian merchant Marco Polo traversed the Silk Road to the court of Kublai Khan, dictating legendary chronicles of Asia."
  },
  year: 1271,
  era: "medieval",
  location: {
    name: {
      id: "Venesia, Italia",
      en: "Venice, Italy"
    },
    lat: 45.4408,
    lng: 12.3155
  },
  confidence: "verified",
  references: [
    {
      author: "Laurence Bergreen",
      title: "Marco Polo: From Venice to Xanadu",
      publisher: "Knopf",
      year: 2007,
      type: "book"
    }
  ],
  tags: [
    "eksplorasi",
    "eropa",
    "asia",
    "budaya"
  ]
},
  {
  id: "haji-mansa-musa-ke-mekkah",
  slug: {
    id: "haji-mansa-musa-ke-mekkah",
    en: "pilgrimage-of-mansa-musa"
  },
  title: {
    id: "Perjalanan Haji Bersejarah Mansa Musa",
    en: "Historic Pilgrimage of Mansa Musa"
  },
  summary: {
    id: "Kaisar Mali Mansa Musa memimpin kafilah 60.000 orang melintasi Sahara ke Kairo dan Mekkah, membagi-bagikan berton-ton emas yang mengguncang ekonomi dunia.",
    en: "Emperor Mansa Musa of Mali led 60,000 pilgrims across the Sahara to Mecca, distributing tons of gold that depressed regional bullion markets."
  },
  year: 1324,
  era: "medieval",
  location: {
    name: {
      id: "Timbuktu, Mali",
      en: "Timbuktu, Mali"
    },
    lat: 16.7666,
    lng: -3.0026
  },
  confidence: "verified",
  references: [
    {
      author: "Michael A. Gomez",
      title: "African Dominion: A New History of Empire in Early and Medieval West Africa",
      publisher: "Princeton University Press",
      year: 2018,
      type: "book"
    }
  ],
  tags: [
    "afrika",
    "ekonomi",
    "agama",
    "budaya"
  ]
},
  {
  id: "alhambra-granada",
  slug: {
    id: "alhambra-granada",
    en: "alhambra-nasrid-palace"
  },
  title: {
    id: "Pembangunan Istana Benteng Alhambra",
    en: "Construction of the Alhambra Palace"
  },
  summary: {
    id: "Puncak mahakarya seni arsitektur Moor Islam Dinasti Nasrid di Granada dengan ukiran stuko kaligrafi rumit dan taman air Generalife.",
    en: "The pinnacle of Moorish Islamic architectural art under the Nasrid Dynasty in Granada, famed for courtyard fountains and arabesque stucco."
  },
  year: 1333,
  era: "medieval",
  location: {
    name: {
      id: "Granada (Andalusia), Spanyol",
      en: "Granada (Andalusia), Spain"
    },
    lat: 37.1773,
    lng: -3.5986
  },
  confidence: "verified",
  references: [
    {
      author: "Robert Irwin",
      title: "The Alhambra",
      publisher: "Harvard University Press",
      year: 2004,
      type: "book"
    }
  ],
  tags: [
    "arsitektur",
    "seni",
    "eropa",
    "monumen"
  ]
},
  {
  id: "sumpah-palapa-gajah-mada",
  slug: {
    id: "sumpah-palapa-gajah-mada",
    en: "palapa-oath-of-gajah-mada"
  },
  title: {
    id: "Ikrar Sumpah Palapa Mahapatih Gajah Mada",
    en: "Palapa Oath of Prime Minister Gajah Mada"
  },
  summary: {
    id: "Mahapatih Majapahit Gajah Mada mengikrarkan sumpah sakral untuk tidak menikmati kenikmatan duniawi sebelum menyatukan kepulauan Nusantara.",
    en: "Majapahit Prime Minister Gajah Mada swore the sacred oath to forgo worldly pleasures until uniting the Nusantara archipelago."
  },
  year: 1336,
  era: "medieval",
  location: {
    name: {
      id: "Trowulan (Mojokerto), Indonesia",
      en: "Trowulan (Mojokerto), Indonesia"
    },
    lat: -7.5583,
    lng: 112.3833
  },
  confidence: "verified",
  references: [
    {
      author: "Slamet Muljana",
      title: "Menuju Puncak Kemegahan: Sejarah Kerajaan Majapahit",
      publisher: "LKiS",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "politik",
    "imperium",
    "maritim"
  ]
},
  {
  id: "wabah-kematian-hitam-black-death",
  slug: {
    id: "wabah-kematian-hitam-black-death",
    en: "black-death-pandemic"
  },
  title: {
    id: "Pandemi Wabah Kematian Hitam (Black Death)",
    en: "The Black Death Pandemic"
  },
  summary: {
    id: "Wabah pes pes bubonik yang menyebar dari jalur kapal dagang Genoa, merenggut nyawa 75-200 juta penduduk Eurasia dan merombak tatanan feodal Eropa.",
    en: "Bubonic plague pandemic spreading via merchant galleys that decimated 75-200 million across Eurasia, dismantling European feudalism."
  },
  year: 1347,
  era: "medieval",
  location: {
    name: {
      id: "Messina (Sisilia), Italia",
      en: "Messina (Sicily), Italy"
    },
    lat: 38.1938,
    lng: 15.554
  },
  confidence: "verified",
  references: [
    {
      author: "John Kelly",
      title: "The Great Mortality: An Intimate History of the Black Death",
      publisher: "HarperCollins",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "global",
    "eropa",
    "budaya"
  ]
},
  {
  id: "perang-seratus-tahun-joan-of-arc",
  slug: {
    id: "perang-seratus-tahun-joan-of-arc",
    en: "joan-of-arc-siege-of-orleans"
  },
  title: {
    id: "Perjuangan Joan of Arc di Pengepungan Orléans",
    en: "Joan of Arc & the Siege of Orléans"
  },
  summary: {
    id: "Gadis petani remaja Joan of Arc memimpin pasukan Prancis mematahkan pengepungan tentara Inggris di Orléans dan memahkotai Raja Charles VII.",
    en: "Peasant teenager Joan of Arc inspired French armies to lift the English siege of Orléans, turning the tide of the Hundred Years' War."
  },
  year: 1429,
  era: "medieval",
  location: {
    name: {
      id: "Orléans, Prancis",
      en: "Orléans, France"
    },
    lat: 47.9029,
    lng: 1.9093
  },
  confidence: "verified",
  references: [
    {
      author: "Helen Castor",
      title: "Joan of Arc: A History",
      publisher: "HarperCollins",
      year: 2015,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "eropa",
    "militer",
    "agama"
  ]
},
  {
  id: "penemuan-mesin-cetak-gutenberg",
  slug: {
    id: "penemuan-mesin-cetak-gutenberg",
    en: "gutenberg-printing-press"
  },
  title: {
    id: "Penemuan Mesin Cetak Huruf Timah Gutenberg",
    en: "Invention of Gutenberg's Movable Type Press"
  },
  summary: {
    id: "Johannes Gutenberg mengembangkan mesin cetak huruf timah bergerak di Mainz, memicu revolusi produksi buku massal dan penyebaran ilmu pengetahuan.",
    en: "Johannes Gutenberg developed movable metal type printing in Mainz, igniting an information revolution and mass literacy across Europe."
  },
  year: 1440,
  era: "medieval",
  location: {
    name: {
      id: "Mainz, Jerman",
      en: "Mainz, Germany"
    },
    lat: 49.9929,
    lng: 8.2473
  },
  confidence: "verified",
  references: [
    {
      author: "John Man",
      title: "The Gutenberg Revolution",
      publisher: "Bantam Press",
      year: 2002,
      type: "book"
    }
  ],
  tags: [
    "teknologi",
    "sains",
    "eropa",
    "literatur",
    "tulisan"
  ]
},
  {
  id: "kejatuhan-konstantinopel-1453",
  slug: {
    id: "kejatuhan-konstantinopel-1453",
    en: "fall-of-constantinople-1453"
  },
  title: {
    id: "Kejatuhan Konstantinopel ke Tangan Utsmaniyah",
    en: "Fall of Constantinople to the Ottomans"
  },
  summary: {
    id: "Sultan Utsmaniyah Mehmed II menaklukkan benteng legendaris Konstantinopel menggunakan meriam raksasa, mengakhiri 1.100 tahun Kekaisaran Bizantium.",
    en: "Ottoman Sultan Mehmed II conquered the fortified bastion of Constantinople using super-cannons, concluding 1,100 years of Byzantine rule."
  },
  year: 1453,
  era: "medieval",
  location: {
    name: {
      id: "Istanbul, Turki",
      en: "Istanbul, Turkey"
    },
    lat: 41.0082,
    lng: 28.9784
  },
  confidence: "verified",
  references: [
    {
      author: "Roger Crowley",
      title: "1453: The Holy War for Constantinople and the Clash of Islam and the West",
      publisher: "Hyperion",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "imperium",
    "timur-tengah",
    "eropa"
  ]
},
  {
  id: "penaklukan-malaka-1511",
  slug: {
    id: "penaklukan-malaka-1511",
    en: "portuguese-conquest-of-malacca"
  },
  title: {
    id: "Penaklukan Malaka oleh Portugis (1511)",
    en: "Portuguese Conquest of Malacca (1511)"
  },
  summary: {
    id: "Armada Portugis di bawah Afonso de Albuquerque merebut pelabuhan strategis Kesultanan Melaka, membuka kolonisasi bangsa Eropa di Asia Tenggara.",
    en: "Portuguese armada under Afonso de Albuquerque captured the strategic Sultanate of Malacca, inaugurating European colonization in Southeast Asia."
  },
  year: 1511,
  era: "early-modern",
  location: {
    name: {
      id: "Melaka, Malaysia",
      en: "Malacca, Malaysia"
    },
    lat: 2.1896,
    lng: 102.2501
  },
  confidence: "verified",
  references: [
    {
      author: "M.C. Ricklefs",
      title: "A History of Modern Indonesia",
      publisher: "Stanford University Press",
      year: 2008,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "maritim",
    "perang",
    "ekonomi"
  ]
},
  {
  id: "reformasi-protestan-martin-luther",
  slug: {
    id: "reformasi-protestan-martin-luther",
    en: "protestant-reformation-martin-luther"
  },
  title: {
    id: "95 Tesis Martin Luther & Reformasi Protestan",
    en: "Martin Luther's 95 Theses & Reformation"
  },
  summary: {
    id: "Penyebaran 95 Tesis kritis terhadap praktik indulgensi Gereja Katolik di Wittenberg yang memicu reformasi keagamaan dan politik besar-besaran di Eropa.",
    en: "Martin Luther's 95 Theses protesting indulgence sales in Wittenberg catalyzed the Protestant Reformation, reshaping European society."
  },
  year: 1517,
  era: "early-modern",
  location: {
    name: {
      id: "Wittenberg (Sachsen-Anhalt), Jerman",
      en: "Wittenberg (Saxony-Anhalt), Germany"
    },
    lat: 51.8667,
    lng: 12.6433
  },
  confidence: "verified",
  references: [
    {
      author: "Diarmaid MacCulloch",
      title: "The Reformation: A History",
      publisher: "Penguin Books",
      year: 2004,
      type: "book"
    }
  ],
  tags: [
    "agama",
    "filsafat",
    "eropa",
    "politik"
  ]
},
  {
  id: "pelayaran-magellan-elcano",
  slug: {
    id: "pelayaran-magellan-elcano",
    en: "magellan-elcano-circumnavigation"
  },
  title: {
    id: "Pelayaran Keliling Dunia Pertama Magellan-Elcano",
    en: "First Global Circumnavigation by Magellan-Elcano"
  },
  summary: {
    id: "Kapal Victoria pimpinan Juan Sebastián Elcano berhasil menyelesaikan pelayaran keliling bumi pertama dan memborong cengkih di Pulau Tidore, Maluku.",
    en: "The flagship Victoria under Juan Sebastián Elcano completed the first global circumnavigation, trading for cloves in Tidore, Maluku."
  },
  year: 1522,
  era: "early-modern",
  location: {
    name: {
      id: "Pulau Tidore (Maluku Utara), Indonesia",
      en: "Tidore Island (North Maluku), Indonesia"
    },
    lat: 0.6869,
    lng: 127.4042
  },
  confidence: "verified",
  references: [
    {
      author: "Laurence Bergreen",
      title: "Over the Edge of the World: Magellan's Terrifying Circumnavigation",
      publisher: "William Morrow",
      year: 2003,
      type: "book"
    }
  ],
  tags: [
    "eksplorasi",
    "maritim",
    "nusantara",
    "global"
  ]
},
  {
  id: "puncak-utsmaniyah-suleiman",
  slug: {
    id: "puncak-utsmaniyah-suleiman",
    en: "suleiman-the-magnificent-zenith"
  },
  title: {
    id: "Puncak Kejayaan Utsmaniyah di Bawah Suleiman",
    en: "Zenith of Ottoman Empire under Suleiman"
  },
  summary: {
    id: "Sultan Suleiman Al-Qanuni memimpin ekspansi kekaisaran ke jantung Eropa Tengah di Pertempuran Mohács serta kodifikasi hukum Utsmaniyah.",
    en: "Sultan Suleiman the Lawgiver spearheaded Ottoman expansion into Central Europe at Mohács and codified imperial legal institutions."
  },
  year: 1526,
  era: "early-modern",
  location: {
    name: {
      id: "Mohács (Baranya), Hungaria",
      en: "Mohács (Baranya), Hungary"
    },
    lat: 45.9922,
    lng: 18.6833
  },
  confidence: "verified",
  references: [
    {
      author: "Caroline Finkel",
      title: "Osman's Dream: The History of the Ottoman Empire",
      publisher: "Basic Books",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "imperium",
    "perang",
    "hukum",
    "eropa",
    "timur-tengah"
  ]
},
  {
  id: "keshogunan-tokugawa-edo",
  slug: {
    id: "keshogunan-tokugawa-edo",
    en: "tokugawa-shogunate-edo-founding"
  },
  title: {
    id: "Pendirian Keshogunan Tokugawa di Edo (Tokyo)",
    en: "Founding of the Tokugawa Shogunate in Edo"
  },
  summary: {
    id: "Tokugawa Ieyasu menyatukan Jepang pasca-Pertempuran Sekigahara, mendirikan ibu kota Edo dan menetapkan dua setengah abad kedamaian Pax Tokugawa.",
    en: "Tokugawa Ieyasu unified Japan post-Sekigahara, establishing Edo as capital and inaugurating two and a half centuries of Pax Tokugawa."
  },
  year: 1603,
  era: "early-modern",
  location: {
    name: {
      id: "Tokyo (Edo), Jepang",
      en: "Tokyo (Edo), Japan"
    },
    lat: 35.6895,
    lng: 139.6917
  },
  confidence: "verified",
  references: [
    {
      author: "Conrad Totman",
      title: "Early Modern Japan",
      publisher: "University of California Press",
      year: 1993,
      type: "book"
    }
  ],
  tags: [
    "asia",
    "politik",
    "kota",
    "budaya"
  ]
},
  {
  id: "pendirian-voc-di-batavia",
  slug: {
    id: "pendirian-voc-di-batavia",
    en: "founding-of-voc-batavia"
  },
  title: {
    id: "Penaklukan Jayakarta & Markas VOC di Batavia",
    en: "Conquest of Jayakarta & VOC Base at Batavia"
  },
  summary: {
    id: "Gubernur Jenderal Jan Pieterszoon Coen menaklukkan Jayakarta dan mendirikan benteng kota Batavia sebagai pusat hegemoni kongsi dagang VOC di Asia.",
    en: "Governor-General J.P. Coen captured Jayakarta and constructed Batavia fortress as headquarters for Dutch VOC commercial hegemony in Asia."
  },
  year: 1619,
  era: "early-modern",
  location: {
    name: {
      id: "Kota Tua Jakarta, Indonesia",
      en: "Old Town Jakarta, Indonesia"
    },
    lat: -6.1352,
    lng: 106.8133
  },
  confidence: "verified",
  references: [
    {
      author: "Leonard Blussé",
      title: "Strange Company: Chinese Settlers, Mestizo Women and the Dutch in VOC Batavia",
      publisher: "KITLV",
      year: 1986,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "ekonomi",
    "maritim",
    "kota"
  ]
},
  {
  id: "kesultanan-mataram-sultan-agung",
  slug: {
    id: "kesultanan-mataram-sultan-agung",
    en: "sultan-agung-siege-of-batavia"
  },
  title: {
    id: "Kejayaan Kesultanan Mataram & Sultan Agung",
    en: "Mataram Sultanate & Sultan Agung's Reign"
  },
  summary: {
    id: "Sultan Agung Hanyokrokusumo menyatukan sebagian besar Pulau Jawa, menciptakan Kalender Jawa Islam, dan melancarkan penyerbuan akbar ke Batavia.",
    en: "Sultan Agung consolidated Javanese hegemony, synthesized the Islamic Javanese Calendar, and launched massive military sieges against Batavia."
  },
  year: 1628,
  era: "early-modern",
  location: {
    name: {
      id: "Pleret (Bantul), Yogyakarta, Indonesia",
      en: "Pleret (Bantul), Yogyakarta, Indonesia"
    },
    lat: -7.8711,
    lng: 110.3958
  },
  confidence: "verified",
  references: [
    {
      author: "H.J. de Graaf",
      title: "Puncak Kekuasaan Mataram: Politik Ekspansi Sultan Agung",
      publisher: "Pustaka Utama Grafiti",
      year: 1986,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "politik",
    "militer",
    "budaya"
  ]
},
  {
  id: "pembangunan-taj-mahal-mughal",
  slug: {
    id: "pembangunan-taj-mahal-mughal",
    en: "construction-of-the-taj-mahal"
  },
  title: {
    id: "Pembangunan Mahakarya Taj Mahal di Agra",
    en: "Construction of the Taj Mahal at Agra"
  },
  summary: {
    id: "Kaisar Mughal Shah Jahan mendirikan mausoleum marmer putih berhiaskan batu mulia di tepi Sungai Yamuna sebagai lambang cinta abadi untuk Mumtaz Mahal.",
    en: "Mughal Emperor Shah Jahan commissioned the white marble jewel along the Yamuna River as a monumental mausoleum for Mumtaz Mahal."
  },
  year: 1632,
  era: "early-modern",
  location: {
    name: {
      id: "Agra (Uttar Pradesh), India",
      en: "Agra (Uttar Pradesh), India"
    },
    lat: 27.1751,
    lng: 78.0421
  },
  confidence: "verified",
  references: [
    {
      author: "Ebba Koch",
      title: "The Complete Taj Mahal: And the Riverfront Gardens of Agra",
      publisher: "Thames & Hudson",
      year: 2006,
      type: "book"
    }
  ],
  tags: [
    "arsitektur",
    "asia",
    "monumen",
    "seni"
  ]
},
  {
  id: "perdamaian-westphalia-1648",
  slug: {
    id: "perdamaian-westphalia-1648",
    en: "peace-of-westphalia-1648"
  },
  title: {
    id: "Perjanjian Damai Westphalia (1648)",
    en: "Peace of Westphalia Treaties (1648)"
  },
  summary: {
    id: "Rangkaian perjanjian damai di Münster dan Osnabrück yang mengakhiri Perang Tiga Puluh Tahun dan melahirkan tatanan kedaulatan negara-bangsa modern.",
    en: "Treaties signed in Münster and Osnabrück ending the Thirty Years' War, birthing modern principles of sovereign nation-state diplomacy."
  },
  year: 1648,
  era: "early-modern",
  location: {
    name: {
      id: "Münster (Nordrhein-Westfalen), Jerman",
      en: "Münster (North Rhine-Westphalia), Germany"
    },
    lat: 51.9607,
    lng: 7.6261
  },
  confidence: "verified",
  references: [
    {
      author: "Peter H. Wilson",
      title: "The Thirty Years War: Europe's Tragedy",
      publisher: "Harvard University Press",
      year: 2009,
      type: "book"
    }
  ],
  tags: [
    "diplomasi",
    "hukum",
    "politik",
    "eropa"
  ]
},
  {
  id: "istana-versailles-louis-xiv",
  slug: {
    id: "istana-versailles-louis-xiv",
    en: "palace-of-versailles-louis-xiv"
  },
  title: {
    id: "Pusat Monarki Absolut di Istana Versailles",
    en: "Palace of Versailles & Absolute Monarchy"
  },
  summary: {
    id: "Raja Matahari Louis XIV mengubah pondok berburu menjadi kompleks istana dan taman air termegah Eropa sebagai simbol kekuasaan monarki absolut Prancis.",
    en: "Sun King Louis XIV transformed Versailles into Europe's grandest baroque palace complex, cementing French absolutist royal authority."
  },
  year: 1682,
  era: "early-modern",
  location: {
    name: {
      id: "Versailles (Île-de-France), Prancis",
      en: "Versailles (Île-de-France), France"
    },
    lat: 48.8049,
    lng: 2.1204
  },
  confidence: "verified",
  references: [
    {
      author: "Guy Walton",
      title: "Louis XIV's Versailles",
      publisher: "University of Chicago Press",
      year: 1986,
      type: "book"
    }
  ],
  tags: [
    "arsitektur",
    "politik",
    "eropa",
    "seni"
  ]
},
  {
  id: "revolusi-ilmiah-newton-principia",
  slug: {
    id: "revolusi-ilmiah-newton-principia",
    en: "isaac-newton-principia-mathematica"
  },
  title: {
    id: "Publikasi Principia Mathematica Isaac Newton",
    en: "Publication of Newton's Principia Mathematica"
  },
  summary: {
    id: "Sir Isaac Newton menerbitkan tiga hukum gerak dan hukum gravitasi universal di Cambridge, meletakkan fondasi sains fisika klasik dan mekanika modern.",
    en: "Sir Isaac Newton formulated the three laws of motion and universal gravitation, establishing the foundations of classical physics."
  },
  year: 1687,
  era: "early-modern",
  location: {
    name: {
      id: "Cambridge, Inggris",
      en: "Cambridge, England"
    },
    lat: 52.2053,
    lng: 0.1218
  },
  confidence: "verified",
  references: [
    {
      author: "Richard S. Westfall",
      title: "Never at Rest: A Biography of Isaac Newton",
      publisher: "Cambridge University Press",
      year: 1980,
      type: "book"
    }
  ],
  tags: [
    "sains",
    "teknologi",
    "filsafat",
    "eropa"
  ]
},
  {
  id: "deklarasi-kemerdekaan-amerika-1776",
  slug: {
    id: "deklarasi-kemerdekaan-amerika-1776",
    en: "us-declaration-of-independence-1776"
  },
  title: {
    id: "Deklarasi Kemerdekaan Amerika Serikat (1776)",
    en: "United States Declaration of Independence"
  },
  summary: {
    id: "Thomas Jefferson dan Kongres Kontinental Kedua di Philadelphia mendeklarasikan pemisahan 13 koloni dari Britania Raya atas dasar hak asasi manusia.",
    en: "Thomas Jefferson and the Continental Congress proclaimed the thirteen colonies' separation from Britain based on inalienable human rights."
  },
  year: 1776,
  era: "early-modern",
  location: {
    name: {
      id: "Philadelphia (Pennsylvania), Amerika Serikat",
      en: "Philadelphia (Pennsylvania), USA"
    },
    lat: 39.9489,
    lng: -75.15
  },
  confidence: "verified",
  references: [
    {
      author: "David McCullough",
      title: "1776",
      publisher: "Simon & Schuster",
      year: 2005,
      type: "book"
    }
  ],
  tags: [
    "kemerdekaan",
    "demokrasi",
    "politik",
    "amerika"
  ]
},
  {
  id: "perang-napoleon-waterloo",
  slug: {
    id: "perang-napoleon-waterloo",
    en: "battle-of-waterloo-1815"
  },
  title: {
    id: "Pertempuran Pamungkas Waterloo (1815)",
    en: "The Climax of Waterloo (1815)"
  },
  summary: {
    id: "Pasukan koalisi Sekutu pimpinan Adipati Wellington dan Marsekal Blücher menundukkan Kaisar Napoleon Bonaparte di Belgia, mengakhiri Perang Napoleon.",
    en: "Allied coalition forces under Wellington and Blücher decisively defeated Napoleon Bonaparte in Belgium, terminating the Napoleonic Wars."
  },
  year: 1815,
  era: "modern",
  location: {
    name: {
      id: "Waterloo (Walloon Brabant), Belgia",
      en: "Waterloo (Walloon Brabant), Belgium"
    },
    lat: 50.6797,
    lng: 4.4121
  },
  confidence: "verified",
  references: [
    {
      author: "Gordon Corrigan",
      title: "Waterloo: A New History of the Battle and Its Armies",
      publisher: "Pegasus Books",
      year: 2014,
      type: "book"
    }
  ],
  tags: [
    "perang",
    "militer",
    "eropa",
    "politik"
  ]
},
  {
  id: "perang-diponegoro-jawa",
  slug: {
    id: "perang-diponegoro-jawa",
    en: "diponegoro-java-war"
  },
  title: {
    id: "Perang Jawa & Pangeran Diponegoro (1825–1830)",
    en: "The Java War & Prince Diponegoro"
  },
  summary: {
    id: "Pangeran Diponegoro memimpin perlawanan gerilya semesta rakyat Jawa melawan penindasan kolonial Belanda yang menguras kas Kerajaan Belanda.",
    en: "Prince Diponegoro led an all-out five-year guerrilla war against Dutch colonial hegemony across Java, exhausting the Dutch treasury."
  },
  year: 1825,
  era: "modern",
  location: {
    name: {
      id: "Magelang / Tegalrejo (Jawa Tengah), Indonesia",
      en: "Magelang / Tegalrejo (Central Java), Indonesia"
    },
    lat: -7.4706,
    lng: 110.2178
  },
  confidence: "verified",
  references: [
    {
      author: "Peter Carey",
      title: "The Power of Prophecy: Prince Dipanagara and the End of an Old Order in Java, 1785–1855",
      publisher: "KITLV Press",
      year: 2007,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "perang",
    "kemerdekaan",
    "militer"
  ]
},
  {
  id: "restorasi-meiji-jepang",
  slug: {
    id: "restorasi-meiji-jepang",
    en: "meiji-restoration-japan"
  },
  title: {
    id: "Restorasi Meiji & Modernisasi Jepang",
    en: "Meiji Restoration & Modernization of Japan"
  },
  summary: {
    id: "Kembalinya kekuasaan praktis kepada Kaisar Meiji yang membongkar sistem feodal samurai dan memacu industrialisasi kilat Jepang menjadi kekuatan modern.",
    en: "Restoration of imperial rule under Emperor Meiji abolishing the samurai feudal caste and rapidly modernizing Japan into an industrial power."
  },
  year: 1868,
  era: "modern",
  location: {
    name: {
      id: "Kyoto / Tokyo, Jepang",
      en: "Kyoto / Tokyo, Japan"
    },
    lat: 35.0116,
    lng: 135.7681
  },
  confidence: "verified",
  references: [
    {
      author: "Marius B. Jansen",
      title: "The Making of Modern Japan",
      publisher: "Harvard University Press",
      year: 2000,
      type: "book"
    }
  ],
  tags: [
    "asia",
    "politik",
    "revolusi",
    "teknologi"
  ]
},
  {
  id: "terusan-suez-dibuka",
  slug: {
    id: "terusan-suez-dibuka",
    en: "opening-of-the-suez-canal"
  },
  title: {
    id: "Pembukaan Kanal Terusan Suez (1869)",
    en: "Opening of the Suez Canal (1869)"
  },
  summary: {
    id: "Peresmian terusan pelayaran buatan sepanjang 193 km yang menghubungkan Laut Mediterania dengan Laut Merah, memangkas rute kapal Eropa ke Asia.",
    en: "Inauguration of the 193-kilometer maritime canal linking the Mediterranean and Red seas, revolutionizing Eurasian maritime transit."
  },
  year: 1869,
  era: "modern",
  location: {
    name: {
      id: "Port Said / Suez, Mesir",
      en: "Port Said / Suez, Egypt"
    },
    lat: 30.5852,
    lng: 32.2654
  },
  confidence: "verified",
  references: [
    {
      author: "Zachary Karabell",
      title: "Parting the Desert: The Creation of the Suez Canal",
      publisher: "Knopf",
      year: 2003,
      type: "book"
    }
  ],
  tags: [
    "mesir",
    "maritim",
    "teknologi",
    "ekonomi",
    "global"
  ]
},
  {
  id: "konferensi-berlin-scramble-for-africa",
  slug: {
    id: "konferensi-berlin-scramble-for-africa",
    en: "berlin-conference-scramble-for-africa"
  },
  title: {
    id: "Konferensi Berlin & Pembagian Benua Afrika",
    en: "Berlin Conference & the Scramble for Africa"
  },
  summary: {
    id: "Kanselir Otto von Bismarck mengumpulkan kekuatan imperialis Eropa di Berlin untuk membagi-bagikan batas kolonial wilayah benua Afrika.",
    en: "Chancellor Bismarck convened European imperial powers in Berlin to arbitrate and partition colonial borders across the African continent."
  },
  year: 1884,
  era: "modern",
  location: {
    name: {
      id: "Berlin, Jerman",
      en: "Berlin, Germany"
    },
    lat: 52.52,
    lng: 13.405
  },
  confidence: "verified",
  references: [
    {
      author: "Thomas Pakenham",
      title: "The Scramble for Africa: White Man's Conquest of the Dark Continent",
      publisher: "Random House",
      year: 1991,
      type: "book"
    }
  ],
  tags: [
    "diplomasi",
    "afrika",
    "eropa",
    "politik",
    "imperium"
  ]
},
  {
  id: "sumpah-pemuda-1928",
  slug: {
    id: "sumpah-pemuda-1928",
    en: "youth-pledge-indonesia-1928"
  },
  title: {
    id: "Kongres Pemuda II & Ikrar Sumpah Pemuda 1928",
    en: "Second Youth Congress & 1928 Youth Pledge"
  },
  summary: {
    id: "Pertemuan pemuda pejuang pergerakan nasional di Batavia mengikrarkan sumpah sakral Satu Tanah Air, Satu Bangsa, dan Menjunjung Bahasa Persatuan Indonesia.",
    en: "Nationalist youth congress in Batavia proclaimed the sacred pledge of One Motherland, One Nation, and One Unifying Language: Indonesia."
  },
  year: 1928,
  era: "modern",
  location: {
    name: {
      id: "Jalan Kramat Raya 106, Jakarta, Indonesia",
      en: "Jalan Kramat Raya 106, Jakarta, Indonesia"
    },
    lat: -6.1844,
    lng: 106.8436
  },
  confidence: "verified",
  references: [
    {
      author: "M.C. Ricklefs",
      title: "A History of Modern Indonesia since c. 1200",
      publisher: "Stanford University Press",
      year: 2008,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "kemerdekaan",
    "politik",
    "budaya"
  ]
},
  {
  id: "depresi-besar-wall-street-1929",
  slug: {
    id: "depresi-besar-wall-street-1929",
    en: "great-depression-wall-street-crash"
  },
  title: {
    id: "Runtuhnya Pasar Saham Wall Street & Depresi Besar",
    en: "Wall Street Crash & the Great Depression"
  },
  summary: {
    id: "Kepanikan kehancuran bursa saham New York pada 'Black Tuesday' memicu krisis likuiditas perbankan dan depresi ekonomi global terparah dalam sejarah.",
    en: "The catastrophic stock market crash on Black Tuesday precipitated a global banking collapse and the deepest economic depression in history."
  },
  year: 1929,
  era: "modern",
  location: {
    name: {
      id: "Wall Street (New York), Amerika Serikat",
      en: "Wall Street (New York), USA"
    },
    lat: 40.7069,
    lng: -74.009
  },
  confidence: "verified",
  references: [
    {
      author: "John Kenneth Galbraith",
      title: "The Great Crash 1929",
      publisher: "Houghton Mifflin",
      year: 1954,
      type: "book"
    }
  ],
  tags: [
    "ekonomi",
    "global",
    "amerika"
  ]
},
  {
  id: "konferensi-asia-afrika-bandung-1955",
  slug: {
    id: "konferensi-asia-afrika-bandung-1955",
    en: "bandung-asian-african-conference-1955"
  },
  title: {
    id: "Konferensi Tingkat Tinggi Asia-Afrika di Bandung",
    en: "Asian-African Conference in Bandung (1955)"
  },
  summary: {
    id: "Pertemuan bersejarah 29 pemimpin negara merdeka Asia-Afrika di Gedung Merdeka yang mencanangkan Dasa Sila Bandung dan memelopori Gerakan Non-Blok.",
    en: "Historic summit of 29 newly independent Asian and African nations in Bandung promulgating the Ten Principles and birthing the Non-Aligned Movement."
  },
  year: 1955,
  era: "modern",
  location: {
    name: {
      id: "Gedung Merdeka (Bandung), Indonesia",
      en: "Gedung Merdeka (Bandung), Indonesia"
    },
    lat: -6.9215,
    lng: 107.6098
  },
  confidence: "verified",
  references: [
    {
      author: "George McTurnan Kahin",
      title: "The Asian-African Conference: Bandung, Indonesia, April 1955",
      publisher: "Cornell University Press",
      year: 1956,
      type: "book"
    }
  ],
  tags: [
    "nusantara",
    "diplomasi",
    "kemerdekaan",
    "politik",
    "global"
  ]
}
] as HistoricalEvent[]).sort((a, b) => a.year - b.year);