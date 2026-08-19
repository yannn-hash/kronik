const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/events.ts', 'utf8');
let newContent = content;

const missingTranslations = {
  "peradaban-mesir-kuno": "ancient-egypt",
  "kejayaan-yunani-kuno": "ancient-greece",
  "kelahiran-islam": "birth-of-islam",
  "renaisans-eropa": "european-renaissance",
  "penjelajahan-columbus": "columbus-exploration",
  "kemerdekaan-indonesia": "indonesian-independence",
  "runtuhnya-tembok-berlin": "fall-of-berlin-wall",
  "peradaban-lembah-indus": "indus-valley-civilization",
  "kekaisaran-maurya": "mauryan-empire",
  "masa-keemasan-islam": "islamic-golden-age",
  "pelayaran-zheng-he": "zheng-he-voyages"
};

for (const [id, en] of Object.entries(missingTranslations)) {
  newContent = newContent.replace(`slug: "${id}",`, `slug: { id: "${id}", en: "${en}" },`);
  
  const oldPath = path.join('src/content/articles/en', `${id}.mdx`);
  const newPath = path.join('src/content/articles/en', `${en}.mdx`);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${id}.mdx to ${en}.mdx`);
  }
}

fs.writeFileSync('src/data/events.ts', newContent);
console.log("Updated events.ts");
