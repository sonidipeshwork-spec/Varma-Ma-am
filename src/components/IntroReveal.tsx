import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface IntroRevealProps {
    children: React.ReactNode;
}

const IntroReveal = ({ children }: IntroRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setIsComplete(true)
            });

            // Simple, elegant staggered reveal
            tl.to('.intro-shutter', {
                height: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: 0.5
            })
                .to('.intro-overlay', {
                    display: 'none'
                });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* The Main Content - Always rendered, essentially 'under' the overlay initially */}
            <div className={`transition-opacity duration-1000 ${isComplete ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {children}
            </div>

            {/* The Intro Overlay */}
            <div className="intro-overlay fixed inset-0 z-[100] flex pointer-events-none">
                {/* We create 5 vertical columns (shutters) */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="intro-shutter relative h-full w-1/5 bg-midnight-black border-r border-white/5 last:border-0"
                    >
                        {/* Optional decorative element inside specific shutters for flair */}
                        {i === 2 && (
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 font-vibes text-2xl whitespace-nowrap opacity-50">
                                Loading Beauty...
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntroReveal;
