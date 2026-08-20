import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useLoveGsap(enabled: boolean, reduced: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    });
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.set(".fan-3d, .z-rail, .letter-sheet, .muse-stack", {
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      });

      gsap.from(".muse-title .word", {
        yPercent: 110,
        opacity: 0,
        rotateX: -80,
        transformOrigin: "50% 100%",
        stagger: 0.09,
        duration: reduced ? 0.01 : 1,
        ease: "power3.out",
      });

      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { scrub: 0.2 },
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

      if (reduced) return;

      const hbLetters = gsap.utils.toArray<HTMLElement>(".hb-letter");
      gsap.set(hbLetters, { opacity: 0.08, y: 56, rotateX: -70 });
      const hbTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-pin-hb",
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
        },
      });
      hbLetters.forEach((letter, i) => {
        hbTl.to(
          letter,
          { opacity: 1, y: 0, rotateX: 0, duration: 0.4, ease: "power2.out" },
          i * 0.08
        );
      });

      const confess = gsap.utils.toArray<HTMLElement>(".confess");
      gsap.set(confess, { opacity: 0.08, y: 36 });
      const loveTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-pin-love",
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
        },
      });
      confess.forEach((line, i) => {
        loveTl.to(line, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, i * 0.45);
        if (i < confess.length - 1) {
          loveTl.to(line, { opacity: 0.28, duration: 0.35 }, i * 0.45 + 0.55);
        }
      });

      const horizon = document.querySelector<HTMLElement>(".story-horizon");
      const horizonPin = document.querySelector<HTMLElement>(".story-horizon-pin");
      if (horizon && horizonPin) {
        const getStoryDistance = () => Math.max(0, horizon.scrollWidth - window.innerWidth + 64);
        gsap.to(horizon, {
          x: () => -getStoryDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: horizonPin,
            start: "top top",
            end: () => `+=${getStoryDistance()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.to(".muse-copy", {
        y: -90,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: "#opening", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(".muse-photo-a", {
        y: -140,
        rotateY: -18,
        rotateX: 8,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: "#opening", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(".muse-photo-b", {
        y: 80,
        rotateY: 22,
        ease: "none",
        scrollTrigger: { trigger: "#opening", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.from(".fan-card", {
        y: 80,
        rotateY: 50,
        z: -180,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#why-i-love-you, #adore", start: "top 78%" },
      });

      gsap.utils.toArray<HTMLElement>(".z-card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotateX: 42, z: -260, y: 70, opacity: 0.15 },
          {
            rotateX: 0,
            z: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 42%",
              scrub: true,
            },
          }
        );
      });

      const track = document.querySelector<HTMLElement>(".film-track");
      const pin = document.querySelector<HTMLElement>(".film-pin");
      if (track && pin) {
        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 0.85,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.from(".letter-sheet", {
        y: 70,
        rotateX: 16,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#love-letter, #letter", start: "top 78%" },
      });

      gsap.utils.toArray<HTMLElement>(".flip").forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          rotateY: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".moon, .future-card").forEach((moon) => {
        gsap.fromTo(
          moon.querySelector(".tilt-inner") || moon,
          { scale: 0.85, y: 40, opacity: 0.2 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: moon, start: "top 92%", end: "top 60%", scrub: 0.5 },
          }
        );
      });

      gsap.from(".finale-vow .vow-word", {
        yPercent: 80,
        opacity: 0,
        rotateX: -55,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#ending, #always", start: "top 72%" },
      });

      gsap.from(".finale-home, .finale-stamp, .finale-sign, .finale-seal", {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: "#ending, #always", start: "top 68%" },
      });

      gsap.from(".wreath-shot", {
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.08,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: { trigger: "#ending, #always", start: "top 80%" },
      });

      gsap.to(".finale-halo", {
        scale: 1.12,
        opacity: 0.85,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        scrollTrigger: { trigger: "#ending", start: "top 85%" },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    requestAnimationFrame(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enabled, reduced]);
}

export function openLocketWithGsap(reduced: boolean, onDone: () => void) {
  if (reduced) {
    onDone();
    return;
  }

  gsap.set(".locket-scene", { transformPerspective: 1400, transformStyle: "preserve-3d" });
  gsap.set(".locket-lid", { transformOrigin: "50% 100%", transformStyle: "preserve-3d" });

  const tl = gsap.timeline({ onComplete: onDone });
  tl.to(".locket-hint", { opacity: 0, duration: 0.25, ease: "power2.out" }, 0);
  tl.to(".locket-lid", { rotationX: -128, duration: 1.35, ease: "power3.inOut" }, 0.08);
  tl.to(".locket-gem", { scale: 1.12, duration: 0.45, yoyo: true, repeat: 1, ease: "power2.out" }, 0.2);
}
