import babyImg from "@/assets/photo_01.jpg";
import collegeImg from "@/assets/photo_02.jpg";
import footImg from "@/assets/photo_03.jpg";
import friendImg from "@/assets/photo_04.jpg";
import schoolImg from "@/assets/photo_05.jpg";
import studyImg from "@/assets/photo_06.jpg";
import secondyImg from "@/assets/photo_07.jpg";
import warmPortrait from "@/assets/photo_09.jpg";
import img1 from "@/assets/image_1.png";
import img2 from "@/assets/image_2.png";
import img3 from "@/assets/image_3.jpg";
import img4 from "@/assets/image_4.jpg";
import img5 from "@/assets/image_5.jpg";
import img6 from "@/assets/image_6.jpg";
import img7 from "@/assets/image_7.jpg";
import img8 from "@/assets/image_8.jpg";
import img9 from "@/assets/image_9.jpg";
import img10 from "@/assets/image_10.jpg";
import img11 from "@/assets/image_11.jpg";
import img12 from "@/assets/image_12.jpg";
import img13 from "@/assets/image_13.png";
import img14 from "@/assets/image_14.jpg";
import img15 from "@/assets/image_15.jpg";
import img16 from "@/assets/image_16.jpg";

export const NAV = [
  { id: "birthday", label: "Happy Birthday" },
  { id: "countdown", label: "Birthday countdown" },
  { id: "frames", label: "Ma'am Ji" },
  { id: "opening", label: "For Shuru" },
  { id: "journey", label: "Yor Presence" },
  { id: "film", label: "Everything" },
  { id: "birthday-book", label: "Birthday book" },
  { id: "unsaid", label: "Things unsaid" },
  { id: "ending", label: "Dream" },
] as const;

export const BIRTHDAY_WORDS = ["Happy", "Birthday", "Shuru"] as const;

export const CONFESSIONS = [
  "Today belongs completely to you.",
  "Celebrating the brightest, kindest soul.",
  "Bas aap hastie raho, hamesha.",
  "Happy Birthday, Shuru.",
] as const;

export interface ConfessionStage {
  id: string;
  badge: string;
  heading: string;
  lead: string;
  subline?: string;
  img?: string;
  imgCaption?: string;
  highlightWords?: string[];
}

export const CONFESSION_STAGES: readonly ConfessionStage[] = [
  {
    id: "stage-countdown-begins",
    badge: "Meri Ma'am Ji",

    heading: "Shivraatri ki wo snap",

    lead:
      "Yeh suit mere liye sabse favourite hai",

    subline:
      "aur mere liye aapka hona sabse precious hai",

    img: img3,

    imgCaption:
      "Shivratri, 2025",

    highlightWords: [
      "-",
    ],
  },

  {
    id: "stage-getting-closer",
    badge: "Wo Screenshot Lena",

    heading: "Aapki Pyaari Highlights ke screenshot lena.",

    lead:
      "Late Night Aapki ID ko sukoon ke liye dekhna.",

    subline:
      "Aur Imagine karna unhe sapno ko",

    img: img4,

    imgCaption:
      "Screenshot Captured",

    highlightWords: [
      "-",
    ],
  },

  {
    id: "stage-almost-here",
    badge: "Magical Hands",

    heading: "Yeh Photo Alag Hai",

    lead:
      "Yeh Haathon ki Mehndi Itni Pyaari Hai",

    subline:
      "Isliye toh Wait Rehta hai aap kab mehndi lagaoge…",

    img: img5,

    imgCaption:
      "Nazar Na Lage",

    highlightWords: [
      "-",
    ],
  },

  {
    id: "stage-the-eve",
    badge: "80's Heroine",

    heading: "Aapki Muskurahat",

    lead:
      "Aapki smile hi sabse khoobsurat hai",

    subline:
      "Aapki smile ne mujhe sukoon wali Raat di hain.",

    img: secondyImg,

    imgCaption:
      "Classic Look",

    highlightWords: [
      "-",
    ],
  },

  {
    id: "stage-climax",
    badge: "16 September",

    heading: "Happy Birthday, Shuru ❤️",

    lead:
      "Govind Dev Ji Aapki Har Wish Puri Kare...",

    subline:
      "Aur Mein Aapko Aur Pareshan karta Rahun",

    img: img2,

    imgCaption:
      "meri ma'am ji",

    highlightWords: [
      "-",
    ],
  },
] as const;

export const STORY_PANELS = [
  {
    img: schoolImg,
    eyebrow: "01 · Formal Royal Look",
    title: "Itni Cutness Kha se Aati Hai",
    line: "-",
  },
  {
    img: collegeImg,
    eyebrow: "02 · Sukoon Wala Frame",
    title: "Hayeee Look",
    line: "-",
  },
  {
    img: img5,
    eyebrow: "03 · Mehndi & Nautanki",
    title: "Desi Swag",
    line: "-.",
  },
  {
    img: img6,
    eyebrow: "04 · Laal Saree & Dimple",
    title: "Yeh Dimple Illegal Hona Chahiye!",
    line: "-",
  },
  {
    img: img2,
    eyebrow: "05 · Birthday Girl Special",
    title: "Meri Pyari Ma'am Ji",
    line: "-",
  },
] as const;

export const PORTRAITS = { hero: img1, offset: secondyImg, childhoodA: babyImg, childhoodB: footImg };

export const QUALITIES = [
  {
    img: img3,
    title: "Your poise",
    note: "Embroidery & silver",
    line: "Floral kurti, oxidized choker, henna on your hands — composure that already feels complete.",
  },
  {
    img: img4,
    title: "Your soft smile",
    note: "Stars in the frame",
    line: "Chin in hand, striped top, quiet smile — the warmth no sparkle filter can invent.",
  },
  {
    img: img5,
    title: "Your playfulness",
    note: "Peace & mehndi",
    line: "Peace sign, dark henna tips, floral blouse — festive energy without forcing a pose.",
  },
  {
    img: img6,
    title: "Your dimple",
    note: "Festival red",
    line: "Gold blouse, bandhani saree, and the dimple that arrives mid-smile.",
  },
  {
    img: warmPortrait,
    title: "Your warmth",
    note: "Lavender & daylight",
    line: "Soft collar, open smile, home light — the easy kindness people feel when you walk in.",
  },
  {
    img: img8,
    title: "Your quiet depth",
    note: "Still, in black & white",
    line: "Hand to cheek, clock and mandir behind you — a calm that holds the whole room.",
  },
] as const;

export const STAGES = [
  {
    stage: "I",
    title: "Khula Aasmaan Aur Masoomiyat",
    mood: "-",
    img: babyImg,
    desc: "Gaal pe haath aur aakhon mein badi si duniya dekhne ka sapna... kitni masoom lagti ho aap!",
  },
  {
    stage: "II",
    title: "Hawa Mein Lehrate Baal",
    mood: "-",
    img: footImg,
    desc: "inhe Zulfuon ka yuh chehre pe aana, aur uske saath aapka smile dena... Bas ",
  },
  {
    stage: "III",
    title: "Sweet Saree Look",
    mood: "-",
    img: schoolImg,
    desc: "",
  },
  {
    stage: "IV",
    title: "Pyaari Smile",
    mood: "-",
    img: collegeImg,
    desc: "Cutest Look of my Ma'am Ji",
  },
  {
    stage: "V",
    title: "Aaj Ka Din Sirf Aapka Hai",
    mood: "-",
    img: img2,
    desc: "Confidence, wahi pyaari nigahein aur aapka birthday...",
  },
] as const;

export const GLIMPSES = [
  { src: img3, caption: "Shivratri Look" },
  { src: img4, caption: "Aapki Highlight" },
  { src: img5, caption: "Hathon Par Mehndi" },
  { src: img6, caption: "First Saree Look" },
  { src: img15, caption: "Gold Bangles" },
  { src: img8, caption: "Quiet Pose" },
  { src: img16, caption: "Mirror" },
  { src: img10, caption: "God Look" },
  { src: img11, caption: "Navraatri Look" },
  { src: img12, caption: "Winter Glow" },
  { src: img13, caption: "Whatsapp DP" },
  { src: img14, caption: "Yellow Flower" },
] as const;

export const LAYERS = [
  {
    img: img15,
    title: "Silver & Cream Magic",
    note: "Wo delicate sa choker, beautiful embroidery, aur aapka classy andaaz...",
  },
  {
    img: img16,
    title: "Wo Pyaara Sa Wink",
    note: "Wo cute sa wink... bilkul unfiltered...",
  },
  {
    img: img13,
    title: "Hallway Glow",
    note: "Lagta hai Suraj Bhi jal gaya...",
  },
] as const;

export const WHISPERS = [
  {
    img: img9,
    label: "Aapki Hassi",
    quote:
      "Magic hai usmein, jo sab kuch thik kar deti hai...",
  },
  {
    img: img10,
    label: "Aapka Style",
    quote:
      "Aapka wo cute sa payara nature...",
  },
  {
    img: img11,
    label: "Aapka Mind",
    quote:
      "Aapka sab kuch samjh lena...",
  },
  {
    img: img12,
    label: "Aapki Smile",
    quote:
      "Everything for me...",
  },
  {
    img: babyImg,
    label: "Shuruaat",
    quote:
      "Special for me...",
  },
  {
    img: footImg,
    label: "Aapki Kahani",
    quote:
      "Love to Listen...",
  },
] as const;

export const DREAMS = [
  {
    img: img2,
    when: "Golden Evenings",
    title: "Aapki Kamyabi ✨",
    desc: "Aapki khamosh mehnat rang laaye, aur aap garv se muskura kar kaho \"Maine kar dikhaya!\"",
    note: "Bas Dhyan Rakha Karo Khud Ka Thoda Sa.",
    tag: "Milestone",
  },
  {
    img: studyImg,
    when: "Fresh Mornings",
    title: "Andhar Ka Sukoon",
    desc: "Sabka Dhyan Rakhte Rakhhte aur muskuraana",
    note: "Aapka focus kamaal hai, bas aise hi chamakte rehna!",
    tag: "Ambition",
  },
  {
    img: collegeImg,
    when: "Spontaneous Hours",
    title: "Aapki Befikra Hassi 🌸",
    desc: "Random plans, lambi baatein aur bina kisi fikr ke aapka dil khol kar hasna.",
    note: "Aapki yeh masoom smile hamesha aisi hi bani rahe.",
    tag: "Joy",
  },
  {
    img: friendImg,
    when: "Through Every Season",
    title: "Ek Pyara Sa Saath",
    desc: "Bina bole dil ki baat samajh lena — jahan hamesha apnapan, trust aur sukoon ho.",
    note: "Duniya jahan bhi le jaye, main hamesha aapke saath hoon.",
    tag: "Forever",
  },
] as const;

export interface BookPageLeft {
  kicker: string;
  title: string;
  subtitle?: string;
  paragraphs: readonly string[];
  quote?: string;
  pageNumber: number;
}

export interface BookPageRight {
  kicker: string;
  title: string;
  paragraphs: readonly string[];
  signOff?: {
    close: string;
    sign: string;
  };
  pageNumber: number;
}

export interface BookChapter {
  id: string;
  tabTitle: string;
  chapterNum: string;
  leftPage: BookPageLeft;
  rightPage: BookPageRight;
}

export const BOOK_CHAPTERS: readonly BookChapter[] = [
  {
    id: "chapter-1",
    tabTitle: "Pheli Dafa",
    chapterNum: "Chapter I",

    leftPage: {
      kicker: "Ek Chhoti Si Shuruaat",
      title: "Pheli Dafa",
      subtitle: "Meri Pyaari Ma'am Ji ke naam",

      paragraphs: [
        "Kuch log zindagi mein bas ek baar milte hain, lekin aapke liye sab kuch banne jaate hain. Mere Liye aap wohi person ho. Mere Sab Kuch....",

        "Pata nahi uss din jab aapko pheli baar dekha pata nahi aisa kya tha, lekin aaj bhi jab uss din ke baare mein sochta hoon, toh ek cheez yaad aati hai. Aapki wo pyaari smile",

        "Shayad uss waqt mujhe khud bhi nahi pata tha ki mein aapko har roz pareshan karunga.",
      ],

      quote:
        "“Jab se aap mile ho tab se har din pyaara sa lagta hai. Aapke saath har pal special lagta hai.”",

      pageNumber: 1,
    },

    rightPage: {
      kicker: "Miss Shuru",
      title: "Pheli Nazar Se Aaj Tak",

      paragraphs: [
        "Kuch toh hai jo aap mein bahut zyada special hai, jo mujhe uss din se yaad hai jab mene aapko pehli baar dekha tha.",

        "Waqt ke saath shayad cheezein badalti gayi, mein aapko aur zayada pareshan karne lage gaya, aapko thoda aur samajhne ka mauka mila lekin ek cheez same rahi aapki woh alag si presence. Jo bhoot special hai.",

        "Aur shayad isi liye aaj bhi woh moment yaad hai jab mene aapko pheli baar dekha tha, ek normal memory nahi lagti. Woh ek aisi yaad hai jise yaad karke automatically smile aa jaati hai.",
      ],

      pageNumber: 2,
    },
  },

  {
    id: "chapter-2",
    tabTitle: "Aapki Muskaan",
    chapterNum: "Chapter II",

    leftPage: {
      kicker: "Ek Khoobsurat Cheez",
      title: "Aapki Muskaan",

      paragraphs: [
        "Aapki smile mein kuch toh baat hai. Woh sirf ek smile nahi hai usmein ek ajeeb si warmth hai jo saamne wale ka mood bina kuch kahe better kar deti hai.",

        "Kabhi kabhi ek chhoti si smile bhi poore din ka mood change kar deti hai, aur aapki smile bilkul waisi hi hai simple, natural aur dil se nikli hui.",

        "Aur sabse achhi baat? Aapko shayad khud bhi realise nahi hota ki aapki ek smile kisi aur ke liye kitni special ho sakti hai.",
      ],

      quote:
        "“Kuch smiles sirf chehre par nahi hoti… woh saamne wale ke din mein bhi thodi si roshni chhod jaati hain.”",

      pageNumber: 3,
    },

    rightPage: {
      kicker: "That Little Spark",
      title: "Muskaan Ke Peeche Wali Aap",

      paragraphs: [
        "Aapki smile jitni khoobsurat hai, usse bhi zyada khoobsurat hai woh personality jo uss smile ke peeche hai.",

        "Aapka sense of humour, aapka way of talking aur chhoti-chhoti baaton mein khushi dhoond lena yeh sab milkar aapko aur bhi special bana dete hain.",

        "Bas ek request hai life chahe kitni bhi busy ya difficult ho jaaye, uss smile ko kabhi disappear mat hone dena.",
      ],

      pageNumber: 4,
    },
  },

  {
    id: "chapter-3",
    tabTitle: "Jheel si Aankhein",
    chapterNum: "Chapter III",

    leftPage: {
      kicker: "Aankhon Ki Baat",
      title: "Jheel Si Aankhein",

      paragraphs: [
        "Kuch aankhein sirf dekhti nahi hain, woh bahut kuch keh bhi jaati hain. Aapki aankhon mein bhi ek alag si depth hai shaant, expressive aur thodi si mysterious.",

        "Kabhi kabhi bina kuch kahe bhi aankhein woh baat keh deti hain jo words shayad kabhi explain nahi kar paate.",

        "Aur shayad isi liye aapki aankhon mein ek aisi simplicity hai jo ek baar notice karne ke baad easily ignore nahi hoti.",
      ],

      quote:
        "“Jheel ki tarah hain aapki aankhein upar se shaant, lekin andar apni ek poori duniya sambhale hue.”",

      pageNumber: 5,
    },

    rightPage: {
      kicker: "The Unspoken",
      title: "Aankhon Mein Chhupi Kahaani",

      paragraphs: [
        "Kabhi kabhi aapko dekhkar lagta hai ki aapki aankhein aapse pehle hi bahut kuch bata deti hain khushi, excitement, irritation aur woh random si curiosity bhi.",

        "Shayad isi wajah se aapki aankhein aapki personality ka ek beautiful part hain. Simple bhi, expressive bhi, aur bilkul aapki tarah genuine.",

        "Kuch cheezein explain karne ki zaroorat nahi hoti. Bas notice karne ki hoti hain.",
      ],

      pageNumber: 6,
    },
  },

  {
    id: "chapter-4",
    tabTitle: "Zulfien",
    chapterNum: "Chapter IV",

    leftPage: {
      kicker: "Ek Aur Khoobsurat Detail",
      title: "Zulfien",

      paragraphs: [
        "Aur phir aati hain aapki woh zulfien jo kabhi perfectly set hoti hain aur kabhi bilkul apni marzi se chalti hain. 😂",

        "Lekin honestly, shayad wahi naturalness unhe aur beautiful banati hai. Perfect hone ki zaroorat hi kya hai jab imperfect moments hi itne cute lagte hain?",

        "Kabhi hawa ke saath udti hui, kabhi face par aa jaati hui aapki zulfon ka bhi apna ek personality trait hai.",
      ],

      quote:
        "“Kuch khoobsurtiyaan perfect nahi hoti bas apni hoti hain, aur wahi unhe khaas banati hain.”",

      pageNumber: 7,
    },

    rightPage: {
      kicker: "The Little Details",
      title: "Jo Cheezein Notice Ho Jaati Hain",

      paragraphs: [
        "Aapke baare mein sabse interesting baat yeh hai ki aapki beauty sirf ek cheez mein nahi hai. Woh chhoti chhoti details mein hai smile, aankhein, baatein, expressions aur woh natural sa attitude.",

        "Shayad isi liye aapko describe karna thoda mushkil hai. Ek quality likho toh doosri yaad aa jaati hai.",

        "Aur honestly, yeh book shayad isi liye banani padi kyunki ek page mein aapko describe karna thoda unfair hota. 😌",
      ],

      pageNumber: 8,
    },
  },

  {
    id: "chapter-5",
    tabTitle: "Care for Everyone",
    chapterNum: "Chapter V",

    leftPage: {
      kicker: "Dil Se",
      title: "Care For Everyone",

      paragraphs: [
        "Aapki sabse beautiful qualities mein se ek hai aap logon ki care karti hain. Chhoti si cheez ho ya koi genuinely important matter, aapke andar doosron ke liye concern naturally aa jaata hai.",

        "Aap shayad har baar express nahi karti, lekin aapke actions bahut kuch bata dete hain. Aur mere according, kisi ke liye care karna uss insaan ki personality ki sabse genuine qualities mein se ek hai.",

        "Aapke andar woh warmth hai jo logon ko comfortable feel karati hai aur yeh quality honestly bahut rare hai.",
      ],

      quote:
        "“Khoobsurti chehre se nazar aa sakti hai, lekin asli khoobsurti tab dikhti hai jab dil doosron ke liye care karta hai.”",

      pageNumber: 9,
    },

    rightPage: {
      kicker: "A Beautiful Heart",
      title: "Aapka Dil",

      paragraphs: [
        "Aap jis tarah apne aas-paas ke logon ke liye concern rakhti hain, woh aapke nature ke baare mein bahut kuch keh deta hai.",

        "Kabhi advice dena, kabhi support karna, kabhi bas kisi ki baat sun lena yeh chhoti cheezein hoti hain, lekin saamne wale ke liye bahut matter karti hain.",

        "Bas isi tarah genuine rehna. Duniya mein achhe log bahut hain, lekin genuinely caring log thode kam milte hain.",
      ],

      pageNumber: 10,
    },
  },

  {
    id: "chapter-6",
    tabTitle: "Sweet Voice",
    chapterNum: "Chapter VI",

    leftPage: {
      kicker: "Awaaz Mein Bhi Ek Kahaani",
      title: "Sweet Voice",

      paragraphs: [
        "Aapki voice mein ek alag si softness hai. Aisi awaaz jo bas suni nahi jaati, feel bhi hoti hai.",

        "Chahe normal conversation ho, excitement mein kuch batana ho, ya phir woh random late-night talks aapki voice mein ek comfort sa hai.",

        "Aur kabhi kabhi conversation mein kya baat ho rahi hai, usse zyada achha bas yeh lagta hai ki saamne wala insaan baat kar raha hai.",
      ],

      quote:
        "“Kuch awaazein kaano tak aati hain, aur kuch seedha yaadon mein reh jaati hain.”",

      pageNumber: 11,
    },

    rightPage: {
      kicker: "The Little Comfort",
      title: "Bas Aapki Awaaz",

      paragraphs: [
        "Aapki voice ki sabse achhi baat shayad yeh hai ki woh forced nahi lagti. Bilkul natural bilkul aapki personality ki tarah.",

        "Kabhi hasi, kabhi serious tone, kabhi woh cute sa irritation har mood mein aapki voice ki apni ek alag vibe hoti hai.",

        "Aur haan, agar kabhi kisi ne kaha ho ki aapki voice sweet nahi hai… toh respectfully disagree karna allowed hai. 😌",
      ],

      pageNumber: 12,
    },
  },

  {
    id: "chapter-7",
    tabTitle: "Late Night Talk",
    chapterNum: "Chapter VII",

    leftPage: {
      kicker: "After Midnight",
      title: "Late Night Talk",

      paragraphs: [
        "Pata nahi late-night conversations mein aisa kya magic hota hai, lekin raat ko ki gayi random baatein din ki conversations se thodi zyada special lagti hain.",

        "Kabhi serious topics, kabhi completely random nonsense, kabhi hasi-mazaak aur kabhi bas bina kisi particular reason ke baat karte rehna.",

        "Shayad achhi conversations ka secret topic nahi hota. Bas saamne wala insaan interesting hona chahiye.",
      ],

      quote:
        "“Raat lambi ho ya baat jab conversation achhi ho, toh waqt ka pata hi nahi chalta.”",

      pageNumber: 13,
    },

    rightPage: {
      kicker: "Those Little Conversations",
      title: "Bas Yunhi Baatein",

      paragraphs: [
        "Kuch conversations kisi conclusion ke liye nahi hoti. Woh bas hoti hain random, imperfect aur completely unnecessary phir bhi somehow memorable.",

        "Aur shayad aapke saath ki gayi baaton ki beauty bhi wahi hai. Har conversation ko kisi reason ki zaroorat nahi hoti.",

        "Kabhi kabhi bas kisi se baat karna hi enough hota hai.",
      ],

      pageNumber: 14,
    },
  },

  {
    id: "chapter-8",
    tabTitle: "First Thought",
    chapterNum: "Chapter VIII",

    leftPage: {
      kicker: "A Quiet Little Thought",
      title: "First Thought",

      paragraphs: [
        "Kuch logon ke baare mein sochne ke liye koi special reason nahi chahiye hota. Kabhi randomly koi song, koi place, koi joke ya koi chhoti si cheez unki yaad dila deti hai.",

        "Aur phir bina kisi warning ke ek thought aata hai “Yeh cheez Shuru ko batani chahiye.”",

        "Shayad kisi ko yaad karne ka sabse simple aur genuine version yahi hai jab koi insaan bina bulaye thoughts mein aa jaaye.",
      ],

      quote:
        "“Kuch log yaadon mein nahi rehte… woh random thoughts ke beech apni jagah bana lete hain.”",

      pageNumber: 15,
    },

    rightPage: {
      kicker: "The Birthday Ending",
      title: "Happiest Birthday, Ma'am Ji",

      paragraphs: [
        "Toh Shuru, iss chhoti si book ke har page mein ek alag cheez likhi hai pehli mulaqat se lekar smile, aankhon, zulfon, care, voice, late-night talks aur un random thoughts tak.",

        "Lekin agar in sab ko ek sentence mein likhna ho, toh bas itna kahunga aap jaisi hain, waise hi bahut special hain. Aapko kisi comparison, perfection ya explanation ki zaroorat nahi hai.",

        "May this birthday bring you woh saari khushiyan jo aap deserve karti hain, woh success jiske liye aap mehnat karti hain, aur woh peace jo life ko truly beautiful banata hai.",

        "Hamesha khush rahiye, haste rahiye, apni beautiful si personality ko waise hi rakhiye aur haan, Ma'am Ji rehna bilkul mat chhodiye ❤️",

        "Happiest Birthday, Shuru! Aapka aane wala saal aapke liye bahut saari beautiful memories, achievements aur reasons to smile lekar aaye.",
      ],

      signOff: {
        close: "With lots of warmth, respect & good wishes,",
        sign: "Dipesh",
      },

      pageNumber: 16,
    },
  },
] as const;

export const LETTER = {
  date: "16 September 2026",
  greeting: "Meri Pyaari Shuru,",
  paragraphs: [
    "Enjoy your special day meri pyaari ma'am ji..",
  ],
  close: "Dil se dher saara pyar aur best wishes,",
  sign: "",
};

export const REFLECTIONS = [
  {
    src: img2,
    title: "Aankhon Se Teer",
    note: "Leopard print wala look",
    desc: "Ma'am agar aise dekhoge toh hume kidhar jaaye...",
  },
  {
    src: img13,
    title: "Lime & Daylight",
    note: "Hallway wala mirror",
    desc: "Hamesha Camera Ready...",
  },
  {
    src: collegeImg,
    title: "Peela Phool & Bindi",
    note: "Lace trim & bindi",
    desc: "Ufffff Look... Hayeee... ",
  },
  {
    src: warmPortrait,
    title: "Wo Pyari Si Smile",
    note: "Lavender daylight",
    desc: "Cute Smile...",
  },
  {
    src: secondyImg,
    title: "Thoda Quiet, Thoda Magic",
    note: "Classic Black & White",
    desc: "Bas Meri Nazar na Lage aapko...",
  },
] as const;