const fs = require('fs');
const path = require('path');

const translations = {
  "revolusi-pertanian": "agricultural-revolution",
  "peradaban-mesopotamia": "mesopotamian-civilization",
  "mesir-kuno": "ancient-egypt",
  "lembah-indus": "indus-valley-civilization",
  "dinasti-shang": "shang-dynasty",
  "kekaisaran-romawi": "roman-empire",
  "dinasti-maurya": "mauryan-empire",
  "zaman-keemasan-islam": "islamic-golden-age",
  "kekaisaran-mongol": "mongol-empire",
  "wabah-hitam": "black-death",
  "renaisans": "renaissance",
  "penemuan-benua-amerika": "discovery-of-americas",
  "kekaisaran-aztec": "aztec-empire",
  "kekaisaran-inca": "inca-empire",
  "revolusi-ilmiah": "scientific-revolution",
  "revolusi-industri": "industrial-revolution",
  "revolusi-prancis": "french-revolution",
  "perang-candu": "opium-wars",
  "perang-dunia-1": "world-war-1",
  "perang-dunia-2": "world-war-2",
  "pendaratan-bulan": "moon-landing",
  "penemuan-internet": "invention-of-internet"
};

const dir = 'src/content/articles/en';

for (const [id, en] of Object.entries(translations)) {
  const oldPath = path.join(dir, `${id}.mdx`);
  const newPath = path.join(dir, `${en}.mdx`);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${id}.mdx to ${en}.mdx`);
  }
}
