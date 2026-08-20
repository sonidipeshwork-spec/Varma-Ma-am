import { PORTRAITS } from "@/love/content";

/**
 * OpeningSection Component
 * Opening muse hero section showcasing dynamic title reveal, subtitle, and dual stacked portraits.
 */
export default function OpeningSection() {
  const titleWords = "My Beautiful Shruu".split(" ");

  return (
    <section id="opening" className="fold fold-muse">
      <div className="muse-copy">
        <p className="section-tag">Opening photos</p>
        <p className="script-line">this is for you</p>
        <h1 className="muse-title">
          {titleWords.map((word) => (
            <span key={word} className="word">
              {word}
            </span>
          ))}
        </h1>
        <p className="lede">
          A space dedicated entirely to the one who holds my heart—capturing the reasons I love you.
        </p>
        <p className="drag-hint">Scroll the room moves with you</p>
      </div>

      <div className="muse-stage muse-stack">
        <div className="muse-photo-a">
          <img src={PORTRAITS.hero} alt="Shruu" />
        </div>
        <div className="muse-photo-b">
          <img src={PORTRAITS.offset} alt="Shruu, candid" />
        </div>
      </div>
    </section>
  );
}
