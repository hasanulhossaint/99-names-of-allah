document.addEventListener('DOMContentLoaded', function() {
    const namesData = [
        
            {
        "number": 1,
        "arabic": "الرَّحْمَنُ",
        "english": "Ar-Rahman",
        "bangla": "আর-রাহমান",
        "pronunciation": "ar-raḥ-maan",
        "meaningArabic": "الكثير الرحمة التي وسعت الخلائق",
        "meaningEnglish": "The Most Compassionate, whose mercy encompasses all creation",
        "meaningBangla": "পরম করুণাময়, যার দয়া সকল সৃষ্টিকে ঘিরে রয়েছে",
        "references": [
            "Surah Al-Fatihah (1:1)",
            "Surah Ar-Rahman (55:1)"
        ],
        "benefits": "Softens the heart, increases mercy in one's life.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/01.mp3"
    },
    {
        "number": 2,
        "arabic": "الرَّحِيمُ",
        "english": "Ar-Raheem",
        "bangla": "আর-রাহীম",
        "pronunciation": "ar-ra-ḥeem",
        "meaningArabic": "الذي يوصل الرحمة لمن يشاء من عباده",
        "meaningEnglish": "The Most Merciful, who bestows mercy upon His servants",
        "meaningBangla": "অতি দয়ালু, যিনি তাঁর বান্দাদেরকে দয়া করেন",
        "references": [
            "Surah Al-Fatihah (1:3)",
            "Surah Al-Baqarah (2:163)"
        ],
        "benefits": "Brings mercy in hardship, heals relationships.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/02.mp3"
    },
    {
        "number": 3,
        "arabic": "المَلِكُ",
        "english": "Al-Malik",
        "bangla": "আল-মালিক",
        "pronunciation": "al-ma-lik",
        "meaningArabic": "المالك لكل شيء",
        "meaningEnglish": "The King, the Sovereign Lord of all",
        "meaningBangla": "মহান রাজা, সব কিছুর মালিক",
        "references": [
            "Surah Al-Hashr (59:23)",
            "Surah At-Taha (20:114)"
        ],
        "benefits": "Instills dignity and leadership qualities.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/03.mp3"
    },
    {
        "number": 4,
        "arabic": "القُدُّوسُ",
        "english": "Al-Quddus",
        "bangla": "আল-কুদ্দুস",
        "pronunciation": "al-qud-doos",
        "meaningArabic": "المنزه عن كل نقص",
        "meaningEnglish": "The Most Holy, free from all imperfections",
        "meaningBangla": "পবিত্র, সকল ত্রুটি থেকে মুক্ত",
        "references": [
            "Surah Al-Hashr (59:23)",
            "Surah Al-Jumu'ah (62:1)"
        ],
        "benefits": "Purifies the soul from sins.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/04.mp3"
    },
    {
        "number": 5,
        "arabic": "السَّلَامُ",
        "english": "As-Salam",
        "bangla": "আস-সালাম",
        "pronunciation": "as-sa-laam",
        "meaningArabic": "مصدر السلام والأمان",
        "meaningEnglish": "The Source of Peace and Safety",
        "meaningBangla": "শান্তির উৎস, নিরাপত্তাদানকারী",
        "references": [
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Brings inner peace and protection from harm.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/05.mp3"
    },
    {
        "number": 6,
        "arabic": "المُؤْمِنُ",
        "english": "Al-Mu'min",
        "bangla": "আল-মু'মিন",
        "pronunciation": "al-mu-meen",
        "meaningArabic": "الذي يؤمن عباده من الخوف",
        "meaningEnglish": "The Granter of Security",
        "meaningBangla": "নিরাপত্তা দানকারী",
        "references": [
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Removes fear and grants safety.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/06.mp3"
    },
    {
        "number": 7,
        "arabic": "المُهَيْمِنُ",
        "english": "Al-Muhaymin",
        "bangla": "আল-মুহাইমিন",
        "pronunciation": "al-mu-hay-min",
        "meaningArabic": "الرقيب على كل شيء",
        "meaningEnglish": "The Protector, the Ever-Watchful",
        "meaningBangla": "সব কিছুর উপর নজরদার",
        "references": [
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Provides divine protection and guardianship.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/07.mp3"
    },
    {
        "number": 8,
        "arabic": "العَزِيزُ",
        "english": "Al-Aziz",
        "bangla": "আল-আযীয",
        "pronunciation": "al-a-zeez",
        "meaningArabic": "المنيع الذي لا يُغلب",
        "meaningEnglish": "The Almighty, the Invincible",
        "meaningBangla": "পরাক্রমশালী, অপরাজেয়",
        "references": [
            "Surah Al-Hashr (59:23)",
            "Surah Al-Imran (3:6)"
        ],
        "benefits": "Strengthens one against difficulties.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/08.mp3"
    },
    {
        "number": 9,
        "arabic": "الجَبَّارُ",
        "english": "Al-Jabbar",
        "bangla": "আল-জাব্বার",
        "pronunciation": "al-jab-baar",
        "meaningArabic": "الذي يجبر الضعيف",
        "meaningEnglish": "The Compeller, the Restorer",
        "meaningBangla": "প্রতিষ্ঠাকারী, দুর্বলকে শক্তিদানকারী",
        "references": [
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Helps in overcoming oppression.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/09.mp3"
    },
    {
        "number": 10,
        "arabic": "المُتَكَبِّرُ",
        "english": "Al-Mutakabbir",
        "bangla": "আল-মুতাকাব্বির",
        "pronunciation": "al-mu-ta-ka-bir",
        "meaningArabic": "المتعالي عن صفات الخلق",
        "meaningEnglish": "The Supreme, the Majestic",
        "meaningBangla": "মহিমান্বিত, সৃষ্টির সব গুণ থেকে উর্ধ্বে",
        "references": [
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Removes arrogance and instills humility.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/10.mp3"
    },
     {
        "number": 11,
        "arabic": "الخَالِقُ",
        "english": "Al-Khaliq",
        "bangla": "আল-খালিক",
        "pronunciation": "al-khaa-liq",
        "meaningArabic": "الذي خلق كل شيء",
        "meaningEnglish": "The Creator of all things",
        "meaningBangla": "সৃষ্টিকর্তা, সব কিছুর স্রষ্টা",
        "references": [
            "Surah Al-Hashr (59:24)",
            "Surah Ar-Ra'd (13:16)"
        ],
        "benefits": "Encourages creativity and reliance on Allah for sustenance.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/11.mp3"
    },
    {
        "number": 12,
        "arabic": "البَارِئُ",
        "english": "Al-Bari",
        "bangla": "আল-বারী",
        "pronunciation": "al-baa-ree",
        "meaningArabic": "المبدع الذي خلق الخلق بدون مثال",
        "meaningEnglish": "The Evolver, the Maker from nothing",
        "meaningBangla": "সৃষ্টিকারী, আদর্শ ছাড়াই সৃষ্টি করেন",
        "references": [
            "Surah Al-Hashr (59:24)"
        ],
        "benefits": "Helps in times of difficulty and new beginnings.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/12.mp3"
    },
    {
        "number": 13,
        "arabic": "المُصَوِّرُ",
        "english": "Al-Musawwir",
        "bangla": "আল-মুসাওয়ির",
        "pronunciation": "al-mu-saw-wir",
        "meaningArabic": "الذي يصور الخلق كما يشاء",
        "meaningEnglish": "The Fashioner of all forms",
        "meaningBangla": "রূপদানকারী, যিনি সবকিছুর আকৃতি দেন",
        "references": [
            "Surah Al-Hashr (59:24)"
        ],
        "benefits": "Brings beauty and harmony in life.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/13.mp3"
    },
    {
        "number": 14,
        "arabic": "الغَفَّارُ",
        "english": "Al-Ghaffar",
        "bangla": "আল-গাফফার",
        "pronunciation": "al-ghaf-faar",
        "meaningArabic": "الكثير المغفرة",
        "meaningEnglish": "The Repeatedly Forgiving",
        "meaningBangla": "ক্ষমাশীল, বারবার ক্ষমাকারী",
        "references": [
            "Surah Ta-Ha (20:82)",
            "Surah Sad (38:66)"
        ],
        "benefits": "Seeking forgiveness and mercy from sins.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/14.mp3"
    },
    {
        "number": 15,
        "arabic": "القَهَّارُ",
        "english": "Al-Qahhar",
        "bangla": "আল-কাহহার",
        "pronunciation": "al-qah-haar",
        "meaningArabic": "الغالب الذي يقهر الجبابرة",
        "meaningEnglish": "The Subduer, the Dominator",
        "meaningBangla": "পরাক্রমশালী, যিনি সবাইকে নিয়ন্ত্রণ করেন",
        "references": [
            "Surah Ar-Ra'd (13:16)",
            "Surah Al-Hashr (59:23)"
        ],
        "benefits": "Helps overcome enemies and hardships.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/15.mp3"
    },
    {
        "number": 16,
        "arabic": "الوَهَّابُ",
        "english": "Al-Wahhab",
        "bangla": "আল-ওয়াহহাব",
        "pronunciation": "al-wah-haab",
        "meaningArabic": "الذي يهب العطايا بلا مقابل",
        "meaningEnglish": "The Bestower of Gifts",
        "meaningBangla": "অনুদানকারী, বিনামূল্যে দান করেন",
        "references": [
            "Surah Al-Imran (3:8)",
            "Surah Sad (38:35)"
        ],
        "benefits": "Increases sustenance and blessings.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/16.mp3"
    },
    {
        "number": 17,
        "arabic": "الرَّزَّاقُ",
        "english": "Ar-Razzaq",
        "bangla": "আর-রাজ্জাক",
        "pronunciation": "ar-raz-zaaq",
        "meaningArabic": "الذي يرزق الخلائق",
        "meaningEnglish": "The Provider of Sustenance",
        "meaningBangla": "রিজিকদাতা, জীবিকা প্রদানকারী",
        "references": [
            "Surah Adh-Dhariyat (51:58)"
        ],
        "benefits": "Ensures provision and removes poverty.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/17.mp3"
    },
    {
        "number": 18,
        "arabic": "الفَتَّاحُ",
        "english": "Al-Fattah",
        "bangla": "আল-ফাত্তাহ",
        "pronunciation": "al-fat-taah",
        "meaningArabic": "الذي يفتح أبواب الرزق والحلول",
        "meaningEnglish": "The Opener of Solutions",
        "meaningBangla": "সমস্যার সমাধানদাতা, দরজা খোলেন",
        "references": [
            "Surah Saba (34:26)"
        ],
        "benefits": "Helps in resolving difficulties.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/18.mp3"
    },
    {
        "number": 19,
        "arabic": "العَلِيمُ",
        "english": "Al-Alim",
        "bangla": "আল-আলিম",
        "pronunciation": "al-aa-leem",
        "meaningArabic": "العالم بكل شيء",
        "meaningEnglish": "The All-Knowing",
        "meaningBangla": "সর্বজ্ঞ, সবকিছু জানেন",
        "references": [
            "Surah Al-Baqarah (2:29)",
            "Surah Al-Hujurat (49:16)"
        ],
        "benefits": "Increases knowledge and wisdom.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/19.mp3"
    },
    {
        "number": 20,
        "arabic": "القَابِضُ",
        "english": "Al-Qabid",
        "bangla": "আল-কাবিদ",
        "pronunciation": "al-qa-bid",
        "meaningArabic": "القابض الأرزاق والأرواح",
        "meaningEnglish": "The Withholder (of blessings or souls)",
        "meaningBangla": "সংকোচনকারী, রিজিক বা প্রাণ আটকান",
        "references": [
            "Surah Al-Baqarah (2:245)"
        ],
        "benefits": "Helps in restraint and discipline.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/20.mp3"
    },
    {
        "number": 21,
        "arabic": "البَاسِطُ",
        "english": "Al-Basit",
        "bangla": "আল-বাসিত",
        "pronunciation": "al-baa-sit",
        "meaningArabic": "الموسع للأرزاق والرحمة",
        "meaningEnglish": "The Expander, the Generous Provider",
        "meaningBangla": "প্রসারক, রিজিক ও রহমত বৃদ্ধিকারী",
        "references": ["Surah Al-Baqarah (2:245)"],
        "benefits": "Brings abundance and relief from hardship.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/21.mp3"
    },
    {
        "number": 22,
        "arabic": "الخَافِضُ",
        "english": "Al-Khafid",
        "bangla": "আল-খাফিদ",
        "pronunciation": "al-khaa-fid",
        "meaningArabic": "الخافض المتكبرين",
        "meaningEnglish": "The Abaser, the Humiliator of the arrogant",
        "meaningBangla": "নিম্নকারী, অহংকারীদের লাঞ্ছিত করেন",
        "references": ["Surah Al-Waqi'ah (56:3)"],
        "benefits": "Protects from pride and arrogance.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/22.mp3"
    },
    {
        "number": 23,
        "arabic": "الرَّافِعُ",
        "english": "Ar-Rafi",
        "bangla": "আর-রাফি",
        "pronunciation": "ar-raa-fee",
        "meaningArabic": "الرافع للمتقين",
        "meaningEnglish": "The Exalter, the Elevator of ranks",
        "meaningBangla": "উন্নয়নকারী, মর্যাদা বৃদ্ধিকারী",
        "references": ["Surah Al-Mujadila (58:11)"],
        "benefits": "Elevates one’s status in this life and the Hereafter.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/23.mp3"
    },
    {
        "number": 24,
        "arabic": "المُعِزُّ",
        "english": "Al-Mu'izz",
        "bangla": "আল-মুইয",
        "pronunciation": "al-mu-izz",
        "meaningArabic": "المعز لأهل طاعته",
        "meaningEnglish": "The Honourer, the Bestower of dignity",
        "meaningBangla": "মর্যাদাদানকারী, সম্মান বৃদ্ধিকারী",
        "references": ["Surah Al-Imran (3:26)"],
        "benefits": "Grants respect and honor.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/24.mp3"
    },
    {
        "number": 25,
        "arabic": "المُذِلُّ",
        "english": "Al-Mudhill",
        "bangla": "আল-মুযিল",
        "pronunciation": "al-mudh-dhill",
        "meaningArabic": "الذي يذل الكافرين",
        "meaningEnglish": "The Dishonourer, the Degrader of the disbelievers",
        "meaningBangla": "লাঞ্ছনাকারী, কাফিরদের অপমান করেন",
        "references": ["Surah Al-Imran (3:26)"],
        "benefits": "Protects from humiliation.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/25.mp3"
    },
    {
        "number": 26,
        "arabic": "السَّمِيعُ",
        "english": "As-Sami",
        "bangla": "আস-সামি",
        "pronunciation": "as-sa-mee",
        "meaningArabic": "السميع لجميع الأصوات",
        "meaningEnglish": "The All-Hearing",
        "meaningBangla": "সর্বশ্রোতা, সব শব্দ শোনেন",
        "references": ["Surah Al-Baqarah (2:127)", "Surah Al-Imran (3:34)"],
        "benefits": "Ensures prayers are heard and answered.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/26.mp3"
    },
    {
        "number": 27,
        "arabic": "البَصِيرُ",
        "english": "Al-Basir",
        "bangla": "আল-বসির",
        "pronunciation": "al-ba-seer",
        "meaningArabic": "البصير بكل شيء",
        "meaningEnglish": "The All-Seeing",
        "meaningBangla": "সর্বদ্রষ্টা, সবকিছু দেখেন",
        "references": ["Surah Al-Hadid (57:4)", "Surah Al-Mujadila (58:1)"],
        "benefits": "Encourages mindfulness and piety.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/27.mp3"
    },
    {
        "number": 28,
        "arabic": "الحَكَمُ",
        "english": "Al-Hakam",
        "bangla": "আল-হাকাম",
        "pronunciation": "al-ha-kam",
        "meaningArabic": "الحاكم العدل",
        "meaningEnglish": "The Judge, the Arbitrator",
        "meaningBangla": "ন্যায়বিচারক, ফায়সালাকারী",
        "references": ["Surah Al-Muminun (23:116)"],
        "benefits": "Seeks justice in disputes.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/28.mp3"
    },
    {
        "number": 29,
        "arabic": "العَدْلُ",
        "english": "Al-Adl",
        "bangla": "আল-আদল",
        "pronunciation": "al-adl",
        "meaningArabic": "الذي يحكم بالعدل المطلق",
        "meaningEnglish": "The Just, the Perfectly Equitable",
        "meaningBangla": "ন্যায়পরায়ণ, পূর্ণ ইনসাফকারী",
        "references": ["Surah Al-An'am (6:115)"],
        "benefits": "Promotes fairness and justice.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/29.mp3"
    },
    {
        "number": 30,
        "arabic": "اللَّطِيفُ",
        "english": "Al-Latif",
        "bangla": "আল-লাতিফ",
        "pronunciation": "al-la-teef",
        "meaningArabic": "الذي يعلم دقائق الأمور",
        "meaningEnglish": "The Subtle, the All-Aware of subtleties",
        "meaningBangla": "সূক্ষ্মদর্শী, সব গোপন বিষয় জানেন",
        "references": ["Surah Al-Mulk (67:14)", "Surah Ash-Shura (42:19)"],
        "benefits": "Resolves problems in unseen ways.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/30.mp3"
    },
        {
        "number": 31,
        "arabic": "الخَبِيرُ",
        "english": "Al-Khabir",
        "bangla": "আল-খবীর",
        "pronunciation": "al-kha-beer",
        "meaningArabic": "العليم ببواطن الأمور",
        "meaningEnglish": "The All-Aware, the Knower of realities",
        "meaningBangla": "গুপ্তজ্ঞ, সবকিছুর খবর রাখেন",
        "references": ["Surah Al-An'am (6:18)", "Surah Al-Hujurat (49:13)"],
        "benefits": "Guides in hidden matters.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/31.mp3"
    },
    {
        "number": 32,
        "arabic": "الحَلِيمُ",
        "english": "Al-Halim",
        "bangla": "আল-হালিম",
        "pronunciation": "al-ha-leem",
        "meaningArabic": "الصبور على المعاصي",
        "meaningEnglish": "The Forbearing, the Clement",
        "meaningBangla": "ধৈর্যশীল, গুনাহ সহ্য করেন",
        "references": ["Surah Al-Baqarah (2:225)", "Surah Al-Isra (17:44)"],
        "benefits": "Cultivates patience and tolerance.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/32.mp3"
    },
    {
        "number": 33,
        "arabic": "العَظِيمُ",
        "english": "Al-Azim",
        "bangla": "আল-আযীম",
        "pronunciation": "al-a-theem",
        "meaningArabic": "العظيم في صفاته",
        "meaningEnglish": "The Magnificent, the Supreme",
        "meaningBangla": "মহান, সর্বোচ্চ মর্যাদার অধিকারী",
        "references": ["Surah Al-Baqarah (2:255)", "Surah Ash-Shura (42:4)"],
        "benefits": "Inspires awe and reverence.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/33.mp3"
    },
    {
        "number": 34,
        "arabic": "الغَفُورُ",
        "english": "Al-Ghafur",
        "bangla": "আল-গাফুর",
        "pronunciation": "al-gha-foor",
        "meaningArabic": "الكثير المغفرة",
        "meaningEnglish": "The All-Forgiving",
        "meaningBangla": "ক্ষমাশীল, অগণিত গুনাহ মাফ করেন",
        "references": ["Surah Al-Zumar (39:5)", "Surah Ghafir (40:3)"],
        "benefits": "Encourages repentance and hope in mercy.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/34.mp3"
    },
    {
        "number": 35,
        "arabic": "الشَّكُورُ",
        "english": "Ash-Shakur",
        "bangla": "আশ-শাকুর",
        "pronunciation": "ash-sha-koor",
        "meaningArabic": "الذي يشكر القليل من العمل",
        "meaningEnglish": "The Appreciative, the Rewarder of good deeds",
        "meaningBangla": "কৃতজ্ঞ, সামান্য আমলেও পুরস্কার দেন",
        "references": ["Surah At-Taghabun (64:17)", "Surah Fatir (35:30)"],
        "benefits": "Multiplies rewards for small acts of worship.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/35.mp3"
    },
    {
        "number": 36,
        "arabic": "العَلِيُّ",
        "english": "Al-Ali",
        "bangla": "আল-আলী",
        "pronunciation": "al-a-lee",
        "meaningArabic": "الرفيع في الدرجات",
        "meaningEnglish": "The Most High, the Exalted",
        "meaningBangla": "সর্বোচ্চ, মহিমান্বিত",
        "references": ["Surah Al-Baqarah (2:255)", "Surah An-Nisa (4:34)"],
        "benefits": "Elevates one’s spiritual status.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/36.mp3"
    },
    {
        "number": 37,
        "arabic": "الكَبِيرُ",
        "english": "Al-Kabir",
        "bangla": "আল-কবীর",
        "pronunciation": "al-ka-beer",
        "meaningArabic": "الكبير الذي لا أكبر منه",
        "meaningEnglish": "The Greatest, the Incomparably Great",
        "meaningBangla": "মহত্তম, যার চেয়ে বড় কেউ নেই",
        "references": ["Surah Luqman (31:30)", "Surah Ar-Ra'd (13:9)"],
        "benefits": "Reminds of Allah’s supreme greatness.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/37.mp3"
    },
    {
        "number": 38,
        "arabic": "الحَفِيظُ",
        "english": "Al-Hafiz",
        "bangla": "আল-হাফিয",
        "pronunciation": "al-ha-feez",
        "meaningArabic": "الحافظ للخلق من الهلاك",
        "meaningEnglish": "The Preserver, the Protector",
        "meaningBangla": "সংরক্ষণকারী, ধ্বংস থেকে রক্ষাকারী",
        "references": ["Surah Hud (11:57)", "Surah Yusuf (12:64)"],
        "benefits": "Provides protection from harm.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/38.mp3"
    },
    {
        "number": 39,
        "arabic": "المُقِيتُ",
        "english": "Al-Muqit",
        "bangla": "আল-মুকীত",
        "pronunciation": "al-mu-queet",
        "meaningArabic": "الذي يوصل الأرزاق إلى الخلق",
        "meaningEnglish": "The Sustainer, the Nourisher",
        "meaningBangla": "জীবিকাদাতা, শক্তি প্রদানকারী",
        "references": ["Surah An-Nisa (4:85)"],
        "benefits": "Ensures sustenance and strength.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/39.mp3"
    },
    {
        "number": 40,
        "arabic": "الحَسِيبُ",
        "english": "Al-Hasib",
        "bangla": "আল-হাসীব",
        "pronunciation": "al-ha-seeb",
        "meaningArabic": "الكافي لعباده",
        "meaningEnglish": "The Reckoner, the Sufficient",
        "meaningBangla": "পর্যাপ্ত, হিসাব গ্রহণকারী",
        "references": ["Surah An-Nisa (4:6)", "Surah Al-Ahzab (33:39)"],
        "benefits": "Encourages accountability and trust in Allah.",
        "audioUrl": "https://www.islamcan.com/audio/arabic/99-names-of-allah/40.mp3"
    },{
        "number": 41,
        "arabic": "الجَلِيلُ",
        "english": "Al-Jalil",
        "bangla": "আল-জালীল",
        "pronunciation": "al-ja-leel",
        "meaningArabic": "ذو الجلال والعظمة",
        "meaningEnglish": "The Majestic, the Sublime",
        "meaningBangla": "মহিমান্বিত, পরাক্রমশালী",
        "references": ["Surah Ar-Rahman (55:27)"],
        "benefits": "Inspires reverence and awe.",
        "audioUrl": "https://example.com/audio/41.mp3"
    },
    {
        "number": 42,
        "arabic": "الكَرِيمُ",
        "english": "Al-Karim",
        "bangla": "আল-কারীম",
        "pronunciation": "al-ka-reem",
        "meaningArabic": "الذي يعطي بلا حساب",
        "meaningEnglish": "The Generous, the Bountiful",
        "meaningBangla": "মহান দাতা, অফুরন্ত দানকারী",
        "references": ["Surah An-Naml (27:40)", "Surah Al-Infitar (82:6)"],
        "benefits": "Attracts generosity and blessings.",
        "audioUrl": "https://example.com/audio/42.mp3"
    },
    {
        "number": 43,
        "arabic": "الرَّقِيبُ",
        "english": "Ar-Raqib",
        "bangla": "আর-রাকীব",
        "pronunciation": "ar-ra-qeeb",
        "meaningArabic": "الرقيب على كل شيء",
        "meaningEnglish": "The Watchful, the Observer",
        "meaningBangla": "সর্বদর্শী, সবকিছুর পর্যবেক্ষক",
        "references": ["Surah An-Nisa (4:1)", "Surah Al-Ahzab (33:52)"],
        "benefits": "Encourages mindfulness and piety.",
        "audioUrl": "https://example.com/audio/43.mp3"
    },
    {
        "number": 44,
        "arabic": "المُجِيبُ",
        "english": "Al-Mujib",
        "bangla": "আল-মুজীব",
        "pronunciation": "al-mu-jeeb",
        "meaningArabic": "المجيب لدعاء المضطرين",
        "meaningEnglish": "The Responsive, the Answerer of prayers",
        "meaningBangla": "প্রার্থনা কবুলকারী, ডাকে সাড়াদানকারী",
        "references": ["Surah Hud (11:61)"],
        "benefits": "Ensures prayers are answered.",
        "audioUrl": "https://example.com/audio/44.mp3"
    },
    {
        "number": 45,
        "arabic": "الوَاسِعُ",
        "english": "Al-Wasi",
        "bangla": "আল-ওয়াসি",
        "pronunciation": "al-wa-see",
        "meaningArabic": "الواسع الرحمة والعلم",
        "meaningEnglish": "The All-Encompassing, the Vast",
        "meaningBangla": "প্রশস্ত, অসীম জ্ঞান ও রহমতের অধিকারী",
        "references": ["Surah Al-Baqarah (2:247)", "Surah Al-Baqarah (2:261)"],
        "benefits": "Brings abundance and relief.",
        "audioUrl": "https://example.com/audio/45.mp3"
    },
    {
        "number": 46,
        "arabic": "الحَكِيمُ",
        "english": "Al-Hakim",
        "bangla": "আল-হাকীম",
        "pronunciation": "al-ha-keem",
        "meaningArabic": "الحكيم في أفعاله وأحكامه",
        "meaningEnglish": "The All-Wise",
        "meaningBangla": "প্রজ্ঞাময়, সবকিছুর মধ্যে হিকমত রাখেন",
        "references": ["Surah Al-An'am (6:18)", "Surah At-Talaq (65:2)"],
        "benefits": "Guides to wise decisions.",
        "audioUrl": "https://example.com/audio/46.mp3"
    },
    {
        "number": 47,
        "arabic": "الوَدُودُ",
        "english": "Al-Wadud",
        "bangla": "আল-ওয়াদুদ",
        "pronunciation": "al-wa-dood",
        "meaningArabic": "المحب لعباده",
        "meaningEnglish": "The Loving, the Affectionate",
        "meaningBangla": "প্রেমময়, বান্দাদেরকে ভালোবাসেন",
        "references": ["Surah Hud (11:90)", "Surah Al-Buruj (85:14)"],
        "benefits": "Strengthens love and compassion.",
        "audioUrl": "https://example.com/audio/47.mp3"
    },
    {
        "number": 48,
        "arabic": "المَجِيدُ",
        "english": "Al-Majid",
        "bangla": "আল-মাজীদ",
        "pronunciation": "al-ma-jeed",
        "meaningArabic": "ذي المجد والعظمة",
        "meaningEnglish": "The Glorious, the Noble",
        "meaningBangla": "মহিমান্বিত, সম্মানিত",
        "references": ["Surah Hud (11:73)"],
        "benefits": "Elevates one’s honor and dignity.",
        "audioUrl": "https://example.com/audio/48.mp3"
    },
    {
        "number": 49,
        "arabic": "البَاعِثُ",
        "english": "Al-Ba'ith",
        "bangla": "আল-বায়িস",
        "pronunciation": "al-baa-ith",
        "meaningArabic": "الباعث للأموات",
        "meaningEnglish": "The Resurrector, the Raiser of the dead",
        "meaningBangla": "পুনরুত্থানকারী, মৃতদের জীবিত করবেন",
        "references": ["Surah Al-Hajj (22:7)"],
        "benefits": "Strengthens faith in the Hereafter.",
        "audioUrl": "https://example.com/audio/49.mp3"
    },
    {
        "number": 50,
        "arabic": "الشَّهِيدُ",
        "english": "Ash-Shahid",
        "bangla": "আশ-শাহীদ",
        "pronunciation": "ash-sha-heed",
        "meaningArabic": "الشهيد على كل شيء",
        "meaningEnglish": "The Witness, the Observer",
        "meaningBangla": "সাক্ষী, সবকিছুর সাক্ষ্যদাতা",
        "references": ["Surah Al-Maidah (5:117)", "Surah Fussilat (41:53)"],
        "benefits": "Encourages honesty and accountability.",
        "audioUrl": "https://example.com/audio/50.mp3"
    },

{
        "number": 51,
        "arabic": "الحَقُّ",
        "english": "Al-Haqq",
        "bangla": "আল-হক্ক",
        "pronunciation": "al-haqq",
        "meaningArabic": "ذي الحق المطلق",
        "meaningEnglish": "The Ultimate Truth",
        "meaningBangla": "সত্য, চিরন্তন সত্যের মালিক",
        "references": ["Surah Al-Hajj (22:6)", "Surah Luqman (31:30)"],
        "benefits": "Reinforces truthfulness and justice.",
        "audioUrl": "https://example.com/audio/51.mp3"
    },
    {
        "number": 52,
        "arabic": "الوَكِيلُ",
        "english": "Al-Wakil",
        "bangla": "আল-ওয়াকীল",
        "pronunciation": "al-wa-keel",
        "meaningArabic": "الكفيل بأرزاق العباد",
        "meaningEnglish": "The Trustee, the Disposer of Affairs",
        "meaningBangla": "বিশ্বস্ত অভিভাবক, সবকিছুর দায়িত্বপ্রাপ্ত",
        "references": ["Surah Al-Imran (3:173)", "Surah Az-Zumar (39:62)"],
        "benefits": "Encourages reliance on Allah.",
        "audioUrl": "https://example.com/audio/52.mp3"
    },
    {
        "number": 53,
        "arabic": "القَوِيُّ",
        "english": "Al-Qawiyy",
        "bangla": "আল-ক্বাওয়ী",
        "pronunciation": "al-qa-wee",
        "meaningArabic": "ذي القوة المطلقة",
        "meaningEnglish": "The All-Strong",
        "meaningBangla": "পরাক্রমশালী, অপরাজেয় শক্তির অধিকারী",
        "references": ["Surah Al-Hajj (22:40)", "Surah Al-Ahzab (33:25)"],
        "benefits": "Provides strength against adversity.",
        "audioUrl": "https://example.com/audio/53.mp3"
    },
    {
        "number": 54,
        "arabic": "المَتِينُ",
        "english": "Al-Matin",
        "bangla": "আল-মাতীন",
        "pronunciation": "al-ma-teen",
        "meaningArabic": "المتين الذي لا يضعف",
        "meaningEnglish": "The Firm, the Steadfast",
        "meaningBangla": "মজবুত, অটল",
        "references": ["Surah Adh-Dhariyat (51:58)"],
        "benefits": "Strengthens resolve and determination.",
        "audioUrl": "https://example.com/audio/54.mp3"
    },
    {
        "number": 55,
        "arabic": "الوَلِيُّ",
        "english": "Al-Waliyy",
        "bangla": "আল-ওয়ালী",
        "pronunciation": "al-wa-lee",
        "meaningArabic": "الناصر لأوليائه",
        "meaningEnglish": "The Protector, the Guardian",
        "meaningBangla": "বন্ধু, সাহায্যকারী",
        "references": ["Surah An-Nisa (4:45)", "Surah Ash-Shura (42:28)"],
        "benefits": "Provides divine support and friendship.",
        "audioUrl": "https://example.com/audio/55.mp3"
    },
    {
        "number": 56,
        "arabic": "الحَمِيدُ",
        "english": "Al-Hamid",
        "bangla": "আল-হামীদ",
        "pronunciation": "al-ha-meed",
        "meaningArabic": "المحمود على كل حال",
        "meaningEnglish": "The Praiseworthy",
        "meaningBangla": "প্রশংসিত, সব অবস্থায় প্রশংসার যোগ্য",
        "references": ["Surah Al-Isra (17:44)", "Surah Luqman (31:12)"],
        "benefits": "Encourages gratitude and praise.",
        "audioUrl": "https://example.com/audio/56.mp3"
    },
    {
        "number": 57,
        "arabic": "المُحْصِي",
        "english": "Al-Muhsi",
        "bangla": "আল-মুহসী",
        "pronunciation": "al-muh-see",
        "meaningArabic": "المحصي لأفعال العباد",
        "meaningEnglish": "The Reckoner, the Accountant",
        "meaningBangla": "হিসাব গ্রহণকারী, সবকিছুর হিসাব রাখেন",
        "references": ["Surah Maryam (19:94)", "Surah Al-Jinn (72:28)"],
        "benefits": "Promotes accountability and mindfulness.",
        "audioUrl": "https://example.com/audio/57.mp3"
    },
    {
        "number": 58,
        "arabic": "المُبْدِئُ",
        "english": "Al-Mubdi",
        "bangla": "আল-মুবদী",
        "pronunciation": "al-mub-dee",
        "meaningArabic": "المبدئ للخلق",
        "meaningEnglish": "The Originator, the Initiator",
        "meaningBangla": "সৃষ্টির সূচনাকারী",
        "references": ["Surah Al-Buruj (85:13)"],
        "benefits": "Inspires creativity and new beginnings.",
        "audioUrl": "https://example.com/audio/58.mp3"
    },
    {
        "number": 59,
        "arabic": "المُعِيدُ",
        "english": "Al-Mu'id",
        "bangla": "আল-মুঈদ",
        "pronunciation": "al-mu-eed",
        "meaningArabic": "المعيد للخلق بعد الموت",
        "meaningEnglish": "The Restorer, the Repeater",
        "meaningBangla": "পুনরুত্থানকারী, সবকিছু ফিরিয়ে আনেন",
        "references": ["Surah Yunus (10:34)"],
        "benefits": "Strengthens belief in resurrection.",
        "audioUrl": "https://example.com/audio/59.mp3"
    },
    {
        "number": 60,
        "arabic": "المُحْيِي",
        "english": "Al-Muhyi",
        "bangla": "আল-মুহ্যি",
        "pronunciation": "al-muh-yee",
        "meaningArabic": "المحيي للأموات",
        "meaningEnglish": "The Giver of Life",
        "meaningBangla": "জীবনদানকারী",
        "references": ["Surah Fussilat (41:39)"],
        "benefits": "Brings hope and vitality.",
        "audioUrl": "https://example.com/audio/60.mp3"
    },
    {
        "number": 61,
        "arabic": "المُمِيتُ",
        "english": "Al-Mumit",
        "bangla": "আল-মুমীত",
        "pronunciation": "al-mu-meet",
        "meaningArabic": "الذي يميت الخلق",
        "meaningEnglish": "The Bringer of Death",
        "meaningBangla": "মৃত্যুদানকারী",
        "references": ["Surah Al-Hadid (57:2)"],
        "benefits": "Reminds us of the temporary nature of this life",
        "audioUrl": "https://example.com/audio/61.mp3"
    },
    {
        "number": 62,
        "arabic": "الحَيُّ",
        "english": "Al-Hayy",
        "bangla": "আল-হাইয়্যু",
        "pronunciation": "al-hay-yu",
        "meaningArabic": "الحي الذي لا يموت",
        "meaningEnglish": "The Ever-Living",
        "meaningBangla": "চিরঞ্জীব, যিনি কখনো মৃত্যুবরণ করবেন না",
        "references": ["Surah Al-Baqarah (2:255)", "Surah Ghafir (40:65)"],
        "benefits": "Strengthens faith in Allah's eternal existence",
        "audioUrl": "https://example.com/audio/62.mp3"
    },
    {
        "number": 63,
        "arabic": "القَيُّومُ",
        "english": "Al-Qayyum",
        "bangla": "আল-কাইয়ূম",
        "pronunciation": "al-qay-yoom",
        "meaningArabic": "القائم على كل شيء",
        "meaningEnglish": "The Self-Sustaining",
        "meaningBangla": "স্বয়ংসম্পূর্ণ, সবকিছুর ধারক",
        "references": ["Surah Al-Baqarah (2:255)", "Surah Ali Imran (3:2)"],
        "benefits": "Encourages reliance on Allah alone",
        "audioUrl": "https://example.com/audio/63.mp3"
    },
    {
        "number": 64,
        "arabic": "الوَاجِدُ",
        "english": "Al-Wajid",
        "bangla": "আল-ওয়াজিদ",
        "pronunciation": "al-wa-jid",
        "meaningArabic": "الذي لا يعوزه شيء",
        "meaningEnglish": "The Perceiver",
        "meaningBangla": "সবকিছুর সন্ধানকারী, যার কোনো অভাব নেই",
        "references": ["Surah Ad-Duha (93:6-8)"],
        "benefits": "Provides for all needs",
        "audioUrl": "https://example.com/audio/64.mp3"
    },
    {
        "number": 65,
        "arabic": "المَاجِدُ",
        "english": "Al-Majid",
        "bangla": "আল-মাজিদ",
        "pronunciation": "al-ma-jid",
        "meaningArabic": "ذي المجد والعظمة",
        "meaningEnglish": "The Glorious",
        "meaningBangla": "মহিমান্বিত, সম্মানিত",
        "references": ["Surah Hud (11:73)"],
        "benefits": "Elevates one's status and honor",
        "audioUrl": "https://example.com/audio/65.mp3"
    },
    {
        "number": 66,
        "arabic": "الوَاحِدُ",
        "english": "Al-Wahid",
        "bangla": "আল-ওয়াহিদ",
        "pronunciation": "al-wa-hid",
        "meaningArabic": "الواحد الأحد",
        "meaningEnglish": "The One, The Unique",
        "meaningBangla": "একক, অদ্বিতীয়",
        "references": ["Surah Al-Baqarah (2:163)", "Surah Ar-Ra'd (13:16)"],
        "benefits": "Strengthens Tawheed (monotheism)",
        "audioUrl": "https://example.com/audio/66.mp3"
    },
    {
        "number": 67,
        "arabic": "الأَحَدُ",
        "english": "Al-Ahad",
        "bangla": "আল-আহাদ",
        "pronunciation": "al-a-had",
        "meaningArabic": "الذي لا ثاني له",
        "meaningEnglish": "The Absolute One",
        "meaningBangla": "অদ্বিতীয়, যার কোনো অংশীদার নেই",
        "references": ["Surah Al-Ikhlas (112:1)"],
        "benefits": "Reinforces pure monotheism",
        "audioUrl": "https://example.com/audio/67.mp3"
    },
    {
        "number": 68,
        "arabic": "الصَّمَدُ",
        "english": "As-Samad",
        "bangla": "আস-সামাদ",
        "pronunciation": "as-sa-mad",
        "meaningArabic": "الذي يصمد إليه في الحاجات",
        "meaningEnglish": "The Eternal, The Self-Sufficient",
        "meaningBangla": "স্বয়ংসম্পূর্ণ, যার প্রয়োজন নেই",
        "references": ["Surah Al-Ikhlas (112:2)"],
        "benefits": "Encourages complete dependence on Allah",
        "audioUrl": "https://example.com/audio/68.mp3"
    },
    {
        "number": 69,
        "arabic": "القَادِرُ",
        "english": "Al-Qadir",
        "bangla": "আল-কাদির",
        "pronunciation": "al-qa-dir",
        "meaningArabic": "القدير على كل شيء",
        "meaningEnglish": "The All-Powerful",
        "meaningBangla": "সর্বশক্তিমান",
        "references": ["Surah Al-Baqarah (2:20)", "Surah Al-Ma'arij (70:40-41)"],
        "benefits": "Strengthens belief in Allah's omnipotence",
        "audioUrl": "https://example.com/audio/69.mp3"
    },
    {
        "number": 70,
        "arabic": "المُقْتَدِرُ",
        "english": "Al-Muqtadir",
        "bangla": "আল-মুকতাদির",
        "pronunciation": "al-muq-ta-dir",
        "meaningArabic": "القادر الذي لا يعجزه شيء",
        "meaningEnglish": "The Omnipotent",
        "meaningBangla": "পরাক্রমশালী, যার সামনে কিছুই অসাধ্য নয়",
        "references": ["Surah Al-Qamar (54:42)", "Surah Al-Kahf (18:45)"],
        "benefits": "Increases trust in Allah's power",
        "audioUrl": "https://example.com/audio/70.mp3"
    },
    {
        "number": 71,
        "arabic": "المُقَدِّمُ",
        "english": "Al-Muqaddim",
        "bangla": "আল-মুকাদ্দিম",
        "pronunciation": "al-mu-qad-dim",
        "meaningArabic": "الذي يقدم ما يشاء",
        "meaningEnglish": "The Expediter",
        "meaningBangla": "যিনি অগ্রসর করেন",
        "references": ["Surah Qaf (50:28)"],
        "benefits": "Helps in advancing important matters",
        "audioUrl": "https://example.com/audio/71.mp3"
    },
    {
        "number": 72,
        "arabic": "المُؤَخِّرُ",
        "english": "Al-Mu'akhkhir",
        "bangla": "আল-মুয়াখখির",
        "pronunciation": "al-mu-akh-khir",
        "meaningArabic": "الذي يؤخر ما يشاء",
        "meaningEnglish": "The Delayer",
        "meaningBangla": "যিনি পিছিয়ে দেন",
        "references": ["Surah Ibrahim (14:42)"],
        "benefits": "Teaches patience in difficulties",
        "audioUrl": "https://example.com/audio/72.mp3"
    },
    {
        "number": 73,
        "arabic": "الأَوَّلُ",
        "english": "Al-Awwal",
        "bangla": "আল-আওয়াল",
        "pronunciation": "al-aw-wal",
        "meaningArabic": "الأول الذي لا بداية له",
        "meaningEnglish": "The First",
        "meaningBangla": "সর্বপ্রথম, যার কোনো শুরু নেই",
        "references": ["Surah Al-Hadid (57:3)"],
        "benefits": "Reminds of Allah's eternal existence",
        "audioUrl": "https://example.com/audio/73.mp3"
    },
    {
        "number": 74,
        "arabic": "الآخِرُ",
        "english": "Al-Akhir",
        "bangla": "আল-আখির",
        "pronunciation": "al-a-khir",
        "meaningArabic": "الآخر الذي لا نهاية له",
        "meaningEnglish": "The Last",
        "meaningBangla": "সর্বশেষ, যার কোনো শেষ নেই",
        "references": ["Surah Al-Hadid (57:3)"],
        "benefits": "Strengthens belief in eternity",
        "audioUrl": "https://example.com/audio/74.mp3"
    },
    {
        "number": 75,
        "arabic": "الظَّاهِرُ",
        "english": "Az-Zahir",
        "bangla": "আজ-জাহির",
        "pronunciation": "az-za-hir",
        "meaningArabic": "الظاهر على كل شيء",
        "meaningEnglish": "The Manifest",
        "meaningBangla": "প্রকাশ্য, যিনি সবকিছুর উপর প্রকাশমান",
        "references": ["Surah Al-Hadid (57:3)"],
        "benefits": "Helps recognize Allah's signs in creation",
        "audioUrl": "https://example.com/audio/75.mp3"
    },
    {
        "number": 76,
        "arabic": "البَاطِنُ",
        "english": "Al-Batin",
        "bangla": "আল-বাতিন",
        "pronunciation": "al-ba-tin",
        "meaningArabic": "الباطن الذي لا يدرك",
        "meaningEnglish": "The Hidden",
        "meaningBangla": "অদৃশ্য, যাকে কেউ দেখতে পায় না",
        "references": ["Surah Al-Hadid (57:3)"],
        "benefits": "Encourages humility before Allah's greatness",
        "audioUrl": "https://example.com/audio/76.mp3"
    },
    {
        "number": 77,
        "arabic": "الوَالِي",
        "english": "Al-Wali",
        "bangla": "আল-ওয়ালী",
        "pronunciation": "al-wa-lee",
        "meaningArabic": "الناصر لأوليائه",
        "meaningEnglish": "The Protecting Friend",
        "meaningBangla": "বন্ধু ও সাহায্যকারী",
        "references": ["Surah Ash-Shura (42:9)"],
        "benefits": "Provides divine protection and guidance",
        "audioUrl": "https://example.com/audio/77.mp3"
    },
    {
        "number": 78,
        "arabic": "المُتَعَالِي",
        "english": "Al-Muta'ali",
        "bangla": "আল-মুতাআলী",
        "pronunciation": "al-mu-ta-a-lee",
        "meaningArabic": "المتعالي عن صفات الخلق",
        "meaningEnglish": "The Supreme",
        "meaningBangla": "সর্বোচ্চ, সৃষ্টির সব গুণ থেকে উর্ধ্বে",
        "references": ["Surah Ar-Ra'd (13:9)"],
        "benefits": "Inspires awe and reverence",
        "audioUrl": "https://example.com/audio/78.mp3"
    },
    {
        "number": 79,
        "arabic": "البَرُّ",
        "english": "Al-Barr",
        "bangla": "আল-বার্রু",
        "pronunciation": "al-bar-ru",
        "meaningArabic": "المحسن إلى خلقه",
        "meaningEnglish": "The Source of Goodness",
        "meaningBangla": "মহান উপকারকারী",
        "references": ["Surah At-Tur (52:28)"],
        "benefits": "Encourages doing good to others",
        "audioUrl": "https://example.com/audio/79.mp3"
    },
    {
        "number": 80,
        "arabic": "التَّوَّابُ",
        "english": "At-Tawwab",
        "bangla": "আত-তাওয়াব",
        "pronunciation": "at-taw-wab",
        "meaningArabic": "الذي يقبل التوبة",
        "meaningEnglish": "The Accepter of Repentance",
        "meaningBangla": "তওবা কবুলকারী",
        "references": ["Surah Al-Baqarah (2:37)", "Surah An-Nisa (4:64)"],
        "benefits": "Encourages repentance and forgiveness",
        "audioUrl": "https://example.com/audio/80.mp3"
    },
    {
        "number": 81,
        "arabic": "المُنْتَقِمُ",
        "english": "Al-Muntaqim",
        "bangla": "আল-মুনতাকিম",
        "pronunciation": "al-mun-ta-qim",
        "meaningArabic": "المنتقم من الظالمين",
        "meaningEnglish": "The Avenger",
        "meaningBangla": "প্রতিশোধ গ্রহণকারী",
        "references": ["Surah As-Sajdah (32:22)", "Surah Az-Zukhruf (43:41)"],
        "benefits": "Provides justice against oppressors",
        "audioUrl": "https://example.com/audio/81.mp3"
    },
    {
        "number": 82,
        "arabic": "العَفُوُّ",
        "english": "Al-Afuww",
        "bangla": "আল-আফুওয়",
        "pronunciation": "al-a-fuww",
        "meaningArabic": "الممحو للذنوب",
        "meaningEnglish": "The Pardoner",
        "meaningBangla": "ক্ষমাকারী, গুনাহ মাফকারী",
        "references": ["Surah An-Nisa (4:43)", "Surah Al-Hajj (22:60)"],
        "benefits": "Encourages seeking forgiveness",
        "audioUrl": "https://example.com/audio/82.mp3"
    },
    {
        "number": 83,
        "arabic": "الرَّؤُوفُ",
        "english": "Ar-Ra'uf",
        "bangla": "আর-রাউফ",
        "pronunciation": "ar-ra-uf",
        "meaningArabic": "الذي يرأف بعباده",
        "meaningEnglish": "The Kind",
        "meaningBangla": "অতি দয়ালু",
        "references": ["Surah Al-Baqarah (2:207)", "Surah At-Tawbah (9:117)"],
        "benefits": "Brings comfort in difficulties",
        "audioUrl": "https://example.com/audio/83.mp3"
    },
    {
        "number": 84,
        "arabic": "مَالِكُ المُلْكِ",
        "english": "Malik-ul-Mulk",
        "bangla": "মালিকুল মুলক",
        "pronunciation": "ma-lik-ul-mulk",
        "meaningArabic": "المالك للكون كله",
        "meaningEnglish": "The Owner of Sovereignty",
        "meaningBangla": "সার্বভৌম ক্ষমতার মালিক",
        "references": ["Surah Ali Imran (3:26)"],
        "benefits": "Strengthens trust in Allah's dominion",
        "audioUrl": "https://example.com/audio/84.mp3"
    },
    {
        "number": 85,
        "arabic": "ذُو الجَلَالِ وَالإِكْرَامِ",
        "english": "Dhul-Jalali wal-Ikram",
        "bangla": "জুল জালালি ওয়াল ইকরাম",
        "pronunciation": "dhul-jala-li wal-ik-ram",
        "meaningArabic": "صاحب الجلال والكرم",
        "meaningEnglish": "Lord of Majesty and Generosity",
        "meaningBangla": "মহিমা ও সম্মানের মালিক",
        "references": ["Surah Ar-Rahman (55:27)"],
        "benefits": "Inspires reverence and gratitude",
        "audioUrl": "https://example.com/audio/85.mp3"
    },
    {
        "number": 86,
        "arabic": "المُقْسِطُ",
        "english": "Al-Muqsit",
        "bangla": "আল-মুকসিত",
        "pronunciation": "al-muq-sit",
        "meaningArabic": "العدل في حكمه",
        "meaningEnglish": "The Equitable",
        "meaningBangla": "ন্যায়বিচারক",
        "references": ["Surah Al-Imran (3:18)"],
        "benefits": "Promotes justice and fairness",
        "audioUrl": "https://example.com/audio/86.mp3"
    },
    {
        "number": 87,
        "arabic": "الجَامِعُ",
        "english": "Al-Jami",
        "bangla": "আল-জামি",
        "pronunciation": "al-ja-mi",
        "meaningArabic": "الجامع للناس ليوم القيامة",
        "meaningEnglish": "The Gatherer",
        "meaningBangla": "সমাবেশকারী, কিয়ামতের দিন সবাইকে একত্র করবেন",
        "references": ["Surah Ali Imran (3:9)"],
        "benefits": "Strengthens belief in the Hereafter",
        "audioUrl": "https://example.com/audio/87.mp3"
    },
    {
        "number": 88,
        "arabic": "الغَنِيُّ",
        "english": "Al-Ghani",
        "bangla": "আল-গানী",
        "pronunciation": "al-gha-nee",
        "meaningArabic": "الغني الذي لا يحتاج إلى شيء",
        "meaningEnglish": "The Self-Sufficient",
        "meaningBangla": "স্বয়ংসম্পূর্ণ, যার কোনো প্রয়োজন নেই",
        "references": ["Surah Al-Baqarah (2:263)", "Surah Luqman (31:12)"],
        "benefits": "Encourages contentment",
        "audioUrl": "https://example.com/audio/88.mp3"
    },
    {
        "number": 89,
        "arabic": "المُغْنِي",
        "english": "Al-Mughni",
        "bangla": "আল-মুগনী",
        "pronunciation": "al-mugh-nee",
        "meaningArabic": "المغني لعباده",
        "meaningEnglish": "The Enricher",
        "meaningBangla": "ধনীকারী, অভাব মোচনকারী",
        "references": ["Surah At-Talaq (65:2-3)"],
        "benefits": "Provides wealth and sufficiency",
        "audioUrl": "https://example.com/audio/89.mp3"
    },
    {
        "number": 90,
        "arabic": "المَانِعُ",
        "english": "Al-Mani",
        "bangla": "আল-মানি",
        "pronunciation": "al-ma-nee",
        "meaningArabic": "المانع لما يشاء",
        "meaningEnglish": "The Preventer",
        "meaningBangla": "নিষেধকারী, যিনি যা ইচ্ছা বন্ধ করেন",
        "references": ["Surah Al-Baqarah (2:245)"],
        "benefits": "Provides protection from harm",
        "audioUrl": "https://example.com/audio/90.mp3"
    },
    {
        "number": 91,
        "arabic": "الضَّارُّ",
        "english": "Ad-Darr",
        "bangla": "আদ-দার্রু",
        "pronunciation": "ad-dar-ru",
        "meaningArabic": "الذي يضر من يشاء",
        "meaningEnglish": "The Afflicter",
        "meaningBangla": "ক্ষতিসাধনকারী, পরীক্ষার মাধ্যমে",
        "references": ["Surah Al-An'am (6:17)"],
        "benefits": "Reminds us that all harm comes only by Allah's will",
        "audioUrl": "https://example.com/audio/91.mp3"
    },
    {
        "number": 92,
        "arabic": "النَّافِعُ",
        "english": "An-Nafi",
        "bangla": "আন-নাফি",
        "pronunciation": "an-na-fee",
        "meaningArabic": "النافع لمن يشاء",
        "meaningEnglish": "The Benefiter",
        "meaningBangla": "উপকারদাতা",
        "references": ["Surah Al-An'am (6:17)"],
        "benefits": "All benefits come from Allah alone",
        "audioUrl": "https://example.com/audio/92.mp3"
    },
    {
        "number": 93,
        "arabic": "النُّورُ",
        "english": "An-Nur",
        "bangla": "আন-নূর",
        "pronunciation": "an-nur",
        "meaningArabic": "المنور للقلوب",
        "meaningEnglish": "The Light",
        "meaningBangla": "আলো, হৃদয়কে আলোকিতকারী",
        "references": ["Surah An-Nur (24:35)"],
        "benefits": "Illuminates the heart with guidance",
        "audioUrl": "https://example.com/audio/93.mp3"
    },
    {
        "number": 94,
        "arabic": "الهادي",
        "english": "Al-Hadi",
        "bangla": "আল-হাদী",
        "pronunciation": "al-ha-dee",
        "meaningArabic": "الهادي إلى الحق",
        "meaningEnglish": "The Guide",
        "meaningBangla": "পথপ্রদর্শক",
        "references": ["Surah Al-Hajj (22:54)"],
        "benefits": "Provides guidance to the straight path",
        "audioUrl": "https://example.com/audio/94.mp3"
    },
    {
        "number": 95,
        "arabic": "البَدِيعُ",
        "english": "Al-Badi",
        "bangla": "আল-বাদী",
        "pronunciation": "al-ba-dee",
        "meaningArabic": "المبدع للخلق",
        "meaningEnglish": "The Originator",
        "meaningBangla": "অদ্বিতীয় স্রষ্টা",
        "references": ["Surah Al-Baqarah (2:117)"],
        "benefits": "Inspires appreciation for Allah's creation",
        "audioUrl": "https://example.com/audio/95.mp3"
    },
    {
        "number": 96,
        "arabic": "البَاقِي",
        "english": "Al-Baqi",
        "bangla": "আল-বাকী",
        "pronunciation": "al-ba-qee",
        "meaningArabic": "الدائم الذي لا يفنى",
        "meaningEnglish": "The Everlasting",
        "meaningBangla": "চিরস্থায়ী",
        "references": ["Surah Ar-Rahman (55:27)"],
        "benefits": "Strengthens belief in eternity",
        "audioUrl": "https://example.com/audio/96.mp3"
    },
    {
        "number": 97,
        "arabic": "الوَارِثُ",
        "english": "Al-Warith",
        "bangla": "আল-ওয়ারিস",
        "pronunciation": "al-wa-ris",
        "meaningArabic": "الباقي بعد فناء الخلق",
        "meaningEnglish": "The Inheritor",
        "meaningBangla": "সম্পদের উত্তরাধিকারী",
        "references": ["Surah Al-Hijr (15:23)"],
        "benefits": "Reminds us that everything returns to Allah",
        "audioUrl": "https://example.com/audio/97.mp3"
    },
    {
        "number": 98,
        "arabic": "الرَّشِيدُ",
        "english": "Ar-Rashid",
        "bangla": "আর-রশীদ",
        "pronunciation": "ar-ra-sheed",
        "meaningArabic": "الهادي إلى الصواب",
        "meaningEnglish": "The Guide to the Right Path",
        "meaningBangla": "সঠিক পথের দিশারী",
        "references": ["Surah Al-Jinn (72:10)"],
        "benefits": "Provides wisdom and correct guidance",
        "audioUrl": "https://example.com/audio/98.mp3"
    },
    {
        "number": 99,
        "arabic": "الصَّبُورُ",
        "english": "As-Sabur",
        "bangla": "আস-সাবুর",
        "pronunciation": "as-sa-boor",
        "meaningArabic": "الصبور على معصية العباد",
        "meaningEnglish": "The Patient",
        "meaningBangla": "অতি ধৈর্যশীল",
        "references": ["Surah Al-Baqarah (2:153)"],
        "benefits": "Encourages patience in difficulties",
        "audioUrl": "https://example.com/audio/99.mp3"
    }
        // Add more names up to 99 as needed
    ];

    const itemsPerPage = 10;
    let currentPage = 1;
    let filteredNames = [...namesData];

    const namesContainer = document.getElementById('names-container');
    const paginationContainer = document.getElementById('pagination');
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const sortSelect = document.getElementById('sort-select');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const playAudioButton = document.getElementById('play-audio');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const arabicToggle = document.getElementById('arabic-toggle');
    const englishToggle = document.getElementById('english-toggle');
    const banglaToggle = document.getElementById('bangla-toggle');
    let currentAudio = null;
    let currentLanguage = 'arabic';

    function renderNames(names, page = 1) {
        namesContainer.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageNames = names.slice(start, end);

        if (pageNames.length === 0) {
            namesContainer.innerHTML = '<div class="no-results">No names found.</div>';
            paginationContainer.innerHTML = '';
            return;
        }

        pageNames.forEach((name) => {
            const nameCard = document.createElement('div');
            nameCard.className = 'name-card';
            nameCard.setAttribute('data-number', name.number);
            nameCard.innerHTML = `
                <div class="arabic">${name.arabic}</div>
                <div class="english">${name.english}</div>
                <div class="bangla">${name.bangla}</div>
            `;
            nameCard.addEventListener('click', () => openModal(name));
            namesContainer.appendChild(nameCard);
        });

        renderPagination(names.length, page);
        setLanguage(currentLanguage, false);
    }

    function renderPagination(totalItems, currentPage) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        let html = '';
        if (currentPage > 1) {
            html += `<button class="page-link prev">Prev</button>`;
        }
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-link${i === currentPage ? ' active' : ''}">${i}</button>`;
        }
        if (currentPage < totalPages) {
            html += `<button class="page-link next">Next</button>`;
        }
        paginationContainer.innerHTML = html;

        paginationContainer.querySelectorAll('.page-link').forEach(btn => {
            btn.onclick = function() {
                if (btn.classList.contains('prev')) {
                    if (currentPage > 1) renderNames(filteredNames, currentPage - 1);
                } else if (btn.classList.contains('next')) {
                    if (currentPage < totalPages) renderNames(filteredNames, currentPage + 1);
                } else {
                    const page = parseInt(btn.textContent);
                    renderNames(filteredNames, page);
                }
            };
        });
    }

    function openModal(name) {
        document.getElementById('modal-name-arabic').textContent = name.arabic;
        document.getElementById('modal-name-english').textContent = name.english;
        document.getElementById('modal-name-bangla').textContent = name.bangla;
        document.getElementById('pronunciation-text').textContent = name.pronunciation || '';
        document.getElementById('modal-meaning-arabic').textContent = name.meaningArabic || '';
        document.getElementById('modal-meaning-english').textContent = name.meaningEnglish || '';
        document.getElementById('modal-meaning-bangla').textContent = name.meaningBangla || '';
        document.getElementById('benefits-text').textContent = name.benefits || '';
        const referencesList = document.getElementById('quran-references-list');
        referencesList.innerHTML = '';
        if (name.references && Array.isArray(name.references)) {
            name.references.forEach(ref => {
                const li = document.createElement('li');
                li.textContent = ref;
                referencesList.appendChild(li);
            });
        }
        playAudioButton.onclick = () => {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio(name.audioUrl);
            currentAudio.play();
        };
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
    }

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // SEARCH
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        clearSearchBtn.classList.toggle('visible', !!searchTerm);
        filteredNames = namesData.filter(name =>
            (name.arabic || '').toLowerCase().includes(searchTerm) ||
            (name.english || '').toLowerCase().includes(searchTerm) ||
            (name.bangla || '').toLowerCase().includes(searchTerm)
        );
        renderNames(filteredNames, 1);
    });

    // CLEAR SEARCH
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.classList.remove('visible');
        filteredNames = [...namesData];
        renderNames(filteredNames, 1);
    });

    // SORT
    sortSelect.addEventListener('change', (e) => {
        if (e.target.value === 'alphabetical') {
            filteredNames.sort((a, b) => (a.english || '').localeCompare(b.english || ''));
        } else {
            filteredNames.sort((a, b) => a.number - b.number);
        }
        renderNames(filteredNames, 1);
    });

    // LANGUAGE TOGGLE
    arabicToggle.addEventListener('click', () => setLanguage('arabic'));
    englishToggle.addEventListener('click', () => setLanguage('english'));
    banglaToggle.addEventListener('click', () => setLanguage('bangla'));

    function setLanguage(language, updateButtons = true) {
        currentLanguage = language;
        if (updateButtons) {
            arabicToggle.classList.toggle('active', language === 'arabic');
            englishToggle.classList.toggle('active', language === 'english');
            banglaToggle.classList.toggle('active', language === 'bangla');
        }
        document.querySelectorAll('.name-card').forEach(card => {
            const arabic = card.querySelector('.arabic');
            const english = card.querySelector('.english');
            const bangla = card.querySelector('.bangla');
            if (language === 'arabic') {
                arabic.style.display = 'block';
                english.style.display = 'block';
                bangla.style.display = 'block';
            } else if (language === 'english') {
                arabic.style.display = 'block';
                english.style.display = 'block';
                bangla.style.display = 'none';
            } else {
                arabic.style.display = 'block';
                english.style.display = 'none';
                bangla.style.display = 'block';
            }
        });
    }

    // NIGHT MODE TOGGLE
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // SCROLL TO TOP BUTTON
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
        // Sticky search bar effect
        const searchContainer = document.querySelector('.search-container');
        if(window.scrollY > 50) {
            searchContainer.classList.add('sticky-active');
        } else {
            searchContainer.classList.remove('sticky-active');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // INITIAL RENDER
    renderNames(filteredNames, 1);
});
