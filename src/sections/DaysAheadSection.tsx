import TiltFrame from "@/components/TiltFrame";
import { DREAMS } from "@/love/content";

export default function DaysAheadSection() {
  const eyebrowWords = "Four kinds of days".split(" ");
  const titleWords = "Bright days ahead".split(" ");
  const overviewWords = "Not a distant fantasy — four warm chapters I already picture for the year after 28 September.".split(" ");

  return (
    <section id="days-ahead" className="fold fold-sky">
      {/* Dynamic ambient lighting aura */}
      <div className="future-aurora-glow" aria-hidden="true" />

      <header className="fold-head future-fold-head">
        <div className="future-eyebrow-container">
          <span className="future-eyebrow-badge">
            <span className="badge-sparkle">✦</span>
            <span className="eyebrow-words">
              {eyebrowWords.map((word, i) => (
                <span key={`${word}-${i}`} className="future-split-eyebrow inline-block">
                  {word}&nbsp;
                </span>
              ))}
            </span>
            <span className="badge-sparkle">✦</span>
          </span>
        </div>

        <h2 className="future-main-heading">
          {titleWords.map((word, i) => (
            <span key={`${word}-${i}`} className="future-split-title inline-block">
              {word}&nbsp;
            </span>
          ))}
        </h2>

        <p className="future-overview">
          {overviewWords.map((word, i) => (
            <span key={`${word}-${i}`} className="future-split-word inline-block">
              {word}&nbsp;
            </span>
          ))}
        </p>

        {/* Decorative golden timeline thread */}
        <div className="future-golden-thread" aria-hidden="true">
          <span className="thread-line" />
          <span className="thread-diamond">◆</span>
          <span className="thread-line" />
        </div>
      </header>

      <div className="future-grid" data-future-grid>
        {DREAMS.map((d, i) => (
          <article
            key={d.title}
            className="future-card keepsake-card"
            data-future-card
          >
            <div className="keepsake-sparkle" aria-hidden="true">✨</div>
            <TiltFrame strength={7} className="future-card-inner">
              <div className="future-card-glow" aria-hidden="true" />
              
              {/* Photo Frame with polaroid aesthetic */}
              <div className="photo-frame future-card-photo">
                <img src={d.img} alt={d.title} loading="lazy" />
                <span className="future-photo-tag">{d.when}</span>
                <span className="future-moment-tag">Moment {String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Story Content */}
              <div className="future-content">
                <div className="future-meta">
                  <span className="future-card-index">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="future-badge">{d.tag}</span>
                </div>
                <h3 className="future-title">{d.title}</h3>
                <p className="future-desc">{d.desc}</p>

                {/* Romantic Personal Note handwritten badge */}
                <div className="future-personal-note">
                  <span className="future-note-icon" aria-hidden="true">💌</span>
                  <p className="future-note-text">"{d.note}"</p>
                </div>
              </div>
            </TiltFrame>
          </article>
        ))}
      </div>
    </section>
  );
}
