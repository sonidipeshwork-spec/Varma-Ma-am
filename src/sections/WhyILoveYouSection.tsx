import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { QUALITIES } from "@/love/content";

/**
 * WhyILoveYouSection Component
 * Displays interactive 3D fanned-out cards with tilt physics for each of the qualities.
 */
export default function WhyILoveYouSection() {
  return (
    <section id="why-i-love-you" className="fold">
      <header className="fold-head">
        <p className="section-tag">Why I love you</p>
        <h2>Why I love you</h2>
        <p>Six reasons, with her photos. Hover a card to read more.</p>
      </header>

      <div className="fan-3d">
        {QUALITIES.map((q, i) => (
          <article
            key={q.title}
            className={`fan-card fan-${i}`}
            style={{ "--i": i } as CSSProperties}
          >
            <TiltFrame strength={10}>
              <img src={q.img} alt={q.title} />
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
