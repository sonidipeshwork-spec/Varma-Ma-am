/**
 * Synthesized Web Audio API sound effects
 * Zero latency, zero external asset dependencies, works cross-platform.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => undefined);
  }
  return audioCtx;
}

/** Soft cute pop sound for button clicks/answers */
export function playPopSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Graceful fallback
  }
}

/** Playful sparkly chime when passing personality check */
export function playSparkleChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const now = ctx.currentTime;

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0, now + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.55);
    });
  } catch {
    // Graceful fallback
  }
}

/** Antique tactile metallic unlatch click */
export function playLocketUnlockSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Mechanical snap click
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.05);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);

    // 2. Resonant metallic gold chime
    const metallicFreqs = [587.33, 880.0, 1174.66, 1760.0]; // D5, A5, D6, A6
    metallicFreqs.forEach((f, idx) => {
      const mOsc = ctx.createOscillator();
      const mGain = ctx.createGain();

      mOsc.type = "sine";
      mOsc.frequency.setValueAtTime(f, now + 0.04 + idx * 0.02);

      mGain.gain.setValueAtTime(0, now + 0.04 + idx * 0.02);
      mGain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + 0.06 + idx * 0.02);
      mGain.gain.exponentialRampToValueAtTime(0.0005, now + 1.2 + idx * 0.1);

      mOsc.connect(mGain);
      mGain.connect(ctx.destination);

      mOsc.start(now + 0.04 + idx * 0.02);
      mOsc.stop(now + 1.3);
    });
  } catch {
    // Graceful fallback
  }
}
