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
    category: "Honesty Check",
    question: "Be honest… who is actually more dramatic in this relationship? 😌",
    options: [
      { text: "Obviously you (1000%)", reaction: "I am not dramatic, I am just emotionally cinematic! 🎬", emoji: "💅" },
      { text: "Me, but I'm cute so it's allowed", reaction: "Valid argument. Case dismissed, your honor! ⚖️🥰", emoji: "👑" },
      { text: "The drama finds us both equally", reaction: "A shared talent for chaos. Truly soulmates. 🌪️✨", emoji: "🎭" },
      { text: "No comment (I plead the 5th)", reaction: "Silence is an admission of guilt, Ma'am Ji! 🕵️‍♂️", emoji: "🤐" },
    ],
  },
  {
    id: 2,
    tag: "Question 02",
    category: "Legal Jurisdiction",
    question: "If I steal 3 of your french fries, what is the official legal penalty? 🍟",
    options: [
      { text: "Immediate hand slap & deadly glare", reaction: "Worth the risk. The fries were delicious anyway! 😋", emoji: "⚡" },
      { text: "Acceptable tax of being with me", reaction: "Best relationship tax rate in human history! 📈❤️", emoji: "💰" },
      { text: "Criminal offense: no cuddles for 2 hours", reaction: "Wait no that's too harsh, please renegotiate the treaty! 🥺", emoji: "🚨" },
      { text: "You owe me a full dessert in return", reaction: "Deal! Ice cream dates are non-negotiable anyway. 🍨", emoji: "🍰" },
    ],
  },
  {
    id: 3,
    tag: "Question 03",
    category: "Cinema Protocol",
    question: "Who falls asleep first during literally any movie? 👀",
    options: [
      { text: "Me (within the first 7 minutes)", reaction: "Fastest sleeper in the northern hemisphere! 😴💤", emoji: "🛌" },
      { text: "You (and then say 'I was resting my eyes')", reaction: "Hey! I was analyzing the plot with closed eyes! 🧐😂", emoji: "🙈" },
      { text: "We both pretend we watched the whole ending", reaction: "And then we argue about what happened next! 🍿🎬", emoji: "🤷‍♂️" },
      { text: "The popcorn isn't even cold before snoring starts", reaction: "Peak cozy vibes unlocked. 10/10 movie night. 🕯️", emoji: "🛋️" },
    ],
  },
  {
    id: 4,
    tag: "Question 04",
    category: "Food Diplomacy",
    question: "When you say 'I'm not hungry', how much of my food will you eat? 🍕",
    options: [
      { text: "Just one tiny bite (which is 65% of the burger)", reaction: "The legendary 'tiny bite' that defies quantum physics! 🍔🔭", emoji: "🤏" },
      { text: "Whatever looks tastiest on your plate", reaction: "What's mine is yours, especially the garlic bread. 🥖❤️", emoji: "🤤" },
      { text: "I wasn't hungry until I saw yours", reaction: "My food is just an appetizer for your appetite! 🍝😂", emoji: "👀" },
      { text: "All of it. Order another one for yourself.", reaction: "Yes Boss, ordering double portions immediately! 🫡🍽️", emoji: "👑" },
    ],
  },
  {
    id: 5,
    tag: "Question 05",
    category: "Chronology Riddle",
    question: "When we are getting ready, who is *really* the reason we're 15 mins late? ⏳",
    options: [
      { text: "Me (perfection takes time & artistry)", reaction: "And the final masterpiece is worth every second! 🎨✨", emoji: "💄" },
      { text: "You (looking for your keys/wallet as always)", reaction: "Okay but who moved my keys into another dimension?! 🔑😭", emoji: "🏃‍♂️" },
      { text: "Traffic. Always blame the city traffic.", reaction: "We were fashionably late before we even left the house! 🚗💨", emoji: "🚦" },
      { text: "Neither, we are always precisely on time (in our hearts)", reaction: "Time is a social construct when we look this good. 🕶️💅", emoji: "🕰️" },
    ],
  },
  {
    id: 6,
    tag: "Question 06",
    category: "The 80-Year Protocol",
    question: "If I annoy you for the next 80 years, what's your official escape plan? 😂",
    options: [
      { text: "Accept my sweet chaotic fate", reaction: "Signed, sealed, delivered. You're stuck with me forever! 💍❤️", emoji: "🔒" },
      { text: "Send you to get snacks until you forget", reaction: "Foolproof strategy. 100% success rate on me! 🍫🤤", emoji: "🍕" },
      { text: "Tolerate you because who else will feed you?", reaction: "Crucial survival logic. I appreciate your charity! 🍲🥰", emoji: "🥹" },
      { text: "Double it and annoy you right back", reaction: "A challenge?! The 80-year prank war begins! ⚔️🔥", emoji: "😈" },
    ],
  },
  {
    id: 7,
    tag: "Question 07",
    category: "Ultimate Security Clearance",
    question: "Final question: Would you still love me if I turned into a worm? 🐛",
    options: [
      { text: "I'd build you a 5-star luxury dirt mansion", reaction: "True unconditional love! Room service mud please! 🏰🪱", emoji: "🌱" },
      { text: "Only if you stay a cute and quiet worm", reaction: "I will be the most polite worm in town, I promise! 🎩✨", emoji: "🎀" },
      { text: "Obviously, best worm in the whole universe", reaction: "My heart just melted into pure golden syrup. 🍯💖", emoji: "🌟" },
      { text: "I'd carry you in my pocket everywhere we go", reaction: "Pocket-sized best friend adventure unlocked! 🎒🥰", emoji: "🥺" },
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