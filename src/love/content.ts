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
  { id: "frames", label: "Five frames" },
  { id: "opening", label: "For Shruu" },
  { id: "qualities", label: "Six qualities" },
  { id: "journey", label: "Memorable journey" },
  { id: "film", label: "A film for you" },
  { id: "birthday-book", label: "Birthday book" },
  { id: "unsaid", label: "Things unsaid" },
  { id: "days-ahead", label: "Bright days ahead" },
  { id: "ending", label: "Ending wish" },
] as const;

export const BIRTHDAY_WORDS = ["Happy", "Birthday", "Shruu"] as const;

export const CONFESSIONS = [
  "Today belongs completely to you.",
  "Celebrating the brightest, kindest soul.",
  "Bas tum hasti raho, always.",
  "Happy Birthday, Shruu.",
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
    badge: "01 • Festive start",
    heading: "Silver, Embroidery, Mehndi",
    lead: "This mirror frame — floral kurti, oxidized silver, henna on your hands — is where the birthday countdown begins to feel real.",
    subline: "28 September starts counting down from looks like this.",
    img: img3,
    imgCaption: "Mirror selfie · embroidery · silver choker · 1:07 PM",
    highlightWords: ["mirror", "birthday", "countdown", "September", "henna"],
  },
  {
    id: "stage-getting-closer",
    badge: "02 • Getting closer",
    heading: "Stripes & Starlight",
    lead: "Chin in hand, striped top, gold stars floating around you — the soft smile the calendar keeps walking toward.",
    subline: "Days get shorter. This face stays the reason to wait.",
    img: img4,
    imgCaption: "Portrait · black-and-white stripes · star filter",
    highlightWords: ["stars", "smile", "calendar", "wait", "face"],
  },
  {
    id: "stage-almost-here",
    badge: "03 • Almost here",
    heading: "Henna & a Peace Sign",
    lead: "Fresh mehndi covering your hand, fingertips stained dark, peace sign half over your eye — birthday week energy, already on.",
    subline: "The festive details arrived early. Your day is nearly here, Shruu.",
    img: img5,
    imgCaption: "Close-up · peace sign · floral top · henna tips",
    highlightWords: ["mehndi", "birthday", "festive", "Shruu", "day"],
  },
  {
    id: "stage-the-eve",
    badge: "04 • The eve",
    heading: "Soft Sweater, Quiet Frame",
    lead: "Black-and-white mirror pause in a fuzzy turtleneck — the calm night before 28 September.",
    subline: "One more sleep. Meri Pyaari Ma'am Ji, tomorrow is yours.",
    img: secondyImg,
    imgCaption: "B&W mirror selfie · turtleneck · floral wall",
    highlightWords: ["mirror", "September", "tomorrow", "yours", "night"],
  },
  {
    id: "stage-climax",
    badge: "05 • 28 September",
    heading: "Happy Birthday, Shruu",
    lead: "Leopard print, warm light, eyes on the camera — the countdown ends on this face. Today is your birthday.",
    subline: "28 September. Celebrating you, exactly as you are.",
    img: img2,
    imgCaption: "Birthday portrait · leopard print · looking here",
    highlightWords: ["countdown", "birthday", "September", "Celebrating", "Shruu"],
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
    eyebrow: "05 · 28 September",
    title: "Happy Birthday, Shruu",
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
    title: "The first sight",
    mood: "Once",
    img: schoolImg,
    desc: "I noticed your grace and poise from the start. Quiet warmth in a room, making an ordinary day memorable.",
  },
  {
    stage: "II",
    title: "The sweet laughter",
    mood: "Then",
    img: friendImg,
    desc: "Your laugh cut through the noise like morning sun. Pure, genuine, and contagiously bright.",
  },
  {
    stage: "III",
    title: "The real conversations",
    mood: "After",
    img: studyImg,
    desc: "Talking with you revealed how deep, ambitious, and wise you are. Your perspective makes every conversation rewarding.",
  },
  {
    stage: "IV",
    title: "The great admiration",
    mood: "Until",
    img: collegeImg,
    desc: "Seeing you conquer goals and carry yourself with confidence made you an inspiration to always look up to.",
  },
  {
    stage: "V",
    title: "Cheering for you",
    mood: "Always",
    img: img2,
    desc: "Standing as your constant supporter, celebrating every single milestone you achieve in life.",
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
    title: "Silver and cream",
    note: "The choker, the embroidery, the elegant way you hold yourself. A timeless photograph.",
  },
  {
    img: img16,
    title: "The cheerful wink",
    note: "Blue tee, victory sign, that bright wink. Unfiltered energy and spontaneous fun.",
  },
  {
    img: img13,
    title: "Hallway glow",
    note: "Lime green against warm light. Graceful and effortless in every frame.",
  },
] as const;

export const WHISPERS = [
  {
    img: img9,
    label: "Your laugh",
    quote: "That laugh of yours brightens up everyone's mood instantly.",
  },
  {
    img: img10,
    label: "Your poise",
    quote: "You carry yourself with a natural, effortless elegance.",
  },
  {
    img: img11,
    label: "Your mind",
    quote: "The clarity and sharpness in the way you think is genuinely inspiring.",
  },
  {
    img: img12,
    label: "Your smile",
    quote: "Your genuine smile brings warmth into any space you walk into.",
  },
  {
    img: babyImg,
    label: "Your beginning",
    quote: "From the very beginning, destined to do wonderful things in this world.",
  },
  {
    img: footImg,
    label: "Your story",
    quote: "Your journey started small — and watching your growth is remarkable.",
  },
] as const;

export const DREAMS = [
  {
    img: img2,
    when: "Golden Evenings",
    title: "Quiet Milestones & Shared Pride",
    desc: "Achieving the big dreams you quietly worked so hard for. Stepping back after long days to celebrate each victory, knowing every ounce of effort was worth it.",
    note: "I can't wait to see you conquer every milestone you've set your heart on.",
    tag: "Milestone",
  },
  {
    img: studyImg,
    when: "Fresh Mornings",
    title: "Unstoppable Ambition & Focus",
    desc: "Notes open, ambitions clear, turning early mornings into stepping stones. Standing proudly in your corner, cheering the loudest as you conquer every goal.",
    note: "Seeing you dedicated and passionate is one of the most admirable things about you.",
    tag: "Ambition",
  },
  {
    img: collegeImg,
    when: "Spontaneous Hours",
    title: "Carefree Laughter & Unfiltered Joy",
    desc: "Slow evening walks, breezy coffee stops, and contagious laughter that makes time stand still. Pure, radiant moments where worries simply melt away.",
    note: "Your laughter is pure magic — may your days be overflowing with it.",
    tag: "Joy",
  },
  {
    img: friendImg,
    when: "Through Every Season",
    title: "Unwavering Support & True Presence",
    desc: "A steady, uplifting bond where you are always understood and celebrated for exactly who you are. The kind of warmth that never dims, whatever tomorrow brings.",
    note: "Whatever life brings, remember you always have someone who believes in you unconditionally.",
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
    tabTitle: "Prologue",
    chapterNum: "Chapter I",
    leftPage: {
      kicker: "The Dedication",
      title: "To Shruu",
      subtitle: "A special keepsake for Meri Pyaari Ma'am Ji",
      paragraphs: [
        "Birthdays are a moment to pause, celebrate life, and express appreciation for people who bring genuine light and positivity into our days.",
        "So this keepsake page was made for you — a dedicated space holding warm wishes, genuine admiration, and high hopes for your incredible journey ahead.",
      ],
      quote: "“May this birthday mark the beginning of your most triumphant and fulfilling chapter yet.”",
      pageNumber: 1,
    },
    rightPage: {
      kicker: "The Journey",
      title: "Celebrating Who You Are",
      paragraphs: [
        "Your journey, your hard work, and the dignity with which you handle every challenge make you stand out completely.",
        "From small everyday moments to big aspirations, your positive energy leaves an indelible mark on everyone lucky enough to know you.",
        "May this year reward you with exciting breakthroughs, endless peace of mind, and the sweetest victories.",
      ],
      pageNumber: 2,
    },
  },
  {
    id: "chapter-2",
    tabTitle: "Her Spark",
    chapterNum: "Chapter II",
    leftPage: {
      kicker: "The Bright Spirit",
      title: "Contagious Laughter & Energy",
      paragraphs: [
        "Your cheerful laughter has a unique way of turning stressful days into calm ones. It's a reminder of optimism and finding joy in the little things.",
        "Your unique perspective, sharp sense of humor, and infectious enthusiasm are true superpowers.",
      ],
      quote: "“Never lose that spark — it's the light that makes everything around you brighter.”",
      pageNumber: 3,
    },
    rightPage: {
      kicker: "Strength & Grace",
      title: "Wisdom & Determination",
      paragraphs: [
        "You possess resilience and wisdom that command genuine respect. Watching your determination as you strive towards your goals is truly inspiring.",
        "Keep believing in your brilliance. You have the intellect and heart to reach every summit you set your sights upon.",
      ],
      pageNumber: 4,
    },
  },
  {
    id: "chapter-3",
    tabTitle: "Milestones",
    chapterNum: "Chapter III",
    leftPage: {
      kicker: "Appreciation",
      title: "A Grounded, Honest Presence",
      paragraphs: [
        "In a busy world, finding someone so genuine, authentic, and grounded is rare.",
        "Thank you for being someone people can respect and count on, and for bringing authenticity into every interaction.",
      ],
      quote: "“True elegance is staying true to yourself — and you do that effortlessly.”",
      pageNumber: 5,
    },
    rightPage: {
      kicker: "Wishes For You",
      title: "Health, Peace & Prosperity",
      paragraphs: [
        "May your path ahead be cleared of obstacles, and may your days be packed with exciting opportunities and good health.",
        "Whatever goals you are chasing right now, may you conquer them with flying colors.",
      ],
      pageNumber: 6,
    },
  },
  {
    id: "chapter-4",
    tabTitle: "The Future",
    chapterNum: "Chapter IV",
    leftPage: {
      kicker: "Birthday Commitments",
      title: "Always In Your Corner",
      paragraphs: [
        "Here to always celebrate your victories, cheer the loudest at your triumphs, and offer steady support whenever needed.",
        "May you always walk forward with confidence, knowing you have people who genuinely wish you the very best.",
      ],
      quote: "“The best is yet to come. Dream big, stay bold, and keep shining.”",
      pageNumber: 7,
    },
    rightPage: {
      kicker: "Birthday Blessing",
      title: "Happiest Birthday, Ma'am Ji",
      paragraphs: [
        "On this memorable day, wishing you boundless happiness, peace, vibrant health, and extraordinary success in everything you undertake.",
        "Thank you for being such an admirable and special person. Happiest Birthday, Shruu!",
      ],
      signOff: {
        close: "Warmest wishes & highest regards,",
        sign: "Dipesh",
      },
      pageNumber: 8,
    },
  },
] as const;

export const LETTER = {
  date: "28 September 2026",
  greeting: "Dearest Shruu,",
  paragraphs: [
    "Today is a celebration of you — your kindness, your brilliance, and the wonderful warmth you share with the world.",
    "Watching your growth and your dedication is inspiring. May your birthday be as delightful, bright, and vibrant as you are.",
    "Wishing you a year filled with unforgettable achievements, good health, peace, and endless reasons to smile.",
  ],
  close: "Wishing you the absolute best,",
  sign: "Dipesh",
};

export const REFLECTIONS = [
  {
    src: img1,
    title: "Grace & Light",
    desc: "A warm and composed presence that naturally brightens the room.",
  },
  {
    src: img2,
    title: "Calm Confidence",
    desc: "Carrying yourself with quiet strength, dignity, and poise.",
  },
  {
    src: img13,
    title: "Bright Energy",
    desc: "Effortless style and genuine smiles in every snapshot.",
  },
  {
    src: collegeImg,
    title: "Wisdom & Ambition",
    desc: "Always learning, growing, and inspiring those around you.",
  },
] as const;