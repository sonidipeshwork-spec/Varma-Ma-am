import { type CSSProperties } from "react";
import TiltFrame from "@/components/TiltFrame";
import { STAGES } from "@/love/content";

export default function HowIFellSection() {
  return (
    <section id="how-i-fell" className="fold fold-dark">
      <header className="fold-head">
        <h2>How I fell for you</h2>
        <p>First sight to every sunrise after. The order still matters.</p>
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
                <div className="photo-frame">
                  <img src={item.img} alt={item.title} />
                </div>
                <figcaption>
                  <span>{item.mood}</span>
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
