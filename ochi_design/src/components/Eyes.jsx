import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Eyes = () => {
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  const blinkTl = useRef(null);

  useEffect(() => {
    const moveEyes = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const angle = Math.atan2(dy, dx);
      const maxMove = 14;

      const x = Math.cos(angle) * maxMove;
      const y = Math.sin(angle) * maxMove;

      // Independent offsets
      gsap.to(leftEye.current, {
        x: x - 2,
        y: y,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(rightEye.current, {
        x: x + 2,
        y: y,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveEyes);
    window.addEventListener("click", blink);
    window.addEventListener("scroll", blink);

    return () => {
      window.removeEventListener("mousemove", moveEyes);
      window.removeEventListener("click", blink);
      window.removeEventListener("scroll", blink);
    };
  }, []);

  const blink = () => {
    if (blinkTl.current) blinkTl.current.kill();

    blinkTl.current = gsap.timeline();
    blinkTl.current
      .to(".eye", { scaleY: 0.1, duration: 0.08, ease: "power2.in" })
      .to(".eye", { scaleY: 1, duration: 0.12, ease: "power2.out" });
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')",
        }}
      >
        <div className="absolute top-1/2 left-1/2 flex gap-20 -translate-x-1/2 -translate-y-1/2">

          {/* LEFT EYE */}
          <div className="eye w-36 h-36 bg-white rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
            <div ref={leftEye} className="relative w-16 h-16">
              <div className="absolute inset-0 bg-black rounded-full" />
              <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full opacity-90" />
            </div>
          </div>

          {/* RIGHT EYE */}
          <div className="eye w-36 h-36 bg-white rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
            <div ref={rightEye} className="relative w-16 h-16">
              <div className="absolute inset-0 bg-black rounded-full" />
              <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full opacity-90" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
