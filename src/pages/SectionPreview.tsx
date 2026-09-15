import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { useLoveGsap } from "@/love/useLoveGsap";
import {
  QuestionGate,
  LocketGate,
  BirthdayStorySection,
  BirthdayCountdownSection,
  OpeningSection,
  QualitiesSection,
  JourneySection,
  FilmSection,
  BirthdayBookSection,
  UnsaidSection,
  EndingSection,
} from "@/sections";

const SCROLL_SECTIONS = new Set([
  "birthday",
  "countdown",
  "frames",
  "opening",
  "qualities",
  "journey",
  "film",
  "unsaid",
  "ending",
]);

const SECTIONS_MAP: Record<string, { title: string; component: ReactNode }> = {
  questions: { title: "Question Gate", component: <QuestionGate onComplete={() => undefined} /> },
  locket: { title: "Locket Gate", component: <LocketGate onOpen={() => undefined} /> },
  birthday: { title: "Happy Birthday", component: <BirthdayStorySection /> },
  countdown: { title: "Birthday Countdown", component: <BirthdayCountdownSection /> },
  frames: { title: "Five Frames of You", component: <BirthdayStorySection /> },
  opening: { title: "For Shuru", component: <OpeningSection /> },
  qualities: { title: "Six Qualities", component: <QualitiesSection /> },
  journey: { title: "Memorable Journey", component: <JourneySection /> },
  film: { title: "A Film For You", component: <FilmSection /> },
  "birthday-book": { title: "Birthday Book", component: <BirthdayBookSection /> },
  unsaid: { title: "Things Unsaid", component: <UnsaidSection /> },
  ending: { title: "Ending Wish", component: <EndingSection /> },
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
