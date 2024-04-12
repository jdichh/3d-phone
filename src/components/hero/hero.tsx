import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "@/lib/media";
import gsap from "gsap";
import "./herosection.css";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
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
    gsap.to("#hero-cta", {
      opacity: 1,
      delay: 2,
    });
    gsap.to(".hero-video", {
      opacity: 1,
      transition: 0.75,
    });
  }, []);

  return (
    <section id="hero-section">
      <div className="hero-inner-div">
        <h1 id="hero-title">iPhone 15 Pro</h1>
        <div className="hero-video-div">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="hero-video"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </div>
        <div id="hero-cta">
          <a
            href="https://jdichh.vercel.app/#works"
            className="btn"
            target="_blank"
          >
            Buy
          </a>
          <p className="hero-price">From ₱70,990</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
