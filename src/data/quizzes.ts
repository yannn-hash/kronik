import { type QuizData } from "@/types/history";

export const QUIZZES: Record<string, QuizData> = {
  "peradaban-mesir-kuno": {
    articleSlug: "peradaban-mesir-kuno",
    title: { id: "Kuis: Piramida & Mesir Kuno", en: "Quiz: Pyramids & Ancient Egypt" },
    questions: [
      {
        id: "q1-mesir",
        question: {
          id: "Siapa Firaun yang makamnya dibangun sebagai Piramida Agung Giza?",
          en: "Which Pharaoh was the Great Pyramid of Giza built for as a tomb?"
        },
        options: [
          { id: "Ramses II", en: "Ramses II" },
          { id: "Tutankhamun", en: "Tutankhamun" },
          { id: "Khufu", en: "Khufu" },
          { id: "Cleopatra", en: "Cleopatra" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Piramida Agung Giza dibangun pada masa Kerajaan Lama sebagai makam kolosal untuk Firaun Khufu.",
          en: "The Great Pyramid of Giza was built during the Old Kingdom as a colossal tomb for Pharaoh Khufu."
        }
      },
      {
        id: "q2-mesir",
        question: {
          id: "Menurut penemuan arkeologi modern, siapa yang membangun piramida?",
          en: "According to modern archaeological discoveries, who built the pyramids?"
        },
        options: [
          { id: "Budak tawanan perang", en: "Prisoner of war slaves" },
          { id: "Pekerja terampil yang dibayar", en: "Skilled, paid workers" },
          { id: "Bangsa asing dari utara", en: "Foreigners from the north" },
          { id: "Tidak diketahui pasti", en: "It is entirely unknown" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Mitos budak telah terbantahkan. Arkeolog menemukan bukti berupa makam pekerja dan catatan gaji yang menunjukkan bahwa mereka adalah pekerja terampil yang dihormati.",
          en: "The slave myth has been debunked. Archaeologists found workers' tombs and payment records showing they were respected, skilled laborers."
        }
      },
      {
        id: "q3-mesir",
        question: {
          id: "Bentuk piramida bagi bangsa Mesir Kuno melambangkan apa?",
          en: "What did the shape of the pyramid symbolize to the Ancient Egyptians?"
        },
        options: [
          { id: "Gunung suci tempat para dewa tinggal", en: "A sacred mountain where gods live" },
          { id: "Sinar matahari yang turun dari langit", en: "Sun rays descending from the sky" },
          { id: "Tenda raksasa perlindungan dari badai gurun", en: "A giant tent protecting from desert storms" },
          { id: "Simbol kekuatan militer tak tertembus", en: "An impenetrable symbol of military strength" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Bentuk piramida (benben) melambangkan sinar dewa matahari (Ra) yang membantu jiwa firaun naik ke surga.",
          en: "The pyramid shape (benben) symbolized the rays of the sun god (Ra), helping the pharaoh's soul ascend to heaven."
        }
      }
    ]
  },
  "revolusi-prancis": {
    articleSlug: "revolusi-prancis",
    title: { id: "Kuis: Revolusi Prancis", en: "Quiz: French Revolution" },
    questions: [
      {
        id: "q1-prancis",
        question: {
          id: "Peristiwa apa pada tanggal 14 Juli 1789 yang menandai dimulainya revolusi secara terang-terangan?",
          en: "What event on July 14, 1789 marked the beginning of open revolution?"
        },
        options: [
          { id: "Eksekusi Raja Louis XVI", en: "Execution of King Louis XVI" },
          { id: "Penyerbuan Penjara Bastille", en: "Storming of the Bastille" },
          { id: "Deklarasi Hak Asasi Manusia", en: "Declaration of the Rights of Man" },
          { id: "Kudeta Napoleon", en: "Napoleon's Coup" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Penyerbuan Bastille adalah momen simbolis runtuhnya tirani kerajaan dan kini dirayakan sebagai hari nasional Prancis.",
          en: "The storming of the Bastille was a symbolic moment of the collapse of royal tyranny and is now celebrated as France's national day."
        }
      },
      {
        id: "q2-prancis",
        question: {
          id: "Siapa golongan (Estate) yang menanggung beban pajak paling berat sebelum revolusi?",
          en: "Which Estate bore the heaviest tax burden before the revolution?"
        },
        options: [
          { id: "Golongan Pertama (Klerus/Agamawan)", en: "First Estate (Clergy)" },
          { id: "Golongan Kedua (Bangsawan)", en: "Second Estate (Nobility)" },
          { id: "Golongan Ketiga (Rakyat Jelata)", en: "Third Estate (Commoners)" },
          { id: "Keluarga Kerajaan", en: "The Royal Family" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Golongan Ketiga (rakyat jelata, petani, kaum borjuis) menanggung hampir seluruh pajak negara, sementara golongan elit dibebaskan.",
          en: "The Third Estate (commoners, peasants, bourgeoisie) paid almost all state taxes, while the elite classes were exempt."
        }
      }
    ]
  }
,

  "peradaban-mesopotamia": {
    articleSlug: "peradaban-mesopotamia",
    title: { id: "Kuis: Mesopotamia", en: "Quiz: Mesopotamia" },
    questions: [
      {
        id: "q1-mesopotamia",
        question: {
          id: "Apa nama sistem tulisan pertama di dunia yang diciptakan oleh bangsa Sumeria?",
          en: "What is the name of the world's first writing system created by the Sumerians?"
        },
        options: [
          { id: "Hieroglif", en: "Hieroglyphs" },
          { id: "Alfabet Latin", en: "Latin Alphabet" },
          { id: "Huruf Paku (Cuneiform)", en: "Cuneiform" },
          { id: "Aksara Han", en: "Han Characters" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Huruf paku (cuneiform) diciptakan sekitar 3200 SM untuk mencatat transaksi dan berkembang menjadi media sastra.",
          en: "Cuneiform was created around 3200 BCE to record transactions and evolved into a literary medium."
        }
      }
    ]
  },
  "kejayaan-yunani-kuno": {
    articleSlug: "kejayaan-yunani-kuno",
    title: { id: "Kuis: Yunani Kuno", en: "Quiz: Ancient Greece" },
    questions: [
      {
        id: "q1-yunani",
        question: {
          id: "Siapa pemimpin yang membawa Athena menuju Zaman Keemasannya?",
          en: "Which leader brought Athens into its Golden Age?"
        },
        options: [
          { id: "Alexander Agung", en: "Alexander the Great" },
          { id: "Perikles", en: "Pericles" },
          { id: "Sokrates", en: "Socrates" },
          { id: "Leonidas", en: "Leonidas" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Di bawah Perikles, Athena mengalami kemajuan pesat dalam bidang demokrasi, seni, dan filsafat.",
          en: "Under Pericles, Athens experienced rapid advancements in democracy, art, and philosophy."
        }
      }
    ]
  },
  "kekaisaran-romawi": {
    articleSlug: "kekaisaran-romawi",
    title: { id: "Kuis: Kekaisaran Romawi", en: "Quiz: Roman Empire" },
    questions: [
      {
        id: "q1-roma",
        question: {
          id: "Siapa Kaisar pertama yang menandai berakhirnya Republik Romawi?",
          en: "Who was the first Emperor that marked the end of the Roman Republic?"
        },
        options: [
          { id: "Julius Caesar", en: "Julius Caesar" },
          { id: "Nero", en: "Nero" },
          { id: "Augustus Caesar", en: "Augustus Caesar" },
          { id: "Marcus Aurelius", en: "Marcus Aurelius" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Augustus Caesar naik takhta pada 27 SM, memulai era Kekaisaran dan Pax Romana.",
          en: "Augustus Caesar ascended the throne in 27 BCE, initiating the Empire era and Pax Romana."
        }
      }
    ]
  },
  "kelahiran-islam": {
    articleSlug: "kelahiran-islam",
    title: { id: "Kuis: Kelahiran Islam", en: "Quiz: Birth of Islam" },
    questions: [
      {
        id: "q1-islam",
        question: {
          id: "Peristiwa apa yang menjadi awal perhitungan kalender Hijriah?",
          en: "Which event marks the beginning of the Hijri calendar?"
        },
        options: [
          { id: "Turunnya wahyu pertama", en: "The first revelation" },
          { id: "Hijrah dari Makkah ke Madinah", en: "Hijrah from Mecca to Medina" },
          { id: "Penaklukan Spanyol", en: "Conquest of Spain" },
          { id: "Masa Keemasan Islam", en: "Islamic Golden Age" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Hijrah atau migrasi Nabi Muhammad ke Madinah pada 622 M ditetapkan sebagai tahun pertama kalender Islam.",
          en: "The Hijrah or migration of Prophet Muhammad to Medina in 622 CE is set as the first year of the Islamic calendar."
        }
      }
    ]
  },
  "kekaisaran-mongol": {
    articleSlug: "kekaisaran-mongol",
    title: { id: "Kuis: Kekaisaran Mongol", en: "Quiz: Mongol Empire" },
    questions: [
      {
        id: "q1-mongol",
        question: {
          id: "Apa dampak positif dari Pax Mongolica terhadap hubungan Timur dan Barat?",
          en: "What was a positive impact of the Pax Mongolica on East-West relations?"
        },
        options: [
          { id: "Penghentian semua peperangan di dunia", en: "Cessation of all wars worldwide" },
          { id: "Mengamankan Jalur Sutra untuk perdagangan", en: "Securing the Silk Road for trade" },
          { id: "Penyebaran agama nomaden", en: "Spread of nomadic religion" },
          { id: "Isolasi Tiongkok dari Eropa", en: "Isolation of China from Europe" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Pax Mongolica mengamankan rute perdagangan, memungkinkan pertukaran teknologi dan budaya yang belum pernah terjadi sebelumnya.",
          en: "Pax Mongolica secured trade routes, enabling unprecedented exchange of technology and culture."
        }
      }
    ]
  }

,

  "renaisans-eropa": {
    articleSlug: "renaisans-eropa",
    title: { id: "Kuis: Era Renaisans", en: "Quiz: The Renaissance" },
    questions: [
      {
        id: "q1-renaisans",
        question: {
          id: "Di kota manakah gerakan Renaisans pertama kali bermula?",
          en: "In which city did the Renaissance movement first begin?"
        },
        options: [
          { id: "Roma", en: "Rome" },
          { id: "Florence", en: "Florence" },
          { id: "Paris", en: "Paris" },
          { id: "Venesia", en: "Venice" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Renaisans bermula di kota Florence, Italia, yang didukung oleh keluarga kaya seperti klan Medici.",
          en: "The Renaissance began in Florence, Italy, heavily sponsored by wealthy families like the Medicis."
        }
      }
    ]
  },
  "penjelajahan-columbus": {
    articleSlug: "penjelajahan-columbus",
    title: { id: "Kuis: Penjelajahan Dunia", en: "Quiz: World Exploration" },
    questions: [
      {
        id: "q1-columbus",
        question: {
          id: "Apa yang memicu Pertukaran Columbian?",
          en: "What triggered the Columbian Exchange?"
        },
        options: [
          { id: "Jatuhnya Konstantinopel", en: "Fall of Constantinople" },
          { id: "Pendaratan Columbus di benua Amerika", en: "Columbus landing in the Americas" },
          { id: "Ditemukannya jalur sutra", en: "Discovery of the Silk Road" },
          { id: "Perjanjian Tordesillas", en: "Treaty of Tordesillas" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Pendaratan Columbus memulai pertukaran besar-besaran biologi, budaya, dan manusia antara Dunia Lama dan Baru.",
          en: "Columbus's landing initiated the massive biological, cultural, and human exchange between the Old and New Worlds."
        }
      }
    ]
  },
  "revolusi-industri": {
    articleSlug: "revolusi-industri",
    title: { id: "Kuis: Revolusi Industri", en: "Quiz: Industrial Revolution" },
    questions: [
      {
        id: "q1-industri",
        question: {
          id: "Penemuan mesin apa yang paling mendorong lahirnya Revolusi Industri?",
          en: "The invention of which machine primarily drove the Industrial Revolution?"
        },
        options: [
          { id: "Mesin Cetak", en: "Printing Press" },
          { id: "Mesin Uap", en: "Steam Engine" },
          { id: "Mesin Tenun", en: "Loom" },
          { id: "Mesin Telegraf", en: "Telegraph" }
        ],
        correctAnswerIndex: 1,
        explanation: {
          id: "Mesin uap (terutama yang dikembangkan James Watt) memungkinkan mekanisasi pabrik dan transportasi.",
          en: "The steam engine (especially James Watt's design) enabled the mechanization of factories and transportation."
        }
      }
    ]
  },
  "kemerdekaan-indonesia": {
    articleSlug: "kemerdekaan-indonesia",
    title: { id: "Kuis: Proklamasi 1945", en: "Quiz: 1945 Proclamation" },
    questions: [
      {
        id: "q1-indo",
        question: {
          id: "Peristiwa global apa yang memberikan celah (kekosongan kekuasaan) bagi Indonesia untuk merdeka?",
          en: "What global event provided a power vacuum for Indonesia to declare independence?"
        },
        options: [
          { id: "Runtuhnya Tembok Berlin", en: "Fall of the Berlin Wall" },
          { id: "Kekalahan Belanda oleh Jerman", en: "Defeat of the Dutch by Germany" },
          { id: "Menyerahnya Jepang pada Sekutu", en: "Japan's surrender to the Allies" },
          { id: "Berdirinya PBB", en: "Establishment of the UN" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Menyerahnya Jepang di Perang Dunia II membuka kekosongan kekuasaan yang segera dimanfaatkan oleh para pemuda dan tokoh bangsa.",
          en: "Japan's surrender in WWII created a power vacuum quickly utilized by Indonesian youth and national figures."
        }
      }
    ]
  },
  "runtuhnya-tembok-berlin": {
    articleSlug: "runtuhnya-tembok-berlin",
    title: { id: "Kuis: Tembok Berlin", en: "Quiz: Berlin Wall" },
    questions: [
      {
        id: "q1-berlin",
        question: {
          id: "Runtuhnya Tembok Berlin secara simbolis menandai berakhirnya era apa?",
          en: "The fall of the Berlin Wall symbolically marked the end of which era?"
        },
        options: [
          { id: "Perang Dunia I", en: "World War I" },
          { id: "Revolusi Industri", en: "Industrial Revolution" },
          { id: "Perang Dingin", en: "The Cold War" },
          { id: "Zaman Renaisans", en: "The Renaissance" }
        ],
        correctAnswerIndex: 2,
        explanation: {
          id: "Peristiwa ini menjadi simbol berakhirnya segregasi ideologi antara Blok Barat dan Blok Timur selama Perang Dingin.",
          en: "This event became the symbol of the end of ideological segregation between the Western and Eastern Blocs during the Cold War."
        }
      }
    ]
  }

,

  "peradaban-lembah-indus": {
    articleSlug: "peradaban-lembah-indus",
    title: { id: "Kuis: Peradaban Lembah Indus", en: "Quiz: Indus Valley Civilization" },
    questions: [
      {
        id: "q1-lembah-indus",
        question: { id: "Apakah fakta terpenting tentang Peradaban Lembah Indus?", en: "What is the most important fact about Indus Valley Civilization?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "dinasti-shang": {
    articleSlug: "dinasti-shang",
    title: { id: "Kuis: Dinasti Shang", en: "Quiz: Shang Dynasty" },
    questions: [
      {
        id: "q1-dinasti-shang",
        question: { id: "Apakah fakta terpenting tentang Dinasti Shang?", en: "What is the most important fact about Shang Dynasty?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "kekaisaran-maurya": {
    articleSlug: "kekaisaran-maurya",
    title: { id: "Kuis: Kekaisaran Maurya (Ashoka)", en: "Quiz: Mauryan Empire (Ashoka)" },
    questions: [
      {
        id: "q1-kekaisaran-maurya",
        question: { id: "Apakah fakta terpenting tentang Kekaisaran Maurya (Ashoka)?", en: "What is the most important fact about Mauryan Empire (Ashoka)?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "masa-keemasan-islam": {
    articleSlug: "masa-keemasan-islam",
    title: { id: "Kuis: Masa Keemasan Islam", en: "Quiz: Islamic Golden Age" },
    questions: [
      {
        id: "q1-islamic-golden-age",
        question: { id: "Apakah fakta terpenting tentang Masa Keemasan Islam?", en: "What is the most important fact about Islamic Golden Age?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "kekaisaran-aztec": {
    articleSlug: "kekaisaran-aztec",
    title: { id: "Kuis: Puncak Kekaisaran Aztec", en: "Quiz: Peak of the Aztec Empire" },
    questions: [
      {
        id: "q1-kekaisaran-aztec",
        question: { id: "Apakah fakta terpenting tentang Puncak Kekaisaran Aztec?", en: "What is the most important fact about Peak of the Aztec Empire?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "kekaisaran-inca": {
    articleSlug: "kekaisaran-inca",
    title: { id: "Kuis: Kekaisaran Inca", en: "Quiz: Inca Empire" },
    questions: [
      {
        id: "q1-kekaisaran-inca",
        question: { id: "Apakah fakta terpenting tentang Kekaisaran Inca?", en: "What is the most important fact about Inca Empire?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "pelayaran-zheng-he": {
    articleSlug: "pelayaran-zheng-he",
    title: { id: "Kuis: Armada Harta Zheng He", en: "Quiz: Zheng He's Treasure Fleet" },
    questions: [
      {
        id: "q1-pelayaran-zheng-he",
        question: { id: "Apakah fakta terpenting tentang Armada Harta Zheng He?", en: "What is the most important fact about Zheng He's Treasure Fleet?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "perang-dunia-1": {
    articleSlug: "perang-dunia-1",
    title: { id: "Kuis: Perang Dunia I", en: "Quiz: World War I" },
    questions: [
      {
        id: "q1-perang-dunia-1",
        question: { id: "Apakah fakta terpenting tentang Perang Dunia I?", en: "What is the most important fact about World War I?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "perang-dunia-2": {
    articleSlug: "perang-dunia-2",
    title: { id: "Kuis: Perang Dunia II", en: "Quiz: World War II" },
    questions: [
      {
        id: "q1-perang-dunia-2",
        question: { id: "Apakah fakta terpenting tentang Perang Dunia II?", en: "What is the most important fact about World War II?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  },
  "pendaratan-bulan": {
    articleSlug: "pendaratan-bulan",
    title: { id: "Kuis: Pendaratan Manusia di Bulan", en: "Quiz: Moon Landing" },
    questions: [
      {
        id: "q1-apollo-11",
        question: { id: "Apakah fakta terpenting tentang Pendaratan Manusia di Bulan?", en: "What is the most important fact about Moon Landing?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  }
};
