import { PORTRAITS } from "@/love/content";

export default function OpeningSection() {
  const titleWords = "My Beautiful Shruu".split(" ");

  return (
    <section id="opening" className="fold fold-muse">
      <div className="muse-copy">
        <p className="script-line">this is for you</p>
        <h1 className="muse-title">
          {titleWords.map((word) => (
            <span key={word} className="word">
              {word}
            </span>
          ))}
        </h1>
        <p className="lede">
          A private room of portraits, reasons, and the letter I kept until today.
        </p>
      </div>

      <div className="muse-stage muse-stack">
        <figure className="muse-photo-a photo-frame">
          <img src={PORTRAITS.hero} alt="Shruu, looking toward the camera" />
        </figure>
        <figure className="muse-photo-b photo-frame">
          <img src={PORTRAITS.offset} alt="Shruu, a quieter frame" />
        </figure>
      </div>
    </section>
  );
}
