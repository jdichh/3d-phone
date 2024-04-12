import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "@/lib/media";
import gsap from "gsap";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    if(window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
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
      <div className="flex-center flex-col h-full mx-auto">
        <h1 className="text-center font-semibold text-xl text-gray-100 opacity-0 mb-4" id="hero-title">iPhone 15 Pro</h1>
        <div className="w-9/12 sm:w-8/12 md:w-7/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none video"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 mt-24">
          <a
            href="https://jdichh.vercel.app/#works"
            className="btn"
            target="_blank"
          >
            Buy
          </a>
          <p className="text-lg font-semibold">From ₱70,990</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
