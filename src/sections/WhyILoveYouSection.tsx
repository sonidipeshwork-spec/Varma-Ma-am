import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { QUALITIES } from "@/love/content";

export default function WhyILoveYouSection() {
  return (
    <section id="why-i-love-you" className="fold">
      <header className="fold-head">
        <h2>Why I love you</h2>
        <p>Six pieces of you. Hover a frame if you want the reason underneath.</p>
      </header>

      <div className="fan-3d fan-mosaic">
        {QUALITIES.map((q, i) => (
          <article
            key={q.title}
            className={`fan-card fan-${i}`}
            style={{ "--i": i } as CSSProperties}
          >
            <TiltFrame strength={10}>
              <div className="photo-frame fan-photo">
                <img src={q.img} alt={q.title} />
              </div>
              <div className="fan-copy">
                <h3>{q.title}</h3>
                <p>{q.line}</p>
              </div>
            </TiltFrame>
          </article>
        ))}
      </div>
    </section>
  );
}
