import { useCallback, useRef, type PointerEvent } from "react";

export function usePointerTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
      (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-py * strength).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(px * strength).toFixed(2)}deg`);
    },
    [strength]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
