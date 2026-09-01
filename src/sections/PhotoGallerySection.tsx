import { useState, type CSSProperties } from "react";
import { GLIMPSES, LAYERS } from "@/love/content";

export default function PhotoGallerySection() {
  const [openLayer, setOpenLayer] = useState<number | null>(0);

  const toggleLayer = (index: number) => {
    setOpenLayer((prev) => (prev === index ? null : index));
  };

  return (
    <section id="photo-gallery" className="fold fold-film">
      <div className="film-pin">
        <header className="fold-head film-head">
          <p className="film-eyebrow">Twelve stills</p>
          <h2>A film for you</h2>
          <p className="film-lede">
            Real frames from your days — not stock poetry. Keep scrolling and
            the reel pulls sideways, one still at a time.
          </p>
          <p className="film-counter" aria-live="polite">
            <span className="film-counter-current" data-film-frame>
              01
            </span>
            <span className="film-counter-sep">/</span>
            <span className="film-counter-total">
              {String(GLIMPSES.length).padStart(2, "0")}
            </span>
          </p>
        </header>

        <div className="film-reel" aria-label="Photo film strip">
          <div className="film-sprocket film-sprocket--top" aria-hidden="true" />
          <div className="film-track">
            {GLIMPSES.map((photo, idx) => (
              <figure
                key={`${photo.caption}-${idx}`}
                className="film-frame"
                data-film-index={idx}
              >
                <span className="film-frame-num" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="photo-frame film-photo">
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="film-sprocket film-sprocket--bottom" aria-hidden="true" />
        </div>
      </div>

      <div className="layers film-layers">
        <header className="film-layers-head">
          <h3>Bonus stills</h3>
          <p>Three more frames worth pausing on. Tap one to read the note.</p>
        </header>
        {LAYERS.map((t, i) => {
          const isOpen = openLayer === i;
          const noteId = `layer-note-${i}`;
          return (
            <button
              key={`${t.title}-${i}`}
              type="button"
              className={`layer-polaroid ${isOpen ? "is-open" : ""}`}
              style={{ "--i": i } as CSSProperties}
              onClick={() => toggleLayer(i)}
              aria-expanded={isOpen}
              aria-controls={noteId}
            >
              <div className="photo-frame">
                <img src={t.img} alt={t.title} loading="lazy" />
              </div>
              <span className="layer-title">{t.title}</span>
              <span id={noteId} className="layer-note">
                {isOpen ? t.note : "Tap for the note"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
