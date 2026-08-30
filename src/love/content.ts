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
  { id: "photo-gallery", label: "Photo gallery" },
  { id: "love-letter", label: "Love letter" },
  { id: "compliments", label: "Compliments" },
  { id: "our-future", label: "Our future" },
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
  { stage: "I", title: "The first sight", mood: "wonder", img: schoolImg, desc: "Seeing you and feeling the world skip a beat. An ordinary day, rewritten." },
  { stage: "II", title: "The sweet laughter", mood: "melody", img: friendImg, desc: "Hearing you laugh and knowing it was a sound I never wanted to miss." },
  { stage: "III", title: "The real conversations", mood: "sanctuary", img: studyImg, desc: "Talking with you and meeting how deep, wise, and rare your soul is." },
  { stage: "IV", title: "The quiet realization", mood: "home", img: collegeImg, desc: "Waking up to find you woven into every hope. The anchor I had been looking for." },
  { stage: "V", title: "Choosing you, daily", mood: "forever", img: img2, desc: "Loving you is not a passing weather. It is a decision I make with every sunrise." },
] as const;

export const GLIMPSES = [
  { src: img3, caption: "Sweet moments of wonder" },
  { src: img4, caption: "A quiet, glowing warmth" },
  { src: img5, caption: "Soft afternoon laughter" },
  { src: img6, caption: "Chasing gentle horizons" },
  { src: img7, caption: "Steps on warm sand" },
  { src: img8, caption: "Sweet escapes" },
  { src: img9, caption: "Golden skies in your eyes" },
  { src: img10, caption: "Roads that lead home" },
  { src: img11, caption: "Dressed in soft dreams" },
  { src: img12, caption: "Celebrations of grace" },
  { src: img13, caption: "A sanctuary of trust" },
  { src: img14, caption: "Timeless chapters" },
] as const;

export const LAYERS = [
  { img: img15, title: "Your heart", note: "The compassion you show in every little gesture. You treat the world with a grace that softens my coldest days." },
  { img: img16, title: "Your mind", note: "The sparkling way you think, learn, and dream. Your perspective outshines any constellation." },
  { img: img13, title: "Your grace", note: "The energy you bring. You bloom softly wherever you walk, and leave wonder in the path." },
] as const;

export const WHISPERS = [
  { img: img9, quote: "You make ordinary hours feel enchanted." },
  { img: img10, quote: "You are breathtaking inside and out." },
  { img: img11, quote: "Your thoughts shape constellations." },
  { img: img12, quote: "Your smile is my favorite sunrise." },
  { img: babyImg, quote: "Your heart is a beautiful sanctuary." },
  { img: footImg, quote: "You are my number one adventure." },
] as const;

export const DREAMS = [
  { img: img2, title: "Exploring together", desc: "Strange cities, your eyes reflecting the world, routes mapped with laughter." },
  { img: collegeImg, title: "Cozy sanctuaries", desc: "Books, gentle music, tea mornings, starlight outside the window." },
  { img: studyImg, title: "Your proudest cheer", desc: "Front row for every victory. Your biggest supporter, always." },
  { img: friendImg, title: "Grow old together", desc: "Soft blankets, years turning gold, loving you deeper each season." },
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
  { src: img1, title: "Sunlight & serenity", desc: "Afternoon rays in your hair. Every conversation rewrites the sky." },
  { src: img2, title: "Sanctuary of thoughts", desc: "Home is not a pin on a map. Home is the warmth of your presence." },
  { src: img13, title: "Cozy hopes", desc: "Magic in every laugh we share. Choosing you is the easiest decision." },
  { src: collegeImg, title: "My favorite muse", desc: "Endless reasons to cherish the warmth, wisdom, and energy you bring." },
] as const;