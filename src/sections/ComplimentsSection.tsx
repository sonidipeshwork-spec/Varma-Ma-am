import { useState } from "react";
import { REFLECTIONS, WHISPERS } from "@/love/content";

export default function ComplimentsSection() {
  const [activeWhisper, setActiveWhisper] = useState<number | null>(null);

  const toggleWhisper = (index: number) => {
    setActiveWhisper((prev) => (prev === index ? null : index));
  };

  return (
    <section id="compliments" className="fold fold-whispers">
      <header className="fold-head">
        <h2>Things I keep meaning to say</h2>
        <p>Tap a portrait. The compliment is waiting on the other side.</p>
      </header>

      <div className="whisper-grid">
        {WHISPERS.map((w, i) => (
          <button
            key={w.quote}
            type="button"
            className={`flip ${activeWhisper === i ? "is-flipped" : ""}`}
            onClick={() => toggleWhisper(i)}
            aria-pressed={activeWhisper === i}
            aria-label={activeWhisper === i ? w.quote : `Reveal compliment ${i + 1}`}
          >
            <span className="flip-face front">
              <img src={w.img} alt="" />
            </span>
            <span className="flip-face back">
              <em>{w.quote}</em>
            </span>
          </button>
        ))}
      </div>

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
