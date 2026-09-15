import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { playLocketUnlockSound } from "./soundEffects";

gsap.registerPlugin(ScrollTrigger);

let loveLenis: Lenis | null = null;

/** Smooth-scroll helper that works with the active Lenis instance. */
export function scrollLoveTo(target: number | string | HTMLElement, options?: { offset?: number }) {
  const offset = options?.offset ?? 0;
  if (loveLenis) {
    loveLenis.scrollTo(target, { offset, duration: 1.15 });
    return;
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior: "smooth" });
    return;
  }

  const el =
    typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function bindImageRefresh(root: ParentNode, refresh: () => void) {
  const images = Array.from(root.querySelectorAll("img"));
  let pending = 0;

  const onDone = () => {
    pending -= 1;
    if (pending <= 0) refresh();
  };

  images.forEach((img) => {
    if (img.complete) return;
    pending += 1;
    img.addEventListener("load", onDone, { once: true });
    img.addEventListener("error", onDone, { once: true });
  });

  return () => {
    images.forEach((img) => {
      img.removeEventListener("load", onDone);
      img.removeEventListener("error", onDone);
    });
  };
}

export const CONFESSION_SCROLL_ID = "confession-scroll";
export const CONFESSION_TRACK_PAD = 120;
export const CONFESSION_STAGE_EVENT = "confession-stage";

function horizontalDistance(track: HTMLElement, pad = 64) {
  return Math.max(0, track.scrollWidth - window.innerWidth + pad);
}

export function getConfessionTrackDistance(track: HTMLElement) {
  return horizontalDistance(track, CONFESSION_TRACK_PAD);
}

/** Scroll progress (0–1) that centers a confession stage in the viewport. */
export function confessionScrollProgressForStage(index: number) {
  const track = document.querySelector<HTMLElement>(".confession-horizon-track");
  const panel = document.querySelectorAll<HTMLElement>(".confess-stage-panel")[index];
  if (!track || !panel) return 0;
  const distance = getConfessionTrackDistance(track);
  if (distance <= 0) return 0;
  const targetX = panel.offsetLeft + panel.offsetWidth / 2 - window.innerWidth / 2;
  return gsap.utils.clamp(0, 1, targetX / distance);
}

function nearestConfessionStage(track: HTMLElement, panels: HTMLElement[], progress: number) {
  const distance = getConfessionTrackDistance(track);
  const viewCenter = progress * distance + window.innerWidth / 2;
  let best = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  panels.forEach((panel, i) => {
    const delta = Math.abs(panel.offsetLeft + panel.offsetWidth / 2 - viewCenter);
    if (delta < bestDist) {
      bestDist = delta;
      best = i;
    }
  });
  return best;
}

function emitConfessionStage(index: number) {
  window.dispatchEvent(new CustomEvent<number>(CONFESSION_STAGE_EVENT, { detail: index }));
}

function setupConfessionScroll() {
  const confessTrack = document.querySelector<HTMLElement>(".confession-horizon-track");
  const confessPin = document.querySelector<HTMLElement>(".confession-horizon-pin");
  if (!confessTrack || !confessPin) return;

  const getConfessDistance = () => getConfessionTrackDistance(confessTrack);
  const getConfessEnd = () => Math.max(window.innerHeight * 2, getConfessDistance());
  const stagePanels = gsap.utils.toArray<HTMLElement>(".confess-stage-panel");
  let lastStage = -1;

  const publishStage = (progress: number) => {
    const next = nearestConfessionStage(confessTrack, stagePanels, progress);
    if (next === lastStage) return;
    lastStage = next;
    confessPin.dataset.activeStage = String(next);
    emitConfessionStage(next);
  };

  const move = gsap.to(confessTrack, {
    x: () => -getConfessDistance(),
    ease: "none",
    scrollTrigger: {
      id: CONFESSION_SCROLL_ID,
      trigger: confessPin,
      start: "top top",
      end: () => `+=${getConfessEnd()}`,
      scrub: 0.75,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
      onUpdate(self) {
        publishStage(self.progress);
      },
      onRefresh(self) {
        publishStage(self.progress);
      },
    },
  });

  const orbScrub = {
    trigger: confessPin,
    start: "top top",
    end: () => `+=${getConfessEnd()}`,
    scrub: 0.75,
    invalidateOnRefresh: true,
  } as const;

  const orb1 = confessPin.querySelector<HTMLElement>(".glow-orb-1");
  const orb2 = confessPin.querySelector<HTMLElement>(".glow-orb-2");
  if (orb1) gsap.to(orb1, { x: 200, scale: 1.3, ease: "none", scrollTrigger: orbScrub });
  if (orb2) gsap.to(orb2, { x: -250, scale: 1.2, ease: "none", scrollTrigger: { ...orbScrub } });

  stagePanels.forEach((panel) => {
    const leadWords = gsap.utils.toArray<HTMLElement>(panel.querySelectorAll(".lead-word"));
    const subWords = gsap.utils.toArray<HTMLElement>(panel.querySelectorAll(".sub-word"));
    const vignette = panel.querySelector<HTMLElement>(".stage-vignette-wrapper");
    const climaxBox = panel.querySelector<HTMLElement>(".climax-seal-box");

    gsap.set(leadWords, { opacity: 0.14, y: 14, filter: "blur(3px)" });
    if (subWords.length) gsap.set(subWords, { opacity: 0.12, y: 10, filter: "blur(2px)" });
    if (vignette) gsap.set(vignette, { opacity: 0.22, scale: 0.92, rotateY: 8 });
    if (climaxBox) gsap.set(climaxBox, { opacity: 0, scale: 0.72, y: 24 });

    const leadTl = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        containerAnimation: move,
        start: "left 88%",
        end: "center 48%",
        scrub: 0.35,
        invalidateOnRefresh: true,
      },
    });

    leadWords.forEach((word, wIdx) => {
      leadTl.to(
        word,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: word.classList.contains("is-climax") ? 1.06 : 1,
          duration: 0.18,
          ease: "none",
        },
        wIdx * 0.12
      );
    });

    if (subWords.length) {
      const subTl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: move,
          start: "left 72%",
          end: "center 40%",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });
      subWords.forEach((sword, sIdx) => {
        subTl.to(
          sword,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.14,
            ease: "none",
          },
          sIdx * 0.08
        );
      });
    }

    if (vignette) {
      gsap.to(vignette, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          containerAnimation: move,
          start: "left 84%",
          end: "left 42%",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
    }

    if (climaxBox) {
      gsap.to(climaxBox, {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          containerAnimation: move,
          start: "left 58%",
          end: "center 42%",
          scrub: 0.35,
          invalidateOnRefresh: true,
        },
      });
    }
  });
}

function createHorizontalPin(
  pin: HTMLElement,
  track: HTMLElement,
  opts: {
    id: string;
    pad?: number;
    scrub?: number;
    minEnd?: number | (() => number);
    onUpdate?: (self: ScrollTrigger) => void;
  }
) {
  const pad = opts.pad ?? 64;
  const scrub = opts.scrub ?? 0.8;
  const minEndOpt = opts.minEnd ?? (() => window.innerHeight * 1.2);

  return gsap.to(track, {
    x: () => -horizontalDistance(track, pad),
    ease: "none",
    scrollTrigger: {
      id: opts.id,
      trigger: pin,
      start: "top top",
      end: () => {
        const distance = horizontalDistance(track, pad);
        const floor = typeof minEndOpt === "function" ? minEndOpt() : minEndOpt;
        return `+=${Math.max(floor, distance)}`;
      },
      scrub,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
      onUpdate: opts.onUpdate,
    },
  });
}

function setupScrollExperience(reduced: boolean) {
  gsap.set(".fan-3d, .book-casing, .muse-stack", {
    transformPerspective: 1400,
    transformStyle: "preserve-3d",
  });

  // Never transform pin ancestors (.story used to break every pin below it).
  gsap.from(".chrome", {
    opacity: 0,
    y: -14,
    duration: reduced ? 0.01 : 0.7,
    ease: "power2.out",
  });

  gsap.to(".scroll-progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      scrub: 0.25,
      start: 0,
      end: "max",
    },
  });

  gsap.to(".float-bloom", {
    y: "random(-28, 22)",
    x: "random(-14, 18)",
    rotation: "random(-18, 18)",
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: { each: 0.22, from: "random" },
  });

  if (reduced) {
    gsap.set(
      ".hb-letter, .lead-word, .sub-word, .stage-vignette-wrapper, .climax-seal-box, .fan-card, .z-card, .flip, .reflect-card, .future-lead, .future-card, .finale-vow .vow-word, .finale-home, .finale-stamp, .finale-sign, .finale-seal, .wreath-shot",
      { clearProps: "all" }
    );
    return;
  }

  // --- Birthday letter pin ---
  const hbPin = document.querySelector<HTMLElement>(".story-pin-hb");
  const hbLetters = gsap.utils.toArray<HTMLElement>(".hb-letter");
  if (hbPin && hbLetters.length) {
    gsap.set(hbLetters, { opacity: 0.08, y: 56, rotateX: -70 });
    const hbTl = gsap.timeline({
      scrollTrigger: {
        id: "birthday-letters",
        trigger: hbPin,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    hbLetters.forEach((letter, i) => {
      hbTl.to(
        letter,
        { opacity: 1, y: 0, rotateX: 0, duration: 0.4, ease: "power2.out" },
        i * 0.08
      );
    });
  }

  setupConfessionScroll();

  // --- Story chapters horizontal ---
  const horizon = document.querySelector<HTMLElement>(".story-horizon");
  const horizonPin = document.querySelector<HTMLElement>(".story-horizon-pin");
  if (horizon && horizonPin) {
    createHorizontalPin(horizonPin, horizon, {
      id: "story-chapters",
      pad: 64,
      scrub: 0.8,
      minEnd: () => window.innerHeight,
    });
  }

  // --- Opening parallax ---
  const opening = document.querySelector("#opening");
  if (opening) {
    gsap.from(".muse-title .word", {
      yPercent: 110,
      opacity: 0,
      rotateX: -80,
      transformOrigin: "50% 100%",
      stagger: 0.09,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: opening,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".muse-copy", {
      y: -90,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: opening,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".muse-photo-a", {
      y: -140,
      rotateY: -12,
      rotateX: 6,
      scale: 1.06,
      ease: "none",
      scrollTrigger: {
        trigger: opening,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // --- Why I love you cards ---
  const why = document.querySelector("#qualities");
  if (why) {
    gsap.from(".fan-card", {
      y: 80,
      rotateY: 50,
      z: -180,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: why,
        start: "top 78%",
        toggleActions: "play none none none",
      },
    });
  }

  // --- How I fell: chronological sticky stages ---
  const fellSection = document.querySelector<HTMLElement>("#journey");
  const fellRail = document.querySelector<HTMLElement>(".fell-rail");
  const fellCards = gsap.utils.toArray<HTMLElement>(".fell-card");
  const fellFill = document.querySelector<HTMLElement>(".fell-spine-fill");
  const fellDots = gsap.utils.toArray<HTMLElement>(".fell-spine-dot");

  if (fellSection && fellRail && fellCards.length) {
    const setActiveStage = (index: number) => {
      fellCards.forEach((card, i) => {
        card.classList.toggle("is-active", i === index);
        card.classList.toggle("is-passed", i < index);
      });
      fellDots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
        dot.classList.toggle("is-passed", i <= index);
      });
    };

    setActiveStage(0);

    if (fellFill) {
      gsap.fromTo(
        fellFill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            id: "journey-spine",
            trigger: fellRail,
            start: "top center",
            end: "bottom center",
            scrub: 0.35,
          },
        }
      );
    }

    fellCards.forEach((card, i) => {
      const figure = card.querySelector<HTMLElement>(".fell-figure");
      if (figure) {
        gsap.fromTo(
          figure,
          { y: 36, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: 0.45,
            },
          }
        );
      }

      ScrollTrigger.create({
        id: `journey-stage-${i}`,
        trigger: card,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => setActiveStage(i),
        onEnterBack: () => setActiveStage(i),
      });
    });
  }

  // --- Film strip horizontal ---
  const filmTrack = document.querySelector<HTMLElement>(".film-track");
  const filmPin = document.querySelector<HTMLElement>(".film-pin");
  const filmFrames = gsap.utils.toArray<HTMLElement>(".film-frame");
  const filmCounter = document.querySelector<HTMLElement>("[data-film-frame]");

  if (filmTrack && filmPin && filmFrames.length) {
    const syncFilmFrame = () => {
      const focusX = filmPin.getBoundingClientRect().left + filmPin.clientWidth * 0.38;
      let nearest = 0;
      let nearestDist = Infinity;

      filmFrames.forEach((frame, i) => {
        const rect = frame.getBoundingClientRect();
        const mid = rect.left + rect.width / 2;
        const dist = Math.abs(mid - focusX);
        frame.classList.remove("is-active");
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
      });

      filmFrames[nearest]?.classList.add("is-active");
      if (filmCounter) {
        filmCounter.textContent = String(nearest + 1).padStart(2, "0");
      }
    };

    createHorizontalPin(filmPin, filmTrack, {
      id: "film-strip",
      pad: 80,
      scrub: 0.85,
      minEnd: () => window.innerHeight,
      onUpdate: syncFilmFrame,
    });

    ScrollTrigger.addEventListener("refresh", syncFilmFrame);
    syncFilmFrame();
  }

  // --- Love letter book ---
  const letter = document.querySelector("#birthday-book");
  if (letter) {
    gsap.from(".book-casing", {
      y: 70,
      rotateX: 16,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: letter,
        start: "top 78%",
        toggleActions: "play none none none",
      },
    });
  }

  // --- Compliments: enter without rotateY so CSS card-flip stays accurate ---
  const compliments = document.querySelector("#unsaid");
  if (compliments) {
    gsap.utils.toArray<HTMLElement>("#unsaid .flip").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          clearProps: "transform",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Five equal reflection frames — one staggered entrance (cleaner than per-card scrub)
    const reflectRoot = compliments.querySelector<HTMLElement>(".reflect");
    const reflectCards = gsap.utils.toArray<HTMLElement>("#unsaid .reflect-card");
    if (reflectRoot && reflectCards.length) {
      gsap.from(reflectCards, {
        y: 36,
        opacity: 0,
        scale: 0.97,
        stagger: 0.09,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        clearProps: "transform",
        scrollTrigger: {
          trigger: reflectRoot,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }
  }

  // --- Ending ---
  const ending = document.querySelector("#ending");
  if (ending) {
    gsap.from(".finale-vow .vow-word", {
      yPercent: 80,
      opacity: 0,
      rotateX: -55,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ending,
        start: "top 72%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".finale-home, .finale-stamp, .finale-sign, .finale-seal", {
      y: 24,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ending,
        start: "top 68%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".wreath-shot", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.08,
      duration: 1.05,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: ending,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".finale-halo", {
      scale: 1.12,
      opacity: 0.85,
      duration: 3.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ending,
        start: "top 85%",
        toggleActions: "play pause resume pause",
      },
    });
  }
}

export function useLoveGsap(enabled: boolean, reduced: boolean) {
  useEffect(() => {
    if (!enabled) return;

    let disposed = false;
    let lenis: Lenis | null = null;
    let ctx: gsap.Context | null = null;
    let onScroll: (() => void) | null = null;
    let tick: ((time: number) => void) | null = null;
    const cleanups: Array<() => void> = [];

    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };

    const boot = async () => {
      try {
        await document.fonts.ready;
      } catch {
        // ignore font readiness failures
      }
      await waitForPaint();
      if (disposed) return;

      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.15,
        autoRaf: false,
      });
      loveLenis = lenis;

      onScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onScroll);

      tick = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      ctx = gsap.context(() => {
        setupScrollExperience(reduced);
      });

      refresh();

      const root = document.querySelector(".love-root") ?? document;
      cleanups.push(bindImageRefresh(root, refresh));

      const delayedA = window.setTimeout(refresh, 250);
      const delayedB = window.setTimeout(refresh, 900);
      cleanups.push(() => {
        window.clearTimeout(delayedA);
        window.clearTimeout(delayedB);
      });

      window.addEventListener("load", refresh);
      window.addEventListener("resize", refresh);
      cleanups.push(() => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
      });
    };

    void boot();

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
      ctx?.revert();
      if (tick) gsap.ticker.remove(tick);
      if (lenis && onScroll) lenis.off("scroll", onScroll);
      lenis?.destroy();
      if (loveLenis === lenis) loveLenis = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enabled, reduced]);
}

export function openLocketWithGsap(reduced: boolean, onDone: () => void) {
  if (reduced) {
    onDone();
    return;
  }

  playLocketUnlockSound();

  gsap.set(".locket-scene", { transformPerspective: 1600, transformStyle: "preserve-3d" });
  gsap.set(".locket-lid", { transformOrigin: "50% 100%", transformStyle: "preserve-3d" });
  gsap.set(".locket-well", { transformStyle: "preserve-3d" });

  const tl = gsap.timeline({ onComplete: onDone });

  tl.to(
    ".locket-hint, .locket-header",
    {
      opacity: 0,
      y: -12,
      duration: 0.35,
      ease: "power2.out",
    },
    0
  );

  tl.to(
    ".locket-3d-wrapper",
    {
      scale: 0.94,
      duration: 0.22,
      ease: "power2.in",
    },
    0
  );

  tl.to(
    ".locket-gem",
    {
      scale: 1.15,
      boxShadow: "0 0 35px rgba(244, 143, 177, 0.9)",
      duration: 0.3,
      ease: "power2.out",
    },
    0.1
  );

  tl.to(
    ".locket-3d-wrapper",
    {
      scale: 1.04,
      y: -10,
      duration: 0.45,
      ease: "back.out(1.8)",
    },
    0.22
  );

  tl.to(
    ".locket-lid",
    {
      rotationX: -142,
      rotationY: -4,
      y: -8,
      duration: 1.45,
      ease: "power3.inOut",
    },
    0.25
  );

  tl.fromTo(
    ".locket-light-burst",
    { scale: 0.4, opacity: 0 },
    { scale: 2.4, opacity: 0.95, duration: 0.6, ease: "power2.out" },
    0.35
  );
  tl.to(
    ".locket-light-burst",
    {
      opacity: 0,
      scale: 3.2,
      duration: 0.8,
      ease: "power2.inOut",
    },
    0.9
  );

  tl.fromTo(
    ".locket-portrait",
    { scale: 1.18, filter: "brightness(1.5) contrast(1.1)" },
    { scale: 1, filter: "brightness(1) contrast(1)", duration: 1.2, ease: "power2.out" },
    0.45
  );

  tl.to(
    ".locket-ambient-halo",
    {
      scale: 1.6,
      opacity: 0.85,
      duration: 1.4,
      ease: "power2.out",
    },
    0.3
  );

  const zoomTl = gsap.timeline();

  zoomTl.to(
    ".locket-lid, .locket-chain-anchor, .locket-lid-flare, .locket-gem-housing",
    {
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
    },
    "+=0.3"
  );

  zoomTl.to(
    ".locket-well",
    {
      borderRadius: "16px",
      borderColor: "rgba(255, 235, 175, 0.2)",
      boxShadow: "0 0 100px rgba(224, 77, 102, 0.6)",
      duration: 0.7,
      ease: "power2.out",
    },
    "<"
  );

  zoomTl.to(
    ".locket-3d-wrapper",
    {
      scale: 3.8,
      y: -30,
      duration: 1.1,
      ease: "power3.inOut",
    },
    "<"
  );

  zoomTl.to(
    ".locket-portrait",
    {
      scale: 1.12,
      filter: "brightness(1.15) contrast(1.05)",
      duration: 1.1,
      ease: "power2.out",
    },
    "<"
  );

  zoomTl.to(
    ".locket-ambient-halo",
    {
      scale: 3.5,
      opacity: 1,
      duration: 0.9,
      ease: "power2.inOut",
    },
    "<"
  );

  zoomTl.to(
    ".locket-gate",
    {
      opacity: 0,
      duration: 0.55,
      ease: "power2.inOut",
    },
    "-=0.35"
  );

  tl.add(zoomTl);
}
