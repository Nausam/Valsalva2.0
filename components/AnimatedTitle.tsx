"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  containerClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure animations only run on the client
    if (typeof window !== "undefined" && containerRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const titleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "100 bottom",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
        });

        titleAnimation.to(
          ".animated-word",
          {
            opacity: 1,
            transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
            ease: "power2.inOut",
            stagger: 0.02,
          },
          0
        );
      }, containerRef);

      return () => ctx.revert(); // Clean up on unmount
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx("animated-title overflow-x-hidden", containerClass)}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex justify-center max-w-6xl flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
