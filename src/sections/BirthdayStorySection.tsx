import { BIRTHDAY_WORDS, CONFESSIONS, STORY_PANELS } from "@/love/content";

/**
 * BirthdayStorySection Component
 * Contains the pinned Birthday Wish letter-by-letter animation, the Love Confession stack,
 * and the horizontal scrolling Story Chapters.
 */
export default function BirthdayStorySection() {
  return (
    <section className="story">
      {/* 1. Birthday Wish */}
      <div id="birthday" className="story-pin story-pin-hb">
        <p className="section-tag">Birthday wish</p>
        <p className="story-kicker">scroll to begin</p>
        <h2 className="hb-line" aria-label="Happy Birthday Shruu">
          {BIRTHDAY_WORDS.map((word) => (
            <span key={word} className="hb-word">
              {word.split("").map((ch, i) => (
                <span key={`${word}-${i}`} className="hb-letter">
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="story-hint">Keep scrolling the story</p>
      </div>

      {/* 2. Love Confession */}
      <div id="confession" className="story-pin story-pin-love">
        <p className="section-tag">Love confession</p>
        <p className="story-kicker">read each line</p>
        <div className="confess-stack">
          {CONFESSIONS.map((line) => (
            <p key={line} className="confess">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* 3. Story Chapters (Horizontal sliding panels) */}
      <div id="chapters" className="story-horizon-pin">
        <p className="section-tag film-head">Story chapters</p>
        <p className="story-kicker">keep scrolling — photos move sideways</p>
        <div className="story-horizon">
          {STORY_PANELS.map((panel) => (
            <article key={panel.title} className="story-panel">
              <img src={panel.img} alt={panel.title} />
              <div>
                <span>{panel.eyebrow}</span>
                <h3>{panel.title}</h3>
                <p>{panel.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
