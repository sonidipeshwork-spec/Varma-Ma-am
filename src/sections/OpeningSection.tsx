import { PORTRAITS } from "@/love/content";

export default function OpeningSection() {
  const titleWords = "Meri Pyaari Ma'am Ji".split(" ");

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
          for the birthday of the most special girl in the world
        </p>
      </div>

      <div className="muse-stage muse-stack">
        <figure className="muse-photo-a photo-frame">
          <img src={PORTRAITS.hero} alt="Shuru, looking toward the camera" />
        </figure>
      </div>
    </section>
  );
}
