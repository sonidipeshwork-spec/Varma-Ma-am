import { PORTRAITS } from "@/love/content";

interface LocketGateProps {
  onOpen: () => void;
}

/**
 * LocketGate Component
 * The initial landing lock screen presenting an interactive locket that opens the romantic room.
 */
export default function LocketGate({ onOpen }: LocketGateProps) {
  return (
    <div className="locket-gate">
      <p className="locket-kicker">Meri Pyaari Ma'am Ji</p>
      <button
        type="button"
        className="locket"
        onClick={onOpen}
        aria-label="Open the letter"
      >
        <div className="locket-scene">
          <div className="locket-well">
            <img src={PORTRAITS.hero} alt="Shruu" />
          </div>
          <div className="locket-lid">
            <span className="locket-gem">S</span>
          </div>
        </div>
      </button>
      <p className="locket-hint">Touch the locket</p>
    </div>
  );
}
