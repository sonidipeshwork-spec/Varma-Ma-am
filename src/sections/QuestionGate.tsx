import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import gsap from "gsap";
import { playPopSound, playSparkleChime } from "@/love/soundEffects";

interface QuestionGateProps {
  onComplete: () => void;
}

interface QuestionOption {
  text: string;
  reaction: string;
  emoji: string;
}

interface Question {
  id: number;
  tag: string;
  category: string;
  question: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    tag: "Question 01",
    category: "Lie Detector Test",
    question: "Be honest, bas ek baar... who's the actual drama queen here? 😌",
    options: [
      { text: "You, obviously. Netflix should sign you.", reaction: "I'm not dramatic, I'm just built different (main character energy). 🎬", emoji: "💅" },
      { text: "Me, but cute privilege covers it", reaction: "Court accepts this defense. Case closed, next question. ⚖️", emoji: "👑" },
      { text: "Both of us, equally unhinged", reaction: "A power couple in chaos. Somebody give us an award. 🌪️", emoji: "🎭" },
      { text: "I refuse to answer on live camera", reaction: "Bro pleaded the 5th 💀 the silence says everything.", emoji: "🤐" },
    ],
  },
  {
    id: 2,
    tag: "Question 02",
    category: "Fries Court",
    question: "If I sneak 3 of your fries, what's my punishment? 🍟",
    options: [
      { text: "One slap, one death stare, case dismissed", reaction: "Worth it. Would commit the crime again ngl. 😋", emoji: "⚡" },
      { text: "It's just the boyfriend/girlfriend tax, chill", reaction: "Lowest tax rate in the history of relationships. 📈", emoji: "💰" },
      { text: "No cuddles for 2 hours, non-negotiable", reaction: "Wait no I take it back, treaty renegotiation please. 🥺", emoji: "🚨" },
      { text: "You owe me an entire dessert now", reaction: "Fine, ice cream diplomacy it is. 🍨", emoji: "🍰" },
    ],
  },
  {
    id: 3,
    tag: "Question 03",
    category: "Movie Night Truth",
    question: "Who's snoring by minute 10 of literally any movie? 👀",
    options: [
      { text: "Me. I peak at napping.", reaction: "Fastest fall-asleep record on this side of the planet. 😴", emoji: "🛌" },
      { text: "You, then you say 'I was just resting my eyes'", reaction: "Excuse me, I was watching with my ears. 🧐", emoji: "🙈" },
      { text: "Both of us, then we fake-discuss the ending", reaction: "And somehow still fight about what happened. 🍿", emoji: "🤷‍♂️" },
      { text: "The popcorn doesn't even get cold first", reaction: "Peak cozy, zero plot retained, 10/10 night. 🕯️", emoji: "🛋️" },
    ],
  },
  {
    id: 4,
    tag: "Question 04",
    category: "The 'I'm Not Hungry' Scam",
    question: "When you say 'I'm not hungry', how much of my food disappears anyway? 🍕",
    options: [
      { text: "One tiny bite = 65% of the burger, magically", reaction: "Physics doesn't apply to this bite. It's a black hole. 🍔", emoji: "🤏" },
      { text: "Whatever's on your plate looks tastier, sorry", reaction: "What's yours is mine, especially the garlic bread. 🥖", emoji: "🤤" },
      { text: "I wasn't hungry until I saw your plate specifically", reaction: "Your food personally called out to me. 😂", emoji: "👀" },
      { text: "All of it. Go order yourself a new one.", reaction: "Yes sir/ma'am, double order incoming immediately. 🫡", emoji: "👑" },
    ],
  },
  {
    id: 5,
    tag: "Question 05",
    category: "Who's Actually Late",
    question: "We're 15 mins late again... who's really to blame this time? ⏳",
    options: [
      { text: "Me, perfection is a slow process, respect the art", reaction: "And the final look was worth every missed minute. 💄", emoji: "💄" },
      { text: "You, still hunting for your keys in another dimension", reaction: "Okay but where do my keys actually teleport to?! 🔑", emoji: "🏃‍♂️" },
      { text: "Traffic. It's always traffic's fault.", reaction: "We were fashionably late before we even left the house. 🚦", emoji: "🚗" },
      { text: "Neither, we're on time in spirit", reaction: "Time is fake when we're both looking this good. 🕶️", emoji: "🕰️" },
    ],
  },
  {
    id: 6,
    tag: "Question 06",
    category: "80 Year Escape Plan",
    question: "If I annoy you nonstop for the next 80 years, what's your survival plan? 😂",
    options: [
      { text: "Accept my fate, cry a little, move on", reaction: "Signed and sealed, you're stuck with me forever now. 🔒", emoji: "🔒" },
      { text: "Send you on snack runs until you forget everything", reaction: "Genius plan, works on me 100% of the time. 🍫", emoji: "🍕" },
      { text: "Put up with you 'cause someone's gotta feed you", reaction: "Extremely valid survival logic, thank you for your service. 🥹", emoji: "🥲" },
      { text: "Double the annoyance and fire it right back", reaction: "Oh it's WAR now. See you in round 2. ⚔️", emoji: "😈" },
    ],
  },
  {
    id: 7,
    tag: "Question 07",
    category: "The Final Boss Question",
    question: "Last one: would you still love me if I turned into a worm? 🐛",
    options: [
      { text: "I'd build you a 5-star luxury dirt mansion", reaction: "Peak unconditional love. Room service mud, coming right up. 🏰", emoji: "🌱" },
      { text: "Only if you stay a polite, well-mannered worm", reaction: "I promise to be the classiest worm in town. 🎩", emoji: "🎀" },
      { text: "Duh. Best worm in the entire universe, no debate.", reaction: "My heart just turned into pure golden syrup. 🍯", emoji: "🌟" },
      { text: "I'd literally carry you around in my pocket", reaction: "Pocket-sized best friend, unlocked for life. 🎒", emoji: "🥺" },
    ],
  },
];

const REACTION_DELAY_MS = 1350;

export default function QuestionGate({ onComplete }: QuestionGateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isPassed, setIsPassed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const reactionRef = useRef<HTMLDivElement | null>(null);
  const passCardRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  const currentQ = QUESTIONS[currentIndex];
  const reactionText =
    selectedOption !== null ? currentQ.options[selectedOption]?.reaction ?? null : null;

  const progressPercent = useMemo(
    () => `${((currentIndex + 1) / QUESTIONS.length) * 100}%`,
    [currentIndex]
  );

  // GSAP context scope & cleanup
  useEffect(() => {
    ctxRef.current = gsap.context(() => { }, wrapperRef);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      ctxRef.current?.revert();
    };
  }, []);

  // Animate reaction box entrance when an answer is chosen
  useEffect(() => {
    if (reactionText && reactionRef.current) {
      ctxRef.current?.add(() => {
        gsap.fromTo(
          reactionRef.current,
          { y: 14, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.32, ease: "back.out(1.8)" }
        );
      });
    }
  }, [reactionText]);

  // Animate clearance pass card in when all 7 questions are done
  useEffect(() => {
    if (isPassed && passCardRef.current) {
      ctxRef.current?.add(() => {
        gsap.fromTo(
          passCardRef.current,
          { y: 35, opacity: 0, scale: 0.92, rotateX: 16 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.65, ease: "back.out(1.4)" }
        );
      });
    }
  }, [isPassed]);

  const advanceNext = useCallback(
    (fromIdx: number) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (isTransitioning) return;
      setIsTransitioning(true);

      if (fromIdx < QUESTIONS.length - 1) {
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            x: -36,
            opacity: 0,
            scale: 0.96,
            duration: 0.26,
            ease: "power2.in",
            onComplete: () => {
              setCurrentIndex((prev) => prev + 1);
              setSelectedOption(null);
              setIsTransitioning(false);

              if (cardRef.current) {
                gsap.fromTo(
                  cardRef.current,
                  { x: 36, opacity: 0, scale: 0.96 },
                  { x: 0, opacity: 1, scale: 1, duration: 0.36, ease: "power3.out" }
                );
              }
            },
          });
        } else {
          setCurrentIndex((prev) => prev + 1);
          setSelectedOption(null);
          setIsTransitioning(false);
        }
      } else {
        // Completed all 7 questions!
        playSparkleChime();
        if (cardRef.current) {
          gsap.to(cardRef.current, {
            y: -28,
            opacity: 0,
            scale: 0.92,
            duration: 0.36,
            ease: "power2.in",
            onComplete: () => {
              setIsPassed(true);
              setIsTransitioning(false);
            },
          });
        } else {
          setIsPassed(true);
          setIsTransitioning(false);
        }
      }
    },
    [isTransitioning]
  );

  const handleSelect = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (selectedOption !== null || isTransitioning) return;
      const idx = Number(e.currentTarget.dataset.idx);
      if (Number.isNaN(idx)) return;

      setSelectedOption(idx);
      playPopSound();

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        advanceNext(currentIndex);
      }, REACTION_DELAY_MS);
    },
    [selectedOption, isTransitioning, currentIndex, advanceNext]
  );

  const handleReactionClick = useCallback(() => {
    advanceNext(currentIndex);
  }, [advanceNext, currentIndex]);

  const handleFinalProceed = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    playPopSound();

    if (passCardRef.current) {
      gsap.to(passCardRef.current, {
        y: -30,
        opacity: 0,
        scale: 0.92,
        duration: 0.35,
        ease: "power2.in",
        onComplete: onComplete,
      });
    } else {
      onComplete();
    }
  }, [isTransitioning, onComplete]);

  return (
    <div className="qgate-wrapper" id="question-gate" ref={wrapperRef}>
      {/* Decorative ambient glowing orbs */}
      <div className="qgate-orb qgate-orb-1" aria-hidden />
      <div className="qgate-orb qgate-orb-2" aria-hidden />
      <div className="qgate-orb qgate-orb-3" aria-hidden />

      {!isPassed ? (
        <div className="qgate-container" ref={cardRef}>
          {/* Header & Step Dots */}
          <div className="qgate-header">
            <p className="qgate-category">{currentQ.category}</p>
            <div className="qgate-stepper-dots" aria-label={`Step ${currentIndex + 1} of ${QUESTIONS.length}`}>
              {QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={`qgate-dot-node ${i === currentIndex ? "is-active" : i < currentIndex ? "is-done" : ""}`}
                />
              ))}
            </div>
            <div className="qgate-step-counter">
              <span className="qgate-step-num">{currentIndex + 1}</span>
              <span className="qgate-step-total">/{QUESTIONS.length}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="qgate-progress-track">
            <div className="qgate-progress-fill" style={{ width: progressPercent }} />
          </div>

          {/* Question Title */}
          <h2 className="qgate-question-title">{currentQ.question}</h2>

          {/* Interactive Option Cards */}
          <div className="qgate-options-grid">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isDimmed = selectedOption !== null && !isSelected;

              return (
                <button
                  key={opt.text}
                  type="button"
                  data-idx={idx}
                  onClick={handleSelect}
                  className={`qgate-option-btn ${isSelected ? "is-selected" : ""} ${isDimmed ? "is-dimmed" : ""
                    }`}
                  disabled={selectedOption !== null}
                  aria-pressed={isSelected}
                >
                  <span className="qgate-option-emoji">{opt.emoji}</span>
                  <span className="qgate-option-text">{opt.text}</span>
                  <span className="qgate-option-check">{isSelected ? "✓" : "○"}</span>
                </button>
              );
            })}
          </div>

          {/* Witty Reaction Box */}
          {reactionText && (
            <div
              className="qgate-reaction-box"
              ref={reactionRef}
              onClick={handleReactionClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleReactionClick();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="qgate-reaction-body">
                <p className="qgate-reaction-text">{reactionText}</p>
                <span className="qgate-reaction-hint">Continue</span>
              </div>
            </div>
          )}

          {/* Footer Note */}
          <div className="qgate-footer">
            <p className="qgate-security-note">
              Identity verification protocol • Strictly for Meri Pyaari Ma'am Ji
            </p>
          </div>
        </div>
      ) : (
        /* Clearance Screen / Personality Passed Card */
        <div className="qgate-pass-card" ref={passCardRef}>
          <div className="qgate-pass-badge">It was always you</div>

          <h2 className="qgate-pass-title">Okay. You passed.</h2>
          <p className="qgate-pass-subtitle">I knew it was you anyway.</p>

          <div className="qgate-pass-divider" />

          <p className="qgate-pass-hint">
            One last thing… I sealed something precious inside an antique golden keepsake just for you.
          </p>

          <button
            type="button"
            className="qgate-proceed-btn"
            onClick={handleFinalProceed}
            aria-label="Unlock the Keepsake Locket"
          >
            <span>Open the locket</span>
          </button>
        </div>
      )}
    </div>
  );
}