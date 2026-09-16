import { useState } from "react";
import { PORTRAITS, QUALITIES, STAGES } from "@/love/content";
import RomanticCreativeFooter from "@/components/RomanticCreativeFooter";
import { playPopSound, playSparkleChime, playLocketUnlockSound } from "@/love/soundEffects";

interface WreathItem {
  src: string;
  title: string;
  caption: string;
}

export default function EndingSection() {
  const wreathItems: WreathItem[] = [
    {
      src: PORTRAITS.hero,
      title: "The Birthday Queen",
      caption: "Mere liye sabse special day...",
    },
    {
      src: PORTRAITS.offset,
      title: "Timeless Calm",
      caption: "Har Din Ek Nayi Ada...",
    },
    {
      src: PORTRAITS.childhoodA,
      title: "Sweet Beginnings",
      caption: "Pyaari si smile...",
    },
    {
      src: PORTRAITS.childhoodB,
      title: "Little Footprints",
      caption: "Meri Cute Ma'am Ji...",
    },
    {
      src: QUALITIES[0].img,
      title: "Grace & Poise",
      caption: "Your Dimple...",
    },
    {
      src: QUALITIES[2].img,
      title: "Playful Energy",
      caption: "Your Eyes...",
    },
    {
      src: QUALITIES[4].img,
      title: "Daylight Warmth",
      caption: "Your Nature...",
    },
    {
      src: STAGES[3].img,
      title: "Confidence & Ambition",
      caption: "True Belief...",
    },
  ];

  const vowWords = "Shine bright always".split(" ");

  // Interactive States
  const [candleBlown, setCandleBlown] = useState(false);
  const [sealUnlocked, setSealUnlocked] = useState(false);
  const [activeMemory, setActiveMemory] = useState<WreathItem | null>(null);
  const [confettiBursts, setConfettiBursts] = useState<{ id: number; x: number; y: number; emoji: string; rot: number }[]>([]);

  const handleSealClick = (e: React.MouseEvent) => {
    playLocketUnlockSound();
    setSealUnlocked(!sealUnlocked);
    triggerSparkleShower(e);
  };

  const handleCandleClick = (e: React.MouseEvent) => {
    if (!candleBlown) {
      playSparkleChime();
      setCandleBlown(true);
      triggerSparkleShower(e);
    } else {
      playPopSound();
      setCandleBlown(false);
    }
  };

  const handleWreathClick = (item: WreathItem) => {
    playPopSound();
    setActiveMemory(item);
  };

  const triggerSparkleShower = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const emojis = ["✨", "💖", "🎂", "🌟", "🌸", "👑", "🎉", "🕊️", "💫"];
    const newItems = Array.from({ length: 9 }).map((_, idx) => ({
      id: Date.now() + Math.random() + idx,
      x: e.clientX - rect.left + (Math.random() - 0.5) * 80,
      y: e.clientY - rect.top + (Math.random() - 0.5) * 40,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      rot: (Math.random() - 0.5) * 50,
    }));
    setConfettiBursts((prev) => [...prev.slice(-18), ...newItems]);
  };

  return (
    <section id="ending" className="finale">
      <div className="finale-pin">
        <div className="finale-halo" aria-hidden />

        {/* Floating Interactive Memory Wreath */}
        <div className="finale-wreath" aria-label="Interactive memory wreath">
          {wreathItems.map((item, i) => (
            <button
              key={`wreath-${i}`}
              type="button"
              className={`wreath-shot-btn wreath-shot wreath-${i}`}
              onClick={() => handleWreathClick(item)}
              title={`View memory: ${item.title}`}
              aria-label={`Open photo keepsake: ${item.title}`}
            >
              <img src={item.src} alt={item.title} className="wreath-img" />
              <span className="wreath-mini-badge" aria-hidden>✦</span>
            </button>
          ))}
        </div>

        {/* Central Celebratory Content */}
        <div className="finale-copy">

          <p className="finale-home">Happiest Birthday</p>

          <p className="finale-stamp">
            Meri Pyaari Ma'am Ji
            <br />
            Govind Dev Ji Bless You...
          </p>

          {/* Interactive Birthday Candle Ritual */}
          <div className="finale-candle-box">
            <button
              type="button"
              className={`birthday-candle-btn ${candleBlown ? "is-blown" : "is-burning"}`}
              onClick={handleCandleClick}
              aria-label={candleBlown ? "Relight birthday candle" : "Make a wish and blow the birthday candle"}
              title={candleBlown ? "Click to relight candle" : "Make a wish and click to blow out the candle!"}
            >
              <div className="candle-flame-wrapper">
                <div className="candle-smoke" aria-hidden />
                <div className="candle-flame" aria-hidden />
              </div>
              <div className="candle-stick">
                <div className="candle-stripes" />
              </div>
              <span className="candle-label">
                {candleBlown ? "Wish Sent to Universe! 🌟 (Tap to relight)" : "Make a Wish & Blow the Candle 🕯️"}
              </span>
            </button>
          </div>

          <p className="finale-sign">Warmest Wishes & Utmost Admiration</p>

          {/* Interactive Royal Wax Seal Button */}
          <div className="finale-seal-container">
            <button
              type="button"
              className={`finale-seal ${sealUnlocked ? "seal-active" : ""}`}
              onClick={handleSealClick}
              aria-label="Unlock special birthday blessing parchment"
              title="Click the royal seal to open personal birthday blessing"
            >
              <span>S</span>
              <em>{sealUnlocked ? "BLESSINGS UNSEALED" : "Govind Dev Ji Bless You"}</em>
            </button>

            {/* Confetti / Sparkle burst on interaction */}
            {confettiBursts.map((p) => (
              <span
                key={p.id}
                className="finale-floating-burst"
                style={{
                  left: `${p.x}px`,
                  top: `${p.y}px`,
                  transform: `rotate(${p.rot}deg)`,
                }}
                aria-hidden
              >
                {p.emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Lightbox for Wreath Memories */}
        {activeMemory && (
          <div className="finale-modal-overlay" onClick={() => setActiveMemory(null)}>
            <div className="finale-modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="finale-modal-close"
                onClick={() => setActiveMemory(null)}
                aria-label="Close memory modal"
              >
                ✕
              </button>
              <div className="finale-modal-img-wrap">
                <img src={activeMemory.src} alt={activeMemory.title} className="finale-modal-img" />
              </div>
              <div className="finale-modal-details">
                <span className="finale-modal-tag">KEEPSAKE SNAPSHOT</span>
                <h3 className="finale-modal-title">{activeMemory.title}</h3>
                <p className="finale-modal-caption">{activeMemory.caption}</p>
                <div className="finale-modal-footer">
                  <span>Birthday Keepsake • 16 September</span>
                  <span className="modal-sparkle">✨</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Upgraded Creative USP Footer */}
      <RomanticCreativeFooter />
    </section>
  );
}
