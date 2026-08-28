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
          {GLIMPSES.map((photo) => (
            <figure key={photo.caption} className="film-frame">
              <div className="photo-frame">
                <img src={photo.src} alt={photo.caption} />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="layers">
        {LAYERS.map((t, i) => {
          const isOpen = openLayer === i;
          return (
            <button
              key={t.title}
              type="button"
              className={`layer-polaroid ${isOpen ? "is-open" : ""}`}
              style={{ "--i": i } as CSSProperties}
              onClick={() => toggleLayer(i)}
              aria-expanded={isOpen}
            >
              <div className="photo-frame">
                <img src={t.img} alt={t.title} />
              </div>
              <span>{t.title}</span>
              <p>{t.note}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
