import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONFESSION_STAGES } from "@/love/content";
import { playSparkleChime, playPopSound } from "@/love/soundEffects";
import {
  CONFESSION_SCROLL_ID,
  CONFESSION_STAGE_EVENT,
  confessionScrollProgressForStage,
  scrollLoveTo,
} from "@/love/useLoveGsap";
import TiltFrame from "@/components/TiltFrame";

const CLIMAX_WORDS = new Set(["birthday", "shruu", "countdown", "celebrate", "today", "love"]);

function normalizeToken(word: string) {
  return word.replace(/[^a-zA-Z0-9']/g, "").toLowerCase();
}

export default function LoveConfessionSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const renderWords = (text: string, highlights: readonly string[] = [], classNamePrefix = "") => {
    const highlightSet = new Set(highlights.map(normalizeToken));
    return text
      .split(/\s+/)
      .filter(Boolean)
      .map((word, idx) => {
        const cleanWord = normalizeToken(word);
        const isHighlighted = highlightSet.has(cleanWord);
        const isClimaxWord = CLIMAX_WORDS.has(cleanWord);

        return (
          <span
            key={`${word}-${idx}`}
            className={`confess-word ${classNamePrefix} ${isHighlighted ? "is-highlight" : ""} ${
              isClimaxWord ? "is-climax" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              playPopSound();
            }}
          >
            <span className="confess-word-inner">{word}</span>
            <span className="confess-space">&nbsp;</span>
          </span>
        );
      });
  };

  useEffect(() => {
    const onStage = (event: Event) => {
      const index = (event as CustomEvent<number>).detail;
      if (typeof index === "number" && Number.isInteger(index)) {
        setActiveStageIndex(index);
      }
    };

    window.addEventListener(CONFESSION_STAGE_EVENT, onStage);
    return () => window.removeEventListener(CONFESSION_STAGE_EVENT, onStage);
  }, []);

  const scrollToStage = (index: number) => {
    setActiveStageIndex(index);
    const trigger = ScrollTrigger.getById(CONFESSION_SCROLL_ID);
    if (!trigger) return;
    const progress = confessionScrollProgressForStage(index);
    const target = trigger.start + (trigger.end - trigger.start) * progress;
    scrollLoveTo(target);
  };

  return (
    <div id="confession" className="confession-horizon-pin">
      <div className="confess-ambient-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      <header className="confess-horizon-header">
        <div className="confess-eyebrow-pill">
          <span>Counting Down To You • For Shruu</span>
        </div>
        <h2 className="confess-horizon-title">A Countdown Written In Love</h2>
        <p className="confess-horizon-hint">
          <span className="scroll-arrow">⟶</span> Scroll down to unwrap each day until your birthday
        </p>
      </header>

      <div className="confession-horizon-track">
        <div className="confess-intro-card">
          <div className="intro-card-inner">
            <span className="intro-heart-badge">🎂</span>
            <span className="intro-kicker">The Countdown</span>
            <h3 className="intro-title">Every day counted down, every moment treasured.</h3>
            <p className="intro-note">
              Every word here was written with you in mind, Meri Pyaari Ma'am Ji.
            </p>
            <div className="intro-scroll-indicator">
              <span>Scroll to begin the countdown</span>
              <div className="indicator-line" />
            </div>
          </div>
        </div>

        {CONFESSION_STAGES.map((stage, idx) => (
          <article
            key={stage.id}
            id={`confess-stage-${idx}`}
            className={`confess-stage-panel ${stage.id === "stage-climax" ? "is-grand-climax" : ""}`}
            data-stage-index={idx}
          >
            <div className="confess-stage-card">
              <div className="stage-card-meta">
                <span className="stage-badge">{stage.badge}</span>
                <h4 className="stage-heading">{stage.heading}</h4>
              </div>

              <div className="stage-prose-lead">
                <p className="stage-lead-sentence">
                  {renderWords(stage.lead, stage.highlightWords, "lead-word")}
                </p>
              </div>

              {stage.subline && (
                <div className="stage-prose-sub">
                  <p className="stage-sub-sentence">
                    {renderWords(stage.subline, stage.highlightWords, "sub-word")}
                  </p>
                </div>
              )}

              {stage.img && (
                <div className="stage-vignette-wrapper">
                  <TiltFrame strength={7} className="stage-vignette-frame">
                    <div className="stage-photo-box">
                      <img src={stage.img} alt={stage.imgCaption || stage.heading} />
                      <div className="stage-photo-overlay">
                        {stage.imgCaption && (
                          <span className="stage-photo-caption">{stage.imgCaption}</span>
                        )}
                      </div>
                    </div>
                  </TiltFrame>
                </div>
              )}

              {stage.id === "stage-climax" && (
                <div
                  className="climax-seal-box"
                  role="button"
                  tabIndex={0}
                  onClick={() => playSparkleChime()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      playSparkleChime();
                    }
                  }}
                  aria-label="Celebrate the birthday countdown"
                >
                  <div className="climax-heart-halo" />
                  <div className="climax-seal-circle">
                    <span className="climax-heart-icon">🎉</span>
                    <span className="climax-seal-text">The Wait Is Over</span>
                  </div>
                  <span className="climax-tap-hint">Tap for a sparkle ✨</span>
                </div>
              )}
            </div>
          </article>
        ))}

        <div className="confess-outro-card">
          <div className="outro-card-inner">
            <span className="outro-icon">🎈</span>
            <h3 className="outro-title">And so the countdown ends, and the celebration begins...</h3>
            <p className="outro-desc">
              Every day was worth the wait, because it led here, to celebrating you.
            </p>
            <span className="outro-sign">Always, with all my love ❤️</span>
          </div>
        </div>
      </div>

      <div className="confess-horizon-milestones" aria-label="Birthday countdown navigation milestones">
        {CONFESSION_STAGES.map((stage, idx) => (
          <button
            key={stage.id}
            type="button"
            className={`milestone-step ${activeStageIndex === idx ? "is-current" : ""}`}
            onClick={() => scrollToStage(idx)}
            title={stage.heading}
            aria-current={activeStageIndex === idx ? "step" : undefined}
            aria-label={`Go to ${stage.heading}`}
          >
            <span className="milestone-dot" />
            <span className="milestone-label">{stage.heading}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
