export interface DailyFact {
  id: string;
  fact: { id: string; en: string };
  era: string;
  source: string;
}

export const DAILY_FACTS: DailyFact[] = [
  {
    id: "f1",
    fact: {
      id: "Cleopatra hidup lebih dekat dengan masa penemuan iPhone dibandingkan dengan masa pembangunan Piramida Agung Giza.",
      en: "Cleopatra lived closer in time to the invention of the iPhone than to the construction of the Great Pyramid of Giza."
    },
    era: "Kuno / Ancient",
    source: "World History Encyclopedia"
  },
  {
    id: "f2",
    fact: {
      id: "Universitas tertua di dunia yang beroperasi tanpa henti adalah Universitas Al-Qarawiyyin di Maroko, didirikan pada 859 M oleh seorang wanita bernama Fatima al-Fihri.",
      en: "The world's oldest continually operating university is the University of al-Qarawiyyin in Morocco, founded in 859 CE by a woman named Fatima al-Fihri."
    },
    era: "Pertengahan / Medieval",
    source: "UNESCO"
  },
  {
    id: "f3",
    fact: {
      id: "Kekaisaran Romawi tidak jatuh dalam semalam. Proses keruntuhannya memakan waktu ratusan tahun dan Kekaisaran Romawi Timur (Bizantium) bertahan seribu tahun lebih lama.",
      en: "The Roman Empire didn't fall overnight. Its decline took centuries, and the Eastern Roman (Byzantine) Empire survived for a thousand years longer."
    },
    era: "Klasik / Classical",
    source: "Britannica"
  },
  {
    id: "f4",
    fact: {
      id: "Julius Caesar pernah diculik oleh bajak laut Sisilia. Ketika bajak laut meminta tebusan 20 talenta perak, Caesar tertawa dan menyuruh mereka meminta 50 talenta karena ia merasa nilainya lebih tinggi.",
      en: "Julius Caesar was once kidnapped by Cilician pirates. When they demanded 20 talents of silver, he laughed and told them to ask for 50 because he was worth more."
    },
    era: "Klasik / Classical",
    source: "Plutarch's Parallel Lives"
  }
];

export function getFactOfTheDay(): DailyFact {
  // Simple logic to get a deterministic fact based on the current day of the year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  return DAILY_FACTS[dayOfYear % DAILY_FACTS.length];
}
