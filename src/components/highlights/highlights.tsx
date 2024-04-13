// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
import { rightImg, watchImg } from "@/lib/media";
import { useRef } from "react";
import VideoCarousel from "../videocarousel/videocarousel";
import "./highlights.css";

// gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const headingRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(() => {
  //   if (headingRef.current) {
  //     const headings = gsap.utils.toArray(headingRef.current.children);

  //     headings.forEach((heading) => {
  //       gsap.to(heading as Element, {
  //         y: 0,
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: heading as Element,
  //           start: "top bottom",
  //           end: "bottom 80%",
  //           scrub: 0.5,
  //         },
  //         ease: "power1.inOut",
  //       });
  //       gsap.to(".highlights-link", {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: heading as Element,
  //           start: "top bottom",
  //           end: "bottom 80%",
  //           scrub: 0.5,
  //         },
  //         ease: "power1.inOut",
  //       });
  //     });
  //   }
  // }, []);

  return (
    <section id="highlights" className="highlights-section">
      <div className="highlights-section-inner-div" ref={headingRef}>
        <h2 className="highlights-section-heading" id="title">
          Get the highlights.
        </h2>

        <ol className="highlights-section-link-container">
          <li className="highlights-link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </li>
          <li className="highlights-link">
            Watch the event
            <img src={rightImg} alt="right" className="ml-2" />
          </li>
        </ol>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Highlights;
