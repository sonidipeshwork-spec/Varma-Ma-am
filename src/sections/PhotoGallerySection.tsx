import { useState, type CSSProperties } from "react";
import { GLIMPSES, LAYERS } from "@/love/content";

/**
 * PhotoGallerySection Component
 * Shows a horizontal sliding film strip photo gallery and interactive polaroid layers with notes.
 */
export default function PhotoGallerySection() {
  const [openLayer, setOpenLayer] = useState<number | null>(null);

  const toggleLayer = (index: number) => {
    setOpenLayer((prev) => (prev === index ? null : index));
  };

  return (
    <section id="photo-gallery" className="fold fold-film">
      {/* 1. Horizontal Sliding Film Strip */}
      <div className="film-pin">
        <header className="fold-head film-head">
          <p className="section-tag">Photo gallery</p>
          <h2>Photo gallery</h2>
          <p>Keep scrolling. The photos slide sideways.</p>
        </header>

        <div className="film-track">
          {GLIMPSES.map((photo) => (
            <figure key={photo.caption} className="film-frame">
              <img src={photo.src} alt={photo.caption} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* 2. Interactive Polaroid Layers */}
      <div className="layers">
        {LAYERS.map((t, i) => (
          <button
            key={t.title}
            type="button"
            className={`layer-polaroid ${openLayer === i ? "is-open" : ""}`}
            style={{ "--i": i } as CSSProperties}
            onClick={() => toggleLayer(i)}
            aria-expanded={openLayer === i}
          >
            <img src={t.img} alt={t.title} />
            <span>{t.title}</span>
            {openLayer === i && <p>{t.note}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}
