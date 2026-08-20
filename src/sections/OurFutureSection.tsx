import TiltFrame from "@/components/TiltFrame";
import { DREAMS } from "@/love/content";

/**
 * OurFutureSection Component
 * Constellations of tomorrow: features celestial orbit rings, moon-frame photos,
 * and 3D tilt glassmorphism cards for shared dreams and future milestones.
 */
export default function OurFutureSection() {
  return (
    <section id="our-future" className="fold fold-sky">
      <header className="fold-head light">
        <p className="section-tag">Our future</p>
        <h2>Constellations of tomorrow</h2>
        <p>Hover a celestial horizon to unveil each dream we share.</p>
      </header>

      <div className="future-grid">
        {DREAMS.map((d, index) => (
          <article key={d.title} className="future-card">
            <TiltFrame strength={10} className="future-card-inner">
              <div className="future-orb-wrapper">
                <div className="orbit-ring orbit-ring-outer" aria-hidden />
                <div className="orbit-ring orbit-ring-inner" aria-hidden />
                <div className="future-moon-frame">
                  <img src={d.img} alt={d.title} />
                </div>
                <span className="star-badge">✦ 0{index + 1}</span>
              </div>
              <div className="future-content">
                <span className="future-stage-kicker">Constellation 0{index + 1}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </TiltFrame>
          </article>
        ))}
      </div>
    </section>
  );
}
