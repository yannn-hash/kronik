const fs = require('fs');
const path = require('path');

const contentDirId = path.join(__dirname, '../src/content/articles/id');
const contentDirEn = path.join(__dirname, '../src/content/articles/en');

const articles = [
  {
    slug: 'renaisans-eropa',
    id: `Renaisans (Kelahiran Kembali) adalah periode transisi antara Abad Pertengahan menuju zaman modern, dimulai di Florence, Italia pada abad ke-14. Era ini menandai kebangkitan kembali minat terhadap seni dan ilmu pengetahuan Yunani dan Romawi kuno.

## Humanisme dan Seni
Gerakan humanisme meletakkan manusia di pusat alam semesta intelektual. Masa ini melahirkan polymath (manusia serba bisa) jenius seperti Leonardo da Vinci dan Michelangelo, yang karya-karyanya memadukan proporsi matematis dengan keindahan estetika tiada tara.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="renaisans-eropa" locale="id" />`,
    en: `The Renaissance (Rebirth) was a period of transition between the Middle Ages and modernity, originating in Florence, Italy in the 14th century. This era marked a revived interest in the art and sciences of ancient Greece and Rome.

## Humanism and Art
The humanist movement placed humans at the center of the intellectual universe. This period produced genius polymaths like Leonardo da Vinci and Michelangelo, whose works combined mathematical proportions with unparalleled aesthetic beauty.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="renaisans-eropa" locale="en" />`
  },
  {
    slug: 'penjelajahan-columbus',
    id: `Pada tahun 1492, dalam upaya mencari rute laut barat menuju Asia (Hindia), Christopher Columbus secara tak terduga mendarat di Kepulauan Bahama. Pelayaran yang disponsori Kerajaan Spanyol ini mengubah jalannya sejarah dunia.

## Pertukaran Columbian
Meskipun Columbus bukan manusia pertama yang menemukan Amerika (bangsa asli telah lama menetap, dan bangsa Viking pernah mendarat sebelumnya), pelayarannya memicu *Pertukaran Columbian*—perpindahan besar-besaran tanaman, hewan, budaya, manusia, dan penyakit antara Dunia Lama dan Baru.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="penjelajahan-columbus" locale="id" />`,
    en: `In 1492, attempting to find a western sea route to Asia (the Indies), Christopher Columbus unexpectedly landed in the Bahamas. This voyage, sponsored by the Spanish Crown, permanently altered the course of world history.

## The Columbian Exchange
Although Columbus was not the first human to discover the Americas (indigenous peoples had lived there for millennia, and Vikings had landed earlier), his voyage triggered the *Columbian Exchange*—the massive transfer of plants, animals, culture, populations, and diseases between the Old and New Worlds.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="penjelajahan-columbus" locale="en" />`
  },
  {
    slug: 'revolusi-industri',
    id: `Dimulai di Inggris sekitar tahun 1760, Revolusi Industri menandai peralihan dari metode produksi tangan dan agraris menuju manufaktur yang digerakkan oleh mesin, terutama mesin uap.

## Dampak Global
Inovasi ini meningkatkan kapasitas produksi secara dramatis, mendorong urbanisasi massal, dan membentuk kelas pekerja modern. Revolusi Industri pada akhirnya melahirkan kapitalisme modern serta perubahan lingkungan global yang dampaknya terasa hingga hari ini.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="revolusi-industri" locale="id" />`,
    en: `Beginning in Britain around 1760, the Industrial Revolution marked the transition from hand-production and agrarian methods to machine-driven manufacturing, primarily powered by the steam engine.

## Global Impact
These innovations dramatically increased production capacity, fueled mass urbanization, and forged the modern working class. The Industrial Revolution ultimately gave birth to modern capitalism and triggered global environmental changes that resonate to this day.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="revolusi-industri" locale="en" />`
  },
  {
    slug: 'kemerdekaan-indonesia',
    id: `Pada tanggal 17 Agustus 1945, memanfaatkan kekosongan kekuasaan setelah menyerahnya Jepang pada Perang Dunia II, Soekarno dan Mohammad Hatta memproklamasikan kemerdekaan Indonesia di Jakarta.

## Perjuangan Fisik dan Diplomasi
Proklamasi ini hanyalah awal. Selama lima tahun berikutnya, bangsa Indonesia harus berjuang melalui perang gerilya yang sengit dan diplomasi alot melawan tentara Belanda (NICA) yang mencoba menguasai kembali negeri ini, sebelum akhirnya kedaulatan diakui sepenuhnya pada 1949.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kemerdekaan-indonesia" locale="id" />`,
    en: `On August 17, 1945, seizing the power vacuum following Japan's surrender in World War II, Sukarno and Mohammad Hatta proclaimed Indonesia's independence in Jakarta.

## Armed and Diplomatic Struggle
The proclamation was only the beginning. For the next five years, Indonesians fought through fierce guerrilla warfare and tough diplomacy against Dutch forces (NICA) attempting to recolonize the country, until sovereignty was finally fully recognized in 1949.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kemerdekaan-indonesia" locale="en" />`
  },
  {
    slug: 'runtuhnya-tembok-berlin',
    id: `Pada 9 November 1989, setelah berminggu-minggu protes damai massal, pemerintah Jerman Timur akhirnya membuka Tembok Berlin, struktur beton yang selama puluhan tahun membelah kota Berlin menjadi dua.

## Simbol Berakhirnya Perang Dingin
Kejatuhan tembok ini bukan sekadar penyatuan kembali (reunifikasi) negara Jerman, melainkan juga titik balik bersejarah yang memicu runtuhnya Uni Soviet dan berakhirnya era Perang Dingin di panggung global.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="runtuhnya-tembok-berlin" locale="id" />`,
    en: `On November 9, 1989, following weeks of massive peaceful protests, the East German government finally opened the Berlin Wall, the concrete barrier that had physically and ideologically divided the city for decades.

## Symbol of the Cold War's End
The fall of the wall was not merely about the reunification of Germany; it was a historic turning point that accelerated the collapse of the Soviet Union and marked the end of the Cold War era on the global stage.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="runtuhnya-tembok-berlin" locale="en" />`
  }
];

articles.forEach(article => {
  fs.writeFileSync(path.join(contentDirId, `${article.slug}.mdx`), article.id);
  fs.writeFileSync(path.join(contentDirEn, `${article.slug}.mdx`), article.en);
  console.log(`Generated ${article.slug}`);
});
