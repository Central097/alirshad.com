let currentQuestion = 1; // Current question index
let totalQuestions = 1000; // Total number of questions
let score = 0; // Track the score
let answeredQuestions = 0; // Track the number of answered questions
let currentSet = 1; // Track the current set of questions (sets of 10)

const questions = [
    {
        question: "What is the capital of Saudi Arabia?",
        options: ["Riyadh", "Mecca", "Medina", "Jeddah"],
        answer: "Riyadh"
    },
    {
        question: "What is the second holiest city in Islam?",
        options: ["Medina", "Mecca", "Jerusalem", "Cairo"],
        answer: "Medina"
    },
    {
        question: "Who was the first Caliph after the death of Prophet Muhammad (PBUH)?",
        options: ["Umar ibn Al-Khattab", "Abu Bakr", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        answer: "Abu Bakr"
    },
    {
        question: "Which Surah is the longest in the Quran?",
        options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-A'raf"],
        answer: "Al-Baqarah"
    },
    { question: "What is the Arabic term for the pilgrimage to Mecca?", options: ["Hajj", "Salah", "Zakat", "Umrah"], answer: "Hajj" },
{ question: "Who was the Prophet that built the Ark?", options: ["Ibrahim (AS)", "Nuh (AS)", "Musa (AS)", "Isa (AS)"], answer: "Nuh (AS)" },
{ question: "What is the Night of Decree in Ramadan called?", options: ["Laylatul Qadr", "Laylatul Bara’ah", "Laylatul Isra", "Laylatul Miraj"], answer: "Laylatul Qadr" },
{ question: "How many Rak'ahs are in the Fajr prayer?", options: ["2", "4", "3", "5"], answer: "2" },
{ question: "What is the Arabic name for charity?", options: ["Sadaqah", "Zakat", "Khair", "Ihsan"], answer: "Sadaqah" },
{ question: "Which Prophet parted the sea by Allah's command?", options: ["Isa (AS)", "Musa (AS)", "Nuh (AS)", "Ibrahim (AS)"], answer: "Musa (AS)" },
{ question: "Which Surah is known as 'Ikhlas'?", options: ["Surah Al-Ikhlas", "Surah Al-Fatiha", "Surah Al-Nas", "Surah Al-Falaq"], answer: "Surah Al-Ikhlas" },
{ question: "Who is the angel responsible for blowing the trumpet?", options: ["Jibreel (AS)", "Mika'il (AS)", "Israfil (AS)", "Azrael (AS)"], answer: "Israfil (AS)" },
{ question: "What is the direction Muslims face during prayer?", options: ["Kaaba", "Jerusalem", "Madinah", "Mount Arafat"], answer: "Kaaba" },
{ question: "What is the Arabic name for fasting?", options: ["Sawm", "Hajj", "Salah", "Zakat"], answer: "Sawm" },

{ question: "Who was swallowed by a whale?", options: ["Yunus (AS)", "Musa (AS)", "Isa (AS)", "Ibrahim (AS)"], answer: "Yunus (AS)" },
{ question: "Which Prophet was known for interpreting dreams?", options: ["Yusuf (AS)", "Yaqub (AS)", "Ishaq (AS)", "Dawud (AS)"], answer: "Yusuf (AS)" },
{ question: "What is the name of the Islamic holy book?", options: ["Quran", "Bible", "Torah", "Psalms"], answer: "Quran" },
{ question: "What is the special Friday prayer called?", options: ["Jumu'ah", "Eid", "Fajr", "Taraweeh"], answer: "Jumu'ah" },
{ question: "Which Prophet was given the Zabur?", options: ["Dawud (AS)", "Musa (AS)", "Isa (AS)", "Ibrahim (AS)"], answer: "Dawud (AS)" },
{ question: "Who is the first Prophet in Islam?", options: ["Adam (AS)", "Nuh (AS)", "Ibrahim (AS)", "Musa (AS)"], answer: "Adam (AS)" },
{ question: "What is the name of the Islamic month of fasting?", options: ["Ramadan", "Shawwal", "Muharram", "Rajab"], answer: "Ramadan" },
{ question: "Which Prophet was able to speak in the cradle?", options: ["Isa (AS)", "Muhammad (SAW)", "Yahya (AS)", "Musa (AS)"], answer: "Isa (AS)" },
{ question: "How many days are in the Islamic calendar?", options: ["354", "365", "360", "355"], answer: "354" },
{ question: "Which angel brought revelation to the prophets?", options: ["Jibreel (AS)", "Israfil (AS)", "Azrael (AS)", "Mika'il (AS)"], answer: "Jibreel (AS)" },

{ question: "Who compiled the Quran into one book?", options: ["Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)", "Ali (RA)"], answer: "Uthman (RA)" },
{ question: "How many Surahs are in the Quran?", options: ["114", "112", "100", "120"], answer: "114" },
{ question: "Which Prophet was tested with great illness?", options: ["Ayyub (AS)", "Yunus (AS)", "Yusuf (AS)", "Musa (AS)"], answer: "Ayyub (AS)" },
{ question: "What is the Islamic declaration of faith?", options: ["Shahada", "Salah", "Zakat", "Hajj"], answer: "Shahada" },
{ question: "Who was the Prophet's closest companion?", options: ["Abu Bakr (RA)", "Umar (RA)", "Uthman (RA)", "Ali (RA)"], answer: "Abu Bakr (RA)" },
{ question: "Which Prophet was given the Torah?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Nuh (AS)"], answer: "Musa (AS)" },
{ question: "What is the first month in the Islamic calendar?", options: ["Muharram", "Ramadan", "Shawwal", "Rajab"], answer: "Muharram" },
{ question: "Which angel records good deeds?", options: ["Raqib", "Atid", "Jibreel", "Israfil"], answer: "Raqib" },
{ question: "Which angel records bad deeds?", options: ["Atid", "Raqib", "Jibreel", "Israfil"], answer: "Atid" },
{ question: "What is the night prayer in Ramadan called?", options: ["Taraweeh", "Tahajjud", "Witr", "Isha"], answer: "Taraweeh" },

{ question: "Who was the Pharaoh during the time of Musa (AS)?", options: ["Firaun", "Namrud", "Haman", "Qarun"], answer: "Firaun" },
{ question: "Which Surah is named after women?", options: ["Surah An-Nisa", "Surah Maryam", "Surah Al-Talaq", "Surah Al-Mujadilah"], answer: "Surah An-Nisa" },
{ question: "Which Surah is named after a cow?", options: ["Surah Al-Baqarah", "Surah Al-An’am", "Surah Al-Qasas", "Surah Al-Kahf"], answer: "Surah Al-Baqarah" },
{ question: "Who is known as 'Khatam an-Nabiyyin'?", options: ["Muhammad (SAW)", "Isa (AS)", "Musa (AS)", "Ibrahim (AS)"], answer: "Muhammad (SAW)" },
{ question: "What is the meaning of 'Islam'?", options: ["Submission", "Peace", "Faith", "Hope"], answer: "Submission" },
{ question: "What is the sacred house in Mecca called?", options: ["Kaaba", "Masjid Nabawi", "Masjid Quba", "Al-Aqsa"], answer: "Kaaba" },
{ question: "Which Surah is often recited for protection?", options: ["Surah Al-Falaq", "Surah Al-Baqarah", "Surah Al-Mulk", "Surah Al-Qari'ah"], answer: "Surah Al-Falaq" },
{ question: "Which Prophet was born without a father?", options: ["Isa (AS)", "Yusuf (AS)", "Musa (AS)", "Ibrahim (AS)"], answer: "Isa (AS)" },
{ question: "Who built the Kaaba with his son?", options: ["Ibrahim (AS)", "Nuh (AS)", "Musa (AS)", "Isa (AS)"], answer: "Ibrahim (AS)" },
{ question: "What is the reward for reciting Surah Al-Ikhlas three times?", options: ["Equal to reciting the whole Quran", "Equal to fasting one day", "Equal to praying at night", "Equal to Hajj"], answer: "Equal to reciting the whole Quran" },
{ question: "What is the name of the second caliph of Islam?", options: ["Umar ibn Al-Khattab (RA)", "Abu Bakr (RA)", "Uthman ibn Affan (RA)", "Ali ibn Abi Talib (RA)"], answer: "Umar ibn Al-Khattab (RA)" },
{ question: "Which battle is known as the 'Battle of the Trench'?", options: ["Battle of Uhud", "Battle of Khandaq", "Battle of Badr", "Battle of Yarmouk"], answer: "Battle of Khandaq" },
{ question: "Who was the first person to accept Islam after Prophet Muhammad (SAW)?", options: ["Khadijah (RA)", "Abu Bakr (RA)", "Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)"], answer: "Khadijah (RA)" },
{ question: "Which Surah of the Quran is the longest?", options: ["Surah Al-Baqarah", "Surah Al-Imran", "Surah An-Nisa", "Surah Al-Ma'idah"], answer: "Surah Al-Baqarah" },
{ question: "What is the name of the battle fought during the time of Prophet Muhammad (SAW) where the Muslims were victorious despite being outnumbered?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Yarmouk"], answer: "Battle of Badr" },
{ question: "Which prophet is known as the 'father of the prophets'?", options: ["Ibrahim (AS)", "Musa (AS)", "Isa (AS)", "Nuh (AS)"], answer: "Ibrahim (AS)" },
{ question: "What is the term for the 'charity tax' in Islam?", options: ["Zakat", "Sadaqah", "Khums", "Sadaqa Jariyah"], answer: "Zakat" },
{ question: "Which city was the birthplace of Prophet Muhammad (SAW)?", options: ["Medina", "Mecca", "Jerusalem", "Ta'if"], answer: "Mecca" },
{ question: "What is the name of the event where Prophet Muhammad (SAW) ascended to the heavens?", options: ["Isra and Miraj", "Battle of Uhud", "Hijra", "Badr"], answer: "Isra and Miraj" },
{ question: "Which companion of the Prophet Muhammad (SAW) is known as 'The Sword of Allah'?", options: ["Khalid ibn Walid (RA)", "Abu Bakr (RA)", "Ali ibn Abi Talib (RA)", "Umar ibn Al-Khattab (RA)"], answer: "Khalid ibn Walid (RA)" },

{ question: "What is the name of the first mosque built by Prophet Muhammad (SAW)?", options: ["Masjid Al-Haram", "Masjid Al-Quba", "Masjid Al-Nabawi", "Masjid Al-Aqsa"], answer: "Masjid Al-Quba" },
{ question: "Which companion of the Prophet Muhammad (SAW) was known as 'The Truthful'?", options: ["Abu Bakr (RA)", "Umar ibn Al-Khattab (RA)", "Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)"], answer: "Abu Bakr (RA)" },
{ question: "Which Surah of the Quran was revealed in Medina?", options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Nisa", "Surah Al-Alaq"], answer: "Surah Al-Baqarah" },
{ question: "Which companion of Prophet Muhammad (SAW) was known as 'The Bearer of the Banner'?", options: ["Hamza ibn Abdul-Muttalib (RA)", "Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)", "Abu Hurairah (RA)"], answer: "Hamza ibn Abdul-Muttalib (RA)" },
{ question: "What is the term for the Islamic ritual washing before prayer?", options: ["Wudu", "Ghusl", "Salah", "Zakat"], answer: "Wudu" },
{ question: "What is the name of the treaty between Prophet Muhammad (SAW) and the Quraysh tribe of Mecca?", options: ["Treaty of Hudaybiyyah", "Treaty of Badr", "Treaty of Uhud", "Treaty of Medina"], answer: "Treaty of Hudaybiyyah" },
{ question: "Who was the first male to accept Islam?", options: ["Abu Bakr (RA)", "Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)", "Zaid ibn Harithah (RA)"], answer: "Ali ibn Abi Talib (RA)" },
{ question: "Which companion was known as the 'Interpreter of the Quran'?", options: ["Abdullah ibn Abbas (RA)", "Ali ibn Abi Talib (RA)", "Uthman ibn Affan (RA)", "Zayd ibn Thabit (RA)"], answer: "Abdullah ibn Abbas (RA)" },
{ question: "Which Surah of the Quran is the shortest?", options: ["Surah Al-Kawthar", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Nas"], answer: "Surah Al-Kawthar" },

{ question: "Which city did Prophet Muhammad (SAW) migrate to during the Hijra?", options: ["Medina", "Mecca", "Jerusalem", "Ta'if"], answer: "Medina" },
{ question: "What is the name of the book that contains the sayings of Prophet Muhammad (SAW)?", options: ["Quran", "Sahih Al-Bukhari", "Hadith", "Tafsir"], answer: "Sahih Al-Bukhari" },
{ question: "Which companion of Prophet Muhammad (SAW) is known as 'The Prophet's Uncle'?", options: ["Abu Talib (RA)", "Hamza ibn Abdul-Muttalib (RA)", "Abu Bakr (RA)", "Uthman ibn Affan (RA)"], answer: "Hamza ibn Abdul-Muttalib (RA)" },
{ question: "Which battle did the Muslims lose but learned valuable lessons?", options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Yarmouk"], answer: "Battle of Uhud" },
{ question: "Which companion was known as 'The Seal of the Scholars'?", options: ["Ali ibn Abi Talib (RA)", "Abdullah ibn Masud (RA)", "Uthman ibn Affan (RA)", "Abu Hurairah (RA)"], answer: "Abdullah ibn Masud (RA)" },
{ question: "Who is known as the 'mother of the believers' among the wives of Prophet Muhammad (SAW)?", options: ["Aisha (RA)", "Khadijah (RA)", "Umm Salama (RA)", "Zaynab (RA)"], answer: "Khadijah (RA)" },
{ question: "Which Surah of the Quran is often referred to as the 'Heart of the Quran'?", options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Yasin", "Surah Al-Alaq"], answer: "Surah Yasin" },
{ question: "What is the name of the mountain where Prophet Muhammad (SAW) received the first revelation?", options: ["Mount Uhud", "Mount Safa", "Mount Hira", "Mount Arafat"], answer: "Mount Hira" },
{ question: "Which companion of Prophet Muhammad (SAW) was known as 'The Sword of Allah'?", options: ["Khalid ibn Walid (RA)", "Abu Bakr (RA)", "Ali ibn Abi Talib (RA)", "Umar ibn Al-Khattab (RA)"], answer: "Khalid ibn Walid (RA)" },

{ question: "What is the meaning of the word 'Quran'?", options: ["The Book of Guidance", "The Book of Light", "The Book of Recitation", "The Book of Wisdom"], answer: "The Book of Recitation" },
{ question: "Which companion was known as 'The Leader of the Youth of Paradise'?", options: ["Ali ibn Abi Talib (RA)", "Al-Hasan ibn Ali (RA)", "Uthman ibn Affan (RA)", "Abu Bakr (RA)"], answer: "Al-Hasan ibn Ali (RA)" },
{ question: "Which prophet is considered the last prophet in Islam?", options: ["Isa (AS)", "Musa (AS)", "Ibrahim (AS)", "Muhammad (SAW)"], answer: "Muhammad (SAW)" },
{ question: "Which city is known as the city of Prophet Muhammad (SAW)?", options: ["Mecca", "Medina", "Jerusalem", "Ta'if"], answer: "Medina" },
{ question: "What is the first Surah of the Quran?", options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Alaq"], answer: "Surah Al-Fatiha" },
{ question: "What is the term used for the Islamic prayer performed five times a day?", options: ["Salah", "Zakat", "Hajj", "Sawm"], answer: "Salah" },
{ question: "Who is the 'Messenger of Allah' in Islam?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Muhammad (SAW)"], answer: "Muhammad (SAW)" },
{ question: "Which companion of the Prophet Muhammad (SAW) was known for his strength and bravery?", options: ["Ali ibn Abi Talib (RA)", "Abu Bakr (RA)", "Uthman ibn Affan (RA)", "Amr ibn al-As (RA)"], answer: "Ali ibn Abi Talib (RA)" },
{ question: "What is the name of the final book revealed to Prophet Muhammad (SAW)?", options: ["Taurat", "Injil", "Zabur", "Quran"], answer: "Quran" },
{ question: "Which Surah of the Quran is named after a prophet?", options: ["Surah Al-Baqarah", "Surah Yasin", "Surah Ibrahim", "Surah Al-Mulk"], answer: "Surah Ibrahim" },

{ question: "Which Prophet is mentioned the most in the Quran?", options: ["Musa (AS)", "Ibrahim (AS)", "Isa (AS)", "Muhammad (SAW)"], answer: "Musa (AS)" },
{ question: "Who was the first child to accept Islam?", options: ["Ali ibn Abi Talib (RA)", "Zayd ibn Harithah (RA)", "Abdullah ibn Mas'ud (RA)", "Hasan ibn Ali (RA)"], answer: "Ali ibn Abi Talib (RA)" },
{ question: "Which Surah does not begin with Bismillah?", options: ["Surah At-Tawbah", "Surah Al-Fatiha", "Surah Al-Ma'un", "Surah Al-Baqarah"], answer: "Surah At-Tawbah" },
{ question: "Which Prophet could speak to animals?", options: ["Sulaiman (AS)", "Dawud (AS)", "Nuh (AS)", "Isa (AS)"], answer: "Sulaiman (AS)" },
{ question: "Which Surah was revealed completely at once?", options: ["Surah Al-An’am", "Surah Al-Fatiha", "Surah Al-Kahf", "Surah Al-Ikhlas"], answer: "Surah Al-An’am" },
{ question: "Which country is known as the land of the Prophets?", options: ["Palestine", "Saudi Arabia", "Egypt", "Syria"], answer: "Palestine" },
{ question: "Who was the mother of Prophet Isa (AS)?", options: ["Maryam (AS)", "Aminah (RA)", "Khadijah (RA)", "Asiya (RA)"], answer: "Maryam (AS)" },
{ question: "What was the first word revealed in the Quran?", options: ["Iqra", "Bismillah", "Alhamdulillah", "Qul"], answer: "Iqra" },
{ question: "Which Prophet was given the miracle of healing?", options: ["Isa (AS)", "Musa (AS)", "Muhammad (SAW)", "Yusuf (AS)"], answer: "Isa (AS)" },
{ question: "Which battle is known as the turning point for Muslims?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Battle of Tabuk"], answer: "Battle of Badr" },

{ question: "What is the longest Surah in the Quran?", options: ["Surah Al-Baqarah", "Surah An-Nisa", "Surah Al-A’raf", "Surah Al-Imran"], answer: "Surah Al-Baqarah" },
{ question: "Which Prophet had a staff that turned into a snake?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Sulaiman (AS)"], answer: "Musa (AS)" },
{ question: "What is the Islamic ruling on interest (riba)?", options: ["Haram", "Makruh", "Halal", "Fard"], answer: "Haram" },
{ question: "Which Prophet was thrown into a fire?", options: ["Ibrahim (AS)", "Isa (AS)", "Yunus (AS)", "Musa (AS)"], answer: "Ibrahim (AS)" },
{ question: "How many heavens are mentioned in Islam?", options: ["Seven", "Three", "Ten", "Nine"], answer: "Seven" },
{ question: "Which two holidays are celebrated in Islam?", options: ["Eid al-Fitr and Eid al-Adha", "Ramadan and Hajj", "Ashura and Ramadan", "Jumu'ah and Hajj"], answer: "Eid al-Fitr and Eid al-Adha" },
{ question: "Which Surah is considered the heart of the Quran?", options: ["Surah Yasin", "Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Ar-Rahman"], answer: "Surah Yasin" },
{ question: "What is the name of the well near the Kaaba?", options: ["Zamzam", "Bir Yusuf", "Salsabil", "Hawdh"], answer: "Zamzam" },
{ question: "What is the Islamic ruling on backbiting (Gheebah)?", options: ["Haram", "Halal", "Fard", "Makruh"], answer: "Haram" },
{ question: "Which Prophet had control over jinns?", options: ["Sulaiman (AS)", "Musa (AS)", "Isa (AS)", "Yunus (AS)"], answer: "Sulaiman (AS)" },

{ question: "Who led the Muslim army in the Battle of Yarmouk?", options: ["Khalid ibn Walid (RA)", "Ali ibn Abi Talib (RA)", "Umar ibn Al-Khattab (RA)", "Amr ibn Al-As (RA)"], answer: "Khalid ibn Walid (RA)" },
{ question: "Who was the first martyr in Islam?", options: ["Sumayyah bint Khayyat (RA)", "Ammar ibn Yasir (RA)", "Hamza ibn Abdul Muttalib (RA)", "Bilal ibn Rabah (RA)"], answer: "Sumayyah bint Khayyat (RA)" },
{ question: "What was the profession of Prophet Dawud (AS)?", options: ["Blacksmith", "Carpenter", "Shepherd", "Merchant"], answer: "Blacksmith" },
{ question: "Which Prophet made a dua that is often recited for patience?", options: ["Ayyub (AS)", "Yunus (AS)", "Musa (AS)", "Ibrahim (AS)"], answer: "Ayyub (AS)" },
{ question: "How many verses are in the Quran?", options: ["Over 6200", "Over 5000", "Over 7000", "Over 600"], answer: "Over 6200" },
{ question: "Which Surah is known for being a cure?", options: ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Mulk", "Surah Al-Kahf"], answer: "Surah Al-Fatiha" },
{ question: "Which battle was fought during Ramadan?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Hunayn", "Battle of Tabuk"], answer: "Battle of Badr" },
{ question: "What is the Islamic ruling on magic (sihr)?", options: ["Haram", "Makruh", "Halal", "Mustahab"], answer: "Haram" },
{ question: "Who was known as the 'Sword of Allah'?", options: ["Khalid ibn Walid (RA)", "Ali ibn Abi Talib (RA)", "Umar ibn Al-Khattab (RA)", "Zubair ibn Awwam (RA)"], answer: "Khalid ibn Walid (RA)" },
{ question: "Which Prophet was known for his beautiful voice?", options: ["Dawud (AS)", "Yusuf (AS)", "Isa (AS)", "Musa (AS)"], answer: "Dawud (AS)" },
{ question: "Which angel is responsible for blowing the trumpet on the Day of Judgment?", options: ["Israfil", "Jibril", "Mikail", "Malik"], answer: "Israfil" },
{ question: "Who was the mother of Prophet Isa (AS)?", options: ["Maryam (AS)", "Khadijah (RA)", "Amina bint Wahb", "Hajar (AS)"], answer: "Maryam (AS)" },
{ question: "Which Prophet was swallowed by a big fish?", options: ["Yunus (AS)", "Musa (AS)", "Nuh (AS)", "Isa (AS)"], answer: "Yunus (AS)" },
{ question: "Which Surah has two Bismillahs?", options: ["Surah An-Naml", "Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Ar-Rahman"], answer: "Surah An-Naml" },
{ question: "How many daily prayers are obligatory in Islam?", options: ["5", "3", "7", "6"], answer: "5" },
{ question: "Which battle was known as the battle of the trench?", options: ["Battle of Khandaq", "Battle of Uhud", "Battle of Badr", "Battle of Hunayn"], answer: "Battle of Khandaq" },
{ question: "Which Prophet spoke from the cradle?", options: ["Isa (AS)", "Yusuf (AS)", "Ismail (AS)", "Ishaq (AS)"], answer: "Isa (AS)" },
{ question: "Which companion is buried beside the Prophet Muhammad (SAW)?", options: ["Abu Bakr (RA)", "Umar ibn Al-Khattab (RA)", "Ali (RA)", "Uthman (RA)"], answer: "Abu Bakr (RA)" },
{ question: "What is the name of the mountain where the Quran was first revealed?", options: ["Mount Hira", "Mount Uhud", "Mount Sinai", "Mount Arafat"], answer: "Mount Hira" },
{ question: "Which month was fasting made obligatory?", options: ["Ramadan", "Muharram", "Shawwal", "Rajab"], answer: "Ramadan" },

{ question: "Who was the first martyr in Islam?", options: ["Sumayyah bint Khayyat (RA)", "Bilal (RA)", "Khabab (RA)", "Hamza (RA)"], answer: "Sumayyah bint Khayyat (RA)" },
{ question: "Which Prophet was able to interpret dreams?", options: ["Yusuf (AS)", "Ibrahim (AS)", "Yunus (AS)", "Isa (AS)"], answer: "Yusuf (AS)" },
{ question: "What was the Prophet’s age at the time of his death?", options: ["63", "60", "65", "61"], answer: "63" },
{ question: "Who was known as the 'Lion of Allah'?", options: ["Hamza ibn Abdul Muttalib (RA)", "Ali ibn Abi Talib (RA)", "Umar ibn Al-Khattab (RA)", "Khalid ibn Walid (RA)"], answer: "Hamza ibn Abdul Muttalib (RA)" },
{ question: "How many chapters (Surahs) are in the Quran?", options: ["114", "113", "112", "115"], answer: "114" },
{ question: "What is the Night of Decree called in Arabic?", options: ["Laylatul Qadr", "Isra wal Miraj", "Shab e Baraat", "Laylatul Bara’ah"], answer: "Laylatul Qadr" },
{ question: "Which Surah mentions the spider?", options: ["Surah Al-Ankabut", "Surah An-Naml", "Surah Al-Baqarah", "Surah Al-Fil"], answer: "Surah Al-Ankabut" },
{ question: "How many Makki Surahs are in the Quran?", options: ["86", "28", "114", "72"], answer: "86" },
{ question: "Which Prophet is known for his beautiful voice?", options: ["Dawud (AS)", "Yusuf (AS)", "Isa (AS)", "Musa (AS)"], answer: "Dawud (AS)" },
{ question: "Which Surah does not start with Bismillah?", options: ["Surah At-Tawbah", "Surah Al-Baqarah", "Surah Al-An’am", "Surah Al-A'raf"], answer: "Surah At-Tawbah" },

{ question: "What is the name of the gate of Jannah for those who fast?", options: ["Ar-Rayyan", "Ar-Rahmah", "As-Salah", "Al-Jihad"], answer: "Ar-Rayyan" },
{ question: "Which angel is responsible for delivering revelation?", options: ["Jibril", "Israfil", "Mikail", "Malik"], answer: "Jibril" },
{ question: "Which Surah is the longest in the Quran?", options: ["Surah Al-Baqarah", "Surah Al-Imran", "Surah An-Nisa", "Surah Al-Maidah"], answer: "Surah Al-Baqarah" },
{ question: "How many years did Prophet Nuh (AS) preach to his people?", options: ["950", "900", "500", "750"], answer: "950" },
{ question: "Which Sahabi was known as 'As-Siddiq'?", options: ["Abu Bakr (RA)", "Umar (RA)", "Ali (RA)", "Uthman (RA)"], answer: "Abu Bakr (RA)" },
{ question: "Who was the Prophet's (SAW) wet nurse?", options: ["Halima Saadia", "Amina", "Khadijah", "Fatimah"], answer: "Halima Saadia" },
{ question: "Who was the first person to accept Islam among the women?", options: ["Khadijah (RA)", "Aisha (RA)", "Fatimah (RA)", "Zaynab (RA)"], answer: "Khadijah (RA)" },
{ question: "What is the punishment for a false accusation of adultery in Islam?", options: ["80 lashes", "Stoning", "100 lashes", "Exile"], answer: "80 lashes" },
{ question: "Which Prophet was raised into the heavens without dying?", options: ["Isa (AS)", "Yunus (AS)", "Ibrahim (AS)", "Musa (AS)"], answer: "Isa (AS)" },
{ question: "Which Sahabi was known as the Sword of Allah?", options: ["Khalid ibn Walid (RA)", "Hamza (RA)", "Ali (RA)", "Umar (RA)"], answer: "Khalid ibn Walid (RA)" },

{ question: "Which Prophet had a conversation with Allah directly?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Adam (AS)"], answer: "Musa (AS)" },
{ question: "Which city was the Prophet (SAW) born in?", options: ["Makkah", "Madinah", "Taif", "Jerusalem"], answer: "Makkah" },
{ question: "Which Prophet was the father of Prophet Yusuf (AS)?", options: ["Yaqub (AS)", "Ishaq (AS)", "Ibrahim (AS)", "Lut (AS)"], answer: "Yaqub (AS)" },
{ question: "Who built the Kaaba with Ibrahim (AS)?", options: ["Ismail (AS)", "Ishaq (AS)", "Musa (AS)", "Nuh (AS)"], answer: "Ismail (AS)" },
{ question: "What was the name of Prophet Muhammad's (SAW) mother?", options: ["Amina bint Wahb", "Halima", "Fatimah", "Khadijah"], answer: "Amina bint Wahb" },
{ question: "Which animal is mentioned in the story of the People of the Cave?", options: ["Dog", "Camel", "Lion", "Elephant"], answer: "Dog" },
{ question: "What is the significance of the 27th night of Ramadan?", options: ["Possibly Laylatul Qadr", "Start of Ramadan", "End of Hajj", "Eid night"], answer: "Possibly Laylatul Qadr" },
{ question: "Which Prophet was known for his justice as a king?", options: ["Sulaiman (AS)", "Musa (AS)", "Yusuf (AS)", "Dawud (AS)"], answer: "Sulaiman (AS)" },
{ question: "How many companions fought in the Battle of Badr?", options: ["313", "1000", "700", "400"], answer: "313" },
{ question: "Which Surah describes the Day of Judgment in detail?", options: ["Surah Al-Qiyamah", "Surah Al-Fil", "Surah Al-Baqarah", "Surah Al-Kafirun"], answer: "Surah Al-Qiyamah" }
[
{ question: "What is the first word revealed in the Quran?", options: ["Iqra", "Bismillah", "Alhamdulillah", "Ya Ayyuha"], answer: "Iqra" },
{ question: "Which Prophet could speak in infancy?", options: ["Isa (AS)", "Musa (AS)", "Ibrahim (AS)", "Yusuf (AS)"], answer: "Isa (AS)" },
{ question: "How many chapters are there in the Quran?", options: ["114", "112", "113", "115"], answer: "114" },
{ question: "Which angel is responsible for bringing down revelations?", options: ["Jibril", "Mikail", "Israfil", "Malik"], answer: "Jibril" },
{ question: "Which Prophet was swallowed by a whale?", options: ["Yunus (AS)", "Nuh (AS)", "Musa (AS)", "Isa (AS)"], answer: "Yunus (AS)" },
{ question: "Who built the Kaaba?", options: ["Ibrahim (AS) and Ismail (AS)", "Musa (AS)", "Sulaiman (AS)", "Nuh (AS)"], answer: "Ibrahim (AS) and Ismail (AS)" },
{ question: "Which prayer is offered just after sunset?", options: ["Maghrib", "Isha", "Asr", "Fajr"], answer: "Maghrib" },
{ question: "Who was the first martyr in Islam?", options: ["Sumayyah bint Khayyat (RA)", "Khadijah (RA)", "Ammar ibn Yasir (RA)", "Umar (RA)"], answer: "Sumayyah bint Khayyat (RA)" },
{ question: "What is the night journey called?", options: ["Isra and Miraj", "Hijrah", "Badr", "Hudaibiyah"], answer: "Isra and Miraj" },
{ question: "What does 'SubhanAllah' mean?", options: ["Glory be to Allah", "Praise be to Allah", "Allah is Great", "There is no god but Allah"], answer: "Glory be to Allah" },

{ question: "Who is the last Prophet of Islam?", options: ["Muhammad (SAW)", "Isa (AS)", "Musa (AS)", "Ibrahim (AS)"], answer: "Muhammad (SAW)" },
{ question: "What is the name of the Islamic month of fasting?", options: ["Ramadan", "Shaban", "Rajab", "Muharram"], answer: "Ramadan" },
{ question: "Which Prophet parted the sea?", options: ["Musa (AS)", "Isa (AS)", "Ibrahim (AS)", "Yunus (AS)"], answer: "Musa (AS)" },
{ question: "What is the 5th pillar of Islam?", options: ["Hajj", "Zakat", "Fasting", "Salah"], answer: "Hajj" },
{ question: "What does 'La ilaha illallah' mean?", options: ["There is no god but Allah", "Allah is Great", "Praise be to Allah", "Glory be to Allah"], answer: "There is no god but Allah" },
{ question: "Which animal did Prophet Isa (AS) bring to life?", options: ["Bird", "Camel", "Horse", "Fish"], answer: "Bird" },
{ question: "What does 'InshaAllah' mean?", options: ["If Allah wills", "Thanks to Allah", "Glory be to Allah", "Praise be to Allah"], answer: "If Allah wills" },
{ question: "Who is the Angel of Death?", options: ["Malak al-Mawt", "Jibril", "Mikail", "Israfil"], answer: "Malak al-Mawt" },
{ question: "Which Surah is the longest in the Quran?", options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Kahf"], answer: "Al-Baqarah" },
{ question: "What is the meaning of 'Islam'?", options: ["Submission to Allah", "Peace", "Worship", "Belief"], answer: "Submission to Allah" },

{ question: "Which Prophet was known for his beautiful voice?", options: ["Dawud (AS)", "Sulaiman (AS)", "Musa (AS)", "Isa (AS)"], answer: "Dawud (AS)" },
{ question: "Which city was Prophet Muhammad (SAW) born in?", options: ["Makkah", "Madinah", "Jerusalem", "Taif"], answer: "Makkah" },
{ question: "What is the ruling on prayer in Islam?", options: ["Obligatory", "Recommended", "Voluntary", "Prohibited"], answer: "Obligatory" },
{ question: "Which month is known as the month of Allah?", options: ["Muharram", "Ramadan", "Rajab", "Shaban"], answer: "Muharram" },
{ question: "Which Prophet could understand the language of animals?", options: ["Sulaiman (AS)", "Dawud (AS)", "Ibrahim (AS)", "Musa (AS)"], answer: "Sulaiman (AS)" },
{ question: "What does 'Bismillah' mean?", options: ["In the name of Allah", "Praise be to Allah", "Allah is the Greatest", "Peace be upon you"], answer: "In the name of Allah" },
{ question: "What is the meaning of 'Alhamdulillah'?", options: ["All praise is due to Allah", "Peace be upon you", "There is no god but Allah", "Allah is the Greatest"], answer: "All praise is due to Allah" },
{ question: "Which battle was the turning point for Muslims?", options: ["Battle of Badr", "Battle of Uhud", "Battle of Hunayn", "Battle of Khandaq"], answer: "Battle of Badr" },
{ question: "What is 'Qiblah'?", options: ["Direction of prayer", "Mosque", "Charity", "Fasting"], answer: "Direction of prayer" },
{ question: "What is the Arabic word for fasting?", options: ["Sawm", "Zakat", "Hajj", "Salah"], answer: "Sawm" },

{ question: "Who built Masjid Al-Aqsa?", options: ["Sulaiman (AS)", "Isa (AS)", "Dawud (AS)", "Musa (AS)"], answer: "Sulaiman (AS)" },
{ question: "Which Surah is known to protect from Dajjal?", options: ["Surah Al-Kahf", "Surah Yasin", "Surah Rahman", "Surah Falaq"], answer: "Surah Al-Kahf" },
{ question: "How many daily prayers are obligatory?", options: ["5", "3", "4", "6"], answer: "5" },
{ question: "What is the meaning of 'Taqwa'?", options: ["God-consciousness", "Faith", "Prayer", "Charity"], answer: "God-consciousness" },
{ question: "What is the punishment of backbiting in Islam?", options: ["Sinful act", "Major reward", "Recommended", "Permissible"], answer: "Sinful act" },
{ question: "Who was the uncle of Prophet Muhammad (SAW) that supported him?", options: ["Abu Talib", "Abu Lahab", "Abbas", "Hamzah"], answer: "Abu Talib" },
{ question: "What is the reward of saying 'SubhanAllah wa bihamdihi' 100 times?", options: ["Sins forgiven", "Paradise guaranteed", "Long life", "Wealth"], answer: "Sins forgiven" },
{ question: "Which Prophet had 12 sons?", options: ["Yaqub (AS)", "Ibrahim (AS)", "Nuh (AS)", "Lut (AS)"], answer: "Yaqub (AS)" },
{ question: "What is 'Hijrah'?", options: ["Migration to Madinah", "Prayer", "Fasting", "Battle"], answer: "Migration to Madinah" },
{ question: "Which angel will blow the trumpet?", options: ["Israfil", "Jibril", "Mikail", "Malik"], answer: "Israfil" }
]

    
  
    // Add more questions here...
];

function loadQuestion() {
    const question = questions[currentQuestion - 1];  // Get the current question
    document.querySelector('.question').textContent = question.question;
    const choices = document.querySelectorAll('.answer-choice');
    choices.forEach((choice, index) => {
        choice.textContent = question.options[index];  // Display options
        choice.classList.remove('selected');  // Remove selected class from previous answer
    });
    document.querySelector('.progress p').textContent = `Question ${currentQuestion}/${totalQuestions}`;
}

function selectAnswer(choice) {
    const choices = document.querySelectorAll('.answer-choice');
    choices.forEach(choice => choice.classList.remove('selected'));  // Remove selected class from other options
    choice.classList.add('selected');  // Add selected class to the clicked choice
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('.answer-choice.selected');
    if (selectedAnswer) {
        const currentQuestionObj = questions[currentQuestion - 1];
        if (selectedAnswer.textContent === currentQuestionObj.answer) {
            score++;  // Increment score if the answer is correct
        }
        answeredQuestions++;  // Increment answered questions counter
    }

    // Check if 10 questions have been answered
    if (answeredQuestions % 10 === 0) {
        showResults();  // Show results after every 10 questions
    } else {
        if (currentQuestion < currentSet * 10 && currentQuestion < totalQuestions) {
            currentQuestion++;  // Move to the next question in the current set
            loadQuestion();  // Load the next question
        } else {
            showResults();  // Show results if we reach the end of the set or total questions
        }
    }
}

function showResults() {
    alert(`You answered ${score} out of ${answeredQuestions} questions correctly!`);
    
    const continueQuiz = confirm("Do you want to continue to the next set of questions?");
    
    if (continueQuiz) {
        // Reset score and answered questions count for the next set of 10 questions
        score = 0;
        answeredQuestions = 0;
        currentSet++;  // Increment to the next set of questions
        
        if (currentSet * 10 <= totalQuestions) {
            currentQuestion = (currentSet - 1) * 10 + 1;  // Start from the first question of the new set
            loadQuestion();  // Load the first question of the new set
        } else {
            alert("Congratulations! You have completed all the questions.");
        }
    } else {
        alert("Thank you for completing the quiz!");  // Thank the user if they choose not to continue
    }
}

// Initial question load
loadQuestion();
