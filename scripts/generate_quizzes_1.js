const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/quizzes.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newQuizzes = `
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
`;

// Insert the new quizzes before the final closing brace
content = content.replace(/};\s*$/, `,\n${newQuizzes}\n};\n`);
fs.writeFileSync(filePath, content);
console.log('quizzes.ts updated successfully.');
