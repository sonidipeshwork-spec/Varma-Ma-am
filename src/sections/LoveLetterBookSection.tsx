import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { BOOK_CHAPTERS } from "@/love/content";

export default function LoveLetterBookSection() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isTurning, setIsTurning] = useState(false);
  const spreadRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isTurningRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const chapter = BOOK_CHAPTERS[currentChapter];
  const isFirst = currentChapter === 0;
  const isLast = currentChapter === BOOK_CHAPTERS.length - 1;

  const turnTo = (next: number) => {
    if (isTurningRef.current || next === currentChapter || next < 0 || next >= BOOK_CHAPTERS.length) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    isTurningRef.current = true;
    setIsTurning(true);
    const el = spreadRef.current;
    const direction = next > currentChapter ? -1 : 1;

    const apply = () => {
      setCurrentChapter(next);
      if (!el || prefersReducedMotion) {
        isTurningRef.current = false;
        setIsTurning(false);
        return;
      }
      gsap.fromTo(
        el,
        { x: direction * -28, opacity: 0.35, rotateY: direction * -6 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.42,
          ease: "power3.out",
          onComplete: () => {
            isTurningRef.current = false;
            setIsTurning(false);
          },
        }
      );
    };

    if (!el || prefersReducedMotion) {
      apply();
      return;
    }

    gsap.to(el, {
      x: direction * 28,
      opacity: 0.35,
      rotateY: direction * 6,
      duration: 0.22,
      ease: "power2.in",
      onComplete: apply,
    });
  };

  useEffect(() => {
    const spread = spreadRef.current;
    return () => {
      if (spread) gsap.killTweensOf(spread);
    };
  }, []);

  // Keyboard navigation: left/right arrows turn the page when the book has focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      turnTo(currentChapter + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      turnTo(currentChapter - 1);
    }
  };

  // Swipe navigation for touch devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    const endX = e.changedTouches[0]?.clientX;
    touchStartXRef.current = null;
    if (startX === null || endX === undefined) return;

    const delta = endX - startX;
    const SWIPE_THRESHOLD = 50;
    if (delta <= -SWIPE_THRESHOLD) {
      turnTo(currentChapter + 1);
    } else if (delta >= SWIPE_THRESHOLD) {
      turnTo(currentChapter - 1);
    }
  };

  const sealInitial = chapter.rightPage.signOff?.sign?.trim().charAt(0) || "";

  return (
    <section id="love-letter" className="fold fold-letter">
      <div className="book-section-head">
        <h2 className="book-main-title">A book for my Ma'am Ji</h2>
        <p className="book-main-subtitle">
          Pages I wrote because one letter was never going to be enough.
        </p>
      </div>

      <div className="book-chapter-tabs" role="tablist" aria-label="Letter chapters">
        {BOOK_CHAPTERS.map((ch, idx) => (
          <button
            key={ch.id}
            type="button"
            role="tab"
            aria-selected={currentChapter === idx}
            className={`chapter-tab ${currentChapter === idx ? "is-active" : ""}`}
            onClick={() => turnTo(idx)}
            disabled={isTurning}
          >
            <span className="tab-num">{ch.chapterNum.replace("Chapter ", "")}</span>
            <span className="tab-title">{ch.tabTitle}</span>
          </button>
        ))}
      </div>

      <div className="book-outer-container">
        <div
          className="book-casing"
          ref={containerRef}
          tabIndex={0}
          role="group"
          aria-roledescription="book"
          aria-label={`Chapter ${currentChapter + 1} of ${BOOK_CHAPTERS.length}: ${chapter.tabTitle}`}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="book-corner corner-tl" aria-hidden />
          <div className="book-corner corner-tr" aria-hidden />
          <div className="book-corner corner-bl" aria-hidden />
          <div className="book-corner corner-br" aria-hidden />
          <div className="book-ribbon" aria-hidden />

          {/* Invisible edge-click zones for turning pages, book-style */}
          {!isFirst && (
            <button
              type="button"
              className="book-edge-turn book-edge-turn-left"
              onClick={() => turnTo(currentChapter - 1)}
              disabled={isTurning}
              aria-label="Turn to previous page"
            />
          )}
          {!isLast && (
            <button
              type="button"
              className="book-edge-turn book-edge-turn-right"
              onClick={() => turnTo(currentChapter + 1)}
              disabled={isTurning}
              aria-label="Turn to next page"
            />
          )}

          <div className="book-spread" ref={spreadRef}>
            <article className="book-page book-page-left">
              <div className="page-watermark" aria-hidden />
              <div className="page-header">
                <span className="page-chapter-kicker">{chapter.chapterNum}</span>
                <span className="page-tag-kicker">{chapter.leftPage.kicker}</span>
              </div>

              <h3 className="page-title">{chapter.leftPage.title}</h3>
              {chapter.leftPage.subtitle && (
                <p className="page-subtitle">{chapter.leftPage.subtitle}</p>
              )}

              <div className="page-content">
                {chapter.leftPage.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="page-para">
                    {pIdx === 0 && <span className="book-drop-cap">{p.charAt(0)}</span>}
                    {pIdx === 0 ? p.slice(1) : p}
                  </p>
                ))}

                {chapter.leftPage.quote && (
                  <blockquote className="page-callout-quote">
                    <p>{chapter.leftPage.quote}</p>
                  </blockquote>
                )}
              </div>

              <div className="page-footer">
                <span className="page-num">{chapter.leftPage.pageNumber}</span>
              </div>
            </article>

            <div className="book-spine" aria-hidden>
              <div className="spine-crease" />
              <div className="spine-stitches" />
            </div>

            <article className="book-page book-page-right">
              <div className="page-watermark" aria-hidden />
              <div className="page-header">
                <span className="page-tag-kicker">{chapter.rightPage.kicker}</span>
              </div>

              <h3 className="page-title">{chapter.rightPage.title}</h3>

              <div className="page-content">
                {chapter.rightPage.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="page-para">
                    {p}
                  </p>
                ))}

                {chapter.rightPage.signOff && (
                  <div className="book-signoff-block">
                    {sealInitial && (
                      <div className="book-mini-seal" aria-hidden>
                        <span>{sealInitial}</span>
                      </div>
                    )}
                    <div className="book-sign-details">
                      <span className="sign-closing">{chapter.rightPage.signOff.close}</span>
                      <strong className="sign-name">{chapter.rightPage.signOff.sign}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="page-footer">
                <span className="page-num">{chapter.rightPage.pageNumber}</span>
              </div>
            </article>
          </div>
        </div>

        <div className="book-nav-controls">
          <button
            type="button"
            className="book-turn-btn"
            onClick={() => turnTo(currentChapter - 1)}
            disabled={isFirst || isTurning}
            aria-label="Previous chapter"
          >
            <ChevronLeft size={18} />
            <span>Previous</span>
          </button>

          <div className="book-progress-pill" aria-live="polite">
            <span className="progress-current">{chapter.tabTitle}</span>
            <span className="progress-total">
              {currentChapter + 1} of {BOOK_CHAPTERS.length}
            </span>
          </div>

          <button
            type="button"
            className="book-turn-btn"
            onClick={() => turnTo(currentChapter + 1)}
            disabled={isLast || isTurning}
            aria-label="Next chapter"
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}