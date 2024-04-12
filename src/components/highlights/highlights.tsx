import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "@/lib/media";
import gsap from "gsap";
import VideoCarousel from "../videocarousel/videocarousel";
import SectionHeading from "../sectionheading/sectionheading";
import "./highlights.css";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.25,
    });
  }, []);

  return (
    <section id="highlights" className="common-padding highlights-section">
      <div className="highlights-section-inner-div">
        <SectionHeading heading="Get the highlights." />
        <ol className="highlights-section-link-container">
          <li className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </li>
          <li className="link">
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
