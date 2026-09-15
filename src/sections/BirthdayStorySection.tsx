import { BIRTHDAY_WORDS, STORY_PANELS } from "@/love/content";
import BirthdayCountdownSection from "./BirthdayCountdownSection";

export default function BirthdayStorySection() {
  return (
    <>
      <section id="birthday" className="story-pin story-pin-hb">
        <h2 className="hb-line" aria-label="Happy Birthday Shuru">
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
      </section>

      <BirthdayCountdownSection />

      <section id="frames" className="story-horizon-pin">
        <header className="fold-head film-head">
          <h2>Five frames of you</h2>
          <p>Five portraits. One birthday. The story told in what you were wearing.</p>
        </header>
        <div className="story-horizon">
          {STORY_PANELS.map((panel) => (
            <article key={panel.title} className="story-panel">
              <div className="story-panel-frame">
                <img src={panel.img} alt={panel.title} loading="lazy" />
              </div>
              <div className="story-panel-copy">
                <span>{panel.eyebrow}</span>
                <h3>{panel.title}</h3>
                <p>{panel.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
