import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../lib/utils";
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
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 1
    });
    gsap.to('#cta', {
      opacity: 1,
      delay: 1
    })
  }, []);

  return (
    <section className="relative nav-height bg-black">
      <div className="flex-center flex-col h-5/6">
        <h1 className="hero-title">The iPhone 15 Pro.</h1>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none max-md:aspect-square"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0"
      >
        <a href="#highlights" className="btn">
          See more.
        </a>
        <p>PHP 49,999</p>
      </div>
    </section>
  );
};

export default Hero;
