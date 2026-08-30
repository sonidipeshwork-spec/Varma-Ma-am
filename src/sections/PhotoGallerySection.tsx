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
          <h2>A film of you</h2>
          <p>These frames keep sliding as you move through the room.</p>
        </header>

        <div className="film-track">
          {GLIMPSES.map((photo, idx) => (
            <figure key={`${photo.caption}-${idx}`} className="film-frame">
              <div className="photo-frame">
                <img src={photo.src} alt={photo.caption} />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="layers">
        <h3 className="sr-only">More reasons I love you</h3>
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
                <img src={t.img} alt={t.title} />
              </div>
              <span>{t.title}</span>
              <span id={noteId} className="layer-note">
                {t.note}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}