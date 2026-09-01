import babyImg from "@/assets/baby.png";
import collegeImg from "@/assets/college.png";
import footImg from "@/assets/foot.png";
import friendImg from "@/assets/friend.png";
import schoolImg from "@/assets/school.png";
import studyImg from "@/assets/study.png";
import secondyImg from "@/assets/secondy.png";
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
  { id: "birthday", label: "Birthday wish" },
  { id: "confession", label: "Birthday countdown" },
  { id: "chapters", label: "Story chapters" },
  { id: "opening", label: "Opening photos" },
  { id: "why-i-love-you", label: "Why I love you" },
  { id: "how-i-fell", label: "How I fell for you" },
  { id: "photo-gallery", label: "A film for you" },
  { id: "love-letter", label: "Love letter" },
  { id: "compliments", label: "Things unsaid" },
  { id: "our-future", label: "Days ahead" },
  { id: "ending", label: "Ending" },
] as const;

export const BIRTHDAY_WORDS = ["Happy", "Birthday", "Shruu"] as const;

export const CONFESSIONS = [
  "I have been carrying this quietly.",
  "Not waiting for a perfect hour.",
  "Today is yours, so I say it out loud.",
  "I love you.",
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
    badge: "01 • The Countdown Begins",
    heading: "Marking The Days",
    lead: "I started marking the days on my calendar the moment I realized your birthday was near.",
    subline: "Every single day between now and then, my heart counts down a little faster.",
    img: img3,
    imgCaption: "Where the countdown started",
    highlightWords: ["marking", "days", "birthday", "heart", "faster"],
  },
  {
    id: "stage-getting-closer",
    badge: "02 • Getting Closer",
    heading: "Almost There",
    lead: "With every sunrise, your special day inches closer, and so does my excitement.",
    subline: "I keep imagining your smile on the morning it finally arrives.",
    img: img4,
    imgCaption: "Counting sunrises until you",
    highlightWords: ["sunrise", "special", "closer", "excitement", "smile"],
  },
  {
    id: "stage-almost-here",
    badge: "03 • Almost Here",
    heading: "So Close I Can Feel It",
    lead: "Your birthday is just days away now, Shruu, and I can barely contain how excited I am.",
    subline: "Every plan, every little surprise, all building toward the day the world gets to celebrate you.",
    img: img5,
    imgCaption: "The wait is almost over",
    highlightWords: ["birthday", "days", "Shruu", "excited", "surprise", "celebrate"],
  },
  {
    id: "stage-the-eve",
    badge: "04 • The Eve",
    heading: "One More Sleep",
    lead: "Tonight is the last night before your birthday, and I can't stop smiling thinking about tomorrow.",
    subline: "Somewhere between counting stars and counting hours, I'm just counting down to you.",
    img: secondyImg,
    imgCaption: "Meri Pyaari Ma'am Ji",
    highlightWords: ["tonight", "birthday", "tomorrow", "stars", "hours", "counting"],
  },
  {
    id: "stage-climax",
    badge: "05 • The Big Day",
    heading: "Happy Birthday, Shruu",
    lead: "The countdown is finally over, Shruu, and today the world gets to celebrate the best thing that ever happened to me.",
    subline: "Here's to you, today and every day after. Happy birthday, my love.",
    img: img1,
    imgCaption: "The love of my life",
    highlightWords: ["countdown", "Shruu", "celebrate", "today", "birthday", "love"],
  },
] as const;


export const STORY_PANELS = [
  { img: schoolImg, eyebrow: "Once", title: "I saw you", line: "And an ordinary day stopped being ordinary." },
  { img: friendImg, eyebrow: "Then", title: "I heard you laugh", line: "And I wanted that sound in every tomorrow." },
  { img: img1, eyebrow: "Today", title: "Happy birthday", line: "The world is softer because you are in it." },
  { img: img5, eyebrow: "Here", title: "My confession", line: "I love you, Shruu. Not as a maybe. As a decision." },
  { img: collegeImg, eyebrow: "Always", title: "You are home", line: "That is the whole story. I choose you with every sunrise." },
] as const;

export const PORTRAITS = { hero: img1, offset: secondyImg, childhoodA: babyImg, childhoodB: footImg };

export const QUALITIES = [
  { img: img3, title: "Your smile", line: "The kind that makes me forget what I was saying. One look and everything else disappears." },
  { img: img4, title: "Your kindness", line: "You care without being asked. The way you treat people — softly, genuinely — is one of the rarest things I have ever seen." },
  { img: img5, title: "Your intelligence", line: "The way your mind works fascinates me. You think deeply, speak thoughtfully, and make me want to be sharper just to keep up." },
  { img: img6, title: "Your grace", line: "You carry yourself with a quiet dignity that turns heads without trying to. Effortless and entirely yours." },
  { img: img7, title: "Your presence", line: "A room changes when you enter it. Not loudly — just warmer. Like something was missing before and now it isn't." },
  { img: img8, title: "Your heart", line: "Beneath all the grace and beauty is the biggest reason of all — you genuinely love the people around you. That is everything." },
] as const;

export const STAGES = [
  {
    stage: "I",
    title: "The first sight",
    mood: "Once",
    img: schoolImg,
    desc: "I noticed your grace before I knew your name. Quiet warmth in a room, and an ordinary day stopped being ordinary.",
  },
  {
    stage: "II",
    title: "The sweet laughter",
    mood: "Then",
    img: friendImg,
    desc: "Your laugh cut through the noise like morning sun. I heard it once and wanted that sound in every tomorrow.",
  },
  {
    stage: "III",
    title: "The real conversations",
    mood: "After",
    img: studyImg,
    desc: "Talking with you, I met how deep and wise you are. Your mind made me want to listen longer, and grow sharper just to keep up.",
  },
  {
    stage: "IV",
    title: "The quiet realization",
    mood: "Until",
    img: collegeImg,
    desc: "Somewhere between the hours it settled in: you were already woven into every hope. Home was no longer a place on a map.",
  },
  {
    stage: "V",
    title: "Choosing you, daily",
    mood: "Always",
    img: img2,
    desc: "Loving you is not a passing weather. It is the decision I make with every sunrise — not as a maybe, as a vow.",
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
  { src: img12, caption: "Close enough to keep forever" },
  { src: img13, caption: "Lime green, soft eyes, hallway light" },
  { src: img14, caption: "Yellow flower, jhumka, open sky" },
] as const;

export const LAYERS = [
  {
    img: img15,
    title: "Silver and cream",
    note: "The choker, the embroidery, the quiet way you hold yourself. A still I keep returning to.",
  },
  {
    img: img16,
    title: "The wink",
    note: "Blue tee, finger heart, that wink. Proof that ordinary evenings with you already feel like cinema.",
  },
  {
    img: img13,
    title: "Hallway glow",
    note: "Lime green against warm light. You make even a mirror selfie feel like a favorite scene.",
  },
] as const;

export const WHISPERS = [
  {
    img: img9,
    label: "Your laugh",
    quote: "That laugh of yours still rearranges my whole day.",
  },
  {
    img: img10,
    label: "Your face",
    quote: "You are breathtaking — and somehow softer up close.",
  },
  {
    img: img11,
    label: "Your mind",
    quote: "The way you think leaves me quietly in awe.",
  },
  {
    img: img12,
    label: "Your smile",
    quote: "Your smile is the first light I look for.",
  },
  {
    img: babyImg,
    label: "Your beginning",
    quote: "Even then, you were already someone the world would need.",
  },
  {
    img: footImg,
    label: "Your story",
    quote: "Your story started small — and I am so glad it led here.",
  },
] as const;

export const DREAMS = [
  {
    img: img2,
    when: "Evenings",
    title: "When the room goes quiet",
    desc: "You in soft light, looking at me like the rest of the world can wait. I want a lifetime of evenings that feel this still.",
  },
  {
    img: studyImg,
    when: "Mornings",
    title: "Beside your hard days",
    desc: "Books open, lamp lit, you leaning into the work. I want to be the quiet company on every morning that asks too much of you.",
  },
  {
    img: collegeImg,
    when: "Nights out",
    title: "Garden air and heart filters",
    desc: "Rust shirt, leaves behind you, those little hearts floating above your head. I want nights out that feel this easy and this ours.",
  },
  {
    img: friendImg,
    when: "Always",
    title: "Our people in the stack",
    desc: "Hands piled together — yours somewhere in the middle. I want a life where we keep choosing each other in front of everyone who knows us.",
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
    tabTitle: "Prologue",
    chapterNum: "Chapter I",
    leftPage: {
      kicker: "The Dedication",
      title: "To My Dearest Shruu",
      subtitle: "A book of love for Meri Pyaari Ma'am Ji",
      paragraphs: [
        "There are feelings that ordinary words can never fully hold, thoughts that fill every silent moment of my day, and reasons I admire you that go far deeper than what I can ever say in a single breath.",
        "So I created this private book for you. A timeless room holding all the unspoken thoughts, the deep gratitude, and the boundless affection I carry for you in my heart.",
      ],
      quote: "“You stepped into my world, and suddenly every ordinary chapter became extraordinary.”",
      pageNumber: 1,
    },
    rightPage: {
      kicker: "First Sight",
      title: "When Everything Changed",
      paragraphs: [
        "I still remember the first moments I noticed your grace. It was not loud or dramatic. It was the quiet warmth you bring into every room, the genuine kindness in how you treat people, and the spark in your eyes when you speak.",
        "From that day, my world shifted. Loving you wasn't a question or a sudden rush; it became the most natural, effortless truth of my life.",
        "You became my favorite person to think about, my sweetest hope, and the anchor my heart always returns to.",
      ],
      pageNumber: 2,
    },
  },
  {
    id: "chapter-2",
    tabTitle: "Her Magic",
    chapterNum: "Chapter II",
    leftPage: {
      kicker: "The Little Things",
      title: "The Melody of Your Laughter",
      paragraphs: [
        "Do you know how healing your laughter is? In a world that often feels rushed and heavy, hearing you smile is like the morning sun breaking through rainclouds.",
        "I love the little habits you have: the way your eyes light up when you're passionate, the softness in your voice when you care, and the rare elegance that is effortlessly yours.",
      ],
      quote: "“Your laughter is my favorite music, the one song I want on repeat for all my tomorrows.”",
      pageNumber: 3,
    },
    rightPage: {
      kicker: "Pure Admiration",
      title: "A Heart So Beautifully Rare",
      paragraphs: [
        "You possess a brilliance, wisdom, and strength that inspires me every single day. Watching you grow, handle challenges with dignity, and shine in your own unique way makes me the proudest person alive.",
        "You do not just brighten my life. You make me want to be better, wiser, and more loving. Having you in my life is a blessing I thank the stars for each morning.",
      ],
      pageNumber: 4,
    },
  },
  {
    id: "chapter-3",
    tabTitle: "My Sanctuary",
    chapterNum: "Chapter III",
    leftPage: {
      kicker: "Quiet Comfort",
      title: "You Are My Sanctuary",
      paragraphs: [
        "Whenever the world gets overwhelming, simply knowing you exist brings an instant calm to my soul. You are the peaceful corner where my mind rests without fear or doubt.",
        "With you, I don't need masks or pretenses. In your presence, I found a sanctuary that isn't made of bricks and walls, but of trust, warmth, and understanding.",
      ],
      quote: "“Home is no longer a place on a map. Home is wherever your heart is.”",
      pageNumber: 5,
    },
    rightPage: {
      kicker: "The Unspoken Bond",
      title: "Deeply & Quietly Cherished",
      paragraphs: [
        "Even when miles or hours stand between us, you remain woven into every thought. Every sunrise reminds me of your glow; every peaceful evening whispers your name.",
        "I want to listen to all your stories, celebrate all your victories (big and small), and be there to support you through whatever life brings our way.",
      ],
      pageNumber: 6,
    },
  },
  {
    id: "chapter-4",
    tabTitle: "Forever & Birthday",
    chapterNum: "Chapter IV",
    leftPage: {
      kicker: "Lifelong Promises",
      title: "My Vows to You",
      paragraphs: [
        "I promise to always be your biggest cheerleader, celebrating every milestone you conquer in life.",
        "I promise to stand by you in moments of doubt, to listen with patience, and to remind you of how extraordinary you are whenever you forget.",
        "I promise to love you unconditionally, gently, and completely: today, tomorrow, and in every season ahead.",
      ],
      quote: "“Loving you is not a chapter that ends. It is the entire story I want to keep reading forever.”",
      pageNumber: 7,
    },
    rightPage: {
      kicker: "Birthday Blessing",
      title: "Happiest Birthday, Ma'am Ji",
      paragraphs: [
        "On this beautiful day, I wish you all the joy, peace, and warmth this universe has to offer. May your path be lined with blooming flowers, radiant successes, and unending happiness.",
        "Thank you for being born, for being you, and for gracing my life with your light. Happy Birthday, Shruu.",
      ],
      signOff: {
        close: "Always & eternally yours,",
        sign: "With all my love",
      },
      pageNumber: 8,
    },
  },
] as const;

export const LETTER = {
  date: "28 September 2026",
  greeting: "Dearest Shruu,",
  paragraphs: [
    "I am writing this simply because you have completely filled my heart. I did not wait for a special occasion, because loving you is a daily celebration of light, warmth, and gratitude.",
    "I have loved discovering your smile and the melody of your laughter. You are my favorite poem, the one I choose to read slowly, savouring every word.",
    "Thank you for being the quiet light that brightens my day, and the sanctuary where my thoughts find comfort. If I could map the stars, I would write your name across the sky.",
  ],
  close: "Always and completely,",
  sign: "Yours",
};

export const REFLECTIONS = [
  {
    src: img1,
    title: "When the light finds you",
    desc: "Afternoon on your face. I forget whatever I was about to worry about.",
  },
  {
    src: img2,
    title: "Where I rest",
    desc: "Home is not a pin on a map. Home is knowing you exist.",
  },
  {
    src: img13,
    title: "The easy choice",
    desc: "Choosing you is not dramatic. It is the calmest decision I make.",
  },
  {
    src: collegeImg,
    title: "Still looking at you",
    desc: "Warmth, wisdom, and that quiet energy — I keep finding new reasons.",
  },
] as const;