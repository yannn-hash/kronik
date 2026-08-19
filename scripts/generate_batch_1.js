const fs = require('fs');
const path = require('path');

const contentDirId = path.join(__dirname, '../src/content/articles/id');
const contentDirEn = path.join(__dirname, '../src/content/articles/en');

const articles = [
  {
    slug: 'peradaban-mesopotamia',
    id: `Mesopotamia, yang berarti "tanah di antara sungai-sungai" (Tigris dan Eufrat), sering disebut sebagai tempat lahirnya peradaban. Di sinilah bangsa Sumeria membangun Uruk, salah satu kota pertama di dunia.

## Penemuan Tulisan
Sekitar 3200 SM, bangsa Sumeria menciptakan huruf paku (cuneiform), sistem tulisan pertama di dunia. Awalnya digunakan untuk mencatat transaksi perdagangan, tulisan ini berkembang menjadi media sastra, seperti *Epos Gilgamesh*.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="peradaban-mesopotamia" locale="id" />`,
    en: `Mesopotamia, meaning "land between the rivers" (Tigris and Euphrates), is widely considered the cradle of civilization. It was here that the Sumerians built Uruk, one of the world's first cities.

## Invention of Writing
Around 3200 BCE, the Sumerians invented cuneiform, the world's first writing system. Originally developed for accounting and trade, it evolved to record literature, such as the *Epic of Gilgamesh*.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="peradaban-mesopotamia" locale="en" />`
  },
  {
    slug: 'kejayaan-yunani-kuno',
    id: `Zaman Keemasan Athena (sekitar abad ke-5 SM) adalah masa mekarnya demokrasi, seni, dan filsafat. Di bawah kepemimpinan Perikles, Athena menjadi pusat intelektual dunia kuno.

## Demokrasi dan Filsafat
Athena adalah tempat lahirnya sistem demokrasi di mana warga negara (pria merdeka) dapat memberikan suara pada undang-undang. Era ini juga melahirkan filsuf besar seperti Sokrates, Plato, dan Aristoteles yang pemikirannya masih menjadi fondasi filsafat Barat modern.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kejayaan-yunani-kuno" locale="id" />`,
    en: `The Golden Age of Athens (around the 5th century BCE) was a period of unprecedented flourishing in democracy, art, and philosophy. Under Pericles' leadership, Athens became the intellectual center of the ancient world.

## Democracy and Philosophy
Athens is the birthplace of the democratic system where citizens (free men) could vote on legislation. This era also produced great philosophers like Socrates, Plato, and Aristotle, whose thoughts remain the foundation of modern Western philosophy.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kejayaan-yunani-kuno" locale="en" />`
  },
  {
    slug: 'kekaisaran-romawi',
    id: `Setelah berabad-abad berbentuk Republik, Romawi berubah menjadi Kekaisaran pada 27 SM ketika Augustus Caesar mengambil alih kekuasaan. Ini memulai era *Pax Romana* (Kedamaian Romawi) yang berlangsung lebih dari 200 tahun.

## Teknik dan Infrastruktur
Bangsa Romawi adalah insinyur ulung. Mereka membangun jaringan jalan sepanjang puluhan ribu kilometer, akuaduk yang membawa air bersih ke kota-kota, dan Colosseum yang megah menggunakan beton vulkanik yang resepnya sempat hilang selama berabad-abad.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kekaisaran-romawi" locale="id" />`,
    en: `After centuries as a Republic, Rome transformed into an Empire in 27 BCE when Augustus Caesar seized absolute power. This initiated the *Pax Romana* (Roman Peace), an era of relative peace lasting over 200 years.

## Engineering and Infrastructure
The Romans were master engineers. They built a network of roads stretching tens of thousands of kilometers, aqueducts delivering fresh water to cities, and the magnificent Colosseum, utilizing volcanic concrete whose recipe was lost for centuries.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kekaisaran-romawi" locale="en" />`
  },
  {
    slug: 'kelahiran-islam',
    id: `Pada awal abad ke-7, Nabi Muhammad menyatukan suku-suku Arab di bawah satu agama monoteistik, Islam. Peristiwa Hijrah dari Makkah ke Madinah pada tahun 622 M menjadi titik awal kalender Islam.

## Ekspansi Cepat
Dalam waktu kurang dari seabad setelah wafatnya Nabi Muhammad, Kekhalifahan Islam berkembang pesat dari Semenanjung Arab hingga mencapai Spanyol di barat dan India di timur, membawa serta kemajuan pesat dalam sains, kedokteran, dan matematika.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kelahiran-islam" locale="id" />`,
    en: `In the early 7th century, Prophet Muhammad united the Arabian tribes under a single monotheistic religion, Islam. The Hijrah (migration) from Mecca to Medina in 622 CE marks the beginning of the Islamic calendar.

## Rapid Expansion
Within less than a century after the Prophet's death, the Islamic Caliphate expanded rapidly from the Arabian Peninsula, reaching Spain in the west and India in the east, bringing with it rapid advancements in science, medicine, and mathematics.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kelahiran-islam" locale="en" />`
  },
  {
    slug: 'kekaisaran-mongol',
    id: `Pada awal abad ke-13, Genghis Khan menyatukan suku-suku nomaden di stepa Mongolia. Dengan taktik militer berkuda yang sangat cepat dan mematikan, Kekaisaran Mongol menaklukkan wilayah yang membentang dari Asia Timur hingga Eropa Timur.

## Pax Mongolica
Kekaisaran darat terbesar dalam sejarah ini tidak hanya membawa kehancuran, tetapi juga menciptakan *Pax Mongolica*. Periode ini mengamankan Jalur Sutra, memungkinkan perdagangan dan pertukaran teknologi, seperti bubuk mesiu dan kertas, antara Timur dan Barat.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kekaisaran-mongol" locale="id" />`,
    en: `In the early 13th century, Genghis Khan united the nomadic tribes of the Mongolian steppe. Utilizing highly mobile and lethal cavalry tactics, the Mongol Empire conquered territories stretching from East Asia to Eastern Europe.

## Pax Mongolica
The largest contiguous land empire in history brought not only destruction but also the *Pax Mongolica*. This period secured the Silk Road, enabling unprecedented trade and the exchange of technologies, such as gunpowder and paper, between East and West.

import { QuizWrapper } from "@/components/article/QuizWrapper";

<QuizWrapper slug="kekaisaran-mongol" locale="en" />`
  }
];

articles.forEach(article => {
  fs.writeFileSync(path.join(contentDirId, `${article.slug}.mdx`), article.id);
  fs.writeFileSync(path.join(contentDirEn, `${article.slug}.mdx`), article.en);
  console.log(`Generated ${article.slug}`);
});
