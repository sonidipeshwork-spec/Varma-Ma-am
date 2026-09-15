import { PORTRAITS } from "@/love/content";

export default function OpeningSection() {
  const titleWords = "For Shruu".split(" ");

  return (
    <section id="opening" className="fold fold-muse">
      <div className="muse-copy">
        <p className="script-line">a birthday keepsake</p>
        <h1 className="muse-title">
          {titleWords.map((word) => (
            <span key={word} className="word">
              {word}
            </span>
          ))}
        </h1>
        <p className="lede">
          Portraits, qualities, and a letter dated 28 September — opened for your birthday.
        </p>
      </div>

      <div className="muse-stage muse-stack">
        <figure className="muse-photo-a photo-frame">
          <img src={PORTRAITS.hero} alt="Shruu, looking toward the camera" />
        </figure>
      </div>
    </section>
  );
}
