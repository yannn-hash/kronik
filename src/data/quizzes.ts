import { type QuizData } from "@/types/history";

export const QUIZZES: Record<string, QuizData> = {
  "peradaban-mesir-kuno": {
    "articleSlug": "peradaban-mesir-kuno",
    "title": {
      "id": "Kuis: Piramida & Mesir Kuno",
      "en": "Quiz: Pyramids & Ancient Egypt"
    },
    "questions": [
      {
        "id": "q1-mesir",
        "question": {
          "id": "Siapa Firaun yang makamnya dibangun sebagai Piramida Agung Giza?",
          "en": "Which Pharaoh was the Great Pyramid of Giza built for as a tomb?"
        },
        "options": [
          {
            "id": "Ramses II",
            "en": "Ramses II"
          },
          {
            "id": "Tutankhamun",
            "en": "Tutankhamun"
          },
          {
            "id": "Khufu",
            "en": "Khufu"
          },
          {
            "id": "Cleopatra",
            "en": "Cleopatra"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Piramida Agung Giza dibangun pada masa Kerajaan Lama sebagai makam kolosal untuk Firaun Khufu.",
          "en": "The Great Pyramid of Giza was built during the Old Kingdom as a colossal tomb for Pharaoh Khufu."
        }
      },
      {
        "id": "q2-mesir",
        "question": {
          "id": "Menurut penemuan arkeologi modern, siapa yang membangun piramida?",
          "en": "According to modern archaeological discoveries, who built the pyramids?"
        },
        "options": [
          {
            "id": "Budak tawanan perang",
            "en": "Prisoner of war slaves"
          },
          {
            "id": "Pekerja terampil yang dibayar",
            "en": "Skilled, paid workers"
          },
          {
            "id": "Bangsa asing dari utara",
            "en": "Foreigners from the north"
          },
          {
            "id": "Tidak diketahui pasti",
            "en": "It is entirely unknown"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Mitos budak telah terbantahkan. Arkeolog menemukan bukti berupa makam pekerja dan catatan gaji yang menunjukkan bahwa mereka adalah pekerja terampil yang dihormati.",
          "en": "The slave myth has been debunked. Archaeologists found workers' tombs and payment records showing they were respected, skilled laborers."
        }
      },
      {
        "id": "q3-mesir",
        "question": {
          "id": "Bentuk piramida bagi bangsa Mesir Kuno melambangkan apa?",
          "en": "What did the shape of the pyramid symbolize to the Ancient Egyptians?"
        },
        "options": [
          {
            "id": "Gunung suci tempat para dewa tinggal",
            "en": "A sacred mountain where gods live"
          },
          {
            "id": "Sinar matahari yang turun dari langit",
            "en": "Sun rays descending from the sky"
          },
          {
            "id": "Tenda raksasa perlindungan dari badai gurun",
            "en": "A giant tent protecting from desert storms"
          },
          {
            "id": "Simbol kekuatan militer tak tertembus",
            "en": "An impenetrable symbol of military strength"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Bentuk piramida (benben) melambangkan sinar dewa matahari (Ra) yang membantu jiwa firaun naik ke surga.",
          "en": "The pyramid shape (benben) symbolized the rays of the sun god (Ra), helping the pharaoh's soul ascend to heaven."
        }
      }
    ]
  },
  "peradaban-mesopotamia": {
    "articleSlug": "peradaban-mesopotamia",
    "title": {
      "id": "Kuis: Peradaban Mesopotamia & Uruk",
      "en": "Quiz: Mesopotamian Civilization & Uruk"
    },
    "questions": [
      {
        "id": "q1-mesopotamia",
        "question": {
          "id": "Apa inovasi sistem tulisan pertama di dunia yang diciptakan bangsa Sumeria di Mesopotamia?",
          "en": "What was the world's first writing system created by the Sumerians in Mesopotamia?"
        },
        "options": [
          {
            "id": "Hieroglif batu",
            "en": "Stone Hieroglyphs"
          },
          {
            "id": "Huruf Paku (Cuneiform) pada lempung basah",
            "en": "Cuneiform script on wet clay tablets"
          },
          {
            "id": "Aksara Fenisia",
            "en": "Phoenician Alphabet"
          },
          {
            "id": "Tulisan Tulang Ramalan",
            "en": "Oracle Bone Script"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Huruf paku (cuneiform) diciptakan sekitar 3200 SM di Uruk menggunakan batang gelagah runcing pada lempengan tanah liat.",
          "en": "Cuneiform script was created around 3200 BCE in Uruk using reed styluses pressed into wet clay tablets."
        }
      },
      {
        "id": "q2-mesopotamia",
        "question": {
          "id": "Bangunan monumental bertingkat apakah yang menjadi pusat keagamaan dan administrasi di kota-kota Mesopotamia?",
          "en": "Which monumental stepped structure served as the religious and administrative center of Mesopotamian cities?"
        },
        "options": [
          {
            "id": "Piramida batu kapur",
            "en": "Limestone Pyramid"
          },
          {
            "id": "Ziggurat dari batu bata lumpur",
            "en": "Mud-brick Ziggurat"
          },
          {
            "id": "Kuil Parthenon marmer",
            "en": "Marble Parthenon temple"
          },
          {
            "id": "Kastel benteng parit",
            "en": "Moated fortress castle"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Ziggurat adalah menara kuil bertingkat dari bata lumpur yang menjulang tinggi, melambangkan tangga penghubung bumi dan surga.",
          "en": "A Ziggurat was a stepped temple tower of baked mud brick, symbolizing a bridge between heaven and earth."
        }
      },
      {
        "id": "q3-mesopotamia",
        "question": {
          "id": "Karya sastra epik tertua dalam sejarah manusia yang menceritakan raja legendaris Uruk adalah...",
          "en": "The oldest epic literary work in human history narrating the legendary king of Uruk is..."
        },
        "options": [
          {
            "id": "Iliad karya Homer",
            "en": "The Iliad by Homer"
          },
          {
            "id": "Epik Gilgamesh",
            "en": "The Epic of Gilgamesh"
          },
          {
            "id": "Kitab Orang Mati",
            "en": "The Book of the Dead"
          },
          {
            "id": "Mahabharata",
            "en": "The Mahabharata"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Epik Gilgamesh mengisahkan perjalanan raja Uruk mencari keabadian dan memuat kisah banjir besar yang legendaris.",
          "en": "The Epic of Gilgamesh recounts the journey of Uruk's king in search of immortality and features the legendary Great Flood narrative."
        }
      }
    ]
  },
  "peradaban-lembah-indus": {
    "articleSlug": "peradaban-lembah-indus",
    "title": {
      "id": "Kuis: Peradaban Lembah Indus",
      "en": "Quiz: Indus Valley Civilization"
    },
    "questions": [
      {
        "id": "q1-lembah-indus",
        "question": {
          "id": "Ciri paling mencolok dan maju dari tata kota Mohenjo-Daro dan Harappa adalah...",
          "en": "The most striking and advanced urban feature of Mohenjo-Daro and Harappa was..."
        },
        "options": [
          {
            "id": "Piramida megah makam para raja",
            "en": "Monumental royal tomb pyramids"
          },
          {
            "id": "Tata kota berpetak (grid) dengan sistem sanitasi dan drainase tertutup",
            "en": "Grid-planned streets with covered drainage and sanitation systems"
          },
          {
            "id": "Tembok pertahanan berlapis dengan parit beracun",
            "en": "Multi-layered defensive walls with poisoned moats"
          },
          {
            "id": "Kanal laut dalam untuk armada perang",
            "en": "Deep sea canals for war fleets"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Peradaban Indus memiliki tata kota berorientasi mata angin dengan sistem saluran pembuangan air tertutup di setiap rumah yang melampaui zamannya.",
          "en": "The Indus civilization featured grid-aligned city planning with indoor bathrooms and covered drainage networks centuries ahead of its time."
        }
      },
      {
        "id": "q2-lembah-indus",
        "question": {
          "id": "Struktur pemandian publik besar yang terkenal di Mohenjo-Daro dikenal sebagai...",
          "en": "The famous monumental public bathing structure discovered at Mohenjo-Daro is known as..."
        },
        "options": [
          {
            "id": "The Great Bath (Pemandian Agung)",
            "en": "The Great Bath"
          },
          {
            "id": "Thermae Antonina",
            "en": "Thermae Antonina"
          },
          {
            "id": "Danau Suci Karnak",
            "en": "Sacred Lake of Karnak"
          },
          {
            "id": "Kolam Bidadari",
            "en": "Pool of Nymphs"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "The Great Bath adalah kolam kedap air beralaskan aspal alami (bitumen) yang diduga digunakan untuk ritual penyucian keagamaan.",
          "en": "The Great Bath was a waterproof basin lined with natural bitumen, believed to be utilized for ritual purification ceremonies."
        }
      },
      {
        "id": "q3-lembah-indus",
        "question": {
          "id": "Mengapa sistem tulisan peradaban Lembah Indus (Indus Script) masih menjadi misteri hingga kini?",
          "en": "Why does the Indus Valley writing system (Indus Script) remain a major mystery today?"
        },
        "options": [
          {
            "id": "Semua prasasti musnah terbakar",
            "en": "All inscriptions were burned and destroyed"
          },
          {
            "id": "Aksaranya belum berhasil dipecahkan/diterjemahkan (undeciphered)",
            "en": "The script remains undeciphered due to lack of bilingual texts"
          },
          {
            "id": "Mereka hanya menggunakan bahasa isyarat tangan",
            "en": "They exclusively used hand sign language"
          },
          {
            "id": "Dilarang dibaca oleh kasta pendeta",
            "en": "It was forbidden to be read by the priest caste"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Aksara Indus pada segel batu belum berhasil dipecahkan karena sebagian besar prasasti sangat pendek dan belum ditemukan teks dwibahasa seperti Batu Rosetta.",
          "en": "The Indus script remains undeciphered because surviving inscriptions are brief and no bilingual key (like the Rosetta Stone) has been found."
        }
      }
    ]
  },
  "dinasti-shang": {
    "articleSlug": "dinasti-shang",
    "title": {
      "id": "Kuis: Dinasti Shang",
      "en": "Quiz: Shang Dynasty"
    },
    "questions": [
      {
        "id": "q1-dinasti-shang",
        "question": {
          "id": "Media arkeologis apakah yang memuat catatan tulisan Tionghoa tertua pada masa Dinasti Shang?",
          "en": "Which archaeological medium contains the oldest written Chinese records from the Shang Dynasty?"
        },
        "options": [
          {
            "id": "Kertas papirus impor",
            "en": "Imported papyrus scrolls"
          },
          {
            "id": "Tulang ramalan (oracle bones) dari tempurung kura-kura dan tulang sapi",
            "en": "Oracle bones made of turtle plastrons and ox scapulae"
          },
          {
            "id": "Prasasti batu granit",
            "en": "Granite rock inscriptions"
          },
          {
            "id": "Lembaran sutra berukir",
            "en": "Inscribed silk fabrics"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Para peramal istana Shang memanaskan tulang kura-kura dan sapi hingga retak untuk meramal masa depan, lalu mengukir pertanyaannya (Jiaguwen).",
          "en": "Shang diviners heated turtle shells and cattle bones until they cracked to divine the future, inscribing their queries (Jiaguwen)."
        }
      },
      {
        "id": "q2-dinasti-shang",
        "question": {
          "id": "Teknologi pengerjaan logam apakah yang mencapai puncak keunggulan artistik dan teknis pada era Shang?",
          "en": "Which metallurgical technology achieved supreme artistic and technical excellence during the Shang era?"
        },
        "options": [
          {
            "id": "Pengecoran bejana perunggu ritual (piece-mold bronze casting)",
            "en": "Ritual bronze casting via piece-mold technique"
          },
          {
            "id": "Penempaan baja damaskus",
            "en": "Damascus steel forging"
          },
          {
            "id": "Peleburan aluminium murni",
            "en": "Pure aluminum smelting"
          },
          {
            "id": "Pemurnian perak elektrokimia",
            "en": "Electrochemical silver refining"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Bangsa Shang menggunakan cetakan tanah liat potongan (piece-mold) canggih untuk menghasilkan bejana perunggu ritual raksasa seperti Houmuwu Ding.",
          "en": "The Shang employed sophisticated piece-mold clay techniques to cast massive ceremonial bronze vessels such as the Houmuwu Ding."
        }
      },
      {
        "id": "q3-dinasti-shang",
        "question": {
          "id": "Di manakah lokasi ibu kota terakhir Dinasti Shang tempat ditemukannya ribuan tulang ramalan dan makam Fu Hao?",
          "en": "Where was the final capital of the Shang Dynasty where thousands of oracle bones and Fu Hao's tomb were discovered?"
        },
        "options": [
          {
            "id": "Chang'an (Xi'an)",
            "en": "Chang'an (Xi'an)"
          },
          {
            "id": "Yinxu (Anyang)",
            "en": "Yinxu (Anyang)"
          },
          {
            "id": "Beijing",
            "en": "Beijing"
          },
          {
            "id": "Nanjing",
            "en": "Nanjing"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Situs Yinxu di Anyang, Provinsi Henan, adalah pusat arkeologi Dinasti Shang yang menyimpan ribuan artefak perunggu dan tulisan kuno.",
          "en": "The Yinxu site in Anyang, Henan Province, is the archaeological heartland of the Shang Dynasty, yielding thousands of bronze artifacts and inscriptions."
        }
      }
    ]
  },
  "kejayaan-yunani-kuno": {
    "articleSlug": "kejayaan-yunani-kuno",
    "title": {
      "id": "Kuis: Zaman Keemasan Athena",
      "en": "Quiz: Golden Age of Athens"
    },
    "questions": [
      {
        "id": "q1-yunani",
        "question": {
          "id": "Siapa negarawan terkemuka yang memprakarsai pembangunan Akropolis dan memimpin Athena pada puncak Zaman Keemasannya?",
          "en": "Which prominent statesman initiated the reconstruction of the Acropolis and led Athens during its Golden Age?"
        },
        "options": [
          {
            "id": "Alexander Agung",
            "en": "Alexander the Great"
          },
          {
            "id": "Perikles",
            "en": "Pericles"
          },
          {
            "id": "Sokrates",
            "en": "Socrates"
          },
          {
            "id": "Klishenes",
            "en": "Cleisthenes"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Perikles memimpin Athena antara 461-429 SM, memperluas demokrasi langsung dan mendanai pembangunan mahakarya seperti Parthenon.",
          "en": "Pericles led Athens between 461-429 BCE, expanding direct democracy and commissioning masterworks such as the Parthenon."
        }
      },
      {
        "id": "q2-yunani",
        "question": {
          "id": "Bagaimana sebagian besar pejabat publik dan dewan (Boule) dipilih dalam sistem demokrasi Athena kuno?",
          "en": "How were most public officials and council members (Boule) selected in ancient Athenian democracy?"
        },
        "options": [
          {
            "id": "Melalui sistem undian (sortisi) dari seluruh warga negara",
            "en": "Through a lot drawing system (sortition) among all citizens"
          },
          {
            "id": "Berdasarkan keturunan bangsawan dan kekayaan tanah",
            "en": "Based on aristocratic lineage and land ownership"
          },
          {
            "id": "Ditunjuk seumur hidup oleh imam agung kuil",
            "en": "Appointed for life by temple high priests"
          },
          {
            "id": "Dipilih secara eksklusif oleh para komandan militer",
            "en": "Elected exclusively by military commanders"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Warga Athena menganggap undian (sortition) lebih demokratis daripada pemilu karena mencegah manipulasi oleh orang-orang kaya dan berpengaruh.",
          "en": "Athenians viewed sortition as more democratic than elections because it prevented domination by wealthy elites."
        }
      },
      {
        "id": "q3-yunani",
        "question": {
          "id": "Konflik berkepanjangan manakah yang pada akhirnya melumpuhkan kekuasaan hegemoni Athena di dunia Yunani?",
          "en": "Which prolonged conflict ultimately crippled Athenian hegemony across the Greek world?"
        },
        "options": [
          {
            "id": "Perang Troya",
            "en": "The Trojan War"
          },
          {
            "id": "Perang Yunani-Persia",
            "en": "The Greco-Persian Wars"
          },
          {
            "id": "Perang Peloponnesos",
            "en": "The Peloponnesian War"
          },
          {
            "id": "Penaklukan Romawi",
            "en": "The Roman Conquest"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Perang Peloponnesos (431–404 SM) antara Liga Delos pimpinan Athena dan Liga Peloponnesos pimpinan Sparta berakhir dengan kekalahan telak Athena.",
          "en": "The Peloponnesian War (431–404 BCE) between Athens' Delian League and Sparta's Peloponnesian League ended in catastrophic defeat for Athens."
        }
      }
    ]
  },
  "kekaisaran-maurya": {
    "articleSlug": "kekaisaran-maurya",
    "title": {
      "id": "Kuis: Kekaisaran Maurya & Ashoka",
      "en": "Quiz: Mauryan Empire & Ashoka"
    },
    "questions": [
      {
        "id": "q1-maurya",
        "question": {
          "id": "Peristiwa militer berdarah manakah yang mengubah pandangan hidup Kaisar Ashoka hingga memeluk ajaran Buddha dan prinsip tanpa kekerasan (Ahimsa)?",
          "en": "Which bloody military conflict transformed Emperor Ashoka's worldview, leading him to embrace Buddhism and non-violence (Ahimsa)?"
        },
        "options": [
          {
            "id": "Perang Kalinga",
            "en": "The Kalinga War"
          },
          {
            "id": "Pertempuran Sungai Hydaspes",
            "en": "The Battle of the Hydaspes"
          },
          {
            "id": "Pemberontakan Seleukus",
            "en": "The Seleucid Rebellion"
          },
          {
            "id": "Pengepungan Pataliputra",
            "en": "The Siege of Pataliputra"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Menyaksikan pembantaian lebih dari 100.000 jiwa dalam Perang Kalinga (sekitar 261 SM) membuat Ashoka mengalami penyesalan mendalam dan bersumpah meninggalkan perang ekspansi.",
          "en": "Witnessing the slaughter of over 100,000 people in the Kalinga War (c. 261 BCE) filled Ashoka with profound remorse, prompting his vow to renounce aggressive conquest."
        }
      },
      {
        "id": "q2-maurya",
        "question": {
          "id": "Siapa cendekiawan dan perdana menteri jenius yang membimbing Chandragupta Maurya mendirikan kekaisaran dan menulis risalah kenegaraan Arthashastra?",
          "en": "Which brilliant scholar and prime minister guided Chandragupta Maurya in founding the empire and authored the statecraft treatise Arthashastra?"
        },
        "options": [
          {
            "id": "Aryabhata",
            "en": "Aryabhata"
          },
          {
            "id": "Chanakya (Kautilya)",
            "en": "Chanakya (Kautilya)"
          },
          {
            "id": "Kalidasa",
            "en": "Kalidasa"
          },
          {
            "id": "Patanjali",
            "en": "Patanjali"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Chanakya adalah ahli strategi politik legendaris yang merumuskan teori pemerintahan, ekonomi, dan intelijen dalam kitab Arthashastra.",
          "en": "Chanakya was the legendary political strategist who formulated doctrines of governance, economics, and espionage in the Arthashastra."
        }
      },
      {
        "id": "q3-maurya",
        "question": {
          "id": "Bagaimana Kaisar Ashoka menyebarkan titah moral, toleransi beragama, dan hukum kebajikan (Dhamma) ke seluruh pelosok India?",
          "en": "How did Emperor Ashoka disseminate his moral edicts, religious tolerance, and law of righteousness (Dhamma) across India?"
        },
        "options": [
          {
            "id": "Memaksa konversi dengan ancaman militer",
            "en": "Enforcing conversion through military threats"
          },
          {
            "id": "Memahat Prasasti Pilar dan Batu Cadas (Edicts of Ashoka) di berbagai wilayah",
            "en": "Carving Rock and Pillar Edicts across the subcontinent"
          },
          {
            "id": "Membakar seluruh kitab ajaran lain",
            "en": "Burning all manuscripts of other traditions"
          },
          {
            "id": "Menutup perbatasan dari pedagang asing",
            "en": "Closing imperial borders to foreign merchants"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Prasasti Ashoka dipahat pada tebing batu dan pilar monolitik dalam bahasa rakyat (Prakerta/Brahmi) untuk mengajarkan etika, kebaikan sosial, dan toleransi universal.",
          "en": "Ashoka's Edicts were inscribed on rock faces and monolithic sandstone pillars in vernacular scripts to promote ethics, social welfare, and universal tolerance."
        }
      }
    ]
  },
  "kekaisaran-romawi": {
    "articleSlug": "kekaisaran-romawi",
    "title": {
      "id": "Kuis: Kekaisaran Romawi & Augustus",
      "en": "Quiz: Roman Empire & Augustus"
    },
    "questions": [
      {
        "id": "q1-roma",
        "question": {
          "id": "Siapakah tokoh yang menjadi Kaisar (Princeps) pertama yang menandai berakhirnya Republik Romawi dan dimulainya Pax Romana pada 27 SM?",
          "en": "Who became the first Emperor (Princeps), marking the end of the Roman Republic and the start of Pax Romana in 27 BCE?"
        },
        "options": [
          {
            "id": "Julius Caesar",
            "en": "Julius Caesar"
          },
          {
            "id": "Augustus Caesar (Octavianus)",
            "en": "Augustus Caesar (Octavian)"
          },
          {
            "id": "Markus Antonius",
            "en": "Mark Antony"
          },
          {
            "id": "Nero",
            "en": "Nero"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Gaius Octavius dianugerahi gelar Augustus oleh Senat pada 27 SM, mendirikan tatanan Principatus dan memimpin Roma selama 40 tahun penuh kemakmuran.",
          "en": "Gaius Octavius was granted the title Augustus by the Senate in 27 BCE, establishing the Principate and guiding Rome through 40 years of unprecedented prosperity."
        }
      },
      {
        "id": "q2-roma",
        "question": {
          "id": "Bagaimana strategi politik cerdas Augustus dalam mempertahankan kekuasaan absolut tanpa memicu pembunuhan politik seperti pamannya, Julius Caesar?",
          "en": "What was Augustus' astute political strategy to maintain autocratic power without provoking assassination like his uncle Julius Caesar?"
        },
        "options": [
          {
            "id": "Menolak mahkota raja (Rex) dan memerintah di balik topeng restorasi institusi Republik tradisional",
            "en": "Rejecting the title of King (Rex) and ruling under the guise of restoring traditional Republican institutions"
          },
          {
            "id": "Membubarkan Senat dan mengeksekusi seluruh bangsawan",
            "en": "Dissolving the Senate and executing all patricians"
          },
          {
            "id": "Memindahkan ibu kota kekaisaran ke Aleksandria di Mesir",
            "en": "Moving the imperial capital to Alexandria in Egypt"
          },
          {
            "id": "Menghapuskan seluruh sistem militer legiun",
            "en": "Abolishing the legionary military system entirely"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Augustus secara cerdik menyebut dirinya hanya sebagai Princeps (Warga Negara Pertama) dan mempertahankan Senat, sembari memegang komando militer dan hak veto tertinggi.",
          "en": "Augustus astutely styled himself merely as Princeps (First Citizen) and preserved the Senate, while quietly holding supreme military command and veto powers."
        }
      },
      {
        "id": "q3-roma",
        "question": {
          "id": "Infrastruktur rekayasa monumental apakah yang dibangun bangsa Romawi untuk menyalurkan jutaan liter air segar dari pegunungan ke kota-kota kekaisaran?",
          "en": "Which monumental engineering infrastructure did the Romans construct to channel millions of liters of mountain spring water into imperial cities?"
        },
        "options": [
          {
            "id": "Akuaduk (Aqueduct)",
            "en": "Aqueducts"
          },
          {
            "id": "Kincir angin Archimedes",
            "en": "Archimedean windmills"
          },
          {
            "id": "Kanal laut dalam",
            "en": "Deep sea canals"
          },
          {
            "id": "Pipa uap vulkanik",
            "en": "Volcanic steam pipes"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Akuaduk adalah jembatan saluran air bertingkat dengan kemiringan gravitasi presisi yang memasok pemandian umum, air mancur, dan sanitasi di seluruh imperium.",
          "en": "Aqueducts were arched masonry conduits operating on precise gravity gradients, supplying public baths, fountains, and sanitation across the empire."
        }
      }
    ]
  },
  "kelahiran-islam": {
    "articleSlug": "kelahiran-islam",
    "title": {
      "id": "Kuis: Kelahiran Islam & Hijrah",
      "en": "Quiz: Birth of Islam & Hijrah"
    },
    "questions": [
      {
        "id": "q1-islam",
        "question": {
          "id": "Peristiwa migrasi bersejarah dari Makkah ke Madinah pada tahun 622 M yang dijadikan awal penanggalan kalender Islam adalah...",
          "en": "The historic migration from Mecca to Medina in 622 CE that marks the start of the Islamic lunar calendar is called..."
        },
        "options": [
          {
            "id": "Isra Miraj",
            "en": "Isra and Mi'raj"
          },
          {
            "id": "Hijrah",
            "en": "The Hijrah"
          },
          {
            "id": "Fathu Makkah",
            "en": "Conquest of Mecca"
          },
          {
            "id": "Perjanjian Hudaibiyah",
            "en": "Treaty of Hudaybiyyah"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Hijrah menandai titik balik berdirinya komunitas masyarakat Muslim (Ummah) yang berdaulat secara politik dan sosial di Madinah.",
          "en": "The Hijrah marked the founding turning point of a sovereign, unified socio-political Muslim community (Ummah) in Medina."
        }
      },
      {
        "id": "q2-islam",
        "question": {
          "id": "Dokumen konstitusi tertulis pertama yang menyatukan berbagai klan Muslim dan komunitas Yahudi di Madinah di bawah perlindungan hukum bersama adalah...",
          "en": "The pioneering written constitutional pact unifying Muslim clans and Jewish communities in Medina under mutual civil protection was..."
        },
        "options": [
          {
            "id": "Piagam Madinah (Sahifat al-Madinah)",
            "en": "The Constitution of Medina (Sahifat al-Madinah)"
          },
          {
            "id": "Perjanjian Aqabah",
            "en": "The Pledge of Aqabah"
          },
          {
            "id": "Piagam Magna Carta",
            "en": "The Magna Carta"
          },
          {
            "id": "Deklarasi Ta'if",
            "en": "The Ta'if Declaration"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Piagam Madinah menetapkan kebebasan beragama, tanggung jawab pertahanan bersama, dan penyelesaian perselisihan secara damai melalui mediasi hukum.",
          "en": "The Constitution of Medina established freedom of religion, mutual civic defense duties, and peaceful arbitration of disputes."
        }
      },
      {
        "id": "q3-islam",
        "question": {
          "id": "Peristiwa pembebasan kembali kota Makkah oleh kaum Muslim pada tahun 630 M yang berlangsung damai dengan pemberian amnesti umum dikenal sebagai...",
          "en": "The peaceful liberation of Mecca by Muslims in 630 CE accompanied by universal amnesty is known as..."
        },
        "options": [
          {
            "id": "Perang Badar",
            "en": "Battle of Badr"
          },
          {
            "id": "Fathu Makkah (Pembebasan Makkah)",
            "en": "Fathu Makkah (Conquest of Mecca)"
          },
          {
            "id": "Perang Khandaq",
            "en": "Battle of the Trench"
          },
          {
            "id": "Perang Tabuk",
            "en": "Battle of Tabuk"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Dalam Fathu Makkah, Nabi Muhammad memaafkan para musuh bebuyutannya dan membersihkan Ka'bah dari berhala tanpa pembalasan dendam berdarah.",
          "en": "During Fathu Makkah, Prophet Muhammad granted general amnesty to former adversaries and cleansed the Kaaba without mass retribution."
        }
      }
    ]
  },
  "masa-keemasan-islam": {
    "articleSlug": "masa-keemasan-islam",
    "title": {
      "id": "Kuis: Masa Keemasan Islam",
      "en": "Quiz: Islamic Golden Age"
    },
    "questions": [
      {
        "id": "q1-islamic-golden-age",
        "question": {
          "id": "Institusi riset, akademi penerjemahan, dan perpustakaan raksasa yang didirikan di Baghdad pada era Kekhalifahan Abbasiyah bernama...",
          "en": "The grand research academy, translation bureau, and universal library established in Baghdad during the Abbasid Caliphate was named..."
        },
        "options": [
          {
            "id": "Baitul Hikmah (House of Wisdom)",
            "en": "House of Wisdom (Bayt al-Hikma)"
          },
          {
            "id": "Universitas Nalanda",
            "en": "Nalanda University"
          },
          {
            "id": "Akademia Athena",
            "en": "Academy of Athens"
          },
          {
            "id": "Perpustakaan Aleksandria",
            "en": "Library of Alexandria"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Baitul Hikmah didirikan oleh Khalifah Harun al-Rashid dan dikembangkan Khalifah Al-Ma'mun sebagai pusat Gerakan Penerjemahan karya ilmiah dunia.",
          "en": "The House of Wisdom was founded by Caliph Harun al-Rashid and expanded by Caliph Al-Ma'mun as the epicenter of the Translation Movement."
        }
      },
      {
        "id": "q2-islamic-golden-age",
        "question": {
          "id": "Cendekiawan polimatik pelopor di Baitul Hikmah yang menyusun ilmu Aljabar dan mempopulerkan sistem angka Hindu-Arab termasuk angka nol adalah...",
          "en": "The polymath scholar at the House of Wisdom who formulated Algebra and popularized the Hindu-Arabic numeral system including zero was..."
        },
        "options": [
          {
            "id": "Al-Khwarizmi",
            "en": "Al-Khwarizmi"
          },
          {
            "id": "Al-Farabi",
            "en": "Al-Farabi"
          },
          {
            "id": "Ibnu Batutah",
            "en": "Ibn Battuta"
          },
          {
            "id": "Al-Ghazali",
            "en": "Al-Ghazali"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Kitab Al-Jabr wa'l-Muqabala karya Al-Khwarizmi melahirkan disiplin ilmu aljabar, dan namanya diabadikan menjadi kata modern 'algoritma'.",
          "en": "Al-Khwarizmi's treatise Kitab al-Jabr wa'l-Muqabala established algebra, and his Latinized name gave rise to the term 'algorithm'."
        }
      },
      {
        "id": "q3-islamic-golden-age",
        "question": {
          "id": "Karya ensiklopedia kedokteran monumental karya Ibnu Sina (Avicenna) yang menjadi buku rujukan standar di universitas Eropa selama berabad-abad adalah...",
          "en": "The monumental medical encyclopedia authored by Ibn Sina (Avicenna) that served as standard curriculum in European universities for centuries is..."
        },
        "options": [
          {
            "id": "Al-Qanun fi al-Tibb (The Canon of Medicine)",
            "en": "The Canon of Medicine (Al-Qanun fi al-Tibb)"
          },
          {
            "id": "Kitab al-Manazir (Kitab Optika)",
            "en": "Book of Optics (Kitab al-Manazir)"
          },
          {
            "id": "Muqaddimah",
            "en": "The Muqaddimah"
          },
          {
            "id": "Tahafut al-Falasifah",
            "en": "The Incoherence of the Philosophers"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Al-Qanun fi al-Tibb mengkodifikasikan anatomi, farmakologi, uji klinis obat, dan diagnosis penyakit secara sistematis dan komprehensif.",
          "en": "The Canon of Medicine systematically codified anatomy, pharmacology, clinical pharmacology trials, and diagnostic pathology."
        }
      }
    ]
  },
  "kekaisaran-mongol": {
    "articleSlug": "kekaisaran-mongol",
    "title": {
      "id": "Kuis: Kekaisaran Mongol",
      "en": "Quiz: Mongol Empire"
    },
    "questions": [
      {
        "id": "q1-mongol",
        "question": {
          "id": "Siapakah nama lahir Genghis Khan sebelum ia berhasil menyatukan seluruh klan stepa pada Kurultai akbar tahun 1206?",
          "en": "What was the birth name of Genghis Khan before he unified all nomadic steppe tribes at the Great Kurultai in 1206?"
        },
        "options": [
          {
            "id": "Temüjin",
            "en": "Temüjin"
          },
          {
            "id": "Batu Khan",
            "en": "Batu Khan"
          },
          {
            "id": "Kublai Khan",
            "en": "Kublai Khan"
          },
          {
            "id": "Subutai",
            "en": "Subutai"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Temüjin mengatasi masa kecilnya yang penuh kemiskinan dan permusuhan antarklan untuk kemudian diangkat sebagai Genghis Khan (Penguasa Universal).",
          "en": "Temüjin overcame an impoverished childhood of clan warfare to be proclaimed Genghis Khan (Universal Ruler) in 1206."
        }
      },
      {
        "id": "q2-mongol",
        "question": {
          "id": "Sistem jaringan komunikasi pos kurir berkuda kilat yang menghubungkan seluruh pelosok kekaisaran Mongol dari Pasifik hingga Eropa Timur disebut...",
          "en": "The high-speed relay horse-messenger communication network connecting the Mongol Empire from the Pacific to Eastern Europe was called..."
        },
        "options": [
          {
            "id": "Sistem Yam (Örtöö)",
            "en": "The Yam (Örtöö) System"
          },
          {
            "id": "Jalan Kerajaan Persia",
            "en": "The Persian Royal Road"
          },
          {
            "id": "Cursus Publicus",
            "en": "Cursus Publicus"
          },
          {
            "id": "Pony Express Asia",
            "en": "Asian Pony Express"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Sistem Yam memiliki stasiun pos pergantian kuda setiap 40-50 kilometer, memungkinkan pesan kekaisaran menempuh ribuan kilometer hanya dalam beberapa hari.",
          "en": "The Yam system operated relay stations every 40-50 km, enabling imperial dispatches to travel thousands of kilometers in mere days."
        }
      },
      {
        "id": "q3-mongol",
        "question": {
          "id": "Periode stabilitas politik dan keamanan perdagangan di sepanjang Jalur Sutra di bawah hegemoni Mongol dikenal sebagai...",
          "en": "The era of trans-Eurasian trade security and geopolitical stability along the Silk Road under Mongol hegemony is known as..."
        },
        "options": [
          {
            "id": "Pax Mongolica",
            "en": "Pax Mongolica"
          },
          {
            "id": "Pax Romana",
            "en": "Pax Romana"
          },
          {
            "id": "Pax Sinica",
            "en": "Pax Sinica"
          },
          {
            "id": "Era Samarkand",
            "en": "The Samarkand Era"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Pax Mongolica menjamin keselamatan para saudagar, duta besar, dan cendekiawan (seperti Marco Polo) melintasi benua Asia tanpa rasa takut akan perampokan.",
          "en": "Pax Mongolica secured transcontinental safety for merchants, envoys, and explorers (such as Marco Polo) to travel across Eurasia unharmed."
        }
      }
    ]
  },
  "pelayaran-zheng-he": {
    "articleSlug": "pelayaran-zheng-he",
    "title": {
      "id": "Kuis: Armada Harta Zheng He",
      "en": "Quiz: Zheng He's Treasure Fleet"
    },
    "questions": [
      {
        "id": "q1-zhenghe",
        "question": {
          "id": "Siapakah Kaisar Dinasti Ming yang memprakarsai pembangunan Armada Harta dan mengutus Laksamana Zheng He memimpin pelayaran samudra?",
          "en": "Which Ming Dynasty Emperor commissioned the massive Treasure Fleet and appointed Admiral Zheng He as supreme commander?"
        },
        "options": [
          {
            "id": "Kaisar Yongle (Zhu Di)",
            "en": "Emperor Yongle (Zhu Di)"
          },
          {
            "id": "Kaisar Hongwu",
            "en": "Emperor Hongwu"
          },
          {
            "id": "Kaisar Wanli",
            "en": "Emperor Wanli"
          },
          {
            "id": "Kaisar Kangxi",
            "en": "Emperor Kangxi"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Kaisar Yongle memerintahkan tujuh ekspedisi maritim raksasa antara 1405-1433 untuk memproyeksikan wibawa Tiongkok ke Samudra Hindia.",
          "en": "Emperor Yongle ordered seven monumental maritime voyages between 1405 and 1433 to project Ming prestige across the Indian Ocean."
        }
      },
      {
        "id": "q2-zhenghe",
        "question": {
          "id": "Sebutan untuk kapal-kapal kayu raksasa berlapis sembilan tiang layar yang menjadi inti kekuatan armada Zheng He adalah...",
          "en": "The specialized multi-decked wooden flagship vessels featuring up to nine masts in Zheng He's fleet were called..."
        },
        "options": [
          {
            "id": "Kapal Harta (Baochuan)",
            "en": "Treasure Ships (Baochuan)"
          },
          {
            "id": "Karavel",
            "en": "Caravels"
          },
          {
            "id": "Galeon Manila",
            "en": "Manila Galleons"
          },
          {
            "id": "Kapal Trireme",
            "en": "Triremes"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Baochuan adalah kapal kayu terbesar pada zamannya, dilengkapi sekat kedap air (watertight bulkheads) dan kompas magnetik canggih.",
          "en": "Baochuan were the largest wooden vessels of their era, featuring watertight bulkhead compartments and sophisticated magnetic compasses."
        }
      },
      {
        "id": "q3-zhenghe",
        "question": {
          "id": "Apakah tujuan diplomatik dan perniagaan utama dari ekspedisi Laksamana Zheng He?",
          "en": "What was the primary diplomatic and commercial objective of Admiral Zheng He's maritime expeditions?"
        },
        "options": [
          {
            "id": "Membangun sistem upeti diplomatik (tributary system) dan membuka rute perniagaan damai",
            "en": "Establishing a tributary diplomatic system and opening peaceful maritime trade corridors"
          },
          {
            "id": "Menjajah wilayah Nusantara dan Afrika untuk dijadikan koloni budak",
            "en": "Colonizing Southeast Asia and Africa as slave colonies"
          },
          {
            "id": "Mencari jalur tambang emas rahasia di Antartika",
            "en": "Seeking secret gold mines in Antarctica"
          },
          {
            "id": "Menyerang Kekaisaran Romawi Suci",
            "en": "Invading the Holy Roman Empire"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Zheng He berfokus pada diplomasi prestise kekaisaran, pertukaran duta besar, dan perdagangan sutra/porselen tanpa mendirikan koloni pemukiman.",
          "en": "Zheng He focused on imperial prestige diplomacy, envoy exchanges, and silk/porcelain commerce rather than colonial territorial annexation."
        }
      }
    ]
  },
  "kekaisaran-aztec": {
    "articleSlug": "kekaisaran-aztec",
    "title": {
      "id": "Kuis: Puncak Kekaisaran Aztec",
      "en": "Quiz: Peak of the Aztec Empire"
    },
    "questions": [
      {
        "id": "q1-aztec",
        "question": {
          "id": "Di manakah lokasi unik berdirinya Tenochtitlan, ibu kota monumental Kekaisaran Aztec?",
          "en": "Where was the unique location of Tenochtitlan, the monumental capital of the Aztec Empire?"
        },
        "options": [
          {
            "id": "Di lembah terisolasi pegunungan Andes",
            "en": "In an isolated valley of the Andes mountains"
          },
          {
            "id": "Di sebuah pulau di tengah Danau Texcoco",
            "en": "On an island in the middle of Lake Texcoco"
          },
          {
            "id": "Di pesisir pantai Semenanjung Yucatan",
            "en": "On the coastline of the Yucatan Peninsula"
          },
          {
            "id": "Di dalam gua vulkanik Popocatepetl",
            "en": "Inside the volcanic caves of Popocatepetl"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Suku Mexica mendirikan Tenochtitlan di pulau berawa di Danau Texcoco pada 1325 setelah melihat elang bertengger di atas kaktus memakan ular.",
          "en": "The Mexica founded Tenochtitlan on a marshy island in Lake Texcoco in 1325 following a prophecy of an eagle perched on a cactus devouring a snake."
        }
      },
      {
        "id": "q2-aztec",
        "question": {
          "id": "Inovasi rekayasa pertanian apakah yang memungkinkan bangsa Aztec memberi makan ratusan ribu penduduk kotanya?",
          "en": "Which agricultural engineering innovation allowed the Aztecs to feed hundreds of thousands of urban inhabitants?"
        },
        "options": [
          {
            "id": "Terasering batu bertingkat di lereng terjal",
            "en": "Stone terracing on steep mountain slopes"
          },
          {
            "id": "Chinampa, pulau buatan terapung yang sangat subur",
            "en": "Chinampas, highly fertile artificial floating islands"
          },
          {
            "id": "Kincir angin pengering rawa bertenaga hewan",
            "en": "Animal-powered windmill marsh drainage"
          },
          {
            "id": "Impor gandum skala besar dari bangsa Inca",
            "en": "Large-scale grain imports from the Inca"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Chinampa dibuat dari anyaman ranting, lumpur danau, dan tanaman pelindung yang mampu menghasilkan panen hingga 7 kali setahun.",
          "en": "Chinampas were constructed from woven reeds, lake mud, and willow trees, capable of yielding up to 7 harvests a year."
        }
      },
      {
        "id": "q3-aztec",
        "question": {
          "id": "Persekutuan militer dan politik apakah yang mendasari berdirinya Kekaisaran Aztec pada tahun 1428?",
          "en": "Which military and political coalition formed the foundation of the Aztec Empire in 1428?"
        },
        "options": [
          {
            "id": "Aliansi Tiga (Tenochtitlan, Texcoco, dan Tlacopan)",
            "en": "The Triple Alliance (Tenochtitlan, Texcoco, and Tlacopan)"
          },
          {
            "id": "Konfederasi Tlaxcala dan Cholula",
            "en": "The Confederation of Tlaxcala and Cholula"
          },
          {
            "id": "Perjanjian Tordesillas Mesoamerika",
            "en": "The Mesoamerican Treaty of Tordesillas"
          },
          {
            "id": "Liga Bangsa-Bangsa Maya-Mexica",
            "en": "The Maya-Mexica League of Nations"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Aliansi Tiga Kota (Triple Alliance) menyatukan kekuatan Mexica dan Acolhua untuk menumbangkan hegemoni Azcapotzalco dan mendominasi Mesoamerika.",
          "en": "The Triple Alliance united the Mexica and Acolhua forces to overthrow Azcapotzalco hegemony and dominate Mesoamerica."
        }
      }
    ]
  },
  "renaisans-eropa": {
    "articleSlug": "renaisans-eropa",
    "title": {
      "id": "Kuis: Era Renaisans",
      "en": "Quiz: The Renaissance"
    },
    "questions": [
      {
        "id": "q1-renaisans",
        "question": {
          "id": "Di kota manakah gerakan Renaisans pertama kali bermula?",
          "en": "In which city did the Renaissance movement first begin?"
        },
        "options": [
          {
            "id": "Roma",
            "en": "Rome"
          },
          {
            "id": "Florence",
            "en": "Florence"
          },
          {
            "id": "Paris",
            "en": "Paris"
          },
          {
            "id": "Venesia",
            "en": "Venice"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Renaisans bermula di kota Florence, Italia, yang didukung oleh keluarga kaya seperti klan Medici.",
          "en": "The Renaissance began in Florence, Italy, heavily sponsored by wealthy families like the Medicis."
        }
      }
    ]
  },
  "penjelajahan-columbus": {
    "articleSlug": "penjelajahan-columbus",
    "title": {
      "id": "Kuis: Penjelajahan Dunia",
      "en": "Quiz: World Exploration"
    },
    "questions": [
      {
        "id": "q1-columbus",
        "question": {
          "id": "Apa yang memicu Pertukaran Columbian?",
          "en": "What triggered the Columbian Exchange?"
        },
        "options": [
          {
            "id": "Jatuhnya Konstantinopel",
            "en": "Fall of Constantinople"
          },
          {
            "id": "Pendaratan Columbus di benua Amerika",
            "en": "Columbus landing in the Americas"
          },
          {
            "id": "Ditemukannya jalur sutra",
            "en": "Discovery of the Silk Road"
          },
          {
            "id": "Perjanjian Tordesillas",
            "en": "Treaty of Tordesillas"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Pendaratan Columbus memulai pertukaran besar-besaran biologi, budaya, dan manusia antara Dunia Lama dan Baru.",
          "en": "Columbus's landing initiated the massive biological, cultural, and human exchange between the Old and New Worlds."
        }
      }
    ]
  },
  "revolusi-industri": {
    "articleSlug": "revolusi-industri",
    "title": {
      "id": "Kuis: Revolusi Industri",
      "en": "Quiz: Industrial Revolution"
    },
    "questions": [
      {
        "id": "q1-industri",
        "question": {
          "id": "Penemuan mesin apa yang paling mendorong lahirnya Revolusi Industri?",
          "en": "The invention of which machine primarily drove the Industrial Revolution?"
        },
        "options": [
          {
            "id": "Mesin Cetak",
            "en": "Printing Press"
          },
          {
            "id": "Mesin Uap",
            "en": "Steam Engine"
          },
          {
            "id": "Mesin Tenun",
            "en": "Loom"
          },
          {
            "id": "Mesin Telegraf",
            "en": "Telegraph"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Mesin uap (terutama yang dikembangkan James Watt) memungkinkan mekanisasi pabrik dan transportasi.",
          "en": "The steam engine (especially James Watt's design) enabled the mechanization of factories and transportation."
        }
      }
    ]
  },
  "revolusi-prancis": {
    "articleSlug": "revolusi-prancis",
    "title": {
      "id": "Kuis: Revolusi Prancis",
      "en": "Quiz: French Revolution"
    },
    "questions": [
      {
        "id": "q1-prancis",
        "question": {
          "id": "Peristiwa apa pada tanggal 14 Juli 1789 yang menandai dimulainya revolusi secara terang-terangan?",
          "en": "What event on July 14, 1789 marked the beginning of open revolution?"
        },
        "options": [
          {
            "id": "Eksekusi Raja Louis XVI",
            "en": "Execution of King Louis XVI"
          },
          {
            "id": "Penyerbuan Penjara Bastille",
            "en": "Storming of the Bastille"
          },
          {
            "id": "Deklarasi Hak Asasi Manusia",
            "en": "Declaration of the Rights of Man"
          },
          {
            "id": "Kudeta Napoleon",
            "en": "Napoleon's Coup"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Penyerbuan Bastille adalah momen simbolis runtuhnya tirani kerajaan dan kini dirayakan sebagai hari nasional Prancis.",
          "en": "The storming of the Bastille was a symbolic moment of the collapse of royal tyranny and is now celebrated as France's national day."
        }
      },
      {
        "id": "q2-prancis",
        "question": {
          "id": "Siapa golongan (Estate) yang menanggung beban pajak paling berat sebelum revolusi?",
          "en": "Which Estate bore the heaviest tax burden before the revolution?"
        },
        "options": [
          {
            "id": "Golongan Pertama (Klerus/Agamawan)",
            "en": "First Estate (Clergy)"
          },
          {
            "id": "Golongan Kedua (Bangsawan)",
            "en": "Second Estate (Nobility)"
          },
          {
            "id": "Golongan Ketiga (Rakyat Jelata)",
            "en": "Third Estate (Commoners)"
          },
          {
            "id": "Keluarga Kerajaan",
            "en": "The Royal Family"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Golongan Ketiga (rakyat jelata, petani, kaum borjuis) menanggung hampir seluruh pajak negara, sementara golongan elit dibebaskan.",
          "en": "The Third Estate (commoners, peasants, bourgeoisie) paid almost all state taxes, while the elite classes were exempt."
        }
      }
    ]
  },
  "kekaisaran-inca": {
    "articleSlug": "kekaisaran-inca",
    "title": {
      "id": "Kuis: Kekaisaran Inca",
      "en": "Quiz: Inca Empire"
    },
    "questions": [
      {
        "id": "q1-kekaisaran-inca",
        "question": {
          "id": "Apakah fakta terpenting tentang Kekaisaran Inca?",
          "en": "What is the most important fact about Inca Empire?"
        },
        "options": [
          {
            "id": "Satu",
            "en": "One"
          },
          {
            "id": "Dua",
            "en": "Two"
          },
          {
            "id": "Fakta Utama",
            "en": "Main Fact"
          },
          {
            "id": "Empat",
            "en": "Four"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Fakta utama sangat penting.",
          "en": "The main fact is very important."
        }
      }
    ]
  },
  "perang-dunia-1": {
    "articleSlug": "perang-dunia-1",
    "title": {
      "id": "Kuis: Perang Dunia I",
      "en": "Quiz: World War I"
    },
    "questions": [
      {
        "id": "q1-perang-dunia-1",
        "question": {
          "id": "Apakah fakta terpenting tentang Perang Dunia I?",
          "en": "What is the most important fact about World War I?"
        },
        "options": [
          {
            "id": "Satu",
            "en": "One"
          },
          {
            "id": "Dua",
            "en": "Two"
          },
          {
            "id": "Fakta Utama",
            "en": "Main Fact"
          },
          {
            "id": "Empat",
            "en": "Four"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Fakta utama sangat penting.",
          "en": "The main fact is very important."
        }
      }
    ]
  },
  "perang-dunia-2": {
    "articleSlug": "perang-dunia-2",
    "title": {
      "id": "Kuis: Perang Dunia II",
      "en": "Quiz: World War II"
    },
    "questions": [
      {
        "id": "q1-perang-dunia-2",
        "question": {
          "id": "Apakah fakta terpenting tentang Perang Dunia II?",
          "en": "What is the most important fact about World War II?"
        },
        "options": [
          {
            "id": "Satu",
            "en": "One"
          },
          {
            "id": "Dua",
            "en": "Two"
          },
          {
            "id": "Fakta Utama",
            "en": "Main Fact"
          },
          {
            "id": "Empat",
            "en": "Four"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Fakta utama sangat penting.",
          "en": "The main fact is very important."
        }
      }
    ]
  },
  "kemerdekaan-indonesia": {
    "articleSlug": "kemerdekaan-indonesia",
    "title": {
      "id": "Kuis: Proklamasi 1945",
      "en": "Quiz: 1945 Proclamation"
    },
    "questions": [
      {
        "id": "q1-indo",
        "question": {
          "id": "Peristiwa global apa yang memberikan celah (kekosongan kekuasaan) bagi Indonesia untuk merdeka?",
          "en": "What global event provided a power vacuum for Indonesia to declare independence?"
        },
        "options": [
          {
            "id": "Runtuhnya Tembok Berlin",
            "en": "Fall of the Berlin Wall"
          },
          {
            "id": "Kekalahan Belanda oleh Jerman",
            "en": "Defeat of the Dutch by Germany"
          },
          {
            "id": "Menyerahnya Jepang pada Sekutu",
            "en": "Japan's surrender to the Allies"
          },
          {
            "id": "Berdirinya PBB",
            "en": "Establishment of the UN"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Menyerahnya Jepang di Perang Dunia II membuka kekosongan kekuasaan yang segera dimanfaatkan oleh para pemuda dan tokoh bangsa.",
          "en": "Japan's surrender in WWII created a power vacuum quickly utilized by Indonesian youth and national figures."
        }
      }
    ]
  },
  "pendaratan-bulan": {
    "articleSlug": "pendaratan-bulan",
    "title": {
      "id": "Kuis: Pendaratan Bulan",
      "en": "Quiz: Moon Landing"
    },
    "questions": [
      {
        "id": "q1-bulan",
        "question": {
          "id": "Apakah misi pendaratan manusia pertama di bulan?",
          "en": "What was the first manned moon landing mission?"
        },
        "options": [
          {
            "id": "Apollo 8",
            "en": "Apollo 8"
          },
          {
            "id": "Apollo 11",
            "en": "Apollo 11"
          },
          {
            "id": "Apollo 13",
            "en": "Apollo 13"
          },
          {
            "id": "Sputnik 1",
            "en": "Sputnik 1"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Misi Apollo 11 berhasil mendaratkan manusia pertama di permukaan bulan pada 20 Juli 1969.",
          "en": "Apollo 11 mission landed the first humans on the Moon on July 20, 1969."
        }
      }
    ]
  },
  "runtuhnya-tembok-berlin": {
    "articleSlug": "runtuhnya-tembok-berlin",
    "title": {
      "id": "Kuis: Tembok Berlin",
      "en": "Quiz: Berlin Wall"
    },
    "questions": [
      {
        "id": "q1-berlin",
        "question": {
          "id": "Runtuhnya Tembok Berlin secara simbolis menandai berakhirnya era apa?",
          "en": "The fall of the Berlin Wall symbolically marked the end of which era?"
        },
        "options": [
          {
            "id": "Perang Dunia I",
            "en": "World War I"
          },
          {
            "id": "Revolusi Industri",
            "en": "Industrial Revolution"
          },
          {
            "id": "Perang Dingin",
            "en": "The Cold War"
          },
          {
            "id": "Zaman Renaisans",
            "en": "The Renaissance"
          }
        ],
        "correctAnswerIndex": 2,
        "explanation": {
          "id": "Peristiwa ini menjadi simbol berakhirnya segregasi ideologi antara Blok Barat dan Blok Timur selama Perang Dingin.",
          "en": "This event became the symbol of the end of ideological segregation between the Western and Eastern Blocs during the Cold War."
        }
      }
    ]
  }
};
