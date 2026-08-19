const fs = require('fs');

const filesToUpdate = [
  'src/app/[locale]/artikel/page.tsx',
  'src/app/[locale]/timeline/page.tsx',
  'src/app/[locale]/versus/page.tsx',
  'src/components/article/RelatedArticles.tsx',
  'src/components/map/Map.tsx'
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace event.slug or event1.slug or event2.slug with .slug[locale]
    content = content.replace(/params:\s*{\s*slug:\s*(event\d?)\.slug\s*}/g, 'params: { slug: $1.slug[locale] }');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
