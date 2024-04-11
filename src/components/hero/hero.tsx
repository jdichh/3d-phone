import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../lib/media";
import gsap from "gsap";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    setVideoSrc(window.innerWidth < 768 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
    });
    gsap.to(".video", {
      opacity: 1,
      transition: 0.75,
    });
  }, []);

  return (
    <section className="relative h-dvh bg-black flex items-center">
      <div className="flex-center flex-col h-5/6 space-y-2 mx-auto">
        <h1 className="text-center font-semibold text-xl text-gray-100 opacity-0 max-md:mb-10" id="hero-title">iPhone 15 Pro</h1>
        <div className="w-7/12">
          <video
            autoPlay
            muted
            loop
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none video"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0">
          <a
            href="https://jdichh.vercel.app/#works"
            className="btn"
            target="_blank"
          >
            Buy
          </a>
          <p className="text-bold text-lg">From ₱70,990</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
