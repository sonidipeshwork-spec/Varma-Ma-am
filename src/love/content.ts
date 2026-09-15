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
  { id: "qualities", label: "Your Smile" },
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
    badge: "01 • Countdown Shuru",

    heading: "Silver, Mehndi & Woh Pehli Jhalak",

    lead:
      "Mirror ke saamne floral kurti, haathon mein mehndi aur woh oxidized silver — bas yahin se birthday ka countdown officially thoda aur special lagne laga.",

    subline:
      "16 September ab sirf ek date nahi hai… ab toh har din uss din ke thoda aur kareeb le ja raha hai.",

    img: img3,

    imgCaption:
      "Mirror selfie · floral kurti · oxidized silver · mehndi · 1:07 PM",

    highlightWords: [
      "Mirror",
      "Mehndi",
      "birthday",
      "countdown",
      "16 September",
    ],
  },

  {
    id: "stage-getting-closer",
    badge: "02 • Thoda Aur Kareeb",

    heading: "Stripes, Stars & That Smile",

    lead:
      "Chin par haath, striped top, aas-paas chhote-chhote stars… aur beech mein woh soft si smile. Birthday jitna kareeb aa raha tha, wait utna hi interesting hota ja raha tha.",

    subline:
      "Din kam hote gaye… aur excitement thodi badhti gayi. Calendar bhi shayad aapke birthday ka wait kar raha tha.",

    img: img4,

    imgCaption:
      "Portrait · black-and-white stripes · little stars · soft smile",

    highlightWords: [
      "stars",
      "smile",
      "wait",
      "birthday",
      "closer",
    ],
  },

  {
    id: "stage-almost-here",
    badge: "03 • Bas Ab Thoda Sa",

    heading: "Mehndi, Peace Sign & Birthday Vibes",

    lead:
      "Haathon par fresh mehndi, dark fingertips aur aankhon ke paas woh cute sa peace sign — festive vibes ne birthday se pehle hi entry maar li thi.",

    subline:
      "Sab kuch keh raha tha ki special day bas aane hi wala hai… Shuru, ab countdown genuinely exciting ho gaya tha.",

    img: img5,

    imgCaption:
      "Close-up · peace sign · floral top · fresh mehndi",

    highlightWords: [
      "Mehndi",
      "peace sign",
      "festive",
      "birthday",
      "Shuru",
    ],
  },

  {
    id: "stage-the-eve",
    badge: "04 • Birthday Ki Eve",

    heading: "Soft Sweater, Shaant Si Raat",

    lead:
      "Black-and-white mirror frame, soft fuzzy turtleneck aur woh quiet sa moment — birthday se ek raat pehle ki woh peaceful feeling.",

    subline:
      "Bas ek aur sleep… phir 16 September. Meri Pyaari Ma'am Ji, kal ka din poora aapka hai.",

    img: secondyImg,

    imgCaption:
      "B&W mirror selfie · fuzzy turtleneck · quiet evening",

    highlightWords: [
      "mirror",
      "quiet",
      "raat",
      "16 September",
      "kal",
    ],
  },

  {
    id: "stage-climax",
    badge: "05 • 16 September",

    heading: "Happy Birthday, Shuru ❤️",

    lead:
      "Warm light, leopard print aur camera ki taraf woh confident si look — aur bas, countdown yahin khatam hota hai. Aaj ka din sirf ek date nahi… aaj ka din aapka hai.",

    subline:
      "16 September. No more counting down. Aaj bas celebrate karna hai — aapko, aapki smile ko, aur uss beautiful person ko jo aap hain.",

    img: img2,

    imgCaption:
      "Birthday portrait · warm light · leopard print · birthday girl",

    highlightWords: [
      "16 September",
      "Happy Birthday",
      "Shuru",
      "celebrate",
      "you",
    ],
  },
] as const;

export const STORY_PANELS = [
  {
    img: schoolImg,
    eyebrow: "01 · Formal glow",
    title: "Rose gold & pearls",
    line: "Champagne drape, pearl edge, sequined black — soft light on a composed face.",
  },
  {
    img: collegeImg,
    eyebrow: "02 · At home",
    title: "Yellow florals & lace",
    line: "Chin in hand, bindi, lace trim — everyday warmth in a doorway frame.",
  },
  {
    img: img5,
    eyebrow: "03 · Festive week",
    title: "Mehndi & a peace sign",
    line: "Henna still dark on your fingertips, floral top, playfulness mid-celebration.",
  },
  {
    img: img6,
    eyebrow: "04 · Festival red",
    title: "Saree & that dimple",
    line: "Gold blouse, bandhani red over the shoulder — mirror smile you can't miss.",
  },
  {
    img: img2,
    eyebrow: "05 · 16 September",
    title: "Happy Birthday, Shuru",
    line: "Leopard print, eyes on the camera — the frame where the birthday story lands.",
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
    title: "Hilltop flags & open sky",
    mood: "Once",
    img: babyImg,
    desc: "White collar, chin in hand, Om flags and a whole town below — the journey already looking wide.",
  },
  {
    stage: "II",
    title: "Wind in your hair",
    mood: "Then",
    img: footImg,
    desc: "Coral tee, bindi, strands catching the breeze outdoors — a quiet candid that still feels close.",
  },
  {
    stage: "III",
    title: "Rose gold & pearls",
    mood: "After",
    img: schoolImg,
    desc: "Champagne drape, pearl edge, sequined black — soft formal light on a composed face.",
  },
  {
    stage: "IV",
    title: "Yellow florals at home",
    mood: "Until",
    img: collegeImg,
    desc: "Lace trim, bindi, chin resting in your hand — everyday warmth in a doorway frame.",
  },
  {
    stage: "V",
    title: "Eyes on today",
    mood: "Always",
    img: img2,
    desc: "Leopard print, steady gaze — the milestone that lands on your birthday: celebrating you.",
  },
] as const;

export const GLIMPSES = [
  { src: img3, caption: "Embroidery and silver, just past seven" },
  { src: img4, caption: "Stripes, starlight, that soft smile" },
  { src: img5, caption: "Henna still fresh, peace for the camera" },
  { src: img6, caption: "Red saree, and the dimple I look for" },
  { src: img7, caption: "Gold blouse, festival red" },
  { src: img8, caption: "Mehndi and magenta, one quiet pose" },
  { src: img9, caption: "Holi colors caught on your cheek" },
  { src: img10, caption: "Chin in hand, sweater weather" },
  { src: img11, caption: "Bindi, pink top, calm as ever" },
  { src: img12, caption: "A snapshot to treasure forever" },
  { src: img13, caption: "Lime green, soft eyes, hallway light" },
  { src: img14, caption: "Yellow flower, jhumka, open sky" },
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
    title: "Kamyabi Aur Aap Par Proud Moment",
    desc:
      "Un saare sapno ko reality bante dekhna jinke liye aapne quietly itni mehnat ki hai. Ek din peeche mudkar dekhna, saari struggles ko yaad karna aur kehna haan, maine kar dikhaya.",
    note:
      "Meri bas itni si wish hai ki aapko ek din apni har mehnat ka wo moment mile jahan aap khud par genuinely proud feel karo.",
    tag: "Milestone",
  },
  {
    img: studyImg,
    when: "Fresh Mornings",
    title: "Hard Work & Big Goals",
    desc:
      "Khuli hui notes, fresh coffee, clear goals aur wo determination jo aapko har din thoda aur aage le jaata hai. Aapke dreams jitne bade hain, unke liye aapki mehnat bhi utni hi beautiful hai.",
    note:
      "Aapka dedication dekhna genuinely inspiring hai... bas aise hi apne goals ke peeche lagi rehna, because you are capable of much more than you realise.",
    tag: "Ambition",
  },
  {
    img: collegeImg,
    when: "Spontaneous Hours",
    title: "Befikra Hassi Aur Unfiltered Joy",
    desc:
      "Random walks, unexpected plans, coffee stops aur wo conversations jo pata hi nahi chalne deti ki waqt kab nikal gaya. Life ke best moments shayad wahi hote hain jo plan nahi kiye jaate.",
    note:
      "Aapki hassi waise hi hamesha genuine rahe... aur life mein aise moments kabhi kam na ho jahan aap bina kisi tension ke bas khulkar khush reh sako.",
    tag: "Joy",
  },
  {
    img: friendImg,
    when: "Through Every Season",
    title: "Humesha Ka Saath",
    desc:
      "Ek aisa bond jahan explanations ki zarurat kam ho aur understanding zyada. Jahan life kitni bhi busy, complicated ya unpredictable ho, respect, trust aur warmth apni jagah banaye rakhein.",
    note:
      "Life aapko jahan bhi le jaaye, bas itna yaad rakhna — aapki journey ko genuinely appreciate karne wala koi hamesha aapke liye khush rahega.",
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
        "Aapki smile mein kuch toh baat hai. Woh sirf ek smile nahi hai — usmein ek ajeeb si warmth hai jo saamne wale ka mood bina kuch kahe better kar deti hai.",

        "Kabhi kabhi ek chhoti si smile bhi poore din ka mood change kar deti hai, aur aapki smile bilkul waisi hi hai — simple, natural aur dil se nikli hui.",

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

        "Aapka sense of humour, aapka way of talking aur chhoti-chhoti baaton mein khushi dhoond lena — yeh sab milkar aapko aur bhi special bana dete hain.",

        "Bas ek request hai — life chahe kitni bhi busy ya difficult ho jaaye, uss smile ko kabhi disappear mat hone dena.",
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
        "Kuch aankhein sirf dekhti nahi hain, woh bahut kuch keh bhi jaati hain. Aapki aankhon mein bhi ek alag si depth hai — shaant, expressive aur thodi si mysterious.",

        "Kabhi kabhi bina kuch kahe bhi aankhein woh baat keh deti hain jo words shayad kabhi explain nahi kar paate.",

        "Aur shayad isi liye aapki aankhon mein ek aisi simplicity hai jo ek baar notice karne ke baad easily ignore nahi hoti.",
      ],

      quote:
        "“Jheel ki tarah hain aapki aankhein — upar se shaant, lekin andar apni ek poori duniya sambhale hue.”",

      pageNumber: 5,
    },

    rightPage: {
      kicker: "The Unspoken",
      title: "Aankhon Mein Chhupi Kahaani",

      paragraphs: [
        "Kabhi kabhi aapko dekhkar lagta hai ki aapki aankhein aapse pehle hi bahut kuch bata deti hain — khushi, excitement, irritation aur woh random si curiosity bhi.",

        "Shayad isi wajah se aapki aankhein aapki personality ka ek beautiful part hain. Simple bhi, expressive bhi, aur bilkul aapki tarah — genuine.",

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
        "Aur phir aati hain aapki woh zulfien — jo kabhi perfectly set hoti hain aur kabhi bilkul apni marzi se chalti hain. 😂",

        "Lekin honestly, shayad wahi naturalness unhe aur beautiful banati hai. Perfect hone ki zaroorat hi kya hai jab imperfect moments hi itne cute lagte hain?",

        "Kabhi hawa ke saath udti hui, kabhi face par aa jaati hui — aapki zulfon ka bhi apna ek personality trait hai.",
      ],

      quote:
        "“Kuch khoobsurtiyaan perfect nahi hoti… bas apni hoti hain, aur wahi unhe khaas banati hain.”",

      pageNumber: 7,
    },

    rightPage: {
      kicker: "The Little Details",
      title: "Jo Cheezein Notice Ho Jaati Hain",

      paragraphs: [
        "Aapke baare mein sabse interesting baat yeh hai ki aapki beauty sirf ek cheez mein nahi hai. Woh chhoti-chhoti details mein hai — smile, aankhein, baatein, expressions aur woh natural sa attitude.",

        "Shayad isi liye aapko describe karna thoda mushkil hai. Ek quality likho toh doosri yaad aa jaati hai.",

        "Aur honestly, yeh book shayad isi liye banani padi… kyunki ek page mein aapko describe karna thoda unfair hota. 😌",
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
        "Aapki sabse beautiful qualities mein se ek hai — aap logon ki care karti hain. Chhoti si cheez ho ya koi genuinely important matter, aapke andar doosron ke liye concern naturally aa jaata hai.",

        "Aap shayad har baar express nahi karti, lekin aapke actions bahut kuch bata dete hain. Aur mere according, kisi ke liye care karna uss insaan ki personality ki sabse genuine qualities mein se ek hai.",

        "Aapke andar woh warmth hai jo logon ko comfortable feel karati hai — aur yeh quality honestly bahut rare hai.",
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

        "Kabhi advice dena, kabhi support karna, kabhi bas kisi ki baat sun lena — yeh chhoti cheezein hoti hain, lekin saamne wale ke liye bahut matter karti hain.",

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

        "Chahe normal conversation ho, excitement mein kuch batana ho, ya phir woh random late-night talks — aapki voice mein ek comfort sa hai.",

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
        "Aapki voice ki sabse achhi baat shayad yeh hai ki woh forced nahi lagti. Bilkul natural — bilkul aapki personality ki tarah.",

        "Kabhi hasi, kabhi serious tone, kabhi woh cute sa irritation — har mood mein aapki voice ki apni ek alag vibe hoti hai.",

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
        "“Raat lambi ho ya baat — jab conversation achhi ho, toh waqt ka pata hi nahi chalta.”",

      pageNumber: 13,
    },

    rightPage: {
      kicker: "Those Little Conversations",
      title: "Bas Yunhi Baatein",

      paragraphs: [
        "Kuch conversations kisi conclusion ke liye nahi hoti. Woh bas hoti hain — random, imperfect aur completely unnecessary… phir bhi somehow memorable.",

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

        "Aur phir bina kisi warning ke ek thought aata hai — “Yeh cheez Shuru ko batani chahiye.”",

        "Shayad kisi ko yaad karne ka sabse simple aur genuine version yahi hai — jab koi insaan bina bulaye thoughts mein aa jaaye.",
      ],

      quote:
        "“Kuch log yaadon mein nahi rehte… woh random thoughts ke beech apni jagah bana lete hain.”",

      pageNumber: 15,
    },

    rightPage: {
      kicker: "The Birthday Ending",
      title: "Happiest Birthday, Ma'am Ji",

      paragraphs: [
        "Toh Shuru, iss chhoti si book ke har page mein ek alag cheez likhi hai — pehli mulaqat se lekar smile, aankhon, zulfon, care, voice, late-night talks aur un random thoughts tak.",

        "Lekin agar in sab ko ek sentence mein likhna ho, toh bas itna kahunga — aap jaisi hain, waise hi bahut special hain. Aapko kisi comparison, perfection ya explanation ki zaroorat nahi hai.",

        "May this birthday bring you woh saari khushiyan jo aap deserve karti hain, woh success jiske liye aap mehnat karti hain, aur woh peace jo life ko truly beautiful banata hai.",

        "Hamesha khush rahiye, haste rahiye, apni beautiful si personality ko waise hi rakhiye — aur haan, Ma'am Ji rehna bilkul mat chhodiye. ❤️",

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