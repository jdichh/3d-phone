import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../lib/utils";
import gsap from "gsap";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
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
      // delay: 1.5
    });
  }, []);

  return (
    <section className="outline relative nav-height">
      <div className="flex-center flex-col outline h-5/6">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            loop
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
