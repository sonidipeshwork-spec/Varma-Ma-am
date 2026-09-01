import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { STAGES } from "@/love/content";

export default function HowIFellSection() {
  return (
    <section id="how-i-fell" className="fold fold-dark fell-section">
      <header className="fold-head fell-head">
        <p className="fell-eyebrow">In order</p>
        <h2>How I fell for you</h2>
        <p className="fell-lede">
          Five moments, in the sequence my heart learned them. Scroll to move
          from first sight to the vow that still holds.
        </p>
      </header>

      <div className="fell-rail-wrap">
        <div className="fell-spine" aria-hidden="true">
          <div className="fell-spine-track">
            <div className="fell-spine-fill" />
          </div>
          {STAGES.map((item, i) => (
            <span
              key={item.stage}
              className="fell-spine-dot"
              data-stage-index={i}
            >
              {item.stage}
            </span>
          ))}
        </div>

        <ol className="z-rail fell-rail">
          {STAGES.map((item, i) => (
            <li
              key={item.title}
              className="z-card fell-card"
              style={{ "--depth": i } as CSSProperties}
              data-stage-index={i}
            >
              <TiltFrame strength={7} className="fell-tilt">
                <figure className="fell-figure">
                  <div className="photo-frame fell-photo">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                  <figcaption className="fell-copy">
                    <div className="fell-meta">
                      <span className="fell-stage">Stage {item.stage}</span>
                      <span className="fell-mood">{item.mood}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </figcaption>
                </figure>
              </TiltFrame>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
