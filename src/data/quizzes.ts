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
      "id": "Kuis: Renaisans Eropa",
      "en": "Quiz: European Renaissance"
    },
    "questions": [
      {
        "id": "q1-renaisans",
        "question": {
          "id": "Di kota manakah gerakan Renaisans pertama kali mekar berkat perlindungan finansial dan politik keluarga bangsawan pedagang klan Medici?",
          "en": "In which Italian city did the Renaissance first flourish, fueled by the financial and political patronage of the merchant Medici family?"
        },
        "options": [
          {
            "id": "Roma",
            "en": "Rome"
          },
          {
            "id": "Florence (Firenze)",
            "en": "Florence (Firenze)"
          },
          {
            "id": "Venesia",
            "en": "Venice"
          },
          {
            "id": "Milan",
            "en": "Milan"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Florence menjadi episentrum seni dan filsafat Renaisans di bawah naungan Cosimo dan Lorenzo de' Medici yang mendanai seniman dan perpustakaan.",
          "en": "Florence became the epicenter of Renaissance art and philosophy under Cosimo and Lorenzo de' Medici, who patronized artists and libraries."
        }
      },
      {
        "id": "q2-renaisans",
        "question": {
          "id": "Gerakan intelektual yang menekankan martabat, potensi nalar mandiri, dan studi terhadap teks klasik Yunani-Romawi (*Studia Humanitatis*) disebut...",
          "en": "The intellectual movement emphasizing human dignity, rational individual potential, and classical Greco-Roman scholarship (*Studia Humanitatis*) is called..."
        },
        "options": [
          {
            "id": "Humanisme Renaisans",
            "en": "Renaissance Humanism"
          },
          {
            "id": "Skolastisisme Dogmatis",
            "en": "Dogmatic Scholasticism"
          },
          {
            "id": "Feodalisme Agraria",
            "en": "Agrarian Feudalism"
          },
          {
            "id": "Monastisisme Asketik",
            "en": "Ascetic Monasticism"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Humanisme yang dipelopori Petrarch menggeser fokus dari dogma mistisisme abad pertengahan menuju eksplorasi potensi manusia, etika, dan sains sekuler.",
          "en": "Humanism, pioneered by Petrarch, shifted focus from medieval dogmatic mysticism toward human potential, civic virtue, and secular inquiry."
        }
      },
      {
        "id": "q3-renaisans",
        "question": {
          "id": "Siapakah tokoh polimatik legendaris yang melukis Mona Lisa, Perjamuan Terakhir, dan merancang sketsa anatomi tubuh serta mesin terbang?",
          "en": "Which legendary polymath painted the Mona Lisa, The Last Supper, and engineered anatomical treatises alongside flying machine blueprints?"
        },
        "options": [
          {
            "id": "Michelangelo Buonarroti",
            "en": "Michelangelo Buonarroti"
          },
          {
            "id": "Leonardo da Vinci",
            "en": "Leonardo da Vinci"
          },
          {
            "id": "Raffaello Sanzio (Raphael)",
            "en": "Raphael Sanzio"
          },
          {
            "id": "Sandro Botticelli",
            "en": "Sandro Botticelli"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Leonardo da Vinci adalah personifikasi manusia universal (*Uomo Universale*) yang memadukan kejeniusan seni rupa dengan pengamatan sains empiris.",
          "en": "Leonardo da Vinci was the quintessential 'Universal Man' (*Uomo Universale*), uniting fine artistic mastery with empirical scientific observation."
        }
      }
    ]
  },
  "penjelajahan-columbus": {
    "articleSlug": "penjelajahan-columbus",
    "title": {
      "id": "Kuis: Pelayaran Columbus & Pertukaran Global",
      "en": "Quiz: Columbus Voyages & Columbian Exchange"
    },
    "questions": [
      {
        "id": "q1-columbus",
        "question": {
          "id": "Monarki Eropa manakah yang mendanai pelayaran ekspedisi Christopher Columbus melintasi Samudra Atlantik pada tahun 1492?",
          "en": "Which European monarchy financed Christopher Columbus' expedition across the Atlantic Ocean in 1492?"
        },
        "options": [
          {
            "id": "Kerajaan Inggris di bawah Henry VII",
            "en": "Kingdom of England under Henry VII"
          },
          {
            "id": "Kerajaan Spanyol di bawah Ratu Isabella I dan Raja Ferdinand II",
            "en": "Kingdom of Spain under Queen Isabella I and King Ferdinand II"
          },
          {
            "id": "Kerajaan Portugal di bawah Raja Manuel I",
            "en": "Kingdom of Portugal under King Manuel I"
          },
          {
            "id": "Republik Venesia",
            "en": "Republic of Venice"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Penguasa Katolik Spanyol (Reyes Católicos) menyetujui pendanaan tiga kapal (Santa Maria, Pinta, Nina) setelah penaklukan Granada pada 1492.",
          "en": "The Catholic Monarchs of Spain approved funding for three ships (Santa Maria, Pinta, Niña) following the capture of Granada in 1492."
        }
      },
      {
        "id": "q2-columbus",
        "question": {
          "id": "Dampak biologis dan ekologis global dari bertemunya Dunia Lama dan Dunia Baru pasca-1492 dikenal oleh para sejarawan sebagai...",
          "en": "The trans-oceanic biological and ecological exchange of crops, livestock, populations, and pathogens post-1492 is known as..."
        },
        "options": [
          {
            "id": "Pertukaran Kolumbian (The Columbian Exchange)",
            "en": "The Columbian Exchange"
          },
          {
            "id": "Revolusi Hijau Atlantik",
            "en": "Atlantic Green Revolution"
          },
          {
            "id": "Perjanjian Tordesillas",
            "en": "Treaty of Tordesillas"
          },
          {
            "id": "Merkantilisme Karibia",
            "en": "Caribbean Mercantilism"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Pertukaran Kolumbian menyebarkan jagung, kentang, dan cabai ke Eurasia, sembari membawa gandum, kuda, serta epidemi mematikan ke benua Amerika.",
          "en": "The Columbian Exchange introduced maize, potatoes, and chilies to Eurasia, while bringing wheat, horses, and lethal epidemics to the Americas."
        }
      },
      {
        "id": "q3-columbus",
        "question": {
          "id": "Nama pulau di Kepulauan Bahama tempat Christopher Columbus pertama kali mendarat pada tanggal 12 Oktober 1492 adalah...",
          "en": "The name of the Bahamian island where Christopher Columbus first made landfall on October 12, 1492 was..."
        },
        "options": [
          {
            "id": "San Salvador (Guanahani)",
            "en": "San Salvador (Guanahani)"
          },
          {
            "id": "Hispaniola",
            "en": "Hispaniola"
          },
          {
            "id": "Kuba",
            "en": "Cuba"
          },
          {
            "id": "Puerto Riko",
            "en": "Puerto Rico"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Columbus mendarat di pulau Guanahani milik suku Taíno dan menamainya San Salvador ('Juruselamat Suci').",
          "en": "Columbus landed on the Taíno island of Guanahani and christened it San Salvador ('Holy Savior')."
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
          "id": "Penemu asal Skotlandia yang menyempurnakan mesin uap dengan kondensor terpisah pada 1769 sehingga menggerakkan pabrik-pabrik mekanis adalah...",
          "en": "The Scottish inventor who perfected the separate condenser steam engine in 1769 to power mechanized factory production was..."
        },
        "options": [
          {
            "id": "Thomas Newcomen",
            "en": "Thomas Newcomen"
          },
          {
            "id": "James Watt",
            "en": "James Watt"
          },
          {
            "id": "Richard Arkwright",
            "en": "Richard Arkwright"
          },
          {
            "id": "George Stephenson",
            "en": "George Stephenson"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Mesin uap efisien karya James Watt melepaskan industri manufaktur dari ketergantungan tenaga kincir air dan hewan ternak.",
          "en": "James Watt's efficient steam engine liberated industrial manufacturing from reliance on watermills and draft animal power."
        }
      },
      {
        "id": "q2-industri",
        "question": {
          "id": "Sektor manufaktur apakah yang pertama kali mengalami otomatisasi mesin massal di Inggris pada abad ke-18?",
          "en": "Which manufacturing sector was the first to undergo mass machine automation in 18th-century Britain?"
        },
        "options": [
          {
            "id": "Industri Tekstil dan Pemintalan Katun",
            "en": "Textile and Cotton Spinning Industry"
          },
          {
            "id": "Industri Otomotif",
            "en": "Automotive Industry"
          },
          {
            "id": "Industri Kimia Petrokimia",
            "en": "Petrochemical Industry"
          },
          {
            "id": "Industri Galangan Kapal Baja",
            "en": "Steel Shipbuilding Industry"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Inovasi seperti Spinning Jenny karya James Hargreaves dan Water Frame karya Arkwright merevolusi produksi kain katun secara eksponensial.",
          "en": "Innovations like James Hargreaves' Spinning Jenny and Arkwright's Water Frame exponentially accelerated cotton cloth production."
        }
      },
      {
        "id": "q3-industri",
        "question": {
          "id": "Transformasi sosial-demografis terbesar akibat Revolusi Industri terhadap persebaran populasi manusia adalah...",
          "en": "The greatest socio-demographic transformation triggered by the Industrial Revolution regarding population distribution was..."
        },
        "options": [
          {
            "id": "Urbanisasi massal dari desa pertanian ke kota-kota pusat pabrik",
            "en": "Mass urbanization from rural farmsteads to factory cities"
          },
          {
            "id": "Kembalinya masyarakat ke pola hidup nomaden",
            "en": "A return to nomadic hunter-gatherer lifestyles"
          },
          {
            "id": "Penurunan populasi perkotaan hingga nol",
            "en": "Decline of urban population to near zero"
          },
          {
            "id": "Penghapusan seluruh sistem perdagangan uang",
            "en": "Abolition of monetary market currency"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Jutaan petani pindah ke kota-kota industri seperti Manchester dan Birmingham, melahirkan kelas pekerja buruh pabrik (*proletariat*).",
          "en": "Millions of agricultural laborers migrated to industrial hubs like Manchester and Birmingham, forging the industrial working class (*proletariat*)."
        }
      }
    ]
  },
  "revolusi-prancis": {
    "articleSlug": "revolusi-prancis",
    "title": {
      "id": "Kuis: Revolusi Prancis 1789",
      "en": "Quiz: French Revolution 1789"
    },
    "questions": [
      {
        "id": "q1-prancis",
        "question": {
          "id": "Peristiwa simbolis pada 14 Juli 1789 yang menandai meletusnya Revolusi Prancis dan kini dirayakan sebagai Hari Nasional Prancis adalah...",
          "en": "The symbolic event on July 14, 1789 marking the outbreak of the French Revolution and celebrated as French National Day is..."
        },
        "options": [
          {
            "id": "Eksekusi Raja Louis XVI",
            "en": "Execution of King Louis XVI"
          },
          {
            "id": "Penyerbuan Penjara Benteng Bastille",
            "en": "Storming of the Bastille Fortress"
          },
          {
            "id": "Kudeta 18 Brumaire",
            "en": "Coup of 18 Brumaire"
          },
          {
            "id": "Sumpah Lapangan Tenis",
            "en": "Tennis Court Oath"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Rakyat Paris menyerbu benteng Bastille untuk merebut amunisi mesiu dan meruntuhkan simbol tirani monarki absolut Rezim Lama (*Ancien Régime*).",
          "en": "Parisians stormed the Bastille fortress to seize gunpowder and tear down the primary symbol of Ancien Régime royal absolutism."
        }
      },
      {
        "id": "q2-prancis",
        "question": {
          "id": "Deklarasi bersejarah yang disahkan Majelis Konstituante Nasional pada Agustus 1789 yang menetapkan kesetaraan hak semua manusia di muka hukum adalah...",
          "en": "The landmark charter enacted by the National Constituent Assembly in August 1789 establishing equality of all citizens before the law was..."
        },
        "options": [
          {
            "id": "Deklarasi Hak Asasi Manusia dan Warga Negara (Déclaration des droits de l'homme)",
            "en": "Declaration of the Rights of Man and of the Citizen"
          },
          {
            "id": "Magna Carta",
            "en": "Magna Carta"
          },
          {
            "id": "Deklarasi Kemerdekaan Amerika",
            "en": "American Declaration of Independence"
          },
          {
            "id": "Pakta Perdamaian Westphalia",
            "en": "Peace of Westphalia"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Deklarasi ini menegaskan bahwa manusia dilahirkan merdeka dan memiliki kesetaraan hak atas kebebasan, properti, keamanan, dan perlawanan terhadap penindasan.",
          "en": "The Declaration declared that all human beings are born free and remain equal in rights to liberty, property, security, and resistance to oppression."
        }
      },
      {
        "id": "q3-prancis",
        "question": {
          "id": "Tiga nilai semboyan revolusioner yang menjadi pilar abadi perjuangan Republik Prancis di seluruh dunia adalah...",
          "en": "The three revolutionary ideals forming the enduring motto of the French Republic worldwide are..."
        },
        "options": [
          {
            "id": "Liberté, Égalité, Fraternité (Kebebasan, Kesetaraan, Persaudaraan)",
            "en": "Liberté, Égalité, Fraternité (Liberty, Equality, Fraternity)"
          },
          {
            "id": "Gold, Glory, Gospel",
            "en": "Gold, Glory, Gospel"
          },
          {
            "id": "Veni, Vidi, Vici",
            "en": "Veni, Vidi, Vici"
          },
          {
            "id": "Senatus Populusque Romanus",
            "en": "Senatus Populusque Romanus"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Semboyan Liberté, Égalité, Fraternité mengilhami penghapusan hak-hak istimewa feodal dan menjadi fondasi nilai-nilai demokrasi modern global.",
          "en": "The motto Liberté, Égalité, Fraternité inspired the abolition of feudal privileges and anchored modern global democratic principles."
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
        "id": "q1-inca",
        "question": {
          "id": "Siapakah kaisar (Sapa Inca) visioner yang mengubah kerajaan kecil Cusco menjadi imperium raksasa Tawantinsuyu dan membangun Machu Picchu?",
          "en": "Which visionary emperor (Sapa Inca) transformed the small Kingdom of Cusco into the vast Tawantinsuyu empire and constructed Machu Picchu?"
        },
        "options": [
          {
            "id": "Atahualpa",
            "en": "Atahualpa"
          },
          {
            "id": "Pachacuti Inca Yupanqui",
            "en": "Pachacuti Inca Yupanqui"
          },
          {
            "id": "Huascar",
            "en": "Huascar"
          },
          {
            "id": "Manco Capac",
            "en": "Manco Capac"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Pachacuti (sang 'Pengguncang Bumi') menata ulang kota Cusco dalam bentuk puma, menaklukkan lembah Andes, dan mendirikan Machu Picchu sebagai kediaman peristirahatan agung.",
          "en": "Pachacuti ('He who shakes the Earth') reorganized Cusco in the shape of a puma, conquered the Andean valleys, and founded Machu Picchu as an imperial estate."
        }
      },
      {
        "id": "q2-inca",
        "question": {
          "id": "Jaringan jalan raya monumental sepanjang lebih dari 40.000 kilometer yang melintasi lereng terjal Andes dan jembatan tali gantung disebut...",
          "en": "The monumental 40,000-kilometer paved highway network traversing steep Andean peaks and suspension rope bridges was called..."
        },
        "options": [
          {
            "id": "Qhapaq Ñan (Jalan Utama Inca)",
            "en": "Qhapaq Ñan (The Great Inca Road)"
          },
          {
            "id": "Via Appia Andes",
            "en": "Andean Via Appia"
          },
          {
            "id": "Jalur Sutra Selatan",
            "en": "Southern Silk Road"
          },
          {
            "id": "Camino Real Mesoamerika",
            "en": "Mesoamerican Camino Real"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Qhapaq Ñan menghubungkan empat penjuru wilayah Tawantinsuyu, dilintasi oleh pelari kurir kilat (Chasqui) yang mampu mengantarkan pesan ribuan kilometer.",
          "en": "Qhapaq Ñan connected all four quarters of Tawantinsuyu, traversed by relay runners (Chasquis) who delivered messages across thousands of kilometers."
        }
      },
      {
        "id": "q3-inca",
        "question": {
          "id": "Sistem pencatatan data statistik, sensus penduduk, dan akuntansi pajak berupa untaian tali wol bersimpul warna-warni pada peradaban Inca adalah...",
          "en": "The data recording, population census, and tax accounting system utilizing knotted colored woolen cords in Inca civilization was..."
        },
        "options": [
          {
            "id": "Khipu (Quipu)",
            "en": "Khipu (Quipu)"
          },
          {
            "id": "Cuneiform Andes",
            "en": "Andean Cuneiform"
          },
          {
            "id": "Glif Batu",
            "en": "Stone Glyphs"
          },
          {
            "id": "Abakus Tembaga",
            "en": "Copper Abacus"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Tanpa aksara alfabetis, para ahli Khipukamayuq membaca variasi simpul, ketebalan tali, dan warna benang Khipu untuk mengelola perbendaharaan kekaisaran.",
          "en": "Lacking an alphabetic script, Khipu masters (Khipukamayuq) read knot configurations, cord positions, and colors to manage imperial administration."
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
        "id": "q1-ww1",
        "question": {
          "id": "Peristiwa pembunuhan di Sarajevo pada 28 Juni 1914 yang menjadi pemicu langsung meletusnya Perang Dunia I adalah...",
          "en": "The assassination event in Sarajevo on June 28, 1914 that served as the immediate trigger for World War I was..."
        },
        "options": [
          {
            "id": "Pembunuhan Tsar Nikolas II",
            "en": "Assassination of Tsar Nicholas II"
          },
          {
            "id": "Pembunuhan Archduke Franz Ferdinand oleh Gavrilo Princip",
            "en": "Assassination of Archduke Franz Ferdinand by Gavrilo Princip"
          },
          {
            "id": "Pembunuhan Kaiser Wilhelm II",
            "en": "Assassination of Kaiser Wilhelm II"
          },
          {
            "id": "Pembunuhan Perdana Menteri Clemenceau",
            "en": "Assassination of Prime Minister Clemenceau"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Pembunuhan putra mahkota Austria-Hongaria oleh nasionalis Slavia memicu krisis diplomatik Juli yang mengaktifkan sistem aliansi militer Eropa.",
          "en": "The assassination of the Austro-Hungarian heir by a Slavic nationalist triggered the July Crisis, activating Europe's interlocking alliance network."
        }
      },
      {
        "id": "q2-ww1",
        "question": {
          "id": "Bentuk pertempuran defensif statis berkawat duri dan gas beracun yang mendominasi Front Barat di Prancis dan Belgia dikenal sebagai...",
          "en": "The static, barbed-wire and poison-gas defensive warfare that defined the Western Front in France and Belgium was known as..."
        },
        "options": [
          {
            "id": "Perang Parit (Trench Warfare)",
            "en": "Trench Warfare"
          },
          {
            "id": "Perang Kilat (Blitzkrieg)",
            "en": "Blitzkrieg"
          },
          {
            "id": "Perang Gerilya Hutan",
            "en": "Jungle Guerrilla Warfare"
          },
          {
            "id": "Perang Dingin",
            "en": "The Cold War"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Perang Parit mengubah pertempuran darat menjadi kebuntuan defensif yang mematikan jutaan prajurit akibat senapan mesin, artileri berat, dan gas klorin.",
          "en": "Trench warfare produced lethal defensive stalemates where millions died from machine-gun fire, heavy artillery bombardments, and poison gas."
        }
      },
      {
        "id": "q3-ww1",
        "question": {
          "id": "Perjanjian damai tahun 1919 yang membebankan reparasi perang berat dan pasal kesalahan perang (*War Guilt Clause*) kepada Jerman adalah...",
          "en": "The 1919 peace treaty imposing crushing financial reparations and the War Guilt Clause upon Germany was the..."
        },
        "options": [
          {
            "id": "Perjanjian Versailles",
            "en": "Treaty of Versailles"
          },
          {
            "id": "Perjanjian Tordesillas",
            "en": "Treaty of Tordesillas"
          },
          {
            "id": "Pakta Warsawa",
            "en": "Warsaw Pact"
          },
          {
            "id": "Perjanjian Westphalia",
            "en": "Peace of Westphalia"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Perjanjian Versailles mereduksi wilayah Jerman, melucuti militernya, dan menciptakan kepahitan nasional yang kelak dimanfaatkan Adolf Hitler untuk menyulut Perang Dunia II.",
          "en": "The Treaty of Versailles stripped German territories, disarmed its military, and created national humiliation that Hitler later exploited to ignite WWII."
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
        "id": "q1-ww2",
        "question": {
          "id": "Invasi militer manakah pada 1 September 1939 yang memicu deklarasi perang Inggris dan Prancis serta menandai dimulainya Perang Dunia II di Eropa?",
          "en": "Which military invasion on September 1, 1939 triggered declarations of war by Britain and France, inaugurating World War II in Europe?"
        },
        "options": [
          {
            "id": "Invasi Jerman ke Polandia",
            "en": "German Invasion of Poland"
          },
          {
            "id": "Invasi Italia ke Etiopia",
            "en": "Italian Invasion of Ethiopia"
          },
          {
            "id": "Serangan ke Pearl Harbor",
            "en": "Attack on Pearl Harbor"
          },
          {
            "id": "Invasi Uni Soviet ke Finlandia",
            "en": "Soviet Invasion of Finland"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Taktik perang kilat (*Blitzkrieg*) Jerman Nazi ke Polandia memaksa Sekutu Barat mendeklarasikan perang terbuka melawan Reich Ketiga.",
          "en": "Nazi Germany's Blitzkrieg conquest of Poland compelled Britain and France to declare total war against the Third Reich."
        }
      },
      {
        "id": "q2-ww2",
        "question": {
          "id": "Operasi pendaratan amfibi terbesar dalam sejarah yang dilancarkan tentara Sekutu di pesisir Normandia, Prancis pada 6 Juni 1944 dikenal sebagai...",
          "en": "The largest amphibious assault in military history launched by Allied forces across the beaches of Normandy, France on June 6, 1944 is known as..."
        },
        "options": [
          {
            "id": "D-Day (Operasi Overlord)",
            "en": "D-Day (Operation Overlord)"
          },
          {
            "id": "Operasi Barbarossa",
            "en": "Operation Barbarossa"
          },
          {
            "id": "Pertempuran Midway",
            "en": "Battle of Midway"
          },
          {
            "id": "Operasi Market Garden",
            "en": "Operation Market Garden"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "D-Day berhasil membuka Front Barat kedua di Eropa, membebaskan Paris, dan mempercepat kehancuran total kekuasaan Nazi Jerman.",
          "en": "D-Day opened the crucial Western Front in Europe, liberating Paris and accelerating the complete collapse of Nazi Germany."
        }
      },
      {
        "id": "q3-ww2",
        "question": {
          "id": "Senjata pemusnah massal revolusioner apakah yang dijatuhkan Amerika Serikat di Hiroshima dan Nagasaki pada Agustus 1945 yang mengakhiri Perang Pasifik?",
          "en": "Which revolutionary weapon of mass destruction dropped by the United States on Hiroshima and Nagasaki in August 1945 terminated the Pacific War?"
        },
        "options": [
          {
            "id": "Bom Atom Fisi Nuklir (Atomic Bomb)",
            "en": "Nuclear Fission Atomic Bomb"
          },
          {
            "id": "Rudal Balistik V-2",
            "en": "V-2 Ballistic Missile"
          },
          {
            "id": "Bom Gas Saraf Kimia",
            "en": "Chemical Nerve Gas Bomb"
          },
          {
            "id": "Bom Torpedo Termal",
            "en": "Thermal Torpedo Bomb"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Proyek Manhattan melahirkan senjata atom pertama yang menewaskan ratusan ribu jiwa di Hiroshima dan Nagasaki, memaksa Kaisar Hirohito menyerah tanpa syarat.",
          "en": "The Manhattan Project produced the atomic weapons that devastated Hiroshima and Nagasaki, compelling Emperor Hirohito's unconditional surrender."
        }
      }
    ]
  },
  "kemerdekaan-indonesia": {
    "articleSlug": "kemerdekaan-indonesia",
    "title": {
      "id": "Kuis: Proklamasi Kemerdekaan Indonesia",
      "en": "Quiz: Indonesian Independence Proclamation"
    },
    "questions": [
      {
        "id": "q1-indo",
        "question": {
          "id": "Di manakah naskah otentik Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno dan Hatta pada hari Jumat, 17 Agustus 1945?",
          "en": "Where was the authentic text of the Indonesian Declaration of Independence proclaimed by Sukarno and Hatta on Friday, August 17, 1945?"
        },
        "options": [
          {
            "id": "Jalan Pegangsaan Timur No. 56, Jakarta",
            "en": "Jalan Pegangsaan Timur No. 56, Jakarta"
          },
          {
            "id": "Lapangan Ikada, Jakarta",
            "en": "Ikada Square, Jakarta"
          },
          {
            "id": "Gedung BPUPKI (Gedung Pancasila)",
            "en": "BPUPKI Building (Pancasila Building)"
          },
          {
            "id": "Rumah Laksamana Maeda",
            "en": "Admiral Maeda's Residence"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Proklamasi dibacakan di halaman kediaman Bung Karno di Jalan Pegangsaan Timur 56 tepat pukul 10.00 pagi, disertai pengibaran Bendera Pusaka Merah Putih.",
          "en": "The proclamation was read at Bung Karno's residence at Pegangsaan Timur 56 at 10:00 AM, accompanied by raising the sacred Red and White flag."
        }
      },
      {
        "id": "q2-indo",
        "question": {
          "id": "Peristiwa pengungsian darurat Soekarno dan Hatta oleh para pemuda pejuang untuk mendesak proklamasi independen tanpa janji Jepang dikenal sebagai...",
          "en": "The historic youth-led action of escorting Sukarno and Hatta outside Jakarta to demand an immediate proclamation without Japanese interference was..."
        },
        "options": [
          {
            "id": "Peristiwa Rengasdengklok",
            "en": "The Rengasdengklok Incident"
          },
          {
            "id": "Bandung Lautan Api",
            "en": "Bandung Sea of Fire"
          },
          {
            "id": "Pertempuran 10 November Surabaya",
            "en": "Battle of Surabaya (November 10)"
          },
          {
            "id": "Serangan Umum 1 Maret",
            "en": "General Offensive of March 1"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Pemuda pejuang (seperti Chaerul Saleh, Wikana, Sukarni) mengamankan dwi-tunggal ke Rengasdengklok pada 16 Agustus 1945 agar proklamasi murni lahir dari kehendak rakyat Indonesia.",
          "en": "Youth leaders escorted Sukarno and Hatta to Rengasdengklok on August 16, 1945 to ensure independence was forged purely by Indonesian sovereign will."
        }
      },
      {
        "id": "q3-indo",
        "question": {
          "id": "Siapakah tokoh pejuang pemuda yang mengetik naskah proklamasi kemerdekaan yang telah dirumuskan di rumah Laksamana Maeda?",
          "en": "Which prominent youth patriot typed the final text of the Independence Proclamation drafted at Admiral Maeda's residence?"
        },
        "options": [
          {
            "id": "Sayuti Melik",
            "en": "Sayuti Melik"
          },
          {
            "id": "B.M. Diah",
            "en": "B.M. Diah"
          },
          {
            "id": "Achmad Soebardjo",
            "en": "Achmad Soebardjo"
          },
          {
            "id": "Sutan Sjahrir",
            "en": "Sutan Sjahrir"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Sayuti Melik mengetik naskah proklamasi dengan sedikit koreksi redaksional, didampingi oleh B.M. Diah, sebelum ditandatangani oleh Soekarno dan Hatta.",
          "en": "Sayuti Melik typed the final proclamation text with minor editorial refinements, witnessed by B.M. Diah, before Sukarno and Hatta signed it."
        }
      }
    ]
  },
  "pendaratan-bulan": {
    "articleSlug": "pendaratan-bulan",
    "title": {
      "id": "Kuis: Pendaratan Bulan Apollo 11",
      "en": "Quiz: Apollo 11 Moon Landing"
    },
    "questions": [
      {
        "id": "q1-bulan",
        "question": {
          "id": "Siapakah manusia pertama dalam sejarah yang menjejakkan kaki di permukaan bulan pada tanggal 20 Juli 1969?",
          "en": "Who was the first human in history to set foot on the lunar surface on July 20, 1969?"
        },
        "options": [
          {
            "id": "Buzz Aldrin",
            "en": "Buzz Aldrin"
          },
          {
            "id": "Neil Armstrong",
            "en": "Neil Armstrong"
          },
          {
            "id": "Michael Collins",
            "en": "Michael Collins"
          },
          {
            "id": "Yuri Gagarin",
            "en": "Yuri Gagarin"
          }
        ],
        "correctAnswerIndex": 1,
        "explanation": {
          "id": "Komandan misi Apollo 11 Neil Armstrong melangkah keluar dari modul Eagle ke kawah Mare Tranquillitatis dan mengucapkan kalimat 'One small step for a man, one giant leap for mankind'.",
          "en": "Apollo 11 Commander Neil Armstrong stepped from the Eagle onto Mare Tranquillitatis, uttering 'That's one small step for [a] man, one giant leap for mankind'."
        }
      },
      {
        "id": "q2-bulan",
        "question": {
          "id": "Nama modul pendarat bulan (Lunar Module) yang membawa astronot turun ke permukaan bulan adalah...",
          "en": "The name of the Lunar Module that carried the astronauts down to the lunar surface was..."
        },
        "options": [
          {
            "id": "Eagle",
            "en": "Eagle"
          },
          {
            "id": "Columbia",
            "en": "Columbia"
          },
          {
            "id": "Vostok 1",
            "en": "Vostok 1"
          },
          {
            "id": "Challenger",
            "en": "Challenger"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Modul pendarat Eagle mendarat di bulan, sementara Michael Collins tetap mengorbit di dalam Modul Komando Columbia.",
          "en": "The Lunar Module Eagle landed on the Moon, while Michael Collins remained in lunar orbit piloting the Command Module Columbia."
        }
      },
      {
        "id": "q3-bulan",
        "question": {
          "id": "Roket peluncur tiga tingkat raksasa setinggi 111 meter berkekuatan 3,4 juta kg dorongan yang membawa misi Apollo 11 ke luar angkasa adalah...",
          "en": "The colossal 111-meter-tall three-stage launch vehicle with 3.4 million kg of thrust that propelled Apollo 11 into space was..."
        },
        "options": [
          {
            "id": "Saturn V",
            "en": "Saturn V"
          },
          {
            "id": "Falcon Heavy",
            "en": "Falcon Heavy"
          },
          {
            "id": "Soyuz R-7",
            "en": "Soyuz R-7"
          },
          {
            "id": "Atlas V",
            "en": "Atlas V"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Saturn V dirancang oleh Wernher von Braun dan tim insinyur NASA, tetap menjadi roket peluncur operasional terkuat yang pernah terbang dalam sejarah.",
          "en": "The Saturn V rocket, engineered by Wernher von Braun and NASA teams, remains the most powerful successful launch vehicle in spaceflight history."
        }
      }
    ]
  },
  "runtuhnya-tembok-berlin": {
    "articleSlug": "runtuhnya-tembok-berlin",
    "title": {
      "id": "Kuis: Runtuhnya Tembok Berlin",
      "en": "Quiz: Fall of the Berlin Wall"
    },
    "questions": [
      {
        "id": "q1-berlin",
        "question": {
          "id": "Pada tanggal dan tahun berapakah Tembok Berlin secara dramatis dibuka dan diruntuhkan oleh warga Jerman setelah 28 tahun membelah kota?",
          "en": "On which date and year was the Berlin Wall dramatically opened and torn down by citizens after 28 years of dividing the city?"
        },
        "options": [
          {
            "id": "9 November 1989",
            "en": "November 9, 1989"
          },
          {
            "id": "17 Agustus 1985",
            "en": "August 17, 1985"
          },
          {
            "id": "4 Juli 1991",
            "en": "July 4, 1991"
          },
          {
            "id": "25 Desember 1991",
            "en": "December 25, 1991"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Pada malam 9 November 1989, puluhan ribu warga Berlin Timur dan Barat membanjiri pos pemeriksaan perbatasan Bornholmer Straße dan merayakan runtuhnya tembok beton.",
          "en": "On the night of November 9, 1989, tens of thousands of East and West Berliners flooded the Bornholmer Straße crossing, celebrating the fall of the concrete barrier."
        }
      },
      {
        "id": "q2-berlin",
        "question": {
          "id": "Program reformasi keterbukaan politik (*Glasnost*) dan restrukturisasi ekonomi (*Perestroika*) di Uni Soviet diprakarsai oleh pemimpin...",
          "en": "The reform policies of political openness (*Glasnost*) and economic restructuring (*Perestroika*) in the USSR were initiated by Soviet leader..."
        },
        "options": [
          {
            "id": "Mikhail Gorbachev",
            "en": "Mikhail Gorbachev"
          },
          {
            "id": "Nikita Khrushchev",
            "en": "Nikita Khrushchev"
          },
          {
            "id": "Leonid Brezhnev",
            "en": "Leonid Brezhnev"
          },
          {
            "id": "Vladimir Putin",
            "en": "Vladimir Putin"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Kebijakan non-intervensi militer Gorbachev terhadap negara-negara satelit Eropa Timur membuka jalan bagi revolusi damai 1989.",
          "en": "Gorbachev's policy of non-military intervention in Eastern European satellite states cleared the way for the peaceful revolutions of 1989."
        }
      },
      {
        "id": "q3-berlin",
        "question": {
          "id": "Garis pembatas geopolitik dan militer yang memisahkan Blok Barat kapitalis dan Blok Timur komunis selama Perang Dingin di Eropa dinamai oleh Winston Churchill sebagai...",
          "en": "The geopolitical and ideological barrier separating the capitalist West and the communist East across Cold War Europe was famously christened by Winston Churchill as the..."
        },
        "options": [
          {
            "id": "Tirai Besi (The Iron Curtain)",
            "en": "The Iron Curtain"
          },
          {
            "id": "Garis Maginot",
            "en": "The Maginot Line"
          },
          {
            "id": "Garis Khatulistiwa",
            "en": "The Equator Line"
          },
          {
            "id": "Batas 38 Derajat",
            "en": "The 38th Parallel"
          }
        ],
        "correctAnswerIndex": 0,
        "explanation": {
          "id": "Pidato 'Tirai Besi' Winston Churchill pada 1946 melukiskan pemisahan total benua Eropa di bawah hegemoni Soviet hingga runtuhnya Tembok Berlin pada 1989.",
          "en": "Churchill's 1946 'Iron Curtain' speech depicted the ideological partitioning of Europe under Soviet hegemony until the Wall fell in 1989."
        }
      }
    ]
  },
  "gobekli-tepe": {
    "articleSlug": "gobekli-tepe",
    "title": {
        "id": "Kuis: Megalitikum Göbekli Tepe",
        "en": "Quiz: Göbekli Tepe Megalith"
    },
    "questions": [
        {
            "id": "gt-1",
            "question": {
                "id": "Apa temuan paling revolusioner di Göbekli Tepe yang mengubah pandangan arkeologi tentang asal-usul peradaban?",
                "en": "What was the most revolutionary discovery at Göbekli Tepe that transformed archaeological views on the origins of civilization?"
            },
            "options": [
                {
                    "id": "Bukti bahwa tempat ibadah megalitikum didirikan sebelum munculnya pertanian menetap",
                    "en": "Evidence that megalithic temples were built prior to sedentary agriculture"
                },
                {
                    "id": "Penemuan roda pedati dan sistem tulisan tertua di dunia",
                    "en": "Discovery of the earliest wheeled chariots and writing systems"
                },
                {
                    "id": "Istana kerajaan pertama dengan benteng pertahanan batu raksasa",
                    "en": "The first royal palace with massive stone fortifications"
                },
                {
                    "id": "Tambang emas dan pusat percetakan koin kuno",
                    "en": "Ancient gold mines and coinage minting facilities"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Göbekli Tepe membuktikan bahwa dorongan spiritual dan pembangunan tempat ibadah megalitikum mendahului revolusi pertanian, bukan akibat darinya.",
                "en": "Göbekli Tepe proved that spiritual impulses and monumental temple construction preceded the agricultural revolution, rather than resulting from it."
            }
        },
        {
            "id": "gt-2",
            "question": {
                "id": "Bentuk khas pilar batu kapur megalitikum yang mendominasi lingkaran kuil Göbekli Tepe adalah...",
                "en": "The characteristic shape of the megalithic limestone pillars dominating Göbekli Tepe's enclosures is..."
            },
            "options": [
                {
                    "id": "Pilar berbentuk huruf T dengan relief hewan liar dan tangan manusia",
                    "en": "T-shaped pillars carved with reliefs of wild animals and human hands"
                },
                {
                    "id": "Pilar bundar silinder berornamen bunga lotus",
                    "en": "Cylindrical round pillars with lotus ornaments"
                },
                {
                    "id": "Pilar piramidal bertingkat tanpa relief",
                    "en": "Stepped pyramidal pillars without reliefs"
                },
                {
                    "id": "Obelisk lancip dengan aksara hieroglif",
                    "en": "Pointed obelisks inscribed with hieroglyphs"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Pilar-pilar batu kapur berbentuk huruf T setinggi hingga 5,5 meter melambangkan figur manusia stilistik yang dihiasi relief rubah, singa, babi hutan, dan ular.",
                "en": "T-shaped limestone pillars standing up to 5.5 meters tall represent stylized anthropomorphic figures carved with foxes, lions, boars, and serpents."
            }
        },
        {
            "id": "gt-3",
            "question": {
                "id": "Siapakah arkeolog Jerman yang memimpin ekskavasi sistematis di Göbekli Tepe sejak tahun 1995?",
                "en": "Who was the German archaeologist who led systematic excavations at Göbekli Tepe starting in 1995?"
            },
            "options": [
                {
                    "id": "Klaus Schmidt",
                    "en": "Klaus Schmidt"
                },
                {
                    "id": "Heinrich Schliemann",
                    "en": "Heinrich Schliemann"
                },
                {
                    "id": "Howard Carter",
                    "en": "Howard Carter"
                },
                {
                    "id": "Arthur Evans",
                    "en": "Arthur Evans"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Profesor Klaus Schmidt dari German Archaeological Institute (DAI) memimpin ekskavasi dan mengungkap signifikansi global situs Göbekli Tepe.",
                "en": "Professor Klaus Schmidt of the German Archaeological Institute (DAI) led excavations and revealed the global significance of Göbekli Tepe."
            }
        }
    ]
},
  "catalhoyuk": {
    "articleSlug": "catalhoyuk",
    "title": {
        "id": "Kuis: Proto-Kota Çatalhöyük",
        "en": "Quiz: Çatalhöyük Proto-City"
    },
    "questions": [
        {
            "id": "ch-1",
            "question": {
                "id": "Bagaimanakah sistem tata ruang dan mobilitas warga proto-kota Neolitikum Çatalhöyük?",
                "en": "How was the spatial organization and urban mobility structured in the Neolithic proto-city of Çatalhöyük?"
            },
            "options": [
                {
                    "id": "Rumah-rumah bata lumpur saling menempel tanpa jalan darat, diakses lewat tangga atap",
                    "en": "Mudbrick houses clustered contiguously without streets, accessed via rooftop ladders"
                },
                {
                    "id": "Kota terbagi oleh jalan arteri lebar berbentuk kisi-kisi (grid)",
                    "en": "A city divided by wide arterial grid-plan avenues"
                },
                {
                    "id": "Rumah-rumah panggung di atas danau buatan dengan jembatan kayu",
                    "en": "Stilt houses over artificial canals connected by wooden bridges"
                },
                {
                    "id": "Kompleks perumahan yang dikelilingi benteng parit air konsentris",
                    "en": "Residential compounds encircled by concentric moated bastions"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Di Çatalhöyük, atap rumah berfungsi sebagai jalan umum dan ruang aktivitas sosial harian, di mana penghuni masuk menggunakan tangga kayu melalui lubang atap.",
                "en": "At Çatalhöyük, flat rooftops served as communal walkways and daily social hubs, with residents entering via wooden ladders through rooftop smoke holes."
            }
        },
        {
            "id": "ch-2",
            "question": {
                "id": "Di manakah warga Çatalhöyük biasanya memakamkan anggota keluarga yang telah meninggal?",
                "en": "Where did the inhabitants of Çatalhöyük typically bury their deceased family members?"
            },
            "options": [
                {
                    "id": "Di bawah lantai tanah liat dan platform tempat tidur di dalam rumah",
                    "en": "Beneath the clay floors and sleeping platforms inside their domestic houses"
                },
                {
                    "id": "Di nekropolis terpisah di luar batas kota",
                    "en": "In isolated extramural necropolises outside the settlement"
                },
                {
                    "id": "Di atas menara pemakaman terbuka untuk dekomposisi burung pemangsa",
                    "en": "Atop exposed sky-burial towers for scavenger birds"
                },
                {
                    "id": "Dilarung ke sungai terdekat dalam guci keramik",
                    "en": "Sent drifting down adjacent rivers in ceramic burial urns"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Masyarakat Çatalhöyük menguburkan jenazah di bawah lantai rumah mereka sendiri, menunjukkan ikatan spiritual leluhur yang sangat erat dengan ruang domestik.",
                "en": "The people of Çatalhöyük interred their dead beneath house floors, demonstrating deep ancestral spiritual ties to domestic spaces."
            }
        },
        {
            "id": "ch-3",
            "question": {
                "id": "Komoditas mineral vulkanik apa yang menjadi andalan perdagangan jarak jauh masyarakat Çatalhöyük?",
                "en": "Which volcanic mineral commodity formed the backbone of Çatalhöyük's extensive long-distance trade?"
            },
            "options": [
                {
                    "id": "Obsidian dari Gunung Hasan",
                    "en": "Obsidian from Mount Hasan"
                },
                {
                    "id": "Batu giok hijau dari Pegunungan Zagros",
                    "en": "Green jade from the Zagros Mountains"
                },
                {
                    "id": "Bijih tembaga murni dari Siprus",
                    "en": "Pure copper ore from Cyprus"
                },
                {
                    "id": "Batu lapis lazuli dari Badakhshan",
                    "en": "Lapis lazuli from Badakhshan"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Obsidian hitam mengilap dari gunung berapi terdekat seperti Gunung Hasan diekstraksi dan dipoles menjadi cermin serta bilah tajam berharga tinggi.",
                "en": "Glossy black obsidian from nearby volcanoes like Mount Hasan was knapped into highly valued mirrors, blades, and trade goods."
            }
        }
    ]
},
  "peradaban-caral-supe": {
    "articleSlug": "peradaban-caral-supe",
    "title": {
        "id": "Kuis: Kota Suci Caral-Supe",
        "en": "Quiz: Sacred City of Caral-Supe"
    },
    "questions": [
        {
            "id": "cs-1",
            "question": {
                "id": "Mengapa Peradaban Caral-Supe di Peru dinilai sangat unik dalam sejarah peradaban dunia?",
                "en": "Why is the Caral-Supe civilization of Peru considered uniquely remarkable in world history?"
            },
            "options": [
                {
                    "id": "Membangun kota piramida monumental tertua di Amerika secara damai tanpa senjata atau benteng perang",
                    "en": "Constructed the Americas' oldest monumental pyramid cities peacefully without weapons or battlements"
                },
                {
                    "id": "Mengembangkan sistem penulisan alfabet fonetik pertama di Pasifik",
                    "en": "Developed the first phonetic alphabetic script in the Pacific"
                },
                {
                    "id": "Menjadi kekaisaran kavaleri berkuda pertama di benua Amerika",
                    "en": "Became the first equestrian cavalry empire in the Americas"
                },
                {
                    "id": "Menguasai teknik peleburan besi dan baja canggih",
                    "en": "Mastered advanced blast-furnace iron and steel metallurgy"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ekskavasi di Caral tidak menemukan benteng pertahanan, senjata perang, atau sisa korban pembantaian, menunjukkan peradaban berbasis perdagangan dan seni musik.",
                "en": "Excavations at Caral yielded no military fortifications, weapons, or battle casualties, indicating a society driven by trade, agriculture, and music."
            }
        },
        {
            "id": "cs-2",
            "question": {
                "id": "Instrumen pencatat data angka dari tali bersimpul yang ditemukan di Caral dikenal dengan nama...",
                "en": "The knotted cord recording device for numerical data found at Caral is known as a..."
            },
            "options": [
                {
                    "id": "Quipu (Khipu)",
                    "en": "Quipu (Khipu)"
                },
                {
                    "id": "Cuneiform",
                    "en": "Cuneiform"
                },
                {
                    "id": "Hieroglif Maya",
                    "en": "Maya hieroglyphs"
                },
                {
                    "id": "Abakus",
                    "en": "Abacus"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Quipu tertua di dunia yang ditemukan di Caral membuktikan bahwa sistem pencatatan tali bersimpul telah digunakan di Andes sejak 3000 SM.",
                "en": "The oldest quipu discovered at Caral proves that knotted-string recording systems were utilized in the Andes as early as 3000 BCE."
            }
        },
        {
            "id": "cs-3",
            "question": {
                "id": "Alat musik tiup apa yang ditemukan dalam jumlah puluhan di kompleks plaza melingkar Caral?",
                "en": "Which wind musical instruments were discovered in large quantities within Caral's sunken circular plaza?"
            },
            "options": [
                {
                    "id": "Seruling berbahan tulang burung pelikan dan kondor",
                    "en": "Flutes crafted from pelican and condor bones"
                },
                {
                    "id": "Terompet perunggu",
                    "en": "Cast bronze trumpets"
                },
                {
                    "id": "Gamelan batu litofon",
                    "en": "Lithophone stone chimes"
                },
                {
                    "id": "Suling bambu ganda",
                    "en": "Double bamboo panpipes"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Sebanyak 32 seruling berukir indah dari tulang sayap burung pelikan dan kondor ditemukan terkubur di plaza upacara Caral.",
                "en": "32 intricately carved flutes made from pelican and condor wing bones were excavated from the ceremonial sunken plaza of Caral."
            }
        }
    ]
},
  "piramida-djoser": {
    "articleSlug": "piramida-djoser",
    "title": {
        "id": "Kuis: Piramida Bertingkat Djoser",
        "en": "Quiz: Step Pyramid of Djoser"
    },
    "questions": [
        {
            "id": "pd-1",
            "question": {
                "id": "Siapakah arsitek jenius sekaligus penasihat utama Firaun Djoser yang merancang Piramida Bertingkat Saqqara?",
                "en": "Who was the polymath architect and high chancellor to Pharaoh Djoser who designed the Step Pyramid at Saqqara?"
            },
            "options": [
                {
                    "id": "Imhotep",
                    "en": "Imhotep"
                },
                {
                    "id": "Hemiunu",
                    "en": "Hemiunu"
                },
                {
                    "id": "Senenmut",
                    "en": "Senenmut"
                },
                {
                    "id": "Manetho",
                    "en": "Manetho"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Imhotep merevolusi arsitektur makam mastaba tradisional dengan menumpuk enam tingkat batu potong menjadi piramida monumental setinggi 62 meter.",
                "en": "Imhotep revolutionized tomb architecture by stacking six stone mastaba tiers into a 62-meter monumental step pyramid."
            }
        },
        {
            "id": "pd-2",
            "question": {
                "id": "Piramida Bertingkat Djoser didirikan pada masa dinasti ke berapa dalam Kerajaan Lama Mesir?",
                "en": "During which dynasty of Old Kingdom Egypt was the Step Pyramid of Djoser constructed?"
            },
            "options": [
                {
                    "id": "Dinasti Ketiga (Third Dynasty)",
                    "en": "Third Dynasty"
                },
                {
                    "id": "Dinasti Pertama (First Dynasty)",
                    "en": "First Dynasty"
                },
                {
                    "id": "Dinasti Keempat (Fourth Dynasty)",
                    "en": "Fourth Dynasty"
                },
                {
                    "id": "Dinasti Kedelapan Belas (Eighteenth Dynasty)",
                    "en": "Eighteenth Dynasty"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Firaun Djoser memerintah pada Dinasti Ketiga Mesir Kuno (sekitar 2670 SM), menandai dimulainya era pembangunan piramida batu monumental.",
                "en": "Pharaoh Djoser ruled during Ancient Egypt's Third Dynasty (c. 2670 BCE), marking the dawn of monumental stone pyramid engineering."
            }
        },
        {
            "id": "pd-3",
            "question": {
                "id": "Apa inovasi struktural utama Piramida Djoser dibandingkan makam-makam penguasa Mesir sebelumnya?",
                "en": "What was the principal architectural innovation of Djoser's Pyramid compared to earlier Egyptian royal tombs?"
            },
            "options": [
                {
                    "id": "Penggunaan batu kapur potong (ashlar masonry) secara menyeluruh menggantikan bata lumpur",
                    "en": "Complete transition to cut-stone ashlar masonry replacing sun-dried mudbricks"
                },
                {
                    "id": "Ruang makam bawah air yang dialiri sungai Nil",
                    "en": "Subterranean flooded chambers fed by the Nile"
                },
                {
                    "id": "Kubah beton melingkar tanpa tiang penyangga",
                    "en": "Unreinforced concrete dome ceilings"
                },
                {
                    "id": "Menara pylon kayu berlapis perunggu",
                    "en": "Bronze-clad wooden pylon towers"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Piramida Djoser adalah struktur batu potong terencana tertua di dunia, menandai transisi penting dari bata lumpur yang rapuh ke batu kapur permanen.",
                "en": "Djoser's Pyramid was the world's first colossal stone-cut building, transforming tomb construction from fragile mudbrick to enduring limestone."
            }
        }
    ]
},
  "stonehenge": {
    "articleSlug": "stonehenge",
    "title": {
        "id": "Kuis: Monumen Stonehenge",
        "en": "Quiz: Stonehenge Monument"
    },
    "questions": [
        {
            "id": "sh-1",
            "question": {
                "id": "Kesejajaran astronomis utama yang dirancang pada sumbu poros monumen Stonehenge adalah menghadap...",
                "en": "The primary astronomical alignment encoded into Stonehenge's axis aligns with..."
            },
            "options": [
                {
                    "id": "Terbitnya matahari pada solstis musim panas dan terbenamnya matahari pada solstis musim dingin",
                    "en": "Sunrise at the summer solstice and sunset at the winter solstice"
                },
                {
                    "id": "Fase bulan purnama pertama setiap musim semi",
                    "en": "The first full moon of the vernal equinox"
                },
                {
                    "id": "Posisi konstelasi bintang Orion di titik kulminasi",
                    "en": "The meridian culmination of the constellation Orion"
                },
                {
                    "id": "Gerhana matahari total siklus Saros",
                    "en": "Total solar eclipses along the Saros cycle"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Sumbu utama Stonehenge sejajar sempurna dengan arah terbit matahari pada titik balik musim panas (midsummer sunrise) dan terbenam matahari musim dingin.",
                "en": "Stonehenge's central avenue aligns precisely with the sunrise on the summer solstice and the sunset on the winter solstice."
            }
        },
        {
            "id": "sh-2",
            "question": {
                "id": "Batu 'Bluestone' yang menyusun lingkaran dalam Stonehenge didatangkan dari wilayah mana yang berjarak lebih dari 200 km?",
                "en": "From which region over 200 kilometers away were the inner 'Bluestones' of Stonehenge quarried?"
            },
            "options": [
                {
                    "id": "Bukit Preseli di Wales barat daya",
                    "en": "Preseli Hills in southwest Wales"
                },
                {
                    "id": "Dataran Tinggi Skotlandia",
                    "en": "Scottish Highlands"
                },
                {
                    "id": "Tebing Putih Dover",
                    "en": "White Cliffs of Dover"
                },
                {
                    "id": "Tambang granit Cornwall",
                    "en": "Cornish granite quarries"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Analisis geologis membuktikan bahwa batu-batu bluestone seberat 2-4 ton diangkut dari Bukit Preseli di Pembrokeshire, Wales.",
                "en": "Geological analysis confirms that the 2 to 4-ton bluestones were transported over 200 km from the Preseli Hills in Pembrokeshire, Wales."
            }
        },
        {
            "id": "sh-3",
            "question": {
                "id": "Teknik sambungan pertukangan kayu apa yang diadopsi para pembangun Stonehenge untuk mengunci batu lintel horisontal?",
                "en": "Which woodworking joint technique was uniquely adapted in stone by the builders of Stonehenge to secure lintels?"
            },
            "options": [
                {
                    "id": "Sambungan lubang dan purus (mortise and tenon) serta lidah alur",
                    "en": "Mortise and tenon joints combined with tongue and groove locking"
                },
                {
                    "id": "Perekat aspal bitumen vulkanik",
                    "en": "Volcanic bitumen mortar"
                },
                {
                    "id": "Klem besi cor panas",
                    "en": "Hot-poured iron clamps"
                },
                {
                    "id": "Pasak tali rami berlapis damar",
                    "en": "Resin-soaked hemp lashing"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Batu-batu sarsen Stonehenge dipahat dengan tonjolan purus (tenon) yang masuk pas ke dalam lubang (mortise) pada batu lintel atasnya.",
                "en": "The upright sarsen stones feature carved tenon knobs fitting snugly into matching hollowed mortises in the horizontal lintels."
            }
        }
    ]
},
  "kodeks-hammurabi": {
    "articleSlug": "kodeks-hammurabi",
    "title": {
        "id": "Kuis: Kodeks Hukum Hammurabi",
        "en": "Quiz: Code of Hammurabi"
    },
    "questions": [
        {
            "id": "kh-1",
            "question": {
                "id": "Prinsip pembalasan setimpal yang mendasari banyak pasal pidana dalam Kodeks Hammurabi dikenal dalam istilah hukum sebagai...",
                "en": "The principle of proportional retribution underlying many penal laws in Hammurabi's Code is legally termed..."
            },
            "options": [
                {
                    "id": "Lex Talionis ('Mata ganti mata, gigi ganti gigi')",
                    "en": "Lex Talionis ('An eye for an eye, a tooth for a tooth')"
                },
                {
                    "id": "Habeas Corpus",
                    "en": "Habeas Corpus"
                },
                {
                    "id": "Presumption of Innocence",
                    "en": "Presumption of Innocence"
                },
                {
                    "id": "Pacta Sunt Servanda",
                    "en": "Pacta Sunt Servanda"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Doktrin Lex Talionis menetapkan bahwa hukuman fisik harus setimpal dengan kerugian yang ditimbulkan oleh pelaku kejahatan.",
                "en": "The doctrine of Lex Talionis dictates that punishment must mirror the specific harm or bodily injury inflicted by the offender."
            }
        },
        {
            "id": "kh-2",
            "question": {
                "id": "Siapakah dewa keadilan Babilonia yang digambarkan menyerahkan tongkat kekuasaan dan tali ukur hukum kepada Raja Hammurabi pada bagian atas prasasti?",
                "en": "Which Babylonian god of justice is depicted handing the rod of sovereignty and measuring ring to King Hammurabi atop the stele?"
            },
            "options": [
                {
                    "id": "Dewa Shamash (Dewa Matahari dan Keadilan)",
                    "en": "Shamash (God of Sun and Justice)"
                },
                {
                    "id": "Dewa Marduk",
                    "en": "Marduk"
                },
                {
                    "id": "Dewa Enlil",
                    "en": "Enlil"
                },
                {
                    "id": "Dewa Ishtar",
                    "en": "Ishtar"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Dewa Matahari Shamash digambarkan bertahta di puncak stela basal hitam sedang menganugerahkan otoritas hukum kepada Hammurabi.",
                "en": "The Solar deity Shamash is depicted seated atop the diorite stele investing Hammurabi with the royal insignia of divine justice."
            }
        },
        {
            "id": "kh-3",
            "question": {
                "id": "Di manakah prasasti stela batu basal hitam Kodeks Hammurabi ditemukan kembali oleh para arkeolog Prancis pada tahun 1901?",
                "en": "Where was the black diorite stele of Hammurabi's Code rediscovered by French archaeologists in 1901?"
            },
            "options": [
                {
                    "id": "Susa (Iran kuno / Elam)",
                    "en": "Susa (Ancient Elam / Iran)"
                },
                {
                    "id": "Reruntuhan Babilonia",
                    "en": "Ruins of Babylon"
                },
                {
                    "id": "Niniwe",
                    "en": "Nineveh"
                },
                {
                    "id": "Persepolis",
                    "en": "Persepolis"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Stela ini dijarah oleh bangsa Elam dari Babilonia pada abad ke-12 SM dan ditemukan kembali di situs kuno Susa oleh ekspedisi Jacques de Morgan.",
                "en": "The stele was looted from Babylon by the Elamites in the 12th century BCE and unearthed at Susa by Jacques de Morgan's French team."
            }
        }
    ]
},
  "letusan-thera-santorini": {
    "articleSlug": "letusan-thera-santorini",
    "title": {
        "id": "Kuis: Letusan Thera Santorini",
        "en": "Quiz: Eruption of Thera"
    },
    "questions": [
        {
            "id": "lt-1",
            "question": {
                "id": "Peradaban maritim Zaman Perunggu manakah di Kepulauan Kreta yang mengalami kemunduran drastis akibat letusan Thera?",
                "en": "Which Bronze Age maritime civilization on the island of Crete suffered catastrophic decline following the Thera eruption?"
            },
            "options": [
                {
                    "id": "Peradaban Minoa (Minoan)",
                    "en": "Minoan Civilization"
                },
                {
                    "id": "Peradaban Mikene (Mycenaean)",
                    "en": "Mycenaean Civilization"
                },
                {
                    "id": "Peradaban Etruska",
                    "en": "Etruscan Civilization"
                },
                {
                    "id": "Peradaban Het",
                    "en": "Hittite Civilization"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Tsunami raksasa, hujan abu vulkanik tebal, dan kehancuran armada kapal perang Minoa melumpuhkan hegemoni maritim peradaban istana Kreta.",
                "en": "Devastating tsunamis, dense tephra fall, and fleet destruction crippled the maritime power and agricultural economy of the Minoan palatial culture."
            }
        },
        {
            "id": "lt-2",
            "question": {
                "id": "Kota pelabuhan Zaman Perunggu berlukisan dinding (fresco) indah di pulau Santorini yang terkubur abu mirip Pompeii adalah...",
                "en": "The Bronze Age port city with exquisite frescoes on Santorini preserved beneath volcanic ash akin to Pompeii is..."
            },
            "options": [
                {
                    "id": "Akrotiri",
                    "en": "Akrotiri"
                },
                {
                    "id": "Knossos",
                    "en": "Knossos"
                },
                {
                    "id": "Phaistos",
                    "en": "Phaistos"
                },
                {
                    "id": "Mallia",
                    "en": "Mallia"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Situs Akrotiri menyajikan bangunan bertingkat, sistem drainase canggih, dan fresko berwarna-warni yang diawetkan sempurna di bawah lapisan tebal tuf vulkanik.",
                "en": "Akrotiri features multi-story houses, indoor plumbing, and vibrant frescoes preserved intact beneath thick layers of volcanic pumice."
            }
        },
        {
            "id": "lt-3",
            "question": {
                "id": "Legenda filsafat Plato tentang benua yang tenggelam dalam sehari semalam kerap dikaitkan oleh para sejarawan modern dengan letusan Thera, yaitu legenda...",
                "en": "Which philosophical legend by Plato describing a land vanishing in a single day and night is frequently linked to the Thera catastrophe?"
            },
            "options": [
                {
                    "id": "Atlantis",
                    "en": "Atlantis"
                },
                {
                    "id": "El Dorado",
                    "en": "El Dorado"
                },
                {
                    "id": "Lemuria",
                    "en": "Lemuria"
                },
                {
                    "id": "Hiperborea",
                    "en": "Hyperborea"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kisah kehancuran peradaban maritim maju Minoa di Thera dalam bencana alam kataklismik diyakini menjadi inspirasi inti dari narasi dialog Plato tentang Atlantis.",
                "en": "The sudden destruction of the sophisticated Minoan thalassocracy at Thera is widely considered the historical core behind Plato's Atlantis dialogue."
            }
        }
    ]
},
  "perang-troya": {
    "articleSlug": "perang-troya",
    "title": {
        "id": "Kuis: Perang Troya",
        "en": "Quiz: The Trojan War"
    },
    "questions": [
        {
            "id": "pt-1",
            "question": {
                "id": "Mahakarya epos sastra Yunani Kuno gubahan Homer yang mengabadikan kisah kemarahan Achilles dalam Perang Troya adalah...",
                "en": "Which Ancient Greek epic poem attributed to Homer immortalizes the wrath of Achilles during the Trojan War?"
            },
            "options": [
                {
                    "id": "Iliad (Iliada)",
                    "en": "Iliad"
                },
                {
                    "id": "Aeneid",
                    "en": "Aeneid"
                },
                {
                    "id": "Teogonia",
                    "en": "Theogony"
                },
                {
                    "id": "Mahabharata",
                    "en": "Mahabharata"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Iliad menceritakan peristiwa pada tahun kesepuluh pengepungan kota Troya (Ilion), berpusat pada konflik Achilles dan Raja Agamemnon.",
                "en": "The Iliad chronicles the tenth year of the siege of Troy (Ilion), focusing on the feud between Achilles and King Agamemnon."
            }
        },
        {
            "id": "pt-2",
            "question": {
                "id": "Siapakah arkeolog perintis yang mengekskavasi bukit Hisarlik di Turki pada tahun 1870-an untuk membuktikan kebenaran historis kota Troya?",
                "en": "Who was the pioneering archaeologist who excavated the Hisarlik tell in Turkey in the 1870s to uncover the historic city of Troy?"
            },
            "options": [
                {
                    "id": "Heinrich Schliemann",
                    "en": "Heinrich Schliemann"
                },
                {
                    "id": "Howard Carter",
                    "en": "Howard Carter"
                },
                {
                    "id": "Leonard Woolley",
                    "en": "Leonard Woolley"
                },
                {
                    "id": "Arthur Evans",
                    "en": "Arthur Evans"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Heinrich Schliemann mengidentifikasi lapisan pemukiman berbenteng di bukit Hisarlik, membuktikan bahwa kota Troya dalam karya Homer memiliki landasan arkeologis nyata.",
                "en": "Heinrich Schliemann uncovered the multi-layered citadel at Hisarlik, confirming the physical historical basis of Homeric Troy."
            }
        },
        {
            "id": "pt-3",
            "question": {
                "id": "Taktik tipu muslihat legendaris apa yang dirancang oleh Odysseus untuk menembus tembok kota Troya?",
                "en": "Which legendary stratagem of deception did Odysseus devise to breach the impenetrable walls of Troy?"
            },
            "options": [
                {
                    "id": "Kuda Kayu Troya (Trojan Horse)",
                    "en": "The Trojan Wooden Horse"
                },
                {
                    "id": "Terowongan bawah tanah rahasia",
                    "en": "Secret subterranean mining sapping"
                },
                {
                    "id": "Ketapel api Yunani",
                    "en": "Greek fire catapult bombardment"
                },
                {
                    "id": "Pengepungan blokade laut total",
                    "en": "Total naval blockade starvation"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kuda kayu raksasa yang menyembunyikan prajurit Yunani terpilih di dalamnya dihadiahkan sebagai persembahan damai, lalu prajurit keluar membuka gerbang pada malam hari.",
                "en": "A hollow giant wooden horse concealing elite Greek warriors was left behind as an offering; the troops slipped out at night to open Troy's gates."
            }
        }
    ]
},
  "peradaban-olmek": {
    "articleSlug": "peradaban-olmek",
    "title": {
        "id": "Kuis: Peradaban Olmek",
        "en": "Quiz: Olmec Civilization"
    },
    "questions": [
        {
            "id": "ol-1",
            "question": {
                "id": "Karya seni patung monolitik paling terkenal yang menjadi ciri khas Peradaban Olmek di San Lorenzo dan La Venta adalah...",
                "en": "The most iconic monolithic stone sculpture characteristic of the Olmec Civilization at San Lorenzo and La Venta is..."
            },
            "options": [
                {
                    "id": "Kepala batu basal kolosal berhelm pelindung",
                    "en": "Colossal basalt stone heads wearing protective helmets"
                },
                {
                    "id": "Patung elang emas bertatahkan batu giok",
                    "en": "Golden eagle statues inlaid with jade"
                },
                {
                    "id": "Pilar totem kayu raksasa",
                    "en": "Giant wooden totem poles"
                },
                {
                    "id": "Piramida kaca kristal",
                    "en": "Crystal glass pyramidal stelae"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Sebanyak 17 patung kepala batu kolosal seberat hingga 40 ton dipahat oleh pemahat Olmek untuk mengabadikan para penguasa mereka.",
                "en": "17 colossal basalt portrait heads weighing up to 40 tons were sculpted by Olmec artists to commemorate their individual rulers."
            }
        },
        {
            "id": "ol-2",
            "question": {
                "id": "Mengapa Peradaban Olmek kerap dijuluki sebagai 'Cultura Madre' (Peradaban Ibu) di kawasan Mesoamerika?",
                "en": "Why is the Olmec Civilization widely designated as the 'Cultura Madre' (Mother Culture) of Mesoamerica?"
            },
            "options": [
                {
                    "id": "Karena merintis tata kota piramida, kalender ritual, tulisan hieroglif awal, dan permainan bola yang diadopsi Maya dan Aztec",
                    "en": "Because they pioneered pyramid layouts, ritual calendars, proto-glyphs, and the ritual ballgame later inherited by Maya and Aztecs"
                },
                {
                    "id": "Karena menaklukkan seluruh benua Amerika Utara",
                    "en": "Because they conquered the entirety of North America"
                },
                {
                    "id": "Karena memperkenalkan pertanian gandum dan beras ke Pasifik",
                    "en": "Because they introduced wheat and rice agriculture to the Pacific"
                },
                {
                    "id": "Karena merupakan peradaban maritim pengarung samudra Atlantik",
                    "en": "Because they were an oceanic trans-Atlantic maritime empire"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Fondasi keagamaan, arsitektur piramida tanah, kultus jaguar, dan ritual permainan bola Olmek menjadi cetak biru peradaban Mesoamerika berikutnya.",
                "en": "Olmec religious cosmology, earthen platform pyramids, the were-jaguar cult, and the ritual ballgame served as the blueprint for subsequent Mesoamerican polities."
            }
        },
        {
            "id": "ol-3",
            "question": {
                "id": "Batu mineral mulia berwarna hijau apa yang paling disucikan dan dipahat dengan teknik tinggi oleh seniman Olmek?",
                "en": "Which precious green mineral was most venerated and expertly sculpted into ceremonial celts and figurines by Olmec lapidaries?"
            },
            "options": [
                {
                    "id": "Batu giok (Jadeit)",
                    "en": "Jadeite jade"
                },
                {
                    "id": "Batu zamrud Kolombia",
                    "en": "Colombian emerald"
                },
                {
                    "id": "Batu malasit",
                    "en": "Malachite"
                },
                {
                    "id": "Batu pirus (Turquoise)",
                    "en": "Turquoise"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Jadeit biru-hijau dari Lembah Sungai Motagua dipandang sebagai lambang kesuburan tanaman jagung dan air kehidupan oleh para penguasa Olmek.",
                "en": "Blue-green jadeite imported from the Motagua River valley symbolized maize sprouting, fertile water, and elite vitality to Olmec rulers."
            }
        }
    ]
},
  "kerajaan-kush-meroe": {
    "articleSlug": "kerajaan-kush-meroe",
    "title": {
        "id": "Kuis: Kerajaan Kush & Meroë",
        "en": "Quiz: Kingdom of Kush & Meroë"
    },
    "questions": [
        {
            "id": "ku-1",
            "question": {
                "id": "Keberhasilan militer terbesar Kerajaan Kush pada abad ke-8 SM di bawah pimpinan Raja Piye adalah...",
                "en": "What was the greatest military triumph of the Kingdom of Kush in the 8th century BCE under King Piye?"
            },
            "options": [
                {
                    "id": "Menaklukkan seluruh wilayah Mesir dan mendirikan Dinasti ke-25 Firaun Hitam",
                    "en": "Conquering all of Egypt and establishing the 25th 'Black Pharaoh' Dynasty"
                },
                {
                    "id": "Menghancurkan armada laut Romawi di Mediterania",
                    "en": "Annihilating Roman naval armadas in the Mediterranean"
                },
                {
                    "id": "Merebut Yerusalem dari bangsa Babilonia",
                    "en": "Capturing Jerusalem from the Babylonians"
                },
                {
                    "id": "Menguasai tambang perak di Semenanjung Iberia",
                    "en": "Dominating silver mines in the Iberian Peninsula"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Raja Piye dan penerusnya memerintah Mesir dan Nubia dari Delta Nil hingga Sudan sebagai Dinasti ke-25 Mesir Kuno selama hampir seabad.",
                "en": "King Piye and his royal successors ruled Egypt and Nubia from the Nile Delta to Sudan as the 25th Dynasty for nearly a century."
            }
        },
        {
            "id": "ku-2",
            "question": {
                "id": "Ciri khas arsitektur pemakaman para bangsawan Kush di nekropolis Meroë adalah...",
                "en": "The distinctive architectural hallmark of royal Kushite tombs at the Meroë necropolis is..."
            },
            "options": [
                {
                    "id": "Ratusan piramida batu pasir berlereng curam dengan kuil kapel di depannya",
                    "en": "Hundreds of steep-angled sandstone pyramids fronted by offering chapels"
                },
                {
                    "id": "Katakombe bawah tanah berbentuk labirin tanpa tugu atas",
                    "en": "Subterranean labyrinth catacombs without surface markers"
                },
                {
                    "id": "Dolmen megalitikum bundar berlapis emas",
                    "en": "Circular megalithic dolmens covered in gold leaf"
                },
                {
                    "id": "Makam tebing batu bertiang gaya Korintus",
                    "en": "Corinthian rock-cut cliff facades"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Sudan memiliki lebih dari 200 piramida Nubia curam di Meroë dan Napata, menjadikannya wilayah dengan jumlah piramida terbanyak di dunia.",
                "en": "Sudan contains over 200 steep-sided Nubian pyramids across Meroë and Napata, giving it more pyramids than Egypt."
            }
        },
        {
            "id": "ku-3",
            "question": {
                "id": "Gelar ratu pejuang berdaulat (Queen Mother) di Kerajaan Kush Meroë yang memimpin perlawanan melawan Kekaisaran Romawi adalah...",
                "en": "The title of sovereign warrior queens (Queen Mothers) in Kushite Meroë who led armed resistance against Rome is..."
            },
            "options": [
                {
                    "id": "Kandake (Candace)",
                    "en": "Kandake (Candace)"
                },
                {
                    "id": "Firaun Wanita",
                    "en": "Female Pharaoh"
                },
                {
                    "id": "Basileia",
                    "en": "Basileia"
                },
                {
                    "id": "Empress Dowager",
                    "en": "Empress Dowager"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Gelar Kandake disandang oleh para ratu perkasa Meroë seperti Amanirenas yang berhasil menegosiasikan traktat damai menguntungkan dengan Kaisar Romawi Augustus.",
                "en": "The title Kandake belonged to formidable queens such as Amanirenas, who negotiated favorable peace treaties with Roman Emperor Augustus."
            }
        }
    ]
},
  "dinasti-zhou-mandat-langit": {
    "articleSlug": "dinasti-zhou-mandat-langit",
    "title": {
        "id": "Kuis: Dinasti Zhou & Mandat Langit",
        "en": "Quiz: Zhou Dynasty & Mandate of Heaven"
    },
    "questions": [
        {
            "id": "dz-1",
            "question": {
                "id": "Konsep filsafat politik 'Mandat Langit' (Tianming) yang dirumuskan Dinasti Zhou menyatakan bahwa...",
                "en": "The political philosophy concept of the 'Mandate of Heaven' (Tianming) formulated by the Zhou Dynasty posited that..."
            },
            "options": [
                {
                    "id": "Kekuasaan kaisar sah hanya jika memerintah secara adil dan bermoral; tirani mencabut legitimasi takhta",
                    "en": "Imperial rule is legitimate only if the ruler is just and moral; tyranny forfeits divine sanction"
                },
                {
                    "id": "Kaisar adalah keturunan darah dewa yang mutlak dan tak boleh digulingkan dalam kondisi apa pun",
                    "en": "The monarch is of absolute divine blood and cannot be deposed under any circumstances"
                },
                {
                    "id": "Semua keputusan politik harus ditentukan melalui undian orakel tulang kura-kura",
                    "en": "All state policies must be dictated by turtle oracle shell lotteries"
                },
                {
                    "id": "Rakyat jelata memiliki hak untuk memilih kaisar melalui pemilihan umum tahunan",
                    "en": "Commoners hold the democratic right to elect the emperor annually"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Mandat Langit memberikan legitimasi moral untuk menggulingkan dinasti yang korup atau tiran bila terjadi bencana alam dan kekacauan sosial.",
                "en": "The Mandate of Heaven granted moral legitimacy for overthrowing corrupt or tyrannical dynasties when disasters and misrule signaled divine disapproval."
            }
        },
        {
            "id": "dz-2",
            "question": {
                "id": "Pertempuran penentu di mana Raja Wu dari Zhou mengalahkan Dinasti Shang pada tahun 1046 SM adalah...",
                "en": "The decisive battle in which King Wu of Zhou defeated the Shang Dynasty in 1046 BCE was the..."
            },
            "options": [
                {
                    "id": "Pertempuran Muye",
                    "en": "Battle of Muye"
                },
                {
                    "id": "Pertempuran Changping",
                    "en": "Battle of Changping"
                },
                {
                    "id": "Pertempuran Tebing Merah",
                    "en": "Battle of Red Cliffs"
                },
                {
                    "id": "Pertempuran Guandu",
                    "en": "Battle of Guandu"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Pada Pertempuran Muye, pasukan koalisi Raja Wu mengalahkan tentara Raja Zhou dari Shang yang jumlahnya lebih besar karena banyak prajurit Shang membelot.",
                "en": "At the Battle of Muye, King Wu's coalition crushed the larger army of Shang's King Zhou after Shang troops defected."
            }
        },
        {
            "id": "dz-3",
            "question": {
                "id": "Dua aliran pemikiran filsafat Tiongkok terbesar yang lahir pada paruh kedua Dinasti Zhou (Zaman Musim Semi dan Gugur) adalah...",
                "en": "Two of the greatest schools of Chinese philosophy that emerged during the latter half of the Zhou Dynasty were..."
            },
            "options": [
                {
                    "id": "Konfusianisme (Konghucu) dan Taoisme (Laozi)",
                    "en": "Confucianism (Confucius) and Daoism (Laozi)"
                },
                {
                    "id": "Buddhisme dan Jainisme",
                    "en": "Buddhism and Jainism"
                },
                {
                    "id": "Stoisisme dan Epikureanisme",
                    "en": "Stoicism and Epicureanism"
                },
                {
                    "id": "Zoroastrianisme dan Manikeisme",
                    "en": "Zoroastrianism and Manichaeism"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Era Seratus Aliran Pemikiran pada akhir Dinasti Zhou melahirkan ajaran Kong Hu Cu (Etika & Tata Negara) dan Lao Zi (Harmoni Alam/Dao).",
                "en": "The Hundred Schools of Thought during the late Zhou era produced Confucius (ethical statecraft) and Laozi (natural harmony/Dao)."
            }
        }
    ]
},
  "kebangkitan-fenisia-kartago": {
    "articleSlug": "kebangkitan-fenisia-kartago",
    "title": {
        "id": "Kuis: Bangsa Fenisia & Kartago",
        "en": "Quiz: Phoenicians & Carthage"
    },
    "questions": [
        {
            "id": "fk-1",
            "question": {
                "id": "Warisan intelektual paling revolusioner bangsa pelaut Fenisia yang menjadi cikal bakal aksara Latin, Yunani, dan Arab adalah...",
                "en": "The most revolutionary intellectual legacy of the Phoenician seafarers that formed the ancestor of Latin, Greek, and Arabic scripts was..."
            },
            "options": [
                {
                    "id": "Alfabet Fonetik 22 konsonan (Phoenician Alphabet)",
                    "en": "22-consonant Phonetic Alphabet"
                },
                {
                    "id": "Aksara paku kuneiform tanah liat",
                    "en": "Clay cuneiform wedge script"
                },
                {
                    "id": "Sistem angka heksagesimal",
                    "en": "Sexagesimal base-60 numbering"
                },
                {
                    "id": "Hieroglif piktografik",
                    "en": "Pictographic hieroglyphs"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Alfabet Fenisia menyederhanakan ribuan simbol rumit menjadi 22 huruf fonetik bunyi konsonan yang mudah dipelajari para pedagang di pelabuhan Mediterania.",
                "en": "The Phoenician alphabet condensed complex scribal scripts into 22 phonetic consonant letters easily learned by Mediterranean traders."
            }
        },
        {
            "id": "fk-2",
            "question": {
                "id": "Komoditas pewarna tekstil langka dan mewah yang diproduksi bangsa Fenisia dari siput laut Murex adalah...",
                "en": "The rare luxury textile dye commodity manufactured by Phoenicians from marine Murex snails was..."
            },
            "options": [
                {
                    "id": "Pewarna Ungu Tyre (Tyrian Purple)",
                    "en": "Tyrian Royal Purple"
                },
                {
                    "id": "Pewarna Indigo Biru",
                    "en": "Indigo Blue"
                },
                {
                    "id": "Pewarna Merah Kirmizi Cochineal",
                    "en": "Cochineal Crimson"
                },
                {
                    "id": "Pewarna Emas Ochre",
                    "en": "Gold Ochre"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ungu Tyre dari kota Tirus diproduksi dari ribuan sekresi siput Murex dan menjadi simbol kemewahan eksklusif para kaisar dan raja kuno.",
                "en": "Tyrian Purple from Tyre required thousands of crushed Murex snails, becoming the ultimate status symbol of royal authority across antiquity."
            }
        },
        {
            "id": "fk-3",
            "question": {
                "id": "Siapakah ratu legendaris asal Tirus yang menurut tradisi sejarah mendirikan kota koloni Kartago di pesisir Tunisia pada 814 SM?",
                "en": "Who was the legendary princess from Tyre who, according to historical tradition, founded the colony of Carthage in 814 BCE?"
            },
            "options": [
                {
                    "id": "Ratu Elissa / Dido",
                    "en": "Queen Elissa / Dido"
                },
                {
                    "id": "Ratu Jezebel",
                    "en": "Queen Jezebel"
                },
                {
                    "id": "Ratu Zenobia",
                    "en": "Queen Zenobia"
                },
                {
                    "id": "Ratu Cleopatra VII",
                    "en": "Queen Cleopatra VII"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Putri Elissa (Dido) melarikan diri dari tirani saudaranya di Tirus dan mendirikan pelabuhan Qart-Hadasht (Kartago / 'Kota Baru') di Afrika Utara.",
                "en": "Princess Elissa (Dido) fled her tyrannical brother in Tyre to found the trading port of Qart-Hadasht ('New City' / Carthage) in North Africa."
            }
        }
    ]
},
  "kerajaan-urartu-van": {
    "articleSlug": "kerajaan-urartu-van",
    "title": {
        "id": "Kuis: Kerajaan Urartu & Benteng Van",
        "en": "Quiz: Kingdom of Urartu & Van"
    },
    "questions": [
        {
            "id": "uv-1",
            "question": {
                "id": "Keunggulan teknologi hidrolika Kerajaan Urartu yang dibangun oleh Raja Menua dan masih berfungsi hingga era modern adalah...",
                "en": "The hydraulic engineering marvel of the Kingdom of Urartu constructed by King Menua that remains operational in modern times is..."
            },
            "options": [
                {
                    "id": "Kanal Air Semiramis / Menua sepanjang 56 km",
                    "en": "56-kilometer Menua (Semiramis) Aqueduct Canal"
                },
                {
                    "id": "Bendungan Marib",
                    "en": "Marib Dam"
                },
                {
                    "id": "Saluran Akuaduk Pont du Gard",
                    "en": "Pont du Gard Aqueduct"
                },
                {
                    "id": "Qanat Bawah Tanah Isfahan",
                    "en": "Isfahan Underground Qanat"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kanal batu Menua mengalirkan air tawar pegunungan melintasi tebing terjal ke ibu kota Tushpa (Van) dan dipuji sebagai mahakarya hidrolika kuno.",
                "en": "The stone-walled Menua Canal channeled freshwater across steep mountain cliffs to capital Tushpa (Van), an enduring marvel of ancient hydrology."
            }
        },
        {
            "id": "uv-2",
            "question": {
                "id": "Komoditas kerajinan tangan logam apa yang membuat para pandai besi Urartu sangat disegani di seluruh Timur Dekat kuno?",
                "en": "Which metallurgy commodity made Urartian blacksmiths and bronzeworkers renowned throughout the ancient Near East?"
            },
            "options": [
                {
                    "id": "Kuali perunggu berornamen kepala banteng bersayap dan helm perang besi",
                    "en": "Cast bronze cauldrons with winged-bull attachments and iron helmets"
                },
                {
                    "id": "Koin emas cetak mesin",
                    "en": "Milled gold coinage"
                },
                {
                    "id": "Pedang baja Damaskus",
                    "en": "Damascus steel rapiers"
                },
                {
                    "id": "Cermin perak berukir",
                    "en": "Engraved silver mirrors"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Karya seni kuali perunggu bertelinga makhluk mitologi buatan Urartu diekspor hingga ke makam para bangsawan Etruska di Italia dan kuil Yunani.",
                "en": "Urartian bronze cauldrons featuring winged siren and bull protomes were luxury prestige imports found in Etruscan tombs and Greek sanctuaries."
            }
        },
        {
            "id": "uv-3",
            "question": {
                "id": "Dewa tertinggi dalam panteon keagamaan Kerajaan Urartu yang dipuja di kuil-kuil batu berbenteng adalah Dewa...",
                "en": "The supreme patron deity of the Urartian pantheon venerated in stone citadel temples was..."
            },
            "options": [
                {
                    "id": "Dewa Haldi",
                    "en": "Haldi"
                },
                {
                    "id": "Dewa Ahura Mazda",
                    "en": "Ahura Mazda"
                },
                {
                    "id": "Dewa Baal",
                    "en": "Baal"
                },
                {
                    "id": "Dewa Osiris",
                    "en": "Osiris"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Dewa Haldi adalah dewa perang pelindung raja-raja Urartu; kampanye militer selalu dipersembahkan atas nama tombak suci Haldi.",
                "en": "Haldi was the supreme warrior deity protecting Urartian kings, to whom military victories and fortress temples were dedicated."
            }
        }
    ]
},
  "kerajaan-phrygia-midas": {
    "articleSlug": "kerajaan-phrygia-midas",
    "title": {
        "id": "Kuis: Kerajaan Phrygia & Raja Midas",
        "en": "Quiz: Phrygia & King Midas"
    },
    "questions": [
        {
            "id": "pm-1",
            "question": {
                "id": "Struktur makam tumulus raksasa 'Tumulus MM' di Gordion yang diekskavasi para arkeolog diyakini sebagai tempat peristirahatan...",
                "en": "The monumental tumulus earthen mound 'Tumulus MM' excavated at Gordion is historically associated with..."
            },
            "options": [
                {
                    "id": "Raja Gordias atau Raja Midas dari Phrygia",
                    "en": "King Gordias or King Midas of Phrygia"
                },
                {
                    "id": "Kaisar Kroisos dari Lydia",
                    "en": "King Croesus of Lydia"
                },
                {
                    "id": "Raja Priam dari Troya",
                    "en": "King Priam of Troy"
                },
                {
                    "id": "Raja Sargon II dari Asiria",
                    "en": "King Sargon II of Assyria"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Bilik makam kayu pinus utuh di kedalaman bukit tumulus setinggi 53 meter menyimpan perabot kayu bertatah dan bejana perunggu pesta pemakaman kerajaan.",
                "en": "An intact log chamber deep inside the 53-meter artificial mound contained exquisite inlaid wooden furniture and royal bronze banqueting vessels."
            }
        },
        {
            "id": "pm-2",
            "question": {
                "id": "Legenda 'Simpul Gordia' (Gordian Knot) yang terkenal akhirnya dipotong dengan pedang oleh penakluk besar dunia...",
                "en": "The famous legend of the intractable 'Gordian Knot' at Gordion was famously sliced through by..."
            },
            "options": [
                {
                    "id": "Aleksander Agung (Alexander the Great)",
                    "en": "Alexander the Great"
                },
                {
                    "id": "Julius Caesar",
                    "en": "Julius Caesar"
                },
                {
                    "id": "Koresh Agung",
                    "en": "Cyrus the Great"
                },
                {
                    "id": "Hannibal Barca",
                    "en": "Hannibal Barca"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ramalan kuno menyatakan barangsiapa mampu mengurai simpul kereta perang Gordias akan menjadi penguasa Asia; Aleksander membelahnya dengan pedang pada 333 SM.",
                "en": "The oracle foretold that whoever unraveled the knot of Gordias's chariot would rule Asia; Alexander severed it with his sword in 333 BCE."
            }
        },
        {
            "id": "pm-3",
            "question": {
                "id": "Aksesori peniti pakaian perunggu berpegas yang disempurnakan oleh perajin Phrygia dan diekspor ke Yunani kuno disebut...",
                "en": "The bronze spring-catch garment safety pin perfected by Phrygian artisans and widely traded across ancient Greece is known as a..."
            },
            "options": [
                {
                    "id": "Fibula",
                    "en": "Fibula"
                },
                {
                    "id": "Torc",
                    "en": "Torc"
                },
                {
                    "id": "Kameo",
                    "en": "Cameo"
                },
                {
                    "id": "Skarab",
                    "en": "Scarab"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ratusan peniti pakaian bermotif lengkung geometris (fibula) ditemukan di Gordion, mencerminkan kemahiran teknik pegas logam bangsa Phrygia.",
                "en": "Hundreds of bronze safety fibulae with double-shield geometry were excavated at Gordion, reflecting Phrygian precision wire-spring metallurgy."
            }
        }
    ]
},
  "perpustakaan-ashurbanipal": {
    "articleSlug": "perpustakaan-ashurbanipal",
    "title": {
        "id": "Kuis: Perpustakaan Ashurbanipal",
        "en": "Quiz: Library of Ashurbanipal"
    },
    "questions": [
        {
            "id": "pa-1",
            "question": {
                "id": "Naskah sastra epik tertua di dunia yang ditemukan dalam bentuk lempengan kuneiform di Perpustakaan Ashurbanipal adalah...",
                "en": "The world's oldest epic literary masterpiece recovered on cuneiform clay tablets from Ashurbanipal's Library is the..."
            },
            "options": [
                {
                    "id": "Epik Gilgamesh (Epic of Gilgamesh)",
                    "en": "Epic of Gilgamesh"
                },
                {
                    "id": "Ramayana",
                    "en": "Ramayana"
                },
                {
                    "id": "Iliad",
                    "en": "Iliad"
                },
                {
                    "id": "Mahabharata",
                    "en": "Mahabharata"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Dua belas lempengan tanah liat di Niniwe memuat versi standar terlengkap kisah pencarian keabadian Raja Uruk, Gilgamesh, dan kisah Air Bah.",
                "en": "Twelve clay tablets found at Nineveh preserve the standard Babylonian version of King Gilgamesh's quest for immortality and the Great Flood."
            }
        },
        {
            "id": "pa-2",
            "question": {
                "id": "Apa keunikan Raja Asiria Ashurbanipal dibandingkan raja-raja militer Mesopotamia lainnya?",
                "en": "What was unique about the Assyrian King Ashurbanipal compared to other Mesopotamian military monarchs?"
            },
            "options": [
                {
                    "id": "Ia bangga bisa membaca dan menulis aksara kuneiform Sumeria dan Akkadia yang rumit",
                    "en": "He took pride in his scholarly literacy in complex Sumerian and Akkadian cuneiform scripts"
                },
                {
                    "id": "Ia menolak memiliki tentara dan hanya mengandalkan diplomasi",
                    "en": "He refused standing armies, relying solely on pacifist diplomacy"
                },
                {
                    "id": "Ia menghapuskan seluruh sistem perpajakan di kerajaannya",
                    "en": "He abolished all state taxation throughout his realm"
                },
                {
                    "id": "Ia hidup sebagai biarawan pertapa di gurun",
                    "en": "He lived as an ascetic desert monk"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ashurbanipal secara eksplisit menulis bahwa ia menguasai seni menulis kuneiform, memecahkan tabel matematika, dan membaca lempengan batu kuno pra-banjir.",
                "en": "Ashurbanipal explicitly proclaimed his mastery of cuneiform writing, mathematical problem solving, and deciphering pre-flood stone inscriptions."
            }
        },
        {
            "id": "pa-3",
            "question": {
                "id": "Bagaimanakah kebakaran dahsyat yang menghancurkan kota Niniwe pada 612 SM secara paradoks justru menyelamatkan naskah perpustakaan?",
                "en": "How did the catastrophic conflagration that destroyed Nineveh in 612 BCE paradoxically preserve the library's contents?"
            },
            "options": [
                {
                    "id": "Api membakar dan memanggang lempengan tanah liat mentah menjadi keramik keras yang tahan ribuan tahun",
                    "en": "The intense fire baked the sun-dried clay tablets into hard ceramic, preserving them for millennia"
                },
                {
                    "id": "Lempengan tertutup kubah es yang mencair",
                    "en": "Melting ice domes sealed the chambers"
                },
                {
                    "id": "Asap tebal mengusir rayap pemakan kertas papirus",
                    "en": "Dense smoke repelled papyrus-eating termites"
                },
                {
                    "id": "Lempengan emas tidak dapat terbakar",
                    "en": "Gold leaf tablets were impervious to fire"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Panas api yang meruntuhkan istana Niniwe memanggang lempengan tanah liat mentah menjadi batu bata keramik keras yang terlindung di bawah puing reruntuhan.",
                "en": "The intense fire that consumed the palace baked the unbaked clay tablets into durable ceramic bricks, preserving them under rubble."
            }
        }
    ]
},
  "babilonia-baru-ishtar": {
    "articleSlug": "babilonia-baru-ishtar",
    "title": {
        "id": "Kuis: Gerbang Ishtar Babilonia",
        "en": "Quiz: Ishtar Gate of Babylon"
    },
    "questions": [
        {
            "id": "bi-1",
            "question": {
                "id": "Raja Babilonia Baru yang memimpin pembangunan akbar Gerbang Ishtar, Ziggurat Etemenanki, dan Taman Gantung adalah...",
                "en": "The Neo-Babylonian monarch who commissioned the Ishtar Gate, Etemenanki Ziggurat, and Hanging Gardens was..."
            },
            "options": [
                {
                    "id": "Raja Nebukadnezar II",
                    "en": "King Nebuchadnezzar II"
                },
                {
                    "id": "Raja Hammurabi",
                    "en": "King Hammurabi"
                },
                {
                    "id": "Raja Nabonidus",
                    "en": "King Nabonidus"
                },
                {
                    "id": "Raja Sargon Agung",
                    "en": "King Sargon the Great"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Raja Nebukadnezar II (memerintah 605–562 SM) mengubah Babilonia menjadi metropolis termegah di dunia kuno yang dikelilingi tembok ganda tak tertembus.",
                "en": "King Nebuchadnezzar II (reigned 605–562 BCE) transformed Babylon into the ancient world's grandest metropolis encircled by double defensive walls."
            }
        },
        {
            "id": "bi-2",
            "question": {
                "id": "Warna khas glasir bata bakar yang mendominasi fasad Gerbang Ishtar dan Jalan Prosesi Babilonia adalah...",
                "en": "The distinctive glazed brick color dominating the facade of the Ishtar Gate and the Processional Way was..."
            },
            "options": [
                {
                    "id": "Biru lapis lazuli terang dengan relief naga Mušḫuššu dan banteng emas",
                    "en": "Vibrant lapis-lazuli blue with golden Mušḫuššu dragons and aurochs reliefs"
                },
                {
                    "id": "Merah darah polos",
                    "en": "Plain crimson red"
                },
                {
                    "id": "Putih marmer gading",
                    "en": "Ivory white marble"
                },
                {
                    "id": "Hitam legam berkilau",
                    "en": "Glossy jet black"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Bata glasir biru kobalt cerah dihiasi relief hewan mitologis naga bertanduk (sirrush/Mušḫuššu) persembahan dewa Marduk dan banteng dewa Adad.",
                "en": "Brilliant cobalt-blue glazed bricks were embellished with relief sculptures of dragon-serpents (Mušḫuššu) and aurochs bulls."
            }
        },
        {
            "id": "bi-3",
            "question": {
                "id": "Di museum manakah rekonstruksi Gerbang Ishtar berukuran aslinya kini dipamerkan kepada publik dunia?",
                "en": "In which museum is the full-scale reconstruction of the Ishtar Gate currently exhibited to the global public?"
            },
            "options": [
                {
                    "id": "Pergamon Museum di Berlin, Jerman",
                    "en": "Pergamon Museum in Berlin, Germany"
                },
                {
                    "id": "Museum Louvre di Paris",
                    "en": "Louvre Museum in Paris"
                },
                {
                    "id": "British Museum di London",
                    "en": "British Museum in London"
                },
                {
                    "id": "Metropolitan Museum of Art di New York",
                    "en": "Metropolitan Museum of Art in New York"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Arkeolog Robert Koldewey mengekskavasi ribuan fragmen bata glasir dari Babilonia dan merekonstruksinya secara megah di Museum Pergamon, Berlin.",
                "en": "German archaeologist Robert Koldewey excavated thousands of glazed brick fragments from Babylon, meticulously reconstructing the gate in Berlin's Pergamon Museum."
            }
        }
    ]
},
  "makam-koresh-agung": {
    "articleSlug": "makam-koresh-agung",
    "title": {
        "id": "Kuis: Makam Koresh Agung",
        "en": "Quiz: Tomb of Cyrus the Great"
    },
    "questions": [
        {
            "id": "ka-1",
            "question": {
                "id": "Artefak tanah liat silindris terkenal dari Koresh Agung yang kerap disebut sebagai deklarasi hak asasi manusia pertama di dunia adalah...",
                "en": "The famous clay cylinder artifact of Cyrus the Great often celebrated as an early declaration of human rights is the..."
            },
            "options": [
                {
                    "id": "Silinder Koresh (Cyrus Cylinder)",
                    "en": "Cyrus Cylinder"
                },
                {
                    "id": "Prasasti Behistun",
                    "en": "Behistun Inscription"
                },
                {
                    "id": "Batu Rosetta",
                    "en": "Rosetta Stone"
                },
                {
                    "id": "Prasasti Tel Dan",
                    "en": "Tel Dan Stele"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Silinder Koresh mendeklarasikan pemulihan tempat ibadah, kebebasan beragama bagi bangsa taklukan, dan pemulangan bangsa Yahudi dari pembuangan Babilonia.",
                "en": "The Cyrus Cylinder proclaimed the restoration of sanctuaries, religious freedom for conquered peoples, and the repatriation of exiled Jews from Babylon."
            }
        },
        {
            "id": "ka-2",
            "question": {
                "id": "Bentuk arsitektur makam Koresh Agung di Pasargadae memiliki ciri unik berupa...",
                "en": "The architectural form of the Tomb of Cyrus the Great at Pasargadae features the unique design of a..."
            },
            "options": [
                {
                    "id": "Bilik makam batu kapur putih beratap pelana di atas podium enam tingkat undakan",
                    "en": "Gabled white limestone tomb chamber set atop a six-tiered plinth platform"
                },
                {
                    "id": "Piramida kaca di tengah danau gurun",
                    "en": "Glass pyramid in the center of a desert oasis"
                },
                {
                    "id": "Kubah emas bulat gaya Bizantium",
                    "en": "Byzantine-style golden dome"
                },
                {
                    "id": "Makam tebing tersembunyi tanpa pintu masuk",
                    "en": "Concealed rock-cut shaft without portals"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Makam Pasargadae dibangun dari blok batu putih monolitik tanpa adukan semen, menggabungkan gaya arsitektur ziggurat Elam dan atap rumah kayu Ionia.",
                "en": "The tomb at Pasargadae is built from white limestone ashlar blocks without mortar, combining a stepped plinth with a gabled Hellenic roof chamber."
            }
        },
        {
            "id": "ka-3",
            "question": {
                "id": "Ketika menaklukkan Persia, siapakah panglima besar yang mendatangi makam Koresh Agung dan memerintahkan pemugaran penghormatan?",
                "en": "When conquering Persia, which great commander visited the Tomb of Cyrus and ordered its restoration out of deep reverence?"
            },
            "options": [
                {
                    "id": "Aleksander Agung (Alexander the Great)",
                    "en": "Alexander the Great"
                },
                {
                    "id": "Julius Caesar",
                    "en": "Julius Caesar"
                },
                {
                    "id": "Kaisar Trajan",
                    "en": "Emperor Trajan"
                },
                {
                    "id": "Genghis Khan",
                    "en": "Genghis Khan"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Aleksander Agung sangat mengagumi Koresh Agung; ia menghukum mati para perampok makam dan memerintahkan perbaikan makam Pasargadae.",
                "en": "Alexander the Great held Cyrus in the highest esteem, executing desecrators and ordering the immediate restoration of Cyrus's Pasargadae tomb."
            }
        }
    ]
},
  "peradaban-norte-chico": {
    "articleSlug": "peradaban-norte-chico",
    "title": {
        "id": "Kuis: Peradaban Norte Chico",
        "en": "Quiz: Norte Chico Civilization"
    },
    "questions": [
        {
            "id": "nc-1",
            "question": {
                "id": "Teknik konstruksi tahan gempa inovatif yang digunakan masyarakat Norte Chico untuk membangun piramida teras adalah...",
                "en": "The innovative earthquake-resistant construction technique used by the Norte Chico people to build platform pyramids was..."
            },
            "options": [
                {
                    "id": "Shicra (kantung jaring anyaman alang-alang berisi batu kali)",
                    "en": "Shicras (woven reed mesh bags filled with unworked river rocks)"
                },
                {
                    "id": "Besi tulangan cor beton",
                    "en": "Rebar reinforced concrete pour"
                },
                {
                    "id": "Pasak kayu jati tahan lembap",
                    "en": "Moisture-cured teak wood dowels"
                },
                {
                    "id": "Blok es glasial yang dibekukan",
                    "en": "Frozen glacial ice masonry blocks"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kantung shicra yang diisi batu kali memberikan fleksibilitas struktural dinamis yang meredam gelombang gempa bumi tektonik di pesisir Peru.",
                "en": "Shicra mesh bags filled with stone provided flexible structural shock absorption, dissipating seismic waves during coastal Peruvian earthquakes."
            }
        },
        {
            "id": "nc-2",
            "question": {
                "id": "Simbiosis ekonomi utama yang memicu kemakmuran pesat peradaban Norte Chico adalah pertukaran antara...",
                "en": "The core economic symbiosis that propelled the prosperity of Norte Chico was the exchange between..."
            },
            "options": [
                {
                    "id": "Nelayan pesisir (ikan teri/sarden) dengan petani pedalaman lembah (kapas untuk jaring ikan)",
                    "en": "Coastal fishermen (anchovies/sardines) and inland valley farmers (cotton for fishing nets)"
                },
                {
                    "id": "Penambang emas Andes dengan pedagang laut Karibia",
                    "en": "Andean gold miners and Caribbean oceanic traders"
                },
                {
                    "id": "Pemburu bison padang rumput dengan petani gandum",
                    "en": "Grassland bison hunters and wheat farmers"
                },
                {
                    "id": "Peternak alpaka dengan pengrajin perunggu pesisir",
                    "en": "Highland alpaca herders and coastal bronze smiths"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Lembah pedalaman menanam kapas untuk bahan jaring nelayan, sementara nelayan pesisir memasok protein laut berlimpah bagi pekerja kota piramida.",
                "en": "Inland valleys grew industrial cotton for durable fishing nets, while coastal fishing villages supplied abundant marine protein to urban laborers."
            }
        },
        {
            "id": "nc-3",
            "question": {
                "id": "Ciri unik permukiman perkotaan monumental Norte Chico dibandingkan peradaban kuno dunia lainnya pada 2800 SM adalah...",
                "en": "A unique feature of Norte Chico's urban monumental centers compared to other global civilizations around 2800 BCE was..."
            },
            "options": [
                {
                    "id": "Berkembang pesat pada fase pra-keramik (tanpa pembuatan tembikar bakar)",
                    "en": "Flourishing entirely in the Preceramic phase (without fired pottery ceramics)"
                },
                {
                    "id": "Ketiadaan sistem pertanian tanaman pangan",
                    "en": "Complete absence of agricultural food production"
                },
                {
                    "id": "Penggunaan kendaraan beroda besi di jalan beraspal",
                    "en": "Use of wheeled iron chariots on paved roadways"
                },
                {
                    "id": "Sistem monarki absolut dengan kasta budak bersenjata",
                    "en": "Absolutist monarchies maintaining armed slave castes"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Norte Chico membuktikan bahwa arsitektur monumental perkotaan berskala masif dapat berkembang mendahului penemuan teknologi tembikar keramik.",
                "en": "Norte Chico proved that complex monumental urbanism could emerge prior to the invention of fired ceramic pottery."
            }
        }
    ]
},
  "pertempuran-marathon": {
    "articleSlug": "pertempuran-marathon",
    "title": {
        "id": "Kuis Pertempuran Marathon",
        "en": "Battle of Marathon Quiz"
    },
    "questions": [
        {
            "id": "marathon-1",
            "question": {
                "id": "Taktik militer apakah yang diterapkan oleh jenderal Athena Miltiades untuk mengalahkan pasukan Persia di Marathon?",
                "en": "What military tactic was employed by the Athenian general Miltiades to defeat Persian forces at Marathon?"
            },
            "options": [
                {
                    "id": "Memperkuat kedua sayap pasukan phalanx dan sengaja menipiskan bagian tengah formasi",
                    "en": "Strengthening both wings of the phalanx while intentionally thinning the center formation"
                },
                {
                    "id": "Melakukan serangan kavaleri mendadak dari arah perbukitan berbatu",
                    "en": "Launching a surprise cavalry charge from rocky hills"
                },
                {
                    "id": "Bertahan di balik benteng pertahanan kayu hingga bantuan Sparta tiba",
                    "en": "Defending behind wooden barricades until Spartan reinforcements arrived"
                },
                {
                    "id": "Menyerang armada kapal Persia menggunakan kapal perang trireme",
                    "en": "Attacking Persian fleet transports using trireme warships"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Miltiades memperkuat kedua sayap pasukannya agar dapat melakukan manuver pengepungan ganda (double envelopment) saat pasukan tengah Persia menekan.",
                "en": "Miltiades reinforced both wings to execute a double envelopment maneuver as Persian center troops advanced."
            }
        },
        {
            "id": "marathon-2",
            "question": {
                "id": "Siapakah kurir legendaris Athena yang dikisahkan berlari ke Sparta lalu kembali ke Athena untuk mengabarkan kemenangan sebelum wafat?",
                "en": "Who was the legendary Athenian herald recounted to have run to Sparta and back before announcing victory and collapsing?"
            },
            "options": [
                {
                    "id": "Pheidippides",
                    "en": "Pheidippides"
                },
                {
                    "id": "Themistocles",
                    "en": "Themistocles"
                },
                {
                    "id": "Leonidas",
                    "en": "Leonidas"
                },
                {
                    "id": "Pausanias",
                    "en": "Pausanias"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Legenda lari Pheidippides dari dataran Marathon menuju Athena menjadi inspirasi perlombaan lari maraton modern sepanjang 42,195 km.",
                "en": "The legend of Pheidippides running from the plain of Marathon to Athens inspired the modern 42.195 km marathon race."
            }
        },
        {
            "id": "marathon-3",
            "question": {
                "id": "Mengapa kemenangan di Marathon sangat krusial bagi sejarah peradaban Barat?",
                "en": "Why was the victory at Marathon so pivotal for Western civilizational history?"
            },
            "options": [
                {
                    "id": "Membuktikan eksperimen demokrasi muda Athena mampu bertahan dari hegemoni kekaisaran otoriter Persia",
                    "en": "Proved that Athens' nascent democratic experiment could withstand authoritarian Persian hegemony"
                },
                {
                    "id": "Menyebabkan keruntuhan instan seluruh dinasti Akhemeniyah di Persia",
                    "en": "Caused the immediate collapse of the entire Achaemenid dynasty in Persia"
                },
                {
                    "id": "Menghapuskan perbudakan di seluruh kepulauan Laut Aegea",
                    "en": "Abolished slavery across all Aegean Sea archipelagos"
                },
                {
                    "id": "Menjadikan Sparta sebagai penguasa tunggal atas seluruh daratan Yunani",
                    "en": "Established Sparta as the sole sovereign master over mainland Greece"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kemenangan di Marathon memberikan rasa percaya diri luar biasa bagi peradaban Yunani klasik untuk mengembangkan filsafat, seni, dan demokrasi.",
                "en": "The victory gave Classical Greece profound self-confidence to foster golden-age philosophy, drama, and democracy."
            }
        }
    ]
},
  "pertempuran-thermopylae": {
    "articleSlug": "pertempuran-thermopylae",
    "title": {
        "id": "Kuis Pertempuran Thermopylae",
        "en": "Battle of Thermopylae Quiz"
    },
    "questions": [
        {
            "id": "thermopylae-1",
            "question": {
                "id": "Siapakah raja Sparta yang memimpin 300 pengawal kerajaan serta pasukan sekutu Yunani bertahan di celah sempit Thermopylae pada 480 SM?",
                "en": "Which Spartan king led 300 royal bodyguards and Greek allied troops to hold the narrow pass of Thermopylae in 480 BCE?"
            },
            "options": [
                {
                    "id": "Raja Leonidas I",
                    "en": "King Leonidas I"
                },
                {
                    "id": "Raja Agis II",
                    "en": "King Agis II"
                },
                {
                    "id": "Raja Archidamus II",
                    "en": "King Archidamus II"
                },
                {
                    "id": "Raja Cleomenes I",
                    "en": "King Cleomenes I"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Raja Leonidas I bersama 300 pasukan elit Sparta dan ratusan pejuang Thespia memilih bertahan sampai titik darah penghabisan di Thermopylae.",
                "en": "King Leonidas I along with 300 elite Spartan hoplites and Thespian allies chose to fight to the death at Thermopylae."
            }
        },
        {
            "id": "thermopylae-2",
            "question": {
                "id": "Siapakah penduduk lokal yang mengkhianati posisi Yunani dengan menunjukkan jalan setapak rahasia Anopaia kepada pasukan Persia?",
                "en": "Who was the local traitor that revealed the secret mountain path of Anopaia to the Persian army?"
            },
            "options": [
                {
                    "id": "Ephialtes dari Trachis",
                    "en": "Ephialtes of Trachis"
                },
                {
                    "id": "Alcibiades",
                    "en": "Alcibiades"
                },
                {
                    "id": "Hippias",
                    "en": "Hippias"
                },
                {
                    "id": "Demaratus",
                    "en": "Demaratus"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ephialtes memandu pasukan elit Persia (Immortals) melintasi jalur pegunungan Anopaia untuk mengepung pasukan Leonidas dari belakang.",
                "en": "Ephialtes guided the Persian Immortals through the Anopaia mountain path to surround Leonidas's rear guard."
            }
        },
        {
            "id": "thermopylae-3",
            "question": {
                "id": "Apa dampak strategis utama dari pengorbanan pasukan Yunani di Thermopylae?",
                "en": "What was the primary strategic impact of the Greek sacrifice at Thermopylae?"
            },
            "options": [
                {
                    "id": "Mengulur waktu berharga bagi Athena untuk mengevakuasi penduduk dan mempersiapkan kemenangan armada laut di Salamis",
                    "en": "Bought precious time for Athens to evacuate citizens and prepare decisive naval victory at Salamis"
                },
                {
                    "id": "Menghancurkan seluruh suplai logistik darat pasukan Xerxes I",
                    "en": "Completely destroyed the terrestrial supply logistics of Xerxes I's army"
                },
                {
                    "id": "Memaksa Persia langsung menandatangani perjanjian damai tanpa syarat",
                    "en": "Forced Persia to immediately sign an unconditional peace treaty"
                },
                {
                    "id": "Mencegah pembakaran kuil-kuil di bukit Akropolis Athena",
                    "en": "Prevented the burning of temples on the Athenian Acropolis hill"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Meskipun kalah secara taktis di celah sempit, pengorbanan tersebut mengulur waktu bagi Themistocles menyusun armada laut Yunani yang memukul mundur Persia di Salamis.",
                "en": "Though a tactical defeat, the heroic stand bought vital time for Themistocles to coordinate the Greek naval victory at Salamis."
            }
        }
    ]
},
  "ekspedisi-aleksander-agung": {
    "articleSlug": "ekspedisi-aleksander-agung",
    "title": {
        "id": "Kuis Ekspedisi Aleksander Agung",
        "en": "Conquests of Alexander the Great Quiz"
    },
    "questions": [
        {
            "id": "alexander-1",
            "question": {
                "id": "Pertempuran manakah pada 331 SM yang secara definitif menghancurkan kekuatan utama Darius III dan membuka jalan bagi Aleksander menguasai Babel dan Persepolis?",
                "en": "Which 331 BCE battle decisively shattered Darius III's imperial forces, opening Mesopotamia and Persepolis to Alexander?"
            },
            "options": [
                {
                    "id": "Pertempuran Gaugamela",
                    "en": "Battle of Gaugamela"
                },
                {
                    "id": "Pertempuran Granicus",
                    "en": "Battle of the Granicus"
                },
                {
                    "id": "Pertempuran Issus",
                    "en": "Battle of Issus"
                },
                {
                    "id": "Pertempuran Sungai Hydaspes",
                    "en": "Battle of the Hydaspes River"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Di Gaugamela, Aleksander menggunakan formasi kavaleri Companion bersudut baji untuk menerobos langsung ke posisi kereta perang Darius III.",
                "en": "At Gaugamela, Alexander utilized a wedge-shaped Companion cavalry strike directly targeting Darius III's command chariot."
            }
        },
        {
            "id": "alexander-2",
            "question": {
                "id": "Apakah dampak kultural jangka panjang terbesar dari penaklukan lintas benua Aleksander Agung?",
                "en": "What was the greatest long-term cultural legacy of Alexander the Great's transcontinental conquests?"
            },
            "options": [
                {
                    "id": "Terciptanya era Helenisme yang memadukan kebudayaan Yunani dengan tradisi Persia, Mesir, dan India",
                    "en": "Creation of the Hellenistic Era, fusing Greek culture with Persian, Egyptian, and Indian traditions"
                },
                {
                    "id": "Standardisasi mata uang perak tunggal yang bertahan selama seribu tahun",
                    "en": "Standardization of a single silver currency system lasting a thousand years"
                },
                {
                    "id": "Penghapusan seluruh aksara hieroglif di Lembah Nil",
                    "en": "Complete elimination of hieroglyphic scripts across the Nile Valley"
                },
                {
                    "id": "Penyatuan permanen seluruh benua Asia di bawah satu sistem hukum Makedonia",
                    "en": "Permanent unification of Asia under a single Macedonian legal code"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ekspedisi Aleksander menyebarkan bahasa Yunani (Koine Greek), seni, arsitektur, dan sains ke seluruh wilayah Timur Tengah hingga Asia Tengah.",
                "en": "Alexander's campaigns spread Koine Greek language, urban planning, art, and philosophy throughout the Near East and Central Asia."
            }
        },
        {
            "id": "alexander-3",
            "question": {
                "id": "Mengapa Aleksander Agung akhirnya menghentikan ekspansinya ke arah timur di tepi Sungai Hyphasis (Beas) di India?",
                "en": "Why did Alexander the Great finally halt his eastward conquests at the banks of the Hyphasis (Beas) River in India?"
            },
            "options": [
                {
                    "id": "Pemberontakan dan kelelahan mental pasukannya yang menolak maju lebih jauh ke pedalaman India",
                    "en": "Mutiny and psychological exhaustion of his veteran troops refusing to march further into India"
                },
                {
                    "id": "Kekalahan telak kavaleri Makedonia melawan pasukan gajah Dinasti Nanda",
                    "en": "A crushing tactical defeat of Macedonian cavalry by Nanda war elephants"
                },
                {
                    "id": "Wafatnya kuda kesayangannya, Bucephalus, di medan perang",
                    "en": "The death of his beloved warhorse, Bucephalus, on the battlefield"
                },
                {
                    "id": "Datangnya utusan dari Roma yang menuntut penyerahan diri wilayah barat",
                    "en": "The arrival of Roman envoys demanding submission of Western territories"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Setelah menempuh lebih dari 20.000 kilometer selama 8 tahun, prajurit Aleksander melakukan aksi mogok damai di Sungai Hyphasis karena rindu tanah air dan kelelahan luar biasa.",
                "en": "After marching over 20,000 km across 8 grueling years, Alexander's soldiers staged a peaceful mutiny at the Hyphasis River due to sheer exhaustion."
            }
        }
    ]
},
  "perpustakaan-alexandria": {
    "articleSlug": "perpustakaan-alexandria",
    "title": {
        "id": "Kuis Perpustakaan Agung Alexandria",
        "en": "Great Library of Alexandria Quiz"
    },
    "questions": [
        {
            "id": "library-alexandria-1",
            "question": {
                "id": "Dinasti penguasa Helenistik manakah di Mesir yang mendirikan dan mendanai Perpustakaan Agung Alexandria serta institusi Musaeum?",
                "en": "Which Hellenistic ruling dynasty in Egypt founded and financed the Great Library of Alexandria and the Musaeum?"
            },
            "options": [
                {
                    "id": "Dinasti Ptolemaik (Ptolemaeus I Soter dan Ptolemaeus II Philadelphus)",
                    "en": "Ptolemaic Dynasty (Ptolemy I Soter and Ptolemy II Philadelphus)"
                },
                {
                    "id": "Dinasti Seleukia",
                    "en": "Seleucid Dynasty"
                },
                {
                    "id": "Dinasti Antigonid",
                    "en": "Antigonid Dynasty"
                },
                {
                    "id": "Dinasti Attalid dari Pergamon",
                    "en": "Attalid Dynasty of Pergamon"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ptolemaeus I Soter menginisiasi pembangunan Musaeum dan perpustakaan kerajaan yang kemudian diperluas secara ambisius oleh putranya, Ptolemaeus II.",
                "en": "Ptolemy I Soter initiated the Royal Musaeum and Library, which was ambitiously expanded by his son Ptolemy II."
            }
        },
        {
            "id": "library-alexandria-2",
            "question": {
                "id": "Ilmuwan agung manakah yang menjabat sebagai kepala pustakawan di Alexandria dan berhasil menghitung keliling bumi dengan akurasi mengagumkan?",
                "en": "Which eminent scholar served as chief librarian at Alexandria and calculated the Earth's circumference with remarkable accuracy?"
            },
            "options": [
                {
                    "id": "Eratosthenes",
                    "en": "Eratosthenes"
                },
                {
                    "id": "Archimedes",
                    "en": "Archimedes"
                },
                {
                    "id": "Euclid",
                    "en": "Euclid"
                },
                {
                    "id": "Apollonius dari Rhodes",
                    "en": "Apollonius of Rhodes"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Eratosthenes menggunakan sudut bayangan matahari di Alexandria dan Syene (Aswan) untuk mengukur keliling bumi sekitar 40.000 km.",
                "en": "Eratosthenes used solar shadow angles at Alexandria and Syene (Aswan) on the summer solstice to deduce Earth's circumference."
            }
        },
        {
            "id": "library-alexandria-3",
            "question": {
                "id": "Fakta sejarah apakah yang paling akurat mengenai proses kemunduran dan kehancuran Perpustakaan Alexandria?",
                "en": "What is the historically accurate consensus regarding the decline and destruction of the Library of Alexandria?"
            },
            "options": [
                {
                    "id": "Kemunduran bertahap selama berabad-abad akibat kebakaran parsial era Caesar, pemotongan anggaran, dan konflik sektarian",
                    "en": "Gradual decline over several centuries through partial fires (Caesar's siege), budget cuts, and sectarian purges"
                },
                {
                    "id": "Kehancuran total dalam satu malam akibat invasi bangsa Mongol",
                    "en": "Complete single-night devastation during Mongol invasions"
                },
                {
                    "id": "Seluruh gulungan papirus sengaja ditenggelamkan ke Laut Mediterania oleh Alexander",
                    "en": "All papyrus scrolls were deliberately sunk in the Mediterranean by Alexander"
                },
                {
                    "id": "Perpustakaan tidak pernah terbakar dan bangunannya utuh hingga abad ke-19",
                    "en": "The library never burned and stood fully intact until the 19th century"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Konsensus akademis modern menegaskan bahwa perpustakaan mengalami degradasi bertahap melalui berbagai insiden (48 SM, 272 M, 391 M, dan 642 M), bukan peristiwa tunggal.",
                "en": "Modern historical consensus proves the library suffered incremental loss across multiple catastrophes (48 BCE, 272 CE, 391 CE, 642 CE) rather than one single fire."
            }
        }
    ]
},
  "penyatuan-qin-tembok-besar": {
    "articleSlug": "penyatuan-qin-tembok-besar",
    "title": {
        "id": "Kuis Penyatuan Qin & Tembok Besar",
        "en": "Qin Unification & Great Wall Quiz"
    },
    "questions": [
        {
            "id": "qin-unification-1",
            "question": {
                "id": "Siapakah kaisar pertama yang menyatukan enam negara yang bertikai di Tiongkok dan mendirikan Dinasti Qin pada 221 SM?",
                "en": "Who was the first emperor to conquer the Six Warring States and establish the unified Qin Dynasty in 221 BCE?"
            },
            "options": [
                {
                    "id": "Qin Shi Huang (Ying Zheng)",
                    "en": "Qin Shi Huang (Ying Zheng)"
                },
                {
                    "id": "Han Gaozu (Liu Bang)",
                    "en": "Han Gaozu (Liu Bang)"
                },
                {
                    "id": "Kaisar Wu dari Han",
                    "en": "Emperor Wu of Han"
                },
                {
                    "id": "Kaisar Tang Taizong",
                    "en": "Emperor Tang Taizong"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Ying Zheng menaklukkan Han, Zhao, Yan, Wei, Chu, dan Qi, lalu memproklamasikan dirinya sebagai 'Qin Shi Huang' (Kaisar Pertama Qin).",
                "en": "Ying Zheng subdued Han, Zhao, Yan, Wei, Chu, and Qi, adopting the exalted title 'Qin Shi Huang' (First Sovereign Emperor of Qin)."
            }
        },
        {
            "id": "qin-unification-2",
            "question": {
                "id": "Filsafat tata kelola negara apakah yang diterapkan oleh Dinasti Qin di bawah penasihat Li Si untuk memberlakukan sentralisasi hukum yang ketat?",
                "en": "What governing philosophy was enforced by the Qin Dynasty under chancellor Li Si to impose rigid legal centralism?"
            },
            "options": [
                {
                    "id": "Legalisme (Fa Jia)",
                    "en": "Legalism (Fa Jia)"
                },
                {
                    "id": "Konfusianisme (Ru Jia)",
                    "en": "Confucianism (Ru Jia)"
                },
                {
                    "id": "Daoisme (Dao Jia)",
                    "en": "Daoism (Dao Jia)"
                },
                {
                    "id": "Mohisme (Mo Jia)",
                    "en": "Mohism (Mo Jia)"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Legalisme menekankan supremasi hukum tertulis yang kaku, ganjaran militer, dan hukuman kolektif yang berat demi menjaga stabilitas kekaisaran.",
                "en": "Legalism mandated strict statutory codification, meritocratic military rewards, and severe penal consequences to enforce imperial stability."
            }
        },
        {
            "id": "qin-unification-3",
            "question": {
                "id": "Pembaruan standardisasi manakah yang berhasil merekatkan persatuan wilayah Tiongkok dalam jangka panjang di bawah Qin Shi Huang?",
                "en": "Which standardization reforms permanently bonded Chinese cultural and economic unity under Qin Shi Huang?"
            },
            "options": [
                {
                    "id": "Standardisasi aksara tulis (Aksara Segel Kecil), mata uang logam tembaga, timbangan, dan lebar gardu poros roda kereta",
                    "en": "Standardization of writing script (Small Seal Script), copper coinage, weights, measures, and cart axle widths"
                },
                {
                    "id": "Penghapusan seluruh sistem pajak tanah pertanian",
                    "en": "Total abolition of all agricultural land taxation"
                },
                {
                    "id": "Pemberlakuan satu dialek lisan tunggal di seluruh desa pedalaman",
                    "en": "Mandatory enforcement of a single spoken dialect across all peasant hamlets"
                },
                {
                    "id": "Larangan pembuatan tembikar dan pembatasan perdagangan kain sutra",
                    "en": "Ban on pottery manufacturing and restriction of silk fabric trading"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Penyatuan sistem aksara (Xiaozhuan), mata uang koin keping berlubang kotak (Ban Liang), dan ukuran poros roda memungkinkan integrasi ekonomi dan birokrasi lintas daerah.",
                "en": "Standardizing the script (Xiaozhuan), coin currency (Ban Liang), and carriage axle track widths forged lasting bureaucratic and economic cohesion."
            }
        }
    ]
},
  "perang-punisia-hannibal": {
    "articleSlug": "perang-punisia-hannibal",
    "title": {
        "id": "Kuis Perang Punisia II & Hannibal",
        "en": "Second Punic War & Hannibal Quiz"
    },
    "questions": [
        {
            "id": "hannibal-1",
            "question": {
                "id": "Manuver militer luar biasa apakah yang dilakukan jenderal Kartago Hannibal Barca pada awal Perang Punisia Kedua (218 SM)?",
                "en": "What extraordinary military maneuver was executed by Carthaginian general Hannibal Barca at the start of the Second Punic War (218 BCE)?"
            },
            "options": [
                {
                    "id": "Memimpin pasukan beserta puluhan gajah perang melintasi Pegunungan Alpen di musim dingin menuju Italia utara",
                    "en": "Marching his multination army and war elephants across the snowy Alps into northern Italy"
                },
                {
                    "id": "Menyerang pelabuhan Ostia langsung menggunakan armada 500 kapal perang",
                    "en": "Directly invading Ostia harbor with an armada of 500 warships"
                },
                {
                    "id": "Membangun benteng bawah tanah di pulau Sisilia untuk memblokade laut",
                    "en": "Constructing subterranean forts on Sicily to execute an island blockade"
                },
                {
                    "id": "Membeli aliansi seluruh legiun Romawi dengan emas batangan Spanyol",
                    "en": "Bribing all Roman legions into defection using Spanish silver ingots"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Hannibal mengejutkan Senat Romawi dengan menyeberangi jalur berbahaya Pegunungan Pyrenees dan Alpen demi membawa pertempuran langsung ke tanah Italia.",
                "en": "Hannibal stunned the Roman Senate by daringly navigating the Pyrenees and the treacherous Alps, taking the war onto Italian soil."
            }
        },
        {
            "id": "hannibal-2",
            "question": {
                "id": "Pertempuran manakah pada 216 SM yang dianggap sebagai mahakarya taktik militer pengepungan ganda (double envelopment) Hannibal yang menewaskan puluhan ribu tentara Romawi?",
                "en": "Which 216 BCE battle stands as Hannibal's tactical masterpiece of double envelopment, annihilating tens of thousands of Roman legionaries?"
            },
            "options": [
                {
                    "id": "Pertempuran Cannae",
                    "en": "Battle of Cannae"
                },
                {
                    "id": "Pertempuran Danau Trasimene",
                    "en": "Battle of Lake Trasimene"
                },
                {
                    "id": "Pertempuran Trebia",
                    "en": "Battle of the Trebia"
                },
                {
                    "id": "Pertempuran Zama",
                    "en": "Battle of Zama"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Di Cannae, Hannibal membentuk garis tengah berbentuk cembung yang sengaja mundur perlahan, membiarkan sayap kavaleri Numidia dan Spanyol menutup dan membantai kepungan Romawi.",
                "en": "At Cannae, Hannibal deployed a convex crescent formation that yielded slowly, allowing his veteran cavalry wings to encircle and annihilate the Roman forces."
            }
        },
        {
            "id": "hannibal-3",
            "question": {
                "id": "Jenderal Romawi manakah yang akhirnya mengalahkan Hannibal di Pertempuran Zama (202 SM) di Afrika Utara?",
                "en": "Which Roman commander finally defeated Hannibal Barca at the Battle of Zama (202 BCE) in North Africa?"
            },
            "options": [
                {
                    "id": "Publius Cornelius Scipio Africanus",
                    "en": "Publius Cornelius Scipio Africanus"
                },
                {
                    "id": "Fabius Maximus Cunctator",
                    "en": "Fabius Maximus Cunctator"
                },
                {
                    "id": "Marcus Claudius Marcellus",
                    "en": "Marcus Claudius Marcellus"
                },
                {
                    "id": "Lucius Aemilius Paullus",
                    "en": "Lucius Aemilius Paullus"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Scipio Africanus mempelajari taktik Hannibal, mengamankan kavaleri Numidia pimpinan Masinissa, dan menggunakan lorong antar-manipel untuk menetralisir amukan gajah perang Kartago di Zama.",
                "en": "Scipio Africanus studied Hannibal's methods, recruited Numidian cavalry under Masinissa, and used open tactical lanes to neutralize charging war elephants at Zama."
            }
        }
    ]
},
  "jalur-sutra-han": {
    "articleSlug": "jalur-sutra-han",
    "title": {
        "id": "Kuis Jalur Sutra Dinasti Han",
        "en": "Han Dynasty Silk Road Quiz"
    },
    "questions": [
        {
            "id": "silk-road-1",
            "question": {
                "id": "Siapakah diplomat dan penjelajah utusan Kaisar Wu dari Han yang rintisannya membuka jaringan Jalur Sutra ke wilayah Asia Tengah?",
                "en": "Who was the imperial envoy commissioned by Emperor Wu of Han whose diplomatic journeys pioneered the Silk Road network?"
            },
            "options": [
                {
                    "id": "Zhang Qian",
                    "en": "Zhang Qian"
                },
                {
                    "id": "Ban Chao",
                    "en": "Ban Chao"
                },
                {
                    "id": "Sima Qian",
                    "en": "Sima Qian"
                },
                {
                    "id": "Xuanzang",
                    "en": "Xuanzang"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Zhang Qian dikirim ke Wilayah Barat (Xiyu) untuk mencari sekutu Yuezhi melawan konfederasi nomaden Xiongnu, menghasilkan laporan berharga tentang kerajaan-kerajaan Asia Tengah.",
                "en": "Zhang Qian was dispatched to the Western Regions (Xiyu) to ally with the Yuezhi against the Xiongnu, providing Han intelligence on Dayuan, Sogdia, and Bactria."
            }
        },
        {
            "id": "silk-road-2",
            "question": {
                "id": "Komoditas berharga apakah dari Lembah Fergana (Dayuan) yang sangat didambakan oleh Kekaisaran Han untuk memperkuat divisi kavalerinya?",
                "en": "What prized commodity from the Fergana Valley (Dayuan) was desperately sought by the Han Empire to enhance its cavalry warfare?"
            },
            "options": [
                {
                    "id": "Kuda Surgawi (Heavenly Horses / Kuda Berpeluh Darah)",
                    "en": "Heavenly Horses (Blood-sweating Fergana steed)"
                },
                {
                    "id": "Baja Damaskus bermutu tinggi",
                    "en": "High-grade crucible Damascus steel"
                },
                {
                    "id": "Minyak bumi zaitun Yunani",
                    "en": "Greek olive petroleum oils"
                },
                {
                    "id": "Kain wol ungu Tyre",
                    "en": "Tyrian imperial purple wool"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Kuda Fergana yang berstamina tinggi dan berotot kekar sangat dibutuhkan Han untuk mengimbangi kavaleri pemanah berkuda bangsa nomaden Xiongnu.",
                "en": "The swift, powerful Fergana horses were crucial for Han armies to counter the formidable mobile horse archers of the Xiongnu steppe empire."
            }
        },
        {
            "id": "silk-road-3",
            "question": {
                "id": "Selain perdagangan barang mewah seperti sutra dan rempah, apa dampak transmisi kultural terbesar yang masuk ke Tiongkok melalui Jalur Sutra pada era klasik?",
                "en": "Besides luxury goods like silk and glassware, what major cultural transmission reached China via the Silk Road in the Classical era?"
            },
            "options": [
                {
                    "id": "Penyebaran ajaran agama Buddha dari anak benua India",
                    "en": "Transmission of Buddhism from the Indian subcontinent"
                },
                {
                    "id": "Pemberlakuan aksara alfabet Latin di istana Chang'an",
                    "en": "Adoption of the Latin alphabet in the Chang'an imperial court"
                },
                {
                    "id": "Pengenalan teknologi pelayaran kano Polinesia",
                    "en": "Introduction of Polynesian outrigger sailing technology"
                },
                {
                    "id": "Penyebaran sistem demokrasi langsung ala polis Athena",
                    "en": "Spread of Athenian direct democratic citizen assemblies"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Melalui oasis-oasis Jalur Sutra seperti Khotan, Dunhuang, dan Kucha, para bhiksu menerjemahkan naskah-naskah Buddhis Sanskerta ke dalam bahasa Tionghoa.",
                "en": "Through Silk Road oasis hubs like Khotan, Dunhuang, and Kucha, Buddhist monks traveled and translated Sanskrit scriptures into Chinese."
            }
        }
    ]
},
  "pembunuhan-julius-caesar": {
    "articleSlug": "pembunuhan-julius-caesar",
    "title": {
        "id": "Kuis Pembunuhan Julius Caesar",
        "en": "Assassination of Julius Caesar Quiz"
    },
    "questions": [
        {
            "id": "caesar-ides-1",
            "question": {
                "id": "Pada tanggal berapakah peristiwa pembunuhan Julius Caesar yang terkenal dengan sebutan 'Ides of March' terjadi di Senat Roma?",
                "en": "On what date did the famous 'Ides of March' assassination of Julius Caesar occur in the Roman Senate?"
            },
            "options": [
                {
                    "id": "15 Maret 44 SM",
                    "en": "March 15, 44 BCE"
                },
                {
                    "id": "1 Januari 44 SM",
                    "en": "January 1, 44 BCE"
                },
                {
                    "id": "21 April 753 SM",
                    "en": "April 21, 753 BCE"
                },
                {
                    "id": "2 September 31 SM",
                    "en": "September 2, 31 BCE"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Pada 15 Maret 44 SM, sekelompok senator yang dipimpin oleh Brutus dan Cassius menikam Caesar sebanyak 23 kali di Teater Pompey.",
                "en": "On March 15, 44 BCE, a conspiracy of senators led by Brutus and Cassius stabbed Caesar 23 times in the Theatre of Pompey's Curia."
            }
        },
        {
            "id": "caesar-ides-2",
            "question": {
                "id": "Gelar politik apakah yang disandang Julius Caesar yang memicu kecurigaan kaum senator bahwa ia berniat menghancurkan Republik dan menjadi raja?",
                "en": "What political title assumed by Julius Caesar stoked fears among senators that he intended to crown himself king and abolish the Republic?"
            },
            "options": [
                {
                    "id": "Dictator perpetuo (Diktator Seumur Hidup)",
                    "en": "Dictator perpetuo (Dictator in perpetuity)"
                },
                {
                    "id": "Pontifex Maximus",
                    "en": "Pontifex Maximus"
                },
                {
                    "id": "Tribunus Plebis",
                    "en": "Tribunus Plebis"
                },
                {
                    "id": "Princeps Senatus",
                    "en": "Princeps Senatus"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Penetapan gelar 'Dictator perpetuo' pada awal tahun 44 SM dipandang oleh faksi Liberatores sebagai ancaman mutlak terhadap sistem checks-and-balances Republik Roma.",
                "en": "Caesar's appointment as 'Dictator perpetuo' in early 44 BCE convinced the Liberatores faction that the constitutional Republic was fatally compromised."
            }
        },
        {
            "id": "caesar-ides-3",
            "question": {
                "id": "Siapakah ahli waris sah Caesar yang akhirnya membentuk Triumvirat Kedua dan menjadi Kaisar Romawi pertama bergelar Augustus?",
                "en": "Who was Caesar's designated adopted heir who formed the Second Triumvirate and became the first Roman Emperor with the title Augustus?"
            },
            "options": [
                {
                    "id": "Gaius Octavius (Octavianus / Kaisar Augustus)",
                    "en": "Gaius Octavius (Octavian / Emperor Augustus)"
                },
                {
                    "id": "Marcus Antonius (Mark Antony)",
                    "en": "Mark Antony"
                },
                {
                    "id": "Marcus Aemilius Lepidus",
                    "en": "Marcus Aemilius Lepidus"
                },
                {
                    "id": "Tiberius",
                    "en": "Tiberius"
                }
            ],
            "correctAnswerIndex": 0,
            "explanation": {
                "id": "Pembunuhan Caesar justru mempercepat keruntuhan Republik; cucu keponakannya, Octavianus, mengalahkan para pembunuh Caesar dan Marcus Antonius, lalu mendirikan Kekaisaran Romawi.",
                "en": "Caesar's murder accelerated the Republic's demise; his adopted great-nephew Octavian emerged triumphant, founding the Roman Empire as Augustus in 27 BCE."
            }
        }
    ]
},
};
