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

const CLIMAX_WORDS = new Set(["birthday", "shuru", "shruu", "countdown", "celebrate", "september", "today"]);

function normalizeToken(word: string) {
  return word.replace(/[^a-zA-Z0-9']/g, "").toLowerCase();
}

export default function BirthdayCountdownSection() {
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
            className={`confess-word ${classNamePrefix} ${isHighlighted ? "is-highlight" : ""} ${isClimaxWord ? "is-climax" : ""
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
    <div id="countdown" className="confession-horizon-pin">
      <div className="confess-ambient-glow" aria-hidden="true">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

      <header className="confess-horizon-header">
        <div className="confess-eyebrow-pill">
          <span>16 September • For Shuru</span>
        </div>
        <h2 className="confess-horizon-title">Your Magic</h2>
        <p className="confess-horizon-hint">
          <span className="scroll-arrow">⟶</span>Meri Pyaari Ma'am Ji
        </p>
      </header>

      <div className="confession-horizon-track">
        <div className="confess-intro-card">
          <div className="intro-card-inner">
            <span className="intro-heart-badge">🎂</span>
            <span className="intro-kicker">16 September</span>
            <h3 className="intro-title">Meri Jaan</h3>
            <p className="intro-note">
              Meri Pyaari Shuru Ma'am Ji
            </p>
          </div>
        </div>

        {CONFESSION_STAGES.map((stage, idx) => (
          <article
            key={stage.id}
            id={stage.id}
            className={`confess-stage-panel ${stage.id === "stage-climax" ? "is-grand-climax" : ""}`}
            data-stage-index={idx}
          >
            <div className="confess-stage-card">
              {stage.img && (
                <div className="stage-vignette-wrapper">
                  <TiltFrame strength={6} className="stage-vignette-frame">
                    <figure className="stage-photo-box">
                      <img
                        src={stage.img}
                        alt={stage.imgCaption || stage.heading}
                        loading="lazy"
                      />
                      {stage.imgCaption && (
                        <figcaption className="stage-photo-overlay">
                          <span className="stage-photo-caption">{stage.imgCaption}</span>
                        </figcaption>
                      )}
                    </figure>
                  </TiltFrame>
                </div>
              )}

              <div className="stage-card-copy">
                <div className="stage-card-meta">
                  <span className="stage-badge">{stage.badge}</span>
                  <span className="stage-num">{String(idx + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="stage-heading">{stage.heading}</h3>

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
            </div>
          </article>
        ))}

        <div className="confess-outro-card">
          <div className="outro-card-inner">
            <span className="outro-icon">🎈</span>
            <h3 className="outro-title">16 September</h3>
            <p className="outro-desc">
              Wait for 364 Days
            </p>
            <span className="outro-sign">Happiest Birthday, Shuru Ji 🎂</span>
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
