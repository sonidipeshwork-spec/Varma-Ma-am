import { type ReactNode } from "react";
import { usePointerTilt } from "@/love/usePointerTilt";

interface TiltFrameProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function TiltFrame({
  children,
  className = "",
  strength = 14,
}: TiltFrameProps) {
  const { ref, onPointerMove, onPointerLeave } = usePointerTilt(strength);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt-frame ${className}`}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
