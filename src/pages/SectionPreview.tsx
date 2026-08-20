import { useParams, Link } from "react-router-dom";
import {
  LocketGate,
  BirthdayStorySection,
  OpeningSection,
  WhyILoveYouSection,
  HowIFellSection,
  PhotoGallerySection,
  LoveLetterBookSection,
  ComplimentsSection,
  OurFutureSection,
  EndingSection,
} from "@/sections";

const SECTIONS_MAP: Record<string, { title: string; component: React.ReactNode }> = {
  "locket": { title: "Locket Gate", component: <LocketGate onOpen={() => alert("Locket opened!")} /> },
  "birthday": { title: "Birthday Wish & Confessions", component: <BirthdayStorySection /> },
  "opening": { title: "Opening Photos", component: <OpeningSection /> },
  "why-i-love-you": { title: "Why I Love You", component: <WhyILoveYouSection /> },
  "how-i-fell": { title: "How I Fell For You", component: <HowIFellSection /> },
  "photo-gallery": { title: "Photo Gallery & Film Strip", component: <PhotoGallerySection /> },
  "love-letter": { title: "Private Diary & Love Letter", component: <LoveLetterBookSection /> },
  "compliments": { title: "Compliments & Reflections", component: <ComplimentsSection /> },
  "our-future": { title: "Constellations & Our Future", component: <OurFutureSection /> },
  "ending": { title: "Ending & Vow", component: <EndingSection /> },
};

/**
 * SectionPreview Page
 * Allows direct development and isolated testing of each dedicated section.
 */
export default function SectionPreview() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const currentSection = sectionId ? SECTIONS_MAP[sectionId] : null;

  return (
    <div className="love-root" style={{ minHeight: "100vh", paddingBottom: "5rem" }}>
      <div className="love-vignette" aria-hidden />
      <div className="love-grain" aria-hidden />

      {/* Development Quick Navigation Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          padding: "0.75rem 1.5rem",
          background: "rgba(250, 245, 238, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(224, 77, 102, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link
            to="/"
            style={{
              fontWeight: 600,
              color: "#e04d66",
              textDecoration: "none",
              fontSize: "0.88rem",
            }}
          >
            ← Full App
          </Link>
          <span style={{ color: "#735964", fontSize: "0.85rem" }}>
            Editing Section: <strong>{currentSection?.title || sectionId}</strong>
          </span>
        </div>

        {/* Section Jump Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {Object.keys(SECTIONS_MAP).map((key) => (
            <Link
              key={key}
              to={`/section/${key}`}
              style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.65rem",
                borderRadius: "999px",
                textDecoration: "none",
                background: sectionId === key ? "#e04d66" : "rgba(255, 255, 255, 0.8)",
                color: sectionId === key ? "#ffffff" : "#2b1820",
                border: "1px solid rgba(224, 77, 102, 0.25)",
                fontWeight: sectionId === key ? 600 : 400,
              }}
            >
              {key}
            </Link>
          ))}
        </div>
      </header>

      {/* Render Isolated Section */}
      <main style={{ padding: "2rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        {currentSection ? (
          currentSection.component
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <h2 style={{ color: "#e04d66" }}>Section Not Found</h2>
            <p style={{ color: "#735964", marginTop: "0.5rem" }}>
              Please select a section from the bar above.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
