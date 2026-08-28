import { PORTRAITS, QUALITIES, STAGES } from "@/love/content";

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

  const vowWords = "Always and completely".split(" ");

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
          <p className="finale-home">you are my home</p>
          <p className="finale-stamp">
            Happy birthday, Shruu.
            <br />
            I love you.
          </p>
          <p className="finale-sign">Always yours</p>
          <div className="finale-seal" aria-hidden>
            <span>S</span>
            <em>sealed</em>
          </div>
        </div>
      </div>

      <footer className="finale-bar">
        <span>Meri Pyaari Ma'am ji ke liye</span>
        <span>Happiest Birthday</span>
        <span>28 September</span>
      </footer>
    </section>
  );
}
