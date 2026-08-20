import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { STAGES } from "@/love/content";

/**
 * HowIFellSection Component
 * Chronological depth timeline presenting the journey of falling in love across 5 key stages.
 */
export default function HowIFellSection() {
  return (
    <section id="how-i-fell" className="fold fold-dark">
      <header className="fold-head">
        <p className="section-tag">How I fell for you</p>
        <h2>How I fell for you</h2>
        <p>Five stages, in order, from first sight to choosing her every day.</p>
      </header>

      <ol className="z-rail">
        {STAGES.map((item, i) => (
          <li
            key={item.title}
            className="z-card"
            style={{ "--depth": i } as CSSProperties}
          >
            <TiltFrame strength={8}>
              <figure>
                <img src={item.img} alt={item.title} />
                <figcaption>
                  <span>
                    {item.stage} · {item.mood}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </figcaption>
              </figure>
            </TiltFrame>
          </li>
        ))}
      </ol>
    </section>
  );
}
