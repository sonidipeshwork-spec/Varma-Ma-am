import { useState } from "react";
import { REFLECTIONS, WHISPERS } from "@/love/content";

/**
 * ComplimentsSection Component
 * Interactive photo cards that flip upon clicking to reveal compliments,
 * accompanied by a curated reflections visual grid.
 */
export default function ComplimentsSection() {
  const [activeWhisper, setActiveWhisper] = useState<number | null>(null);

  const toggleWhisper = (index: number) => {
    setActiveWhisper((prev) => (prev === index ? null : index));
  };

  return (
    <section id="compliments" className="fold fold-whispers">
      <header className="fold-head light">
        <p className="section-tag">Compliments</p>
        <h2>Compliments</h2>
        <p>Tap a photo to flip it and read a compliment.</p>
      </header>

      {/* Flip Cards Grid */}
      <div className="whisper-grid">
        {WHISPERS.map((w, i) => (
          <button
            key={w.quote}
            type="button"
            className={`flip ${activeWhisper === i ? "is-flipped" : ""}`}
            onClick={() => toggleWhisper(i)}
            aria-label={`Compliment photo ${i + 1}`}
          >
            <span className="flip-face front">
              <img src={w.img} alt="" />
            </span>
            <span className="flip-face back">
              <em>“{w.quote}”</em>
            </span>
          </button>
        ))}
      </div>

      {/* Reflections Grid */}
      <div className="reflect">
        {REFLECTIONS.map((r, i) => (
          <figure key={r.title} className={i === 0 ? "is-lead" : ""}>
            <img src={r.src} alt={r.title} />
            <figcaption>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
