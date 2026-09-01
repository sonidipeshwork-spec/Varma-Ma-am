import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { QUALITIES } from "@/love/content";

function frameClass(index: number, total: number) {
  if (index === 0) return "why-frame--lead";
  if (index === total - 1) return "why-frame--closer";
  return `why-frame--mid why-frame--${index}`;
}

export default function WhyILoveYouSection() {
  return (
    <section id="why-i-love-you" className="fold">
      <header className="fold-head why-fold-head">
        <p className="why-eyebrow">Six reasons</p>
        <h2>Why I love you</h2>
        <p className="why-lede">
          Six pieces of you. Hover a frame if you want the reason underneath.
        </p>
      </header>

      <div className="why-mosaic">
        {QUALITIES.map((q, i) => {
          const isCloser = i === QUALITIES.length - 1;

          return (
            <article
              key={q.title}
              className={`fan-card why-frame ${frameClass(i, QUALITIES.length)}`}
              style={{ "--i": i } as CSSProperties}
            >
              <TiltFrame strength={isCloser ? 8 : 10} className="why-tilt">
                <div className="why-media">
                  <img src={q.img} alt={q.title} loading="lazy" />
                </div>
                <div
                  className={`why-caption${isCloser ? " why-caption--open" : ""}`}
                >
                  <span className="why-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{q.title}</h3>
                  <p className="why-reason">{q.line}</p>
                </div>
              </TiltFrame>
            </article>
          );
        })}
      </div>
    </section>
  );
}
