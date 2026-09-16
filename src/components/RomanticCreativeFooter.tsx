import React, { useState } from "react";
import { playPopSound, playSparkleChime } from "@/love/soundEffects";
import img1 from "@/assets/image_1.png";
import secondyImg from "@/assets/photo_07.jpg";

const CAPSULE_MESSAGES = [
  "May your upcoming year be packed with incredible achievements and joyful moments.",
  "You bring positive energy and warmth into every space you walk into. Never stop shining!",
  "Cheers to another year of big goals, conquered milestones, and carefree laughter.",
  "May good health, true happiness, and peace of mind accompany you every single day.",
  "Happiest Birthday, Meri Pyaari Ma'am ji — today and throughout the brilliant year ahead!",
];

const PROMISES = [
  { icon: "☕", title: "Tea Break & Laughter", text: "Always ready for good conversation and cheering you up whenever work gets hectic." },
  { icon: "🍟", title: "Celebration Snacks", text: "Treats and snacks are fully on the house whenever we celebrate your big wins." },
  { icon: "🛡️", title: "Constant Support", text: "Standing firmly in your corner and cheering the loudest for your dreams and ambitions." },
  { icon: "✨", title: "Unstoppable Motivation", text: "Reminding you how capable, smart, and brilliant you are, especially when taking on big goals." },
];

export default function RomanticCreativeFooter() {
  const [capsuleOpen, setCapsuleOpen] = useState(false);
  const [capsuleIndex, setCapsuleIndex] = useState(0);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; emoji: string; rot: number }[]>([]);
  const [copiedWish, setCopiedWish] = useState(false);
  const [activePromise, setActivePromise] = useState<number | null>(null);
  const [tapCounter, setTapCounter] = useState(0);
  const [secretToast, setSecretToast] = useState<string | null>(null);

  const handleFloatingSparkle = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    playPopSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const emojis = ["✨", "🎉", "🌟", "🎂", "🎈", "🌸", "👑", "💫", "🧁"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const rot = (Math.random() - 0.5) * 40;
    const newSparkle = { id: Date.now() + Math.random(), x, y, emoji, rot };
    setSparkles((prev) => [...prev.slice(-18), newSparkle]);

    setTapCounter((c) => {
      const next = c + 1;
      if (next === 5) {
        setSecretToast("Achievement Unlocked: 'Birthday Queen of the Year' Award! 🏆👑");
        playSparkleChime();
        setTimeout(() => setSecretToast(null), 4200);
      } else if (next === 10) {
        setSecretToast("VIP Celebration Pass Activated: Free cake forever! 🎂🎟️");
        playSparkleChime();
        setTimeout(() => setSecretToast(null), 4200);
      }
      return next;
    });
  };

  const nextCapsule = () => {
    playPopSound();
    setCapsuleIndex((prev) => (prev + 1) % CAPSULE_MESSAGES.length);
  };

  const toggleCapsule = () => {
    if (!capsuleOpen) {
      playSparkleChime();
    } else {
      playPopSound();
    }
    setCapsuleOpen(!capsuleOpen);
  };

  const copyBirthdayKeepsake = () => {
    playSparkleChime();
    navigator.clipboard?.writeText(
      "To Shuru (Meri Pyaari Ma'am Ji) — Wishing you soaring heights, vibrant health, and unending happiness. Happiest Birthday! 🎂 16 September"
    );
    setCopiedWish(true);
    setTimeout(() => setCopiedWish(false), 2500);
  };

  const scrollToTop = () => {
    playPopSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="creative-footer-root" role="contentinfo" aria-label="Birthday Keepsake for Shuru">
      {/* Decorative whimsical wave separator */}
      <div className="footer-scallop-divider" aria-hidden>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,32 C120,64 240,16 360,42 C480,68 600,20 720,48 C840,76 960,18 1080,45 C1200,72 1320,25 1440,38 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="creative-footer-container">
        {/* Glow ambient background aura */}
        <div className="footer-aura-glow" aria-hidden />

        {/* TOP USP HERO CARD: The Birthday VIP Passport */}
        <div className="footer-love-passport">
          <div className="passport-inner">
            <div className="passport-header">
              <div className="passport-badge">
                <span className="badge-dot" />
                <span>OFFICIAL BIRTHDAY VIP PASSPORT • EDITION 2026</span>
              </div>
              <span className="passport-id">DOC #16-09-SHURU</span>
            </div>

            <div className="passport-body">
              <div className="passport-avatar-box">
                <img src={img1} alt="Shuru" className="passport-avatar" />
                <span className="passport-stamp-verified">VIP QUEEN 100%</span>
              </div>

              <div className="passport-details">
                <span className="passport-designation">OFFICIALLY ISSUED IN CELEBRATION OF</span>
                <h3 className="passport-name">Shuru <span className="passport-aka">(Meri Pyaari Ma'am Ji)</span></h3>
                <p className="passport-blurb">
                  Certified as the most brilliant, hardworking, and cheerful human. Holder is granted unlimited
                  birthday wishes, lifetime celebration passes, priority sweet treats, and utmost respect & cheers.
                </p>

                <div className="passport-meta-grid">
                  <div className="meta-pill">
                    <span className="meta-key">Special Day</span>
                    <span className="meta-val">16 September 🎂</span>
                  </div>
                  <div className="meta-pill">
                    <span className="meta-key">Title</span>
                    <span className="meta-val">Birthday Star 👑</span>
                  </div>
                  <div className="meta-pill">
                    <span className="meta-key">Wish</span>
                    <span className="meta-val">Great Success & Joy 🌟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating celebratory emojis on tap */}
          {sparkles.map((s) => (
            <span
              key={s.id}
              className="floating-tap-heart"
              style={{
                left: `${s.x}px`,
                top: `${s.y}px`,
                transform: `rotate(${s.rot}deg)`,
              }}
              aria-hidden
            >
              {s.emoji}
            </span>
          ))}

          {/* Secret celebration toast */}
          {secretToast && (
            <div className="footer-secret-toast" role="status">
              {secretToast}
            </div>
          )}
        </div>



        {/* BOTTOM SIGN-OFF BAR */}
        <div className="footer-signature-bar">
          <div className="signature-left">
            <div className="mini-polaroid-peek">
              <img src={secondyImg} alt="Shuru memory" />
            </div>
            <div className="signature-text">
              <p className="sign-heartline">Designed with celebration and highest regards</p>
              <p className="sign-names">Shuru Ma'am Ji</p>
            </div>
          </div>

          <div className="signature-center">
            <span className="footer-date-chip">September 16 • Birthday Edition</span>
          </div>
        </div>

        <div className="footer-micro-ribbon">
          <span>Happiest Birthday, Shuru</span>
          <span className="ribbon-star">✦</span>
          <span>May all your dreams turn to reality</span>
          <span className="ribbon-star">✦</span>
          <span>Bas aap hasti raho</span>
        </div>
      </div>
    </footer>
  );
}
