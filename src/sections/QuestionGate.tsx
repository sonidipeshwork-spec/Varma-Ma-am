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
    question: "Be honest... aaj ke din sabse zyada attention kiski banti hai? 👀",
    options: [
      { text: "Her. Obviously, it's literally her birthday.", reaction: "Correct answer detected. Birthday Queen officially crowned. 👑", emoji: "👑" },
      { text: "Me, I also deserve some attention", reaction: "Nice try. Today is NOT about you. 😂", emoji: "😌" },
      { text: "Both of us, because we're iconic", reaction: "Self-confidence level: birthday premium. ✨", emoji: "🔥" },
      { text: "Whoever brought the cake", reaction: "Finally, someone understands the real hierarchy. 🎂", emoji: "🍰" },
    ],
  },

  {
    id: 2,
    tag: "Question 02",
    category: "Birthday Behaviour 🎂",
    question: "Birthday girl ko aaj kitne compliments milne chahiye before she says 'bas karo'? 😌",
    options: [
      { text: "10 compliments", reaction: "Too low. Please increase the budget. 😂", emoji: "💅" },
      { text: "50 compliments minimum", reaction: "Now we're respecting birthday regulations. 👑", emoji: "✨" },
      { text: "Unlimited. It's her day.", reaction: "Exactly. Compliments have no daily limit today. 💖", emoji: "🥰" },
      { text: "She'll never say bas karo", reaction: "Finally, someone knows her properly. 😭", emoji: "😂" },
    ],
  },

  {
    id: 3,
    tag: "Question 03",
    category: "Birthday Tax 💸",
    question: "Aaj birthday girl ke liye 'Birthday Tax' mein sabse pehle kya dena padega? 😏",
    options: [
      { text: "Chocolate", reaction: "Mandatory payment accepted. 🍫", emoji: "🍫" },
      { text: "A cute gift", reaction: "Transaction approved by the Birthday Department. 🎁", emoji: "🎁" },
      { text: "A full day of attention", reaction: "Expensive... but completely justified. 👑", emoji: "💖" },
      { text: "Everything. It's her birthday.", reaction: "Someone understands the assignment. 😂", emoji: "💳" },
    ],
  },

  {
    id: 4,
    tag: "Question 04",
    category: "Birthday Wish List ✨",
    question: "Agar birthday girl ko ek wish mil jaaye, sabse pehle kya maangegi? 👀",
    options: [
      { text: "Unlimited shopping money", reaction: "Bank account has officially entered danger mode. 💸", emoji: "🛍️" },
      { text: "A dream vacation", reaction: "Passport is already warming up. ✈️", emoji: "🌴" },
      { text: "Her favourite person forever", reaction: "Okayyy, someone brought the emotions. 🥹", emoji: "❤️" },
      { text: "One more birthday every month", reaction: "Honestly... we'd support this law. 😂", emoji: "🎂" },
    ],
  },

  {
    id: 5,
    tag: "Question 05",
    category: "Birthday Drama 🎭",
    question: "Birthday girl agar bole 'mujhe kuch nahi chahiye'... actually iska matlab kya hai? 😂",
    options: [
      { text: "Surprise me. Obviously.", reaction: "Translation successful. 🎁", emoji: "😏" },
      { text: "I genuinely want nothing", reaction: "Most dangerous sentence of the day. 💀", emoji: "😭" },
      { text: "I want something very specific", reaction: "And somehow we're supposed to guess it. 😂", emoji: "🔮" },
      { text: "Just give me food", reaction: "The most honest birthday answer. 🍕", emoji: "🍕" },
    ],
  },

  {
    id: 6,
    tag: "Question 06",
    category: "Birthday Roast 🔥",
    question: "Birthday girl ki sabse dangerous superpower kya hai? 😈",
    options: [
      { text: "Getting what she wants with one look", reaction: "That look has defeated stronger people. 💀", emoji: "👀" },
      { text: "Making everyone do what she says", reaction: "Boss mode: permanently activated. 👑", emoji: "😎" },
      { text: "Winning every argument somehow", reaction: "Evidence suggests this is actually true. ⚖️", emoji: "😂" },
      { text: "Being cute even when she's annoying", reaction: "Unfortunately, this power is unbeatable. 🥹", emoji: "💖" },
    ],
  },

  {
    id: 7,
    tag: "Question 07",
    category: "Cake Court 🎂",
    question: "Cake ka sabse bada piece kisko milna chahiye? 🍰",
    options: [
      { text: "Birthday girl. No discussion.", reaction: "The law has spoken. 👑", emoji: "👑" },
      { text: "Whoever bought the cake", reaction: "Interesting... but absolutely incorrect. 😂", emoji: "🤨" },
      { text: "Me, because I deserve it", reaction: "Birthday girl would like to file a complaint. ⚖️", emoji: "😂" },
      { text: "Everyone gets equal cake", reaction: "Peace has been restored to the kingdom. 🤝", emoji: "🍰" },
    ],
  },

  {
    id: 8,
    tag: "Question 08",
    category: "Birthday Memories 💕",
    question: "Aaj ki party mein sabse memorable moment kya hona chahiye? ✨",
    options: [
      { text: "Her laughing uncontrollably", reaction: "That's the real birthday highlight. 🥹", emoji: "😂" },
      { text: "The biggest surprise", reaction: "Mission: Make Her Scream Successfully. 🎉", emoji: "🎁" },
      { text: "Everyone together", reaction: "Good people + good memories = perfect birthday. ❤️", emoji: "🫶" },
      { text: "Something completely unexpected", reaction: "Chaos has officially been invited. 😈", emoji: "🎊" },
    ],
  },

  {
    id: 9,
    tag: "Question 09",
    category: "Birthday Energy ⚡",
    question: "Aaj birthday girl ka mood kis mode mein hai? 😌",
    options: [
      { text: "Main Character Mode", reaction: "Camera on. Spotlight on. She has arrived. 🎬", emoji: "✨" },
      { text: "Cute But Dangerous Mode", reaction: "Approach carefully. Birthday privileges are active. 😈", emoji: "💅" },
      { text: "Food & Cake Mode", reaction: "Honestly, the most relatable option. 😂", emoji: "🍰" },
      { text: "Emotional Birthday Mode", reaction: "Someone bring tissues before the speeches begin. 🥹", emoji: "🥺" },
    ],
  },

  {
    id: 10,
    tag: "Question 10",
    category: "Birthday Prediction 🔮",
    question: "Agla birthday aane tak birthday girl mein sabse bada upgrade kya hoga? 👀",
    options: [
      { text: "More successful", reaction: "Big things loading... 🚀", emoji: "🚀" },
      { text: "More beautiful", reaction: "Impossible. But somehow she'll manage. ✨", emoji: "💖" },
      { text: "More chaotic", reaction: "We should probably prepare ourselves now. 😂", emoji: "🌪️" },
      { text: "Exactly the same, just more iconic", reaction: "Consistency is also a talent. 👑", emoji: "🔥" },
    ],
  },

  {
    id: 11,
    tag: "Question 11",
    category: "Birthday VIP 🌟",
    question: "Aaj agar birthday girl ek celebrity hoti, uska VIP treatment kya hota? 😎",
    options: [
      { text: "Private jet", reaction: "Economy class has officially been cancelled. ✈️", emoji: "✈️" },
      { text: "Red carpet everywhere", reaction: "Every hallway is now a runway. 💃", emoji: "❤️" },
      { text: "Unlimited shopping", reaction: "Her bank account would not survive this birthday. 💸", emoji: "🛍️" },
      { text: "Everyone follows her schedule", reaction: "Finally, the world runs according to her calendar. 😂", emoji: "👑" },
    ],
  },

  {
    id: 12,
    tag: "Question 12",
    category: "The Birthday Finale 🎉",
    question: "Last question... birthday girl ko iss saal sabse zyada kya milna chahiye? ❤️",
    options: [
      { text: "Happiness, every single day", reaction: "Okay, we're ending this on the sweetest note. 🥹", emoji: "💖" },
      { text: "Success bigger than her dreams", reaction: "Manifestation officially activated. ✨", emoji: "🚀" },
      { text: "People who genuinely love her", reaction: "Because that's the best gift of all. 🫶", emoji: "❤️" },
      { text: "ALL OF THE ABOVE. No negotiations.", reaction: "Birthday Queen deserves the entire universe. 👑🎂", emoji: "🌎" },
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