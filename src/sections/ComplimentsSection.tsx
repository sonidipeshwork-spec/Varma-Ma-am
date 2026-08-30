import { useState } from "react";
import { REFLECTIONS, WHISPERS } from "@/love/content";
import { playPopSound } from "@/love/soundEffects";

export default function ComplimentsSection() {
  const [activeWhisper, setActiveWhisper] = useState<number | null>(null);

  const toggleWhisper = (index: number) => {
    setActiveWhisper((prev) => {
      const next = prev === index ? null : index;
      playPopSound();
      return next;
    });
  };

  return (
    <section id="compliments" className="fold fold-whispers">
      <header className="fold-head">
        <h2>Things I keep meaning to say</h2>
        <p>Tap a portrait. The compliment is waiting on the other side.</p>
      </header>

      <div className="whisper-grid">
        {WHISPERS.map((w, i) => {
          const isFlipped = activeWhisper === i;
          return (
            <button
              key={`whisper-${i}`}
              type="button"
              className={`flip ${isFlipped ? "is-flipped" : ""}`}
              onClick={() => toggleWhisper(i)}
              aria-pressed={isFlipped}
              aria-label={
                isFlipped
                  ? `Hide compliment: ${w.quote}`
                  : `Reveal compliment ${i + 1} of ${WHISPERS.length}`
              }
            >
              <span className="flip-inner" aria-hidden="true">
                <span className="flip-face front">
                  <img src={w.img} alt="" />
                  <span className="flip-tap-hint">Tap</span>
                </span>
                <span className="flip-face back">
                  <em>{w.quote}</em>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="reflect">
        {REFLECTIONS.map((r, i) => (
          <figure key={r.title} className={`reflect-card ${i === 0 ? "is-lead" : ""}`}>
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
