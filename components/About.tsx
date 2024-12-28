import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

const About: React.FC = () => {
  useEffect(() => {
    // Safely register the plugin only on the client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      // Refresh ScrollTrigger and add overflow-x-hidden dynamically
      ScrollTrigger.refresh();

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });
    }

    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="relative min-h-screen w-screen">
      {/* Static Content */}
      <div className="relative z-10 mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Valsalva
        </p>
        <AnimatedTitle
          title="Discover Precision, Power, and Beauty Below."
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext mt-4 text-center">
          <p className="text-lg text-gray-700">
            Dive into a world where innovation meets underwater exploration.
          </p>
          <p className="text-sm text-gray-500">
            Explore our state-of-the-art snorkeling fins and masks designed for
            ultimate performance and style.
          </p>
        </div>
      </div>

      {/* Animated Section */}
      <div id="clip" className="h-screen w-screen relative z-20">
        <div
          className="mask-clip-path absolute inset-0 overflow-hidden mx-auto"
          style={{ width: "50vw", height: "50vh", borderRadius: "20px" }}
        >
          <img
            src="/assets/images/hero3.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
