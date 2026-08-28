import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { PORTRAITS } from "@/love/content";

interface LocketGateProps {
  onOpen: () => void;
}

/**
 * LocketGate Component
 * An antique, 3D interactive keepsake locket with realistic physical tilt,
 * metallic reflections, velvet inner bezel, and a cinematic opening sequence.
 */
export default function LocketGate({ onOpen }: LocketGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Smooth entrance on mount
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // High-performance direct transform via requestAnimationFrame (0 React re-renders on mousemove)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isOpening || !wrapperRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 24;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `perspective(1200px) rotateY(${x.toFixed(2)}deg) rotateX(${y.toFixed(2)}deg)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (isOpening || !wrapperRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    wrapperRef.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
    }
    onOpen();
  };

  return (
    <div
      className={`locket-gate ${isOpening ? "is-opening-mode" : ""}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background particles and glow */}
      <div className="locket-ambient-halo" aria-hidden />
      <div className="locket-dust locket-dust-1" aria-hidden />
      <div className="locket-dust locket-dust-2" aria-hidden />
      <div className="locket-dust locket-dust-3" aria-hidden />

      {/* Header kicker */}
      <div className="locket-header">
        <h1 className="locket-title">Meri Pyaari Ma'am Ji</h1>
        <p className="locket-kicker">A keepsake, sealed for you</p>
      </div>

      {/* 3D Locket Interactive Container */}
      <div
        className="locket-3d-wrapper"
        ref={wrapperRef}
        style={{
          transition: isOpening ? "none" : "transform 0.18s cubic-bezier(0.2, 0.8, 0.4, 1)",
        }}
      >
        {/* Top hinge chain link */}
        <div className="locket-chain-anchor" aria-hidden>
          <div className="locket-chain-ring" />
          <div className="locket-chain-link" />
        </div>

        <button
          type="button"
          className="locket"
          onClick={handleOpenClick}
          disabled={isOpening}
          aria-label="Unlock and open the keepsake locket"
        >
          <div className="locket-scene">
            {/* Inner Well (The revealed picture) */}
            <div className="locket-well">
              <div className="locket-well-velvet" />
              <div className="locket-portrait-wrap">
                <img src={PORTRAITS.hero} alt="Shruu" className="locket-portrait" />
                <div className="locket-portrait-sheen" />
              </div>
              <div className="locket-well-inner-bevel" />
              <div className="locket-light-burst" />
            </div>

            {/* Lid (Opens outwards/upwards in 3D) */}
            <div className="locket-lid">
              <div className="locket-lid-bevel" />
              <div className="locket-lid-pattern" />
              <div className="locket-lid-flare" />
              
              {/* Jewel Monogram Emblem */}
              <div className="locket-gem-housing">
                <div className="locket-gem-rim" />
                <div className="locket-gem">
                  <span className="locket-gem-letter">S</span>
                  <div className="locket-gem-sparkle" />
                </div>
              </div>

              <div className="locket-lid-footer-ornament">
                <span>✦</span>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Interactive Guidance Hint */}
      <div className="locket-footer">
        <p className="locket-hint">Tap the locket</p>
      </div>
    </div>
  );
}
