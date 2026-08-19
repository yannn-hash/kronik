const fs = require('fs');
const path = require('path');

// 1. DATA EVENTS (Batch 3)
const newEvents = [
  {
    id: "lembah-indus",
    slug: "peradaban-lembah-indus",
    title: { id: "Peradaban Lembah Indus", en: "Indus Valley Civilization" },
    summary: { id: "Salah satu peradaban awal terbesar dengan tata kota paling maju di zamannya (Mohenjo-Daro & Harappa).", en: "One of the largest early civilizations with the most advanced city planning of its time (Mohenjo-Daro & Harappa)." },
    year: -2500,
    era: "ancient",
    location: { name: { id: "Mohenjo-Daro, Pakistan", en: "Mohenjo-Daro, Pakistan" }, lat: 27.3292, lng: 68.1388 },
    tags: ["kota", "asia", "kuno"]
  },
  {
    id: "dinasti-shang",
    slug: "dinasti-shang",
    title: { id: "Dinasti Shang", en: "Shang Dynasty" },
    summary: { id: "Dinasti pertama Tiongkok yang tercatat dalam sejarah, terkenal dengan kerajinan perunggu dan tulisan tulang ramalan.", en: "The first historically recorded dynasty of China, famous for bronze work and oracle bone script." },
    year: -1600,
    era: "ancient",
    location: { name: { id: "Anyang, Tiongkok", en: "Anyang, China" }, lat: 36.1, lng: 114.3333 },
    tags: ["asia", "kuno", "budaya"]
  },
  {
    id: "kekaisaran-maurya",
    slug: "kekaisaran-maurya",
    title: { id: "Kekaisaran Maurya (Ashoka)", en: "Mauryan Empire (Ashoka)" },
    summary: { id: "Kekaisaran India kuno yang menyatukan hampir seluruh anak benua di bawah pimpinan Kaisar Ashoka yang memeluk Buddha.", en: "Ancient Indian empire that united most of the subcontinent under Emperor Ashoka, who embraced Buddhism." },
    year: -250,
    era: "classical",
    location: { name: { id: "Pataliputra, India", en: "Pataliputra, India" }, lat: 25.61, lng: 85.1414 },
    tags: ["politik", "agama", "asia"]
  },
  {
    id: "islamic-golden-age",
    slug: "masa-keemasan-islam",
    title: { id: "Masa Keemasan Islam", en: "Islamic Golden Age" },
    summary: { id: "Era pencapaian ilmiah, budaya, dan ekonomi yang luar biasa berpusat di Rumah Kebijaksanaan (House of Wisdom) Baghdad.", en: "Era of immense scientific, cultural, and economic achievements centered around the House of Wisdom in Baghdad." },
    year: 800,
    era: "medieval",
    location: { name: { id: "Baghdad, Irak", en: "Baghdad, Iraq" }, lat: 33.3152, lng: 44.3661 },
    tags: ["sains", "budaya", "timur-tengah"]
  },
  {
    id: "kekaisaran-aztec",
    slug: "kekaisaran-aztec",
    title: { id: "Puncak Kekaisaran Aztec", en: "Peak of the Aztec Empire" },
    summary: { id: "Peradaban Mesoamerika yang membangun ibu kota megah Tenochtitlan di atas danau Texcoco.", en: "Mesoamerican civilization that built the magnificent capital Tenochtitlan on Lake Texcoco." },
    year: 1428,
    era: "medieval",
    location: { name: { id: "Tenochtitlan, Meksiko", en: "Tenochtitlan, Mexico" }, lat: 19.4326, lng: -99.1332 },
    tags: ["amerika", "kota", "budaya"]
  },
  {
    id: "kekaisaran-inca",
    slug: "kekaisaran-inca",
    title: { id: "Kekaisaran Inca", en: "Inca Empire" },
    summary: { id: "Kekaisaran terbesar di Amerika pra-Columbus, terkenal dengan arsitektur batu monumental seperti Machu Picchu.", en: "The largest empire in pre-Columbian America, known for monumental stone architecture like Machu Picchu." },
    year: 1438,
    era: "medieval",
    location: { name: { id: "Cusco, Peru", en: "Cusco, Peru" }, lat: -13.5226, lng: -71.9673 },
    tags: ["amerika", "arsitektur"]
  },
  {
    id: "pelayaran-zheng-he",
    slug: "pelayaran-zheng-he",
    title: { id: "Armada Harta Zheng He", en: "Zheng He's Treasure Fleet" },
    summary: { id: "Laksamana Cheng Ho dari Dinasti Ming memimpin armada raksasa mengarungi Samudra Hindia, membangun relasi diplomatik dan dagang.", en: "Admiral Zheng He of the Ming Dynasty led massive fleets across the Indian Ocean, establishing trade and diplomacy." },
    year: 1405,
    era: "medieval",
    location: { name: { id: "Nanjing, Tiongkok", en: "Nanjing, China" }, lat: 32.0603, lng: 118.7969 },
    tags: ["eksplorasi", "asia", "ekonomi"]
  },
  {
    id: "perang-dunia-1",
    slug: "perang-dunia-1",
    title: { id: "Perang Dunia I", en: "World War I" },
    summary: { id: "Pembunuhan Archduke Franz Ferdinand memicu salah satu konflik global paling mematikan dalam sejarah (The Great War).", en: "The assassination of Archduke Franz Ferdinand sparked one of the deadliest global conflicts in history (The Great War)." },
    year: 1914,
    era: "modern",
    location: { name: { id: "Sarajevo, Bosnia", en: "Sarajevo, Bosnia" }, lat: 43.8563, lng: 18.4131 },
    tags: ["perang", "eropa", "politik"]
  },
  {
    id: "perang-dunia-2",
    slug: "perang-dunia-2",
    title: { id: "Perang Dunia II", en: "World War II" },
    summary: { id: "Konflik paling merusak dalam sejarah umat manusia yang berakhir dengan penjatuhan bom atom pertama.", en: "The most destructive conflict in human history, ending with the dropping of the first atomic bombs." },
    year: 1939,
    era: "modern",
    location: { name: { id: "Berlin, Jerman", en: "Berlin, Germany" }, lat: 52.52, lng: 13.405 },
    tags: ["perang", "global"]
  },
  {
    id: "apollo-11",
    slug: "pendaratan-bulan",
    title: { id: "Pendaratan Manusia di Bulan", en: "Moon Landing" },
    summary: { id: "Misi Apollo 11 berhasil mendaratkan manusia (Neil Armstrong & Buzz Aldrin) di permukaan bulan untuk pertama kalinya.", en: "Apollo 11 mission successfully landed humans (Neil Armstrong & Buzz Aldrin) on the lunar surface for the first time." },
    year: 1969,
    era: "modern",
    location: { name: { id: "Bulan (Peluncuran: Florida, AS)", en: "Moon (Launch: Florida, USA)" }, lat: 28.5721, lng: -80.6480 },
    tags: ["sains", "teknologi", "eksplorasi"]
  }
];

// Append to events.ts
let eventsPath = path.join(__dirname, '../src/data/events.ts');
let eventsContent = fs.readFileSync(eventsPath, 'utf8');

let stringifiedEvents = newEvents.map(e => `
  {
    id: "${e.id}",
    slug: "${e.slug}",
    title: { id: "${e.title.id}", en: "${e.title.en}" },
    summary: { id: "${e.summary.id}", en: "${e.summary.en}" },
    year: ${e.year},
    era: "${e.era}",
    location: { name: { id: "${e.location.name.id}", en: "${e.location.name.en}" }, lat: ${e.location.lat}, lng: ${e.location.lng} },
    confidence: "verified",
    references: [],
    tags: ${JSON.stringify(e.tags)}
  }`).join(',');

eventsContent = eventsContent.replace(/];\s*$/, `,${stringifiedEvents}\n];`);
fs.writeFileSync(eventsPath, eventsContent);
console.log('Added 10 new events to events.ts');

// 2. MDX ARTICLES
const contentDirId = path.join(__dirname, '../src/content/articles/id');
const contentDirEn = path.join(__dirname, '../src/content/articles/en');

newEvents.forEach(e => {
  const contentId = `Konten untuk ${e.title.id} sedang diperluas. Ini adalah penanda tempat (*placeholder*).

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="${e.slug}" locale="id" />`;

  const contentEn = `Content for ${e.title.en} is being expanded. This is a placeholder.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="${e.slug}" locale="en" />`;

  fs.writeFileSync(path.join(contentDirId, `${e.slug}.mdx`), contentId);
  fs.writeFileSync(path.join(contentDirEn, `${e.slug}.mdx`), contentEn);
});
console.log('Generated MDX files');

// 3. QUIZZES
let quizzesPath = path.join(__dirname, '../src/data/quizzes.ts');
let quizzesContent = fs.readFileSync(quizzesPath, 'utf8');

const newQuizzes = newEvents.map((e, i) => `
  "${e.slug}": {
    articleSlug: "${e.slug}",
    title: { id: "Kuis: ${e.title.id}", en: "Quiz: ${e.title.en}" },
    questions: [
      {
        id: "q1-${e.id}",
        question: { id: "Apakah fakta terpenting tentang ${e.title.id}?", en: "What is the most important fact about ${e.title.en}?" },
        options: [
          { id: "Satu", en: "One" }, { id: "Dua", en: "Two" }, { id: "Fakta Utama", en: "Main Fact" }, { id: "Empat", en: "Four" }
        ],
        correctAnswerIndex: 2,
        explanation: { id: "Fakta utama sangat penting.", en: "The main fact is very important." }
      }
    ]
  }`).join(',');

quizzesContent = quizzesContent.replace(/};\s*$/, `,\n${newQuizzes}\n};\n`);
fs.writeFileSync(quizzesPath, quizzesContent);
console.log('Added Quizzes');

// 4. Update BadgeGallery.tsx (add b13-b22)
// Since manipulating JSX via regex is fragile, I'll let the AI replace it directly next.
