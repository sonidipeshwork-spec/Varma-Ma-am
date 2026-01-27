import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Moon, Star, Wind, Flower, Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AppreciationSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const morphRef = useRef<HTMLDivElement>(null);
    const heartPathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Pop-up Title Animation (SplitText Sim)
            const title = titleRef.current;
            if (title) {
                const words = title.innerText.split(' ');
                title.innerHTML = '';
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.innerText = word + ' ';
                    span.style.display = 'inline-block';
                    span.style.opacity = '0';
                    title.appendChild(span);
                });

                gsap.fromTo(title.children,
                    { scale: 0, opacity: 0, y: 50, rotation: 10 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "back.out(2)", // Pop-up effect
                        scrollTrigger: {
                            trigger: title,
                            start: "top 80%",
                        }
                    }
                );
            }

            // 2. Pop-up Cards
            gsap.utils.toArray('.appreciation-card').forEach((card: any, i) => {
                gsap.fromTo(card,
                    { scale: 0.8, opacity: 0, y: 50 },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.2,
                        ease: "elastic.out(1, 0.75)", // Bouncy surprise pop
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });

            // 3. Draw & Morph SVG Animation
            // Step A: Draw the Heart
            if (heartPathRef.current) {
                const length = heartPathRef.current.getTotalLength();
                gsap.set(heartPathRef.current, { strokeDasharray: length, strokeDashoffset: length });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: morphRef.current,
                        start: "top 70%",
                        end: "bottom 70%",
                        toggleActions: "play none none reverse",
                    }
                });

                // Draw Heart
                tl.to(heartPathRef.current, {
                    strokeDashoffset: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                })
                    // Morph Illusion: Fade out Heart, Scale in Flower
                    .to(heartPathRef.current, { opacity: 0, duration: 0.3 })
                    .fromTo(".morph-flower",
                        { scale: 0, rotation: -180, opacity: 0 },
                        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
                        "<" // Start at same time as fade out
                    );
            }

            // 4. Floating Background Words
            gsap.utils.toArray('.floating-word').forEach((word: any, i) => {
                gsap.to(word, {
                    y: -100,
                    opacity: 0,
                    duration: 4 + Math.random() * 2,
                    repeat: -1,
                    ease: "none",
                    delay: Math.random() * 2,
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-slate-900 relative overflow-hidden text-blue-100 min-h-screen flex flex-col justify-center">

            {/* Mystical Fog/Cloud Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* Floating Hidden Words */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {["Grace", "Light", "Calm", "Hope", "Joy", "Peace"].map((word, i) => (
                    <div
                        key={i}
                        className="floating-word absolute font-vibes text-4xl text-white/5"
                        style={{
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90 + 10}%`,
                            fontSize: `${Math.random() * 2 + 2}rem`
                        }}
                    >
                        {word}
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2 ref={titleRef} className="font-playfair text-5xl md:text-7xl text-blue-50 mb-8 inline-block">
                        Values of a Rare Soul
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

                    {/* Note 1 */}
                    <div className="appreciation-card bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-300 group-hover:scale-110 transition-transform">
                            <Wind className="w-8 h-8" />
                        </div>
                        <h3 className="font-vibes text-4xl mb-4 text-blue-200">The Peace You Bring</h3>
                        <p className="font-lora text-lg leading-relaxed text-blue-100/80">
                            In a world that rushes, you are the pause, the breath of fresh air. Your presence feels like moonlight on a calm lake—quiet, reflecting beauty, and deeply comforting.
                        </p>
                    </div>

                    {/* Note 2 */}
                    <div className="appreciation-card bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-pink-400/30 transition-all duration-500 hover:-translate-y-2 group" style={{ marginTop: '4rem' }}>
                        <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-pink-300 group-hover:scale-110 transition-transform">
                            <Flower className="w-8 h-8" />
                        </div>
                        <h3 className="font-vibes text-4xl mb-4 text-pink-200">The Strength You Hold</h3>
                        <p className="font-lora text-lg leading-relaxed text-blue-100/80">
                            Like the Lotus, you have an incredible ability to bloom regardless of the surroundings. Your resilience is quiet but powerful, inspiring everyone lucky enough to know you.
                        </p>
                    </div>

                    {/* Center Morph SVG Feature */}
                    <div ref={morphRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
                        <div className="w-64 h-64 relative flex items-center justify-center">
                            {/* SVG to Draw (Heart) */}
                            <svg className="absolute inset-0 w-full h-full text-blue-300/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                <path
                                    ref={heartPathRef}
                                    d="M50 30 C 40 10, 10 10, 10 40 C 10 70, 50 90, 50 90 C 50 90, 90 70, 90 40 C 90 10, 60 10, 50 30 Z"
                                />
                            </svg>

                            {/* Element to Morph into (Flower) */}
                            <div className="morph-flower opacity-0 absolute">
                                <div className="relative">
                                    <Flower size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                    <Sparkles className="absolute -top-4 -right-4 text-yellow-200 animate-pulse w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-32 text-center appreciation-card">
                    <p className="font-playfair text-2xl md:text-3xl italic text-blue-200/90 flex flex-col items-center gap-4">
                        <span>"To Shruu, who shines with her own light."</span>
                        <span className="flex gap-2 text-yellow-200">
                            <Star size={20} fill="currentColor" className="animate-bounce" style={{ animationDelay: '0s' }} />
                            <Star size={24} fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <Star size={20} fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AppreciationSection;
