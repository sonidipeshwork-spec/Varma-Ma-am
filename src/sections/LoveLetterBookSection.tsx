import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Heart } from "lucide-react";
import { BOOK_CHAPTERS } from "@/love/content";

/**
 * LoveLetterBookSection Component
 * Realistic 3D dual-page hardcover diary and private love letter book
 * with chapters, ribbon bookmarks, gold corner guards, drop caps, and signature seal.
 */
export default function LoveLetterBookSection() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapter = BOOK_CHAPTERS[currentChapter];

  const handlePrev = () => {
    setCurrentChapter((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentChapter((prev) => Math.min(BOOK_CHAPTERS.length - 1, prev + 1));
  };

  return (
    <section id="love-letter" className="fold fold-letter">
      {/* Section Title & Header */}
      <div className="book-section-head">
        <p className="section-tag letter-tag">
          <BookOpen size={13} className="inline mr-1 text-[#e04d66]" />
          Private Diary & Book
        </p>
        <h2 className="book-main-title">A Book for My Ma'am Ji</h2>
        <p className="book-main-subtitle">
          Because there are countless things I want to tell you, written page by page.
        </p>
      </div>

      {/* Chapter Ribbon Bookmark Tabs */}
      <div className="book-chapter-tabs" role="tablist">
        {BOOK_CHAPTERS.map((ch, idx) => (
          <button
            key={ch.id}
            type="button"
            role="tab"
            aria-selected={currentChapter === idx}
            className={`chapter-tab ${currentChapter === idx ? "is-active" : ""}`}
            onClick={() => setCurrentChapter(idx)}
          >
            <span className="tab-num">0{idx + 1}</span>
            <span className="tab-title">{ch.tabTitle}</span>
          </button>
        ))}
      </div>

      {/* The Physical Hardcover Book Container */}
      <div className="book-outer-container">
        <div className="book-casing">
          {/* Gold Corner Guards */}
          <div className="book-corner corner-tl" aria-hidden />
          <div className="book-corner corner-tr" aria-hidden />
          <div className="book-corner corner-bl" aria-hidden />
          <div className="book-corner corner-br" aria-hidden />

          {/* Silk Bookmark Ribbon */}
          <div className="book-ribbon" aria-hidden />

          {/* 3D Dual-Page Open Book Spread */}
          <div className="book-spread">
            {/* LEFT PAGE */}
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
                <span className="page-num">— {chapter.leftPage.pageNumber} —</span>
              </div>
            </article>

            {/* CENTER SPINE & STITCHING */}
            <div className="book-spine" aria-hidden>
              <div className="spine-shadow-left" />
              <div className="spine-crease" />
              <div className="spine-stitches" />
              <div className="spine-shadow-right" />
            </div>

            {/* RIGHT PAGE */}
            <article className="book-page book-page-right">
              <div className="page-watermark" aria-hidden />
              <div className="page-header">
                <span className="page-tag-kicker">{chapter.rightPage.kicker}</span>
                <span className="page-date-badge">28 Sept</span>
              </div>

              <h3 className="page-title">{chapter.rightPage.title}</h3>

              <div className="page-content">
                {chapter.rightPage.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="page-para">{p}</p>
                ))}

                {chapter.rightPage.signOff && (
                  <div className="book-signoff-block">
                    <div className="book-mini-seal">
                      <span>S</span>
                    </div>
                    <div className="book-sign-details">
                      <span className="sign-closing">{chapter.rightPage.signOff.close}</span>
                      <strong className="sign-name">
                        {chapter.rightPage.signOff.sign}{" "}
                        <Heart size={18} className="inline text-[#e04d66] fill-[#e04d66]" />
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="page-footer">
                <span className="page-num">— {chapter.rightPage.pageNumber} —</span>
              </div>
            </article>
          </div>
        </div>

        {/* Interactive Book Navigation Controls */}
        <div className="book-nav-controls">
          <button
            type="button"
            className="book-turn-btn"
            onClick={handlePrev}
            disabled={currentChapter === 0}
            aria-label="Previous chapter"
          >
            <ChevronLeft size={18} />
            <span>Previous Chapter</span>
          </button>

          <div className="book-progress-pill">
            <span className="progress-current">
              {chapter.chapterNum}: {chapter.tabTitle}
            </span>
            <span className="progress-total">
              ({currentChapter + 1} of {BOOK_CHAPTERS.length})
            </span>
          </div>

          <button
            type="button"
            className="book-turn-btn"
            onClick={handleNext}
            disabled={currentChapter === BOOK_CHAPTERS.length - 1}
            aria-label="Next chapter"
          >
            <span>Next Chapter</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
