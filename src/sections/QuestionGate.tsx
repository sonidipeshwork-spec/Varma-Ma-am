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
    category: "Birthday Queen 👑",
    question: "Sacchi batao... aaj sabse zyada pyaar aur attention kisko milna chahiye? 🥺❤️",
    options: [
      {
        text: "Obviously meri Ma'am Ji ko, she deserves the entire world! 👑✨",
        reaction: "100% Correct! Aaj ka poora din bas meri Ma'am Ji ki khushiyo ke naam! 🥰💖",
        emoji: "💖"
      },
      {
        text: "Govind Dev Ji ko, unka aashirwad meri Ma'am Ji pe hamesha rahe 🙏✨",
        reaction: "Sabse pyaari baat! Govind Dev Ji ki kripa bane rahe aur Ma'am Ji ki har dua poori ho! 🚩🌸",
        emoji: "🙏"
      },
      {
        text: "Un sabko jo meri Ma'am Ji ko special feel karane aaye hain 🥹",
        reaction: "Aww, total wholesome vibes! Infinite love for Ma'am Ji today. 🤗💕",
        emoji: "🧸"
      },
      {
        text: "Jo meri Ma'am Ji ke liye Cake aur gifts laya hai! 🎂🎁",
        reaction: "True! Yummy treats for the absolute sweetest Ma'am Ji! 🍰✨",
        emoji: "🎉"
      },
    ],
  },

  {
    id: 2,
    tag: "Question 02",
    category: "Birthday Behaviour 🎂",
    question: "Hamari Ma'am Ji ko aaj kitne compliments milne chahiye before she blushes? 🥺✨",
    options: [
      {
        text: "10 compliments minimum",
        reaction: "Arre re, Ma'am Ji aapko lagta hai main manunga. 💕",
        emoji: "🌸"
      },
      {
        text: "50 compliments with full VIP treatment",
        reaction: "Aisi pyaari Ma'am Ji ke saamne 500 compliments bhi kam pad jayenge! 👑💖",
        emoji: "✨"
      },
      {
        text: "Unlimited! She deserves all the love in the world today 💖",
        reaction: "Spot on! Aaj Ma'am Ji ki smile hi poore din ka best part hai. 🥰✨",
        emoji: "🥰"
      },
      {
        text: "Ma'am Ji kitni bhi tareef sun lein, kam hi lagegi 🥹",
        reaction: "Sach mein! Unki cuteness ka koi match hi nahi hai. 🧸💖",
        emoji: "🥹"
      },
    ],
  },

  {
    id: 3,
    tag: "Question 03",
    category: "Birthday Tax 💸",
    question: "Aaj hamari Ma'am Ji ko 'Birthday Tax' mein sabse pehle kya milna chahiye? 🥺🎁",
    options: [
      {
        text: "Favorite chocolate KitKat 🍫",
        reaction: "Yum! Ma'am Ji ke din ki sabse sweet shuruat. 🍫✨",
        emoji: "🍫"
      },
      {
        text: "Ek bohot hi pyaara sa surprise gift 🎁",
        reaction: "Approved! Next Sat. 🥰🌸",
        emoji: "🎁"
      },
      {
        text: "Poore din ka 100% attention aur pampering 👑",
        reaction: "Aaj zayada pareshan kiya jaayega. 💖✨",
        emoji: "💖"
      },
      {
        text: "Sab kuch! Aaj Ma'am Ji jo mange wahi hazir hai ✨",
        reaction: "100/10 answer! Bas exceptions hai thode 🥳💳",
        emoji: "🥰"
      },
    ],
  },

  {
    id: 4,
    tag: "Question 04",
    category: "Birthday Wish List ✨",
    question: "Agar hamari Ma'am Ji ko ek magic wish mil jaye, toh woh sabse pehle kya maangengi? 🥺✨",
    options: [
      {
        text: "Unlimited shopping! 🛍️✨",
        reaction: "Yesss! Unko har favorite cheez milni chahiye! 🛍️",
        emoji: "🛍️"
      },
      {
        text: "Ek peaceful dream vacation 🌴✈️",
        reaction: "Bilkul deserve karte ho aap 🌸✈️",
        emoji: "🌴"
      },
      {
        text: "Unke pyaare log hamesha unke saath rahein 🥹❤️",
        reaction: "Aww, Full emotional moment. 🥹💖",
        emoji: "💖"
      },
      {
        text: "Aur Jo socha hai wo toh bilkul nahi",
        reaction: "Daant Padegi Aapko 😠",
        emoji: "😤"
      },
    ],
  },

  {
    id: 5,
    tag: "Question 05",
    category: "Birthday Drama 🎭",
    question: "Agar hamari Ma'am Ji bole 'Mujhe kuch nahi chahiye'... toh sach mein iska kya matlab hai? 🥺✨",
    options: [
      {
        text: "Ek Bada Surprise 🎁💖",
        reaction: "Aww! 🥰✨",
        emoji: "🎁"
      },
      {
        text: "Pampering toh banti hai 👑",
        reaction: "Exactly! 🌸👑",
        emoji: "💖"
      },
      {
        text: "Inko pata hai ki unka favorite gift pehle se ready hai 🤫✨",
        reaction: "Aap toh Ma'am Ji ke mind reader nikle! 🔮🥰",
        emoji: "✨"
      },
      {
        text: "Unki favorite dish khila do, woh waise hi khush ho jayengi 🍕🍰",
        reaction: "Cutest answer ever! Ma'am Ji 🧁🌸",
        emoji: "🍰"
      },
    ],
  },

  {
    id: 6,
    tag: "Question 06",
    category: "Birthday Magic ✨",
    question: "Meri Ma'am Ji ki sabse pyaari aur strongest superpower kya hai? 🥺✨",
    options: [
      {
        text: "Ek pyaari si smile 🌸🥹",
        reaction: "100% True! 🥰✨",
        emoji: "🥹"
      },
      {
        text: "Pore room mein positive aur happy vibes bhar dena 🌟",
        reaction: "Bilkul sahi! Ma'am Ji 💖👑",
        emoji: "✨"
      },
      {
        text: "Hamesha sabko care aur respect feel karwana 🤗💕",
        reaction: "So sweet! 🌸🥰",
        emoji: "💖"
      },
      {
        text: "Super cute hona, chahe kuch bhi ho jaye 🧸✨",
        reaction: "Is superpower ka toh koi muqabla hi nahi hai! 👑🎀",
        emoji: "🧸"
      },
    ],
  },

  {
    id: 7,
    tag: "Question 07",
    category: "Cake Court 🎂",
    question: "Cake ka sabse bada aur best piece kisko milna chahiye? 🍰✨",
    options: [
      {
        text: "Obviously meri Ma'am Ji ko! No arguments at all 👑💕",
        reaction: "Absolutely! 🥰🍰",
        emoji: "👑"
      },
      {
        text: "Ma'am Ji jisko apne haatho se khilana chahein 🥹✨",
        reaction: "Aww, kitna pyaara gesture! Next Sat. 🌸🤗",
        emoji: "💖"
      },
      {
        text: "Govind Dev Ji 🙏✨",
        reaction: "Sabse shubh start! 🚩🌸",
        emoji: "🙏"
      },
      {
        text: "Sabko milega, par Ma'am Ji ko double piece milega! 🎂🎉",
        reaction: "Perfect plan! 🥳✨",
        emoji: "🍰"
      },
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