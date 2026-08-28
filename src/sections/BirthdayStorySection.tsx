import { BIRTHDAY_WORDS, STORY_PANELS } from "@/love/content";
import LoveConfessionSection from "./LoveConfessionSection";

export default function BirthdayStorySection() {
  return (
    <>
      <section id="birthday" className="story-pin story-pin-hb">
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
      </section>

      <LoveConfessionSection />

      <section id="chapters" className="story-horizon-pin">
        <header className="fold-head film-head">
          <h2>The day it became a story</h2>
          <p>Five frames. One girl. The hours that changed everything.</p>
        </header>
        <div className="story-horizon">
          {STORY_PANELS.map((panel) => (
            <article key={panel.title} className="story-panel">
              <div className="story-panel-frame">
                <img src={panel.img} alt={panel.title} />
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
