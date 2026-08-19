const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/quizzes.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newQuizzes = `
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
`;

// Insert the new quizzes before the final closing brace
content = content.replace(/};\s*$/, `,\n${newQuizzes}\n};\n`);
fs.writeFileSync(filePath, content);
console.log('quizzes.ts updated successfully with batch 2.');
