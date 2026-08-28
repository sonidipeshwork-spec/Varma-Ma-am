import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { useLoveGsap } from "@/love/useLoveGsap";
import {
  QuestionGate,
  LocketGate,
  BirthdayStorySection,
  LoveConfessionSection,
  OpeningSection,
  WhyILoveYouSection,
  HowIFellSection,
  PhotoGallerySection,
  LoveLetterBookSection,
  ComplimentsSection,
  OurFutureSection,
  EndingSection,
} from "@/sections";

const SCROLL_SECTIONS = new Set([
  "birthday",
  "confession",
  "opening",
  "why-i-love-you",
  "how-i-fell",
  "photo-gallery",
  "compliments",
  "our-future",
  "ending",
]);

const SECTIONS_MAP: Record<string, { title: string; component: ReactNode }> = {
  questions: { title: "Question Gate", component: <QuestionGate onComplete={() => undefined} /> },
  locket: { title: "Locket Gate", component: <LocketGate onOpen={() => undefined} /> },
  birthday: { title: "Birthday Wish & Confessions", component: <BirthdayStorySection /> },
  confession: { title: "Love Confession (Horizontal)", component: <LoveConfessionSection /> },
  opening: { title: "Opening Photos", component: <OpeningSection /> },
  "why-i-love-you": { title: "Why I Love You", component: <WhyILoveYouSection /> },
  "how-i-fell": { title: "How I Fell For You", component: <HowIFellSection /> },
  "photo-gallery": { title: "Photo Gallery & Film Strip", component: <PhotoGallerySection /> },
  "love-letter": { title: "Private Diary & Love Letter", component: <LoveLetterBookSection /> },
  compliments: { title: "Compliments & Reflections", component: <ComplimentsSection /> },
  "our-future": { title: "Our Future", component: <OurFutureSection /> },
  ending: { title: "Ending & Vow", component: <EndingSection /> },
};

export default function SectionPreview() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const currentSection = sectionId ? SECTIONS_MAP[sectionId] : null;
  const needsScrollMotion = Boolean(sectionId && SCROLL_SECTIONS.has(sectionId));

  useLoveGsap(needsScrollMotion, false);

  return (
    <div className="love-root preview-root">
      <div className="love-vignette" aria-hidden />
      <div className="love-grain" aria-hidden />

      <header className="preview-bar">
        <div className="preview-bar-meta">
          <Link to="/" className="preview-home">
            Full app
          </Link>
          <span>
            Editing: <strong>{currentSection?.title || sectionId}</strong>
          </span>
        </div>

        <nav className="preview-jumps" aria-label="Section previews">
          {Object.keys(SECTIONS_MAP).map((key) => (
            <Link
              key={key}
              to={`/section/${key}`}
              className={`preview-jump ${sectionId === key ? "is-active" : ""}`}
            >
              {key}
            </Link>
          ))}
        </nav>
      </header>

      <main className="preview-stage">
        {currentSection ? (
          currentSection.component
        ) : (
          <div className="preview-missing">
            <h2>Section not found</h2>
            <p>Choose a section from the bar above.</p>
          </div>
        )}
      </main>
    </div>
  );
}
