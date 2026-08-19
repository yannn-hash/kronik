const fs = require('fs');
const content = fs.readFileSync('src/data/events.ts', 'utf8');
const tags = new Set();
const regex = /tags:\s*\[(.*?)\]/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const tagList = match[1].split(',').map(s => s.trim().replace(/"/g, ''));
  tagList.forEach(t => { if(t) tags.add(t); });
}
console.log(Array.from(tags).sort());
