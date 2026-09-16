import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { QUALITIES } from "@/love/content";

export default function QualitiesSection() {
  const [lead, ...rest] = QUALITIES;
  const [second, third, ...row] = rest;

  return (
    <section id="qualities" className="fold fold-why">


      <div className="why-gallery">
        <article
          className="fan-card why-trait why-trait--lead"
          style={{ "--i": 0 } as CSSProperties}
        >
          <TiltFrame strength={8} className="why-trait-tilt">
            <div className="why-trait-media">
              <img src={lead.img} alt={lead.title} loading="lazy" />
            </div>
          </TiltFrame>
          <div className="why-trait-copy">
            <div className="why-trait-meta">
              <span className="why-index">01</span>
              <span className="why-note">{lead.note}</span>
            </div>
            <h3>{lead.title}</h3>
            <p>{lead.line}</p>
          </div>
        </article>

        <div className="why-gallery-stack">
          {[second, third].map((q, i) => (
            <article
              key={q.title}
              className="fan-card why-trait why-trait--stack"
              style={{ "--i": i + 1 } as CSSProperties}
            >
              <TiltFrame strength={9} className="why-trait-tilt">
                <div className="why-trait-media">
                  <img src={q.img} alt={q.title} loading="lazy" />
                </div>
              </TiltFrame>
              <div className="why-trait-copy">
                <div className="why-trait-meta">
                  <span className="why-index">{String(i + 2).padStart(2, "0")}</span>
                  <span className="why-note">{q.note}</span>
                </div>
                <h3>{q.title}</h3>
                <p>{q.line}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="why-gallery-row">
          {row.map((q, i) => (
            <article
              key={q.title}
              className={`fan-card why-trait why-trait--row${i === row.length - 1 ? " why-trait--closer" : ""}`}
              style={{ "--i": i + 3 } as CSSProperties}
            >
              <TiltFrame strength={10} className="why-trait-tilt">
                <div className="why-trait-media">
                  <img src={q.img} alt={q.title} loading="lazy" />
                </div>
              </TiltFrame>
              <div className="why-trait-copy">
                <div className="why-trait-meta">
                  <span className="why-index">{String(i + 4).padStart(2, "0")}</span>
                  <span className="why-note">{q.note}</span>
                </div>
                <h3>{q.title}</h3>
                <p>{q.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
