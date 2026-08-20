import { Volume2, VolumeX } from "lucide-react";
import flower1 from "@/assets/flower_1.png";
import flower2 from "@/assets/flower_2.png";
import flower3 from "@/assets/flower_3.png";
import flower4 from "@/assets/flower_4.png";
import flower5 from "@/assets/flower_5.png";
import { NAV } from "@/love/content";

interface AmbientControlsProps {
  audioOn: boolean;
  activeNav: number;
  onToggleAudio: () => void;
  onNavigate: (id: string) => void;
}

/**
 * AmbientControls Component
 * Manages ambient floating petals, audio toggle, and the sticky dot navigation.
 */
export default function AmbientControls({
  audioOn,
  activeNav,
  onToggleAudio,
  onNavigate,
}: AmbientControlsProps) {
  const petals = [flower1, flower3, flower5, flower2, flower4, flower1];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" aria-hidden />

      {/* Floating Flowers / Petals Field */}
      <div className="float-field" aria-hidden>
        {petals.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="float-bloom"
            style={{
              left: `${8 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Sticky Chrome Controls: Audio Button & Dot Navigation */}
      <div className="chrome">
        <button
          type="button"
          className="audio-btn"
          onClick={onToggleAudio}
          aria-label="Toggle music"
        >
          {audioOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        <nav className="dot-nav" aria-label="Sections">
          {NAV.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={i === activeNav ? "is-active" : ""}
              onClick={() => onNavigate(s.id)}
              aria-label={s.label}
            >
              <span>{s.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
