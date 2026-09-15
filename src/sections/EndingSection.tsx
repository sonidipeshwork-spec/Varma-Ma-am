import { PORTRAITS, QUALITIES, STAGES } from "@/love/content";
import RomanticCreativeFooter from "@/components/RomanticCreativeFooter";

export default function EndingSection() {
  const wreathImages = [
    PORTRAITS.hero,
    PORTRAITS.offset,
    PORTRAITS.childhoodA,
    PORTRAITS.childhoodB,
    QUALITIES[0].img,
    QUALITIES[2].img,
    QUALITIES[4].img,
    STAGES[3].img,
  ];

  const vowWords = "Shine bright always".split(" ");

  return (
    <section id="ending" className="finale">
      <div className="finale-pin">
        <div className="finale-halo" aria-hidden />

        <div className="finale-wreath" aria-hidden>
          {wreathImages.map((src, i) => (
            <img
              key={`wreath-${i}`}
              src={src}
              alt=""
              className={`wreath-shot wreath-${i}`}
            />
          ))}
        </div>

        <div className="finale-copy">
          <h2 className="finale-vow">
            {vowWords.map((word) => (
              <span key={word} className="vow-word">
                {word}
              </span>
            ))}
          </h2>
          <p className="finale-home">Happiest Birthday</p>
          <p className="finale-stamp">
            To our dearest Shruu.
            <br />
            Keep smiling always!
          </p>
          <p className="finale-sign">Warmest Wishes</p>
          <div className="finale-seal" aria-hidden>
            <span>S</span>
            <em>celebrate</em>
          </div>
        </div>
      </div>

      {/* Upgraded Creative USP Footer */}
      <RomanticCreativeFooter />
    </section>
  );
}
