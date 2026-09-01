import { useState } from "react";
import { REFLECTIONS, WHISPERS } from "@/love/content";
import { playPopSound } from "@/love/soundEffects";

export default function ComplimentsSection() {
  const [said, setSaid] = useState<Set<number>>(() => new Set());

  const saidCount = said.size;
  const total = WHISPERS.length;
  const allSaid = saidCount === total;

  const progressLabel =
    saidCount === 0
      ? "None said yet — start with any card"
      : allSaid
        ? "All six are finally said"
        : `${saidCount} of ${total} finally said`;

  const toggleWhisper = (index: number) => {
    setSaid((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      playPopSound();
      return next;
    });
  };

  return (
    <section id="compliments" className="fold fold-whispers">
      <header className="fold-head whisper-head">
        <p className="whisper-eyebrow">Unsaid → said</p>
        <h2>Things I keep meaning to say</h2>
        <p className="whisper-lede">
          Six lines I rehearse and never send. Tap a portrait to flip it — once
          it is open, that one is finally said.
        </p>
        <p className="whisper-progress" aria-live="polite">
          <span className="whisper-progress-count">
            {String(saidCount).padStart(2, "0")}
            <span className="whisper-progress-sep">/</span>
            {String(total).padStart(2, "0")}
          </span>
          <span className="whisper-progress-label">{progressLabel}</span>
        </p>
      </header>

      <ol className="whisper-grid">
        {WHISPERS.map((w, i) => {
          const isFlipped = said.has(i);
          return (
            <li key={`whisper-${i}`} className="whisper-item">
              <button
                type="button"
                className={`flip ${isFlipped ? "is-flipped" : ""}`}
                onClick={() => toggleWhisper(i)}
                aria-pressed={isFlipped}
                aria-label={
                  isFlipped
                    ? `Said: ${w.quote}. Tap to hide.`
                    : `Unsaid ${i + 1} of ${total}: ${w.label}. Tap to say it.`
                }
              >
                <span className="flip-inner" aria-hidden="true">
                  <span className="flip-face front">
                    <img src={w.img} alt="" />
                    <span className="flip-meta">
                      <span className="flip-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flip-label">{w.label}</span>
                    </span>
                    <span className="flip-tap-hint">
                      {isFlipped ? "Said" : "Say it"}
                    </span>
                  </span>
                  <span className="flip-face back">
                    <span className="flip-back-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <em>{w.quote}</em>
                    <span className="flip-back-hint">Tap to fold away</span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className={`reflect-block${allSaid ? " is-complete" : ""}`}>
        <header className="reflect-head">
          <p className="whisper-eyebrow">After they are said</p>
          <h3>What stays true anyway</h3>
          <p>
            Whether the cards are open or not, these are the quieter truths that
            do not need a flip.
          </p>
        </header>

        <div className="reflect">
          {REFLECTIONS.map((r, i) => (
            <figure
              key={r.title}
              className={`reflect-card ${i === 0 ? "is-lead" : ""}`}
            >
              <img src={r.src} alt={r.title} loading="lazy" />
              <figcaption>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
