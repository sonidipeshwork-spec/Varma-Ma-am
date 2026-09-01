import TiltFrame from "@/components/TiltFrame";
import { DREAMS } from "@/love/content";

export default function OurFutureSection() {
  const [lead, ...rest] = DREAMS;

  return (
    <section id="our-future" className="fold fold-sky">
      <header className="fold-head future-fold-head">
        <p className="future-eyebrow">Four kinds of days</p>
        <h2>The days I want with you</h2>
        <p className="future-overview">
          Not a fantasy trip or a wishlist of rooms — just the ordinary future
          I already picture when I think about us.
        </p>
      </header>

      <article className="future-lead">
        <TiltFrame strength={8} className="future-lead-inner">
          <div className="photo-frame future-lead-photo">
            <img src={lead.img} alt={lead.title} loading="lazy" />
          </div>
          <div className="future-lead-copy">
            <div className="future-meta">
              <span className="future-card-index">01</span>
              <span className="future-when">{lead.when}</span>
            </div>
            <h3>{lead.title}</h3>
            <p>{lead.desc}</p>
          </div>
        </TiltFrame>
      </article>

      <div className="future-trio">
        {rest.map((d, i) => (
          <article key={d.title} className="future-card">
            <TiltFrame strength={9} className="future-card-inner">
              <div className="photo-frame future-card-photo">
                <img src={d.img} alt={d.title} loading="lazy" />
              </div>
              <div className="future-content">
                <div className="future-meta">
                  <span className="future-card-index">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="future-when">{d.when}</span>
                </div>
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
